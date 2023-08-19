import { UseControllerProps } from "react-hook-form";
import { AnyType } from "../../globalTypes";
import { TextFieldProps } from "@mui/material";

export type ControlledInputType = UseControllerProps<AnyType> & TextFieldProps;
