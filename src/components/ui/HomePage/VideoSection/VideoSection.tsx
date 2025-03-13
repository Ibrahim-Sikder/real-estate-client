/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect, useRef } from "react"
import { Box, Typography, Button, Paper } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Container from "@/components/share/Container"
import CustomVideoOverlay from "./VideoOverlay"

// Add the import for the custom overlay


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef(null)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Enhanced approach to hide YouTube elements
  useEffect(() => {
    // Create a style element
    const style = document.createElement("style")

    // More comprehensive CSS to hide all YouTube branding elements
    style.innerHTML = `
        /* Hide YouTube logo and buttons */
        .ytp-chrome-top,
        .ytp-chrome-bottom,
        .ytp-watermark,
        .ytp-youtube-button,
        .ytp-chrome-top-buttons,
        .ytp-pause-overlay,
        .ytp-related-videos-container,
        .ytp-gradient-top,
        .ytp-gradient-bottom,
        .ytp-show-cards-title,
        .ytp-impression-link,
        .ytp-expand-pause-overlay,
        .ytp-title-channel,
        .ytp-title,
        .ytp-title-text,
        .ytp-chrome-controls,
        .ytp-large-play-button,
        .ytp-paid-content-overlay,
        .ytp-spinner,
        .ytp-share-button,
        .ytp-watch-later-button,
        .ytp-subtitles-button,
        .ytp-settings-button,
        .ytp-fullscreen-button,
        .ytp-miniplayer-button,
        .ytp-volume-area,
        .ytp-time-display {
            display: none !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }
        
        /* Hide YouTube iframe title */
        iframe[title*="YouTube"] {
            border: none !important;
        }
        
        /* Hide YouTube logo in the control bar */
        .ytp-youtube-button {
            display: none !important;
        }

        /* Target the YouTube watermark specifically */
        .ytp-watermark {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            width: 0 !important;
            height: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
        }

        /* Additional selectors for the YouTube logo */
        .ytp-youtube-button, 
        .ytp-button.ytp-youtube-button,
        iframe[src*="youtube"] .ytp-watermark,
        .html5-video-player .ytp-watermark,
        .html5-video-player a.ytp-watermark {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
        }

        /* Responsive styles for YouTube elements */
        @media (max-width: 768px) {
            .ytp-watermark {
                right: 12px !important;
                bottom: 12px !important;
            }
        }

        @media (max-width: 480px) {
            .ytp-watermark {
                right: 8px !important;
                bottom: 8px !important;
            }
        }
    `

    // Append the style to the document head
    document.head.appendChild(style)

    // Function to hide elements after they might be dynamically added
    const hideYouTubeElements = () => {
      const iframes = document.querySelectorAll('iframe[src*="youtube"]')

      iframes.forEach((iframe) => {
        try {
          // Try to access the iframe content if possible
          const iframeDocument = (iframe as HTMLIFrameElement).contentDocument || (iframe as HTMLIFrameElement).contentWindow?.document

          if (iframeDocument) {
            const ytElements = iframeDocument.querySelectorAll(".ytp-watermark, .ytp-youtube-button")
            ytElements.forEach((el) => {
              if (el instanceof HTMLElement) {
                el.style.display = "none"
              }
            })
          }
        } catch (e) {
          // CORS might prevent accessing iframe content
          console.log("Could not access iframe content due to CORS")
        }
      })

      // Try to directly access the YouTube player iframe
      try {
        // Get all iframes
        const iframes = document.querySelectorAll("iframe")

        // For each iframe
        iframes.forEach((iframe) => {
          // Try to add a load event listener
          iframe.addEventListener("load", () => {
            try {
              // Try to access the iframe's document
              const iframeDoc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document)

              // Create a style element
              const style = document.createElement("style")

              // Set the style content
              style.textContent = `
                            .ytp-watermark, 
                            a.ytp-watermark, 
                            .ytp-youtube-button { 
                                display: none !important; 
                                opacity: 0 !important; 
                                visibility: hidden !important;
                            }
                        `

              // Append the style to the iframe's document head
              if (iframeDoc) {
                iframeDoc.head.appendChild(style)
              }
            } catch (e) {
              // CORS error, can't access iframe content
              console.log("Could not access iframe content due to CORS")
            }
          })
        })
      } catch (e) {
        console.log("Error trying to modify iframe content:", e)
      }
    }

    // Run initially and set up an interval to keep checking
    hideYouTubeElements()
    const intervalId = setInterval(hideYouTubeElements, 500)

    // Cleanup function
    return () => {
      document.head.removeChild(style)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Container >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: { xs: 2, sm: 3, md: 4 },
            textTransform: "uppercase",
            letterSpacing: { xs: "0.05em", sm: "0.08em", md: "0.1em" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem", lg: "2.5rem" },
          }}
        >
          Building Dreams, Shaping Futures
        </Typography>
      </motion.div>
      <Paper
        elevation={10}
        sx={{
          borderRadius: { xs: "10px", sm: "15px", md: "20px" },
          overflow: "hidden",
          position: "relative",
          mx: { xs: 1, sm: 2, md: 0 }, // Add responsive margin
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Then add the component inside the Box that contains ReactPlayer */}
          <Box sx={{ position: "relative", paddingTop: { xs: "75%", sm: "65%", md: "56.25%" } }}>
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
              <ReactPlayer
                ref={playerRef}
                url="https://youtu.be/WjFJf_bIv54?si=KGXp5kjRD3QGtK_I"
                width="100%"
                height="100%"
                playing={isPlaying}
                controls={false}
                loop
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      showinfo: 0,
                      rel: 0,
                      iv_load_policy: 3,
                      controls: 0,
                      disablekb: 1,
                      fs: 0, // Disable fullscreen button
                      origin: typeof window !== "undefined" ? window.location.origin : "",
                      widget_referrer: typeof window !== "undefined" ? window.location.href : "",
                      playsinline: 1,
                      autoplay: 0,
                      enablejsapi: 1,
                      // Add these additional parameters
                      cc_load_policy: 0,
                      color: "white",
                      hl: "en",
                      wmode: "transparent",
                    },
                    embedOptions: {
                      showinfo: 0,
                      modestbranding: 1,
                      rel: 0,
                    },
                  },
                  file: {
                    attributes: {
                      poster: "/video-thumbnail.jpg",
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
              <CustomVideoOverlay isPlaying={isPlaying} />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              transition: "opacity 0.3s",
              opacity: isPlaying ? 0 : 1,
              "&:hover": {
                opacity: 1,
              },
              zIndex: 2, // Ensure overlay is above the video
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "4rem",
                  xl: "5rem",
                },
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              Anaadevelopers Ltd
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ maxWidth: "80%", mb: 4, textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Transforming Visions into Extraordinary Realities
            </Typography>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                onClick={handlePlayPause}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                }}
              >
                {isPlaying ? "Pause" : "Watch Our Story"}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Paper>
    </Container>
  )
}

export default VideoSection

