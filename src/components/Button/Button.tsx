import { FC } from "react";
import { Button as UIButton } from "@mui/material";
import { ButtonProps } from "./Button.model";

export const Button: FC<ButtonProps> = ({
  children,
  size,
  color,
  variant,
  onClick,
  type,
  ...rest
}) => {
  return (
    <UIButton
      type={type || "submit"}
      size={size || "medium"}
      variant={variant || "contained"}
      color={color || "primary"}
      onClick={onClick}
      {...rest}
    >
      {children}
    </UIButton>
  );
};
