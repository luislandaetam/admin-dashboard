"use client";

import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Header } from "../components/Header/Header";
import { tokens } from "../theme";

export default function Calendar() {
  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Welcome to your dashboard" />
    </Box>
  );
}
