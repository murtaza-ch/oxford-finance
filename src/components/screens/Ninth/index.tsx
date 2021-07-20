import React from "react";
import { Box } from "@chakra-ui/react";
import * as carousel from "react-responsive-carousel";
import ExtremeCoverPlus from "./ExtremeCoverPlus";
import SmartCover from "./SmartCover";

interface NinthScreenProps {
  screenId: string;
  onSetAnswerValue: (name: string, value: string | number) => void;
}

export default function NinthScreen(props: NinthScreenProps) {
  const { onSetAnswerValue } = props;
  return (
    <carousel.Carousel showArrows={true}>
      <Box>
        <SmartCover onSetAnswerValue={onSetAnswerValue} />
      </Box>
      <Box>
        <ExtremeCoverPlus onSetAnswerValue={onSetAnswerValue} />
      </Box>
    </carousel.Carousel>
  );
}
