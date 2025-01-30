import { useState } from "react"
import { Box, Typography, Button, Paper } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Container from "@/components/share/Container"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <Container>
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
                        mb: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    Building Dreams, Shaping Futures
                </Typography>
            </motion.div>
            <Paper
                elevation={10}
                sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <motion.div initial={{ opacity: 0,  }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <ReactPlayer
                        url="https://youtu.be/PPj71KBiv_0?si=vZlL2AgMOcFmotc8"
                        width="100%"
                        height="600px"
                        playing={isPlaying}
                        controls={false}
                        loop
                        config={{
                            file: {
                                attributes: {
                                    poster: "/video-thumbnail.jpg",
                                },
                            },
                        }}
                    />
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
                                    xs: "1.8rem", // Extra small devices (mobile)
                                    sm: "2.5rem", // Small devices (tablets)
                                    md: "3rem",   // Medium devices (laptops)
                                    lg: "4rem",   // Large devices (desktops)
                                    xl: "5rem",   // Extra large devices
                                },
                                textAlign: "center", // Ensure center alignment on all devices
                                lineHeight: 1.2, // Maintain good readability
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
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "1.2rem",
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

