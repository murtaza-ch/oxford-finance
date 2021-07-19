import React from "react";
import { Button as CButton, ButtonProps as CButtonProps } from "@chakra-ui/react";

interface ButtonProps extends CButtonProps {
  title: string;
  variant?: string;
}

export default function Button(props: ButtonProps) {
  const { title, variant, ...otherProps } = props;
  return (
    <CButton
      color="#fff"
      _focus={{
        bgColor: "brand.primary.main",
      }}
      _hover={{
        bgColor: "brand.primary.main",
      }}
      _active={{
        bgColor: "brand.primary.main",
      }}
      fontWeight="400"
      bgColor="brand.primary.main"
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
