import { TextFieldProps } from "@mui/material";

export type ControlledInputProps = {
  name: string;
  label: string;
  control: any;
} & TextFieldProps;
