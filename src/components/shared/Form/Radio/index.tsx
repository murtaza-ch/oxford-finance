import React from "react";
import {
  Radio as CRadio,
  RadioGroup,
  Stack,
  RadioProps as CRadioProps,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface RadioProps extends CRadioProps {
  label?: string;
  radioOptions: { label: string; value: string }[];
}

export default function Radio(props: RadioProps) {
  const { label, radioOptions, ...otherProps } = props;
  return (
    <FormControl>
      <FormLabel color='brand.primary.main'>{label}</FormLabel>
      <RadioGroup color='brand.primary.main'>
        <Stack direction="row">
          {radioOptions.map((el) => (
            <CRadio {...otherProps} value={el.value}>
              {el.label}
            </CRadio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
}
