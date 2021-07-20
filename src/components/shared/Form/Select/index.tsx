import React from "react";
import {
  Select as CSelect,
  FormControl,
  SelectProps as CSelectProps,
  FormLabel,
} from "@chakra-ui/react";

interface SelectProps extends CSelectProps {
  label?: string;
  labelColor?: string;
  options: { value: string; label: string }[];
  name?: string;
  onSetAnswerValue?: (name: string, value: number | string) => void;
}

export default function Input(props: SelectProps) {
  const {
    label,
    options,
    labelColor = "brand.primary.main",
    name,
    onSetAnswerValue,
    ...otherProps
  } = props;
  return (
    <FormControl>
      <FormLabel color={labelColor}>{label}</FormLabel>
      <CSelect
        name={name}
        focusBorderColor="brand.primary.main"
        onChange={(e) =>
          onSetAnswerValue && onSetAnswerValue(e.target.name, e.target.value)
        }
        {...otherProps}
      >
        {options.map((el) => (
          <option value={el.value}>{el.label}</option>
        ))}
      </CSelect>
    </FormControl>
  );
}
