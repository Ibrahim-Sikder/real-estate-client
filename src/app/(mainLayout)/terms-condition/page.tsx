"use client"
import {
    Container,
    Typography,
    Paper,
    Box,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    ThemeProvider,
    createTheme,
    CssBaseline,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"

const theme = createTheme({
    palette: {
        primary: {
            main: "#1e3a8a", // Deep blue color
        },
        secondary: {
            main: "#10b981", // Green color
        },
        background: {
            default: "#f3f4f6", // Light gray background
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
})

const sections = [
    {
        title: "Acceptance of Terms",
        content:
            "By accessing or using the services provided by Anaa Developers Ltd, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.",
    },
    {
        title: "Description of Services",
        content:
            "Anaa Developers Ltd provides real estate development and related services. Our website offers information about our projects, properties, and services.",
    },
    {
        title: "User Responsibilities",
        content:
            "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
    },
    {
        title: "Intellectual Property",
        content:
            "All content on this website, including text, graphics, logos, and images, is the property of Anaa Developers Ltd and is protected by copyright laws. You may not use, reproduce, or distribute any content without our express written permission.",
    },
    {
        title: "Limitation of Liability",
        content:
            "Anaa Developers Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.",
    },
    {
        title: "Indemnification",
        content:
            "You agree to indemnify and hold Anaa Developers Ltd harmless from any claims, losses, or damages, including legal fees, resulting from your violation of these Terms and Conditions or your use of our services.",
    },
    {
        title: "Governing Law",
        content:
            "These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.",
    },
    {
        title: "Changes to Terms",
        content:
            "We reserve the right to modify these Terms and Conditions at any time. We will notify users of any significant changes by posting a notice on our website.",
    },
    {
        title: "Contact Information",
        content:
            "If you have any questions about these Terms and Conditions, please contact us at legal@anaadevelopers.com or by mail at: Anaa Developers Ltd, 123 Real Estate Avenue, Cityville, State 12345.",
    },
]

export default function TermsAndConditions() {
    const [expanded, setExpanded] = useState<number | false>(false);
    const handleAccordionChange =
        (panelIndex: number) =>
            (event: React.SyntheticEvent, isExpanded: boolean) => {
                setExpanded(isExpanded ? panelIndex : false);
            };
    return (
        <ThemeProvider theme={theme}>
     
            <CssBaseline />
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Typography variant="h3" component="h1" gutterBottom color="primary" align="center">
                        Terms & Conditions
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center">
                        Last Updated: {new Date().toLocaleDateString()}
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="body1" paragraph textAlign='center'>
                        Welcome to Anaa Developers Ltd. These Terms and Conditions govern your use of our website and services. By
                        using our services, you agree to these terms. Please read them carefully.
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        {sections.map((section, index) => (
                            <Accordion expanded={expanded === index}
                                onChange={handleAccordionChange(index)} key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index}a-content`}
                                    id={`panel${index}a-header`}

                                >
                                    <Typography color="secondary" fontWeight="bold">
                                        {section.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2">{section.content}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

