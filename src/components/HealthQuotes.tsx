import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const quotes = [
  "Health is wealth.",
  "A healthy outside starts from the inside.",
  "Take care of your body. It's the only place you have to live.",
  "The greatest wealth is health.",
  "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
];

const HealthQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<string>(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => {
        const nextIndex = (quotes.indexOf(prev) + 1) % quotes.length;
        return quotes[nextIndex];
      });
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box sx={{ textAlign: "center", margin: 2 }}>
      <Typography variant="h5" color="primary">
        {currentQuote}
      </Typography>
    </Box>
  );
};

export default HealthQuotes;
