import React from "react";
import {
  Button as CButton,
  ButtonProps as CButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends CButtonProps {
  title: string;
  variant?: string;
  colorScheme?: string;
  to?: string;
}

export default function Button(props: ButtonProps) {
  const { title, variant, colorScheme, ...otherProps } = props;
  return (
    <CButton
      color={`${colorScheme === "white" ? "#000" : "#fff"}`}
      _focus={{
        bgColor: `${colorScheme === "white" ? "#fff" : "brand.primary.main"}`,
      }}
      _hover={{
        bgColor: `${colorScheme === "white" ? "#fff" : "brand.primary.main"}`,
      }}
      _active={{
        bgColor: `${colorScheme === "white" ? "#fff" : "brand.primary.main"}`,
      }}
      fontWeight="400"
      bgColor={`${colorScheme === "white" ? "#fff" : "brand.primary.main"}`}
      variant={variant}
      {...otherProps}
    >
      {title}
    </CButton>
  );
}

Button.defaultProps = {
  variant: "solid",
};
