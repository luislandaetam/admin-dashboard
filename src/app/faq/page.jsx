"use client";

import { Header } from "../components/Header/Header";
import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { tokens } from "../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta
            quia facere accusantium consequatur. Aut nihil ex accusamus
            dignissimos inventore. Illum, provident! Perferendis totam quos
            impedit rerum quasi ducimus earum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta
            quia facere accusantium consequatur. Aut nihil ex accusamus
            dignissimos inventore. Illum, provident! Perferendis totam quos
            impedit rerum quasi ducimus earum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta
            quia facere accusantium consequatur. Aut nihil ex accusamus
            dignissimos inventore. Illum, provident! Perferendis totam quos
            impedit rerum quasi ducimus earum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta
            quia facere accusantium consequatur. Aut nihil ex accusamus
            dignissimos inventore. Illum, provident! Perferendis totam quos
            impedit rerum quasi ducimus earum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta
            quia facere accusantium consequatur. Aut nihil ex accusamus
            dignissimos inventore. Illum, provident! Perferendis totam quos
            impedit rerum quasi ducimus earum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
