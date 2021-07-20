import React from "react";
import {
  Input as CInput,
  FormControl,
  InputProps as CInputProps,
  FormLabel,
} from "@chakra-ui/react";

interface InputProps extends CInputProps {
  label?: string;
  name?: string;
  labelColor?: string;
  onSetAnswerValue?: (name: string, value: number | string) => void;
}

export default function Input(props: InputProps) {
  const {
    label,
    labelColor = "brand.primary.main",
    onSetAnswerValue,
    name,
    ...otherProps
  } = props;
  return (
    <FormControl>
      <FormLabel color={labelColor}>{label}</FormLabel>
      <CInput
        size="sm"
        variant="flushed"
        focusBorderColor="brand.primary.main"
        name={name}
        onChange={(e) =>
          onSetAnswerValue && onSetAnswerValue(e.target.name, e.target.value)
        }
        {...otherProps}
      />
    </FormControl>
  );
}
