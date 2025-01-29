/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";

const CopyLinkButton = ({
  shareUrl,
  buttonText = "Copy Link",
}: {
  shareUrl: string;
  buttonText?: string;
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setOpenSnackbar(true); // Show success alert
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  interface SnackbarCloseEvent {
    target: EventTarget;
  }

  const handleCloseSnackbar = (event: SnackbarCloseEvent, reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCopy}
        style={{
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "20px",
          padding: "4px 10px",
        }}
      >
        {buttonText}
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar as any}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar as any}
          severity="success"
          sx={{ width: "100%" }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CopyLinkButton;
