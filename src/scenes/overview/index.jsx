import React, { useState } from "react";
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      m={!isMobile ? "1.5rem 2.5rem" : "20px 15px"}
      pb={isMobile ? "150px" : ""}
    >
      <Header
        title="OVERVIEW"
        subtitle="Overview of General Revenue and Profit"
      />
      <Box height="75vh" width="100%">
        <FormControl
          sx={{
            mt: "1rem",
          }}
        >
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} isMobile={isMobile} />
      </Box>
    </Box>
  );
};

export default Overview;
