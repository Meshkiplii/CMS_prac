import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress-1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: 2,
        opacity: 0.9, // Slight transparency for text readability
      }}
    >
      <Container>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Your Health, Our Priority
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ marginBottom: 4, fontSize: { xs: "1.2rem", md: "1.8rem" } }}
        >
          Connecting you with top doctors for quality care and peace of mind.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/book-appointment")}
          sx={{
            mt: 3,
            padding: { xs: "12px 24px", md: "16px 32px" },
            fontSize: { xs: "1rem", md: "1.2rem" },
            boxShadow: 3,
          }}
        >
          Book Your Appointment
        </Button>
      </Container>
      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" } }}
        >
          Join thousands of satisfied patients and take the first step towards
          better health today!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
