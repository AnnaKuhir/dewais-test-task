import { FC } from "react";
import { TextField } from "@mui/material";
import { ControlledInputProps } from "./ControlledInput.model";
import { Controller } from "react-hook-form";

export const ControlledInput: FC<ControlledInputProps> = ({
  name,
  label,
  control,
  variant,
  size,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          label={label}
          variant={variant || "outlined"}
          size={size || "small"}
          value={value}
          onChange={onChange}
          {...rest}
        />
      )}
    />
  );
};
