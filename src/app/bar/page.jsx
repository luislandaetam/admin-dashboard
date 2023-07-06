"use client";

import { Header } from "../components/Header/Header";
import { Box } from "@mui/material";
import { BarChart } from "../components/BarChart/BarChart";

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}
