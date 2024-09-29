import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#1976d2" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="body1" color="inherit">
            © 2024 Doctor Appointment Booking
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
