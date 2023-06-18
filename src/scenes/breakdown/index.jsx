import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";

const Breakdown = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box m={!isMobile ? "1.5rem 2.5rem" : "20px 15px"}>
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales by Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
