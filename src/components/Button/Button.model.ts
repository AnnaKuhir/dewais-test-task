import { ReactNode } from "react";
import { ButtonProps as UIButtonProps } from "@mui/material";

export interface ButtonProps extends UIButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
