// src/components/AboutUs.tsx
import React from "react";
import { Container, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        We are dedicated to providing quality healthcare services to our
        patients. Our team of experienced doctors is here to assist you with
        your health needs.
      </Typography>
    </Container>
  );
};

export default About;
