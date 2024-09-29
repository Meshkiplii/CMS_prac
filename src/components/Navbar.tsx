import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: "white",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Doctor Appointment
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "white",
              fontSize: { xs: "0.8rem", md: "1rem" },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Light transparent white on hover
                color: "yellow", // Change text color on hover
              },
            }}
          >
            Home
          </Button>
        </Link>

        <Link to="/about-us" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "white",
              fontSize: { xs: "0.8rem", md: "1rem" },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "yellow",
              },
            }}
          >
            About Us
          </Button>
        </Link>
        <Link to="/contact-us" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "white",
              fontSize: { xs: "0.8rem", md: "1rem" },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "yellow",
              },
            }}
          >
            Contact Us
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
