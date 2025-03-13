/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useRef } from "react"
import { Box } from "@mui/material"

interface CustomVideoOverlayProps {
  isPlaying: boolean
}

const CustomVideoOverlay = ({ isPlaying }: CustomVideoOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  // This component creates a transparent overlay that specifically covers
  // the bottom right corner where the YouTube logo appears
  return (
    <Box
      ref={overlayRef}
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: { xs: "70px", sm: "85px", md: "100px" }, // Responsive width
        height: { xs: "35px", sm: "42px", md: "50px" }, // Responsive height
        backgroundColor: "rgba(0, 0, 0, 0.01)", // Nearly transparent
        zIndex: 10, // Higher than the video but lower than controls
        pointerEvents: "none", // Allow clicks to pass through
      }}
    />
  )
}

export default CustomVideoOverlay

