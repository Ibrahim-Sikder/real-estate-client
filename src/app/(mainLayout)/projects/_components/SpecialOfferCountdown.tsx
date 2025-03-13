"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, Typography, Box, Chip, Fade, Grow, LinearProgress } from "@mui/material"
import TimerIcon from "@mui/icons-material/Timer"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import StarIcon from "@mui/icons-material/Star"

interface SpecialOfferCountdownProps {
  expiryDate: string
  isExpired?: boolean
}

export default function SpecialOfferCountdown({ expiryDate, isExpired = false }: SpecialOfferCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const [progress, setProgress] = useState(100)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)

    const calculateTimeLeft = () => {
      const difference = new Date(expiryDate).getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        // Calculate progress percentage (assuming 30 days total offer period)
        const totalDuration = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
        const elapsed = totalDuration - difference
        const progressValue = Math.max(0, Math.min(100, 100 - (elapsed / totalDuration) * 100))

        setTimeLeft({ days, hours, minutes, seconds })
        setProgress(progressValue)
        return true
      } else {
        return false
      }
    }

    if (calculateTimeLeft()) {
      const timer = setInterval(() => {
        const hasTimeLeft = calculateTimeLeft()
        if (!hasTimeLeft) {
          clearInterval(timer)
        }
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [expiryDate])

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Intl.DateTimeFormat("en-US", options).format(date)
  }

  if (isExpired) {
    return (
      <Card
        sx={{
          bgcolor: "#f5f5f5",
          borderRadius: "12px",
          mb: 4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Chip icon={<LocalOfferIcon />} label="OFFER EXPIRED" color="error" sx={{ mb: 2, fontWeight: "bold" }} />
            <Typography variant="body1" color="text.secondary">
              This special offer has ended. Contact us for current pricing.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    )
  }

  return (
    <Grow in={animate} timeout={800}>
      <Card
        sx={{
          background: "linear-gradient(135deg, #135F4A 0%, #0D4D3D 100%)",
          borderRadius: "16px",
          mb: 4,
          overflow: "hidden",
          boxShadow: "0 12px 28px rgba(19,95,74,0.25)",
        }}
      >
        <Box sx={{ p: 0.5, bgcolor: "#0A3F32" }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(90deg, #FFD700, #FFA500)",
              },
            }}
          />
        </Box>

        <CardContent sx={{ py: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                gap: 1,
              }}
            >
              <StarIcon sx={{ color: "#FFD700" }} />
              <Typography variant="h5" component="h4" fontWeight="bold">
                EXCLUSIVE LIMITED-TIME OFFER
              </Typography>
              <StarIcon sx={{ color: "#FFD700" }} />
            </Box>

            <Fade in={true} timeout={1000}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <TimeUnit value={timeLeft.days} label="DAYS" />
                <TimeUnit value={timeLeft.hours} label="HOURS" />
                <TimeUnit value={timeLeft.minutes} label="MINUTES" />
                <TimeUnit value={timeLeft.seconds} label="SECONDS" />
              </Box>
            </Fade>

            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.9)",
                p: 2,
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                mt: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <TimerIcon sx={{ color: "#135F4A" }} />
                <Typography variant="subtitle1" fontWeight="bold" color="#135F4A">
                  Offer Expires On:
                </Typography>
              </Box>
              <Typography variant="h6" fontWeight="bold" color="#135F4A">
                {formatDateTime(expiryDate)}
              </Typography>
            </Box>

            <Typography
              variant="caption"
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.8)",
                fontStyle: "italic",
              }}
            >
              *Act now to secure this world-class exclusive pricing
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <Box
      sx={{
        bgcolor: "rgba(255,255,255,0.15)",
        borderRadius: "8px",
        p: 1.5,
        minWidth: "80px",
        textAlign: "center",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "#FFD700" }}>
        {value.toString().padStart(2, "0")}
      </Typography>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.9)" }}>
        {label}
      </Typography>
    </Box>
  )
}

