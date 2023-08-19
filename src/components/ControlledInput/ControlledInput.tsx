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
  rules,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          size={size || "small"}
          variant={variant || "outlined"}
          value={value}
          onChange={onChange}
          error={Boolean(error)}
          helperText={error ? error.message : null}
          {...rest}
        />
      )}
    />
  );
};
