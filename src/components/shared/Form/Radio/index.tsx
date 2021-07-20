import React from "react";
import {
  Radio as CRadio,
  RadioGroup,
  Stack,
  RadioProps as CRadioProps,
  FormControl,
  FormLabel,
  StackDirection,
} from "@chakra-ui/react";

interface RadioProps extends CRadioProps {
  label?: string;
  name?: string;
  radioOptions: { label: string; value: string | number }[];
  onSetAnswerValue?: (name: string, value: number | string) => void;
  direction?: StackDirection;
}

export default function Radio(props: RadioProps) {
  const {
    label,
    radioOptions,
    name,
    onSetAnswerValue,
    direction = "row",
    ...otherProps
  } = props;
  return (
    <FormControl>
      <FormLabel color="brand.primary.main">{label}</FormLabel>
      <RadioGroup color="brand.primary.main">
        <Stack direction={direction}>
          {radioOptions.map((el) => (
            <CRadio
              {...otherProps}
              name={name}
              onChange={(e) =>
                onSetAnswerValue &&
                onSetAnswerValue(e.target.name, e.target.value)
              }
              value={el.value}
            >
              {el.label}
            </CRadio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
}
