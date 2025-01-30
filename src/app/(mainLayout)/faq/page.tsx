'use client'

import type React from "react"
import { useState } from "react"
import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    TextField,
    InputAdornment,
    useTheme,
    useMediaQuery,
    Paper,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SearchIcon from "@mui/icons-material/Search"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
    {
        question: "What sets Anaadevelopers Ltd apart from other real estate developers?",
        answer:
            "Anaadevelopers Ltd stands out through our commitment to innovative design, sustainable practices, and unparalleled customer service. We blend cutting-edge technology with timeless architectural principles to create spaces that are not just buildings, but living experiences.",
    },
    {
        question: "What types of properties does Anaadevelopers Ltd develop?",
        answer:
            "We specialize in a wide range of properties including luxury residential complexes, smart commercial spaces, eco-friendly mixed-use developments, and bespoke urban regeneration projects. Each of our developments is tailored to enhance the local community and environment.",
    },
    {
        question: "How does Anaadevelopers Ltd ensure the quality of its projects?",
        answer:
            "Quality is at the core of everything we do. We employ rigorous quality control measures, work with top-tier materials and partners, and adhere to international standards of construction and sustainability. Our team of experts oversees every stage of development to ensure excellence.",
    },
    {
        question: "What sustainable practices does Anaadevelopers Ltd implement?",
        answer:
            "Sustainability is a key focus for us. We incorporate energy-efficient designs, use eco-friendly materials, implement water conservation systems, and often include green spaces in our developments. We also strive to minimize our carbon footprint during the construction process.",
    },
    {
        question: "How can I invest in Anaadevelopers Ltd projects?",
        answer:
            "We offer various investment opportunities ranging from pre-construction purchases to partnership in larger developments. Our investor relations team would be happy to discuss options that align with your investment goals. Please contact us for more detailed information.",
    },
    {
        question: "What after-sales services does Anaadevelopers Ltd provide?",
        answer:
            "We pride ourselves on our comprehensive after-sales support. This includes warranty on all our properties, dedicated customer service, property management services, and assistance with leasing or reselling, ensuring that your investment is protected long after the purchase.",
    },
]

const FAQPage = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const [searchTerm, setSearchTerm] = useState("")
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
                    Frequently Asked Questions
                </Typography>
            </motion.div>

            <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: "16px" }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 4 }}
                />

                <AnimatePresence>
                    {filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Accordion
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    mb: 2,
                                    borderRadius: "8px",
                                    "&:before": { display: "none" },
                                    boxShadow: expanded === `panel${index}` ? 3 : 1,
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        "& .MuiAccordionSummary-content": { alignItems: "center" },
                                        bgcolor: expanded === `panel${index}` ? "primary.main" : "background.paper",
                                        color: expanded === `panel${index}` ? "primary.contrastText" : "text.primary",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            bgcolor: "primary.light",
                                            color: "primary.contrastText",
                                        },
                                    }}
                                >
                                    <Typography variant={isMobile ? "body1" : "h6"} sx={{ fontWeight: "medium" }}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {filteredFaqs.length === 0 && (
                    <Box textAlign="center" py={4}>
                        <Typography variant="h6">No matching questions found. Please try a different search term.</Typography>
                    </Box>
                )}
            </Paper>

            <Box textAlign="center" mt={6}>
                <Typography variant="h5" gutterBottom>
                    Still have questions?
                </Typography>
                <Typography>Contact our support team at support@anaadevelopers.com or call us at +1 (555) 123-4567</Typography>
            </Box>
        </Container>
    )
}

export default FAQPage

