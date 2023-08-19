import { TextFieldProps } from "@mui/material";
import { FieldValues, RegisterOptions } from "react-hook-form";

export type ControlledInputProps = {
  name: string;
  label: string;
  control: any; //change type
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
} & TextFieldProps;
