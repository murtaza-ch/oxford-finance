import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderProps as CSliderProps,
} from "@chakra-ui/react";

interface SliderProps extends CSliderProps {}

export default function Button(props: SliderProps) {
  const { ...otherProps } = props;
  return (
    <Slider
      aria-label="slider-ex-1"
      size="lg"
      defaultValue={30}
      {...otherProps}
    >
      <SliderTrack h="10px">
        <SliderFilledTrack bgColor='brand.primary.main' />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
