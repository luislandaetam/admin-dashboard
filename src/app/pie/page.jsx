"use client";

import { Box } from "@mui/material";
import { Header } from "../components/Header/Header";
import { PieChart } from "../components/PieChart/PieChart";

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
