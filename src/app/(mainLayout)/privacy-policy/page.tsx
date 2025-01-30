"use client"

import React from "react"
import {
    Container,
    Typography,
    Paper,
    Divider,
    List,
    ListItem,
    ListItemText,
    ThemeProvider,
    createTheme,
    CssBaseline,
} from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: "#1e3a8a",
        },
        secondary: {
            main: "#10b981",
        },
        background: {
            default: "#f3f4f6",
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
})

const sections = [
    {
        title: "Information We Collect",
        content:
            "We collect personal information that you provide to us, such as your name, email address, phone number, and property preferences. We also collect information about your interactions with our website and services.",
    },
    {
        title: "How We Use Your Information",
        content:
            "We use your information to provide and improve our services, communicate with you about properties and services, and comply with legal obligations.",
    },
    {
        title: "Information Sharing and Disclosure",
        content:
            "We may share your information with trusted partners and service providers who assist us in operating our website and conducting our business. We will not sell or rent your personal information to third parties.",
    },
    {
        title: "Data Security",
        content:
            "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.",
    },
    {
        title: "Your Rights",
        content:
            "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.",
    },
    {
        title: "Changes to This Privacy Policy",
        content:
            'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
    },
    {
        title: "Contact Us",
        content:
            "If you have any questions about this Privacy Policy, please contact us at privacy@anaadevelopers.com or by mail at: Anaa Developers Ltd, 123 Real Estate Avenue, Cityville, State 12345.",
    },
]

export default function PrivacyPolicy() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Typography variant="h3" component="h1" gutterBottom color="secondary" align="center">
                        Privacy Policy
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center">
                        Last Updated: {new Date().toLocaleDateString()}
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="body1" paragraph>
                        At Anaa Developers Ltd, we are committed to protecting your privacy and ensuring the security of your
                        personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                        information when you visit our website or use our services.
                    </Typography>
                    <List>
                        {sections.map((section, index) => (
                            <React.Fragment key={index}>
                                <ListItem alignItems="flex-start" sx={{ flexDirection: "column", py: 2 }}>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6" color="secondary">
                                                {section.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" color="text.secondary" component="span">
                                                {section.content}
                                            </Typography>
                                        }
                                    />

                                </ListItem>
                                {index < sections.length - 1 && <Divider component="li" />}
                            </React.Fragment>
                        ))}
                    </List>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

