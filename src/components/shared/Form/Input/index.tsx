import React from "react";
import {
  Input as CInput,
  FormControl,
  InputProps as CInputProps,
  FormLabel,
} from "@chakra-ui/react";

interface InputProps extends CInputProps {
  label?: string;
}

export default function Input(props: InputProps) {
  const { label, ...otherProps } = props;
  return (
    <FormControl>
      <FormLabel color="brand.primary.main">{label}</FormLabel>
      <CInput
        size="sm"
        variant="flushed"
        {...otherProps}
        focusBorderColor="brand.primary.main"
      />
    </FormControl>
  );
}
