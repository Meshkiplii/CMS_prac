import React from "react";
import { Container, Typography } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        If you have any questions or need assistance, please reach out to us at:
        <br />
        Email: support@doctorappointments.com
        <br />
        Phone: (123) 456-7890
      </Typography>
    </Container>
  );
};

export default Contact;
