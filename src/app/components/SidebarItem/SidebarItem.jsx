"use client";

import { Typography, useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import { MenuItem } from "react-pro-sidebar";
import Link from "next/link";

export function SidebarItem({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
}
