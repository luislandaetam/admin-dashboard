"use client";

import { Box } from "@mui/material";
import { Header } from "../components/Header/Header";
import { LineChart } from "../components/LineChart/LineChart";

export default function Line() {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
