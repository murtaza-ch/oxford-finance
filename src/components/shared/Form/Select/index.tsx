import React from "react";
import {
  Select as CSelect,
  FormControl,
  SelectProps as CSelectProps,
  FormLabel,
} from "@chakra-ui/react";

interface SelectProps extends CSelectProps {
  label?: string;
  options: { value: string; label: string }[];
}

export default function Input(props: SelectProps) {
  const { label, options, ...otherProps } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <CSelect {...otherProps} focusBorderColor="brand.primary.main" />
      {options.map((el) => (
        <option value={el.value}>{el.label}</option>
      ))}
    </FormControl>
  );
}
