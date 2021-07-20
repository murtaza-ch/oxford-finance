import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderProps as CSliderProps,
} from "@chakra-ui/react";

interface SliderProps extends CSliderProps {
  onSetAnswerValue?: (name: string, value: number | string) => void;
  name: string;
}

export default function Button(props: SliderProps) {
  const { onSetAnswerValue, name, ...otherProps } = props;
  return (
    <Slider
      aria-label="slider-ex-1"
      size="lg"
      defaultValue={0}
      onChangeEnd={(value) => {
        if (onSetAnswerValue) {
          onSetAnswerValue && onSetAnswerValue(name, value);
        }
      }}
      {...otherProps}
    >
      <SliderTrack h="10px">
        <SliderFilledTrack bgColor="brand.primary.main" />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
