# Use a base image for Node.js
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json and lock files for dependency management
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies using npm or pnpm depending on the lock file
RUN \
  if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
  else echo "No lockfile found for dependency installation." && exit 1; \
  fi

# Rebuild the source code only when dependencies change
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Check if .env.example exists, then copy to .env
RUN test -f .env.example && cp .env.example .env || echo ".env.example not found, skipping .env copy."

# Build the project
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

# Set the production environment variables
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_API_URL=https://api.anaadevelopersltd.com/api/v1

# Add a non-root user for security purposes
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary build artifacts and set permissions
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Set up correct permissions for .next folder
RUN mkdir -p .next && chown -R nextjs:nodejs .next

# Switch to non-root user
USER nextjs

# Expose application port
EXPOSE 5011

# Start the Next.js server in production mode
CMD ["npm", "run", "start"]
