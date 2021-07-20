import React from "react";
import {
  Checkbox as CCheckbox,
  CheckboxProps as CCheckboxProps,
} from "@chakra-ui/react";

interface CheckboxProps extends CCheckboxProps {
  label?: string;
  name?: string;
  radioOptions: { label: string; value: string }[];
  onSetAnswerValue?: (name: string, value: number | string) => void;
}

export default function Checkbox(props: CheckboxProps) {
  const { label, radioOptions, name, onSetAnswerValue, ...otherProps } = props;
  return (
    <CCheckbox
      name={name}
      //   onChange={(e) => onSetAnswerValue(name, e.target.checked ? "yes" : "no")}
      {...otherProps}
    >
      {label}
    </CCheckbox>
  );
}
