"use client";

import { Box } from "@mui/material";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
    <Box m="20px">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
    </Box>
  );
}
