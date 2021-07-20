import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  MainScreen,
  OneScreen,
  TwoScreen,
  ThirdScreen,
  FourthScreen,
  FifthScreen,
  SixthScreen,
  // SeventhScreen,
  SuccessScreen,
  NinthScreen,
  PaymentScreen,
} from "../../components";
import { setAnswerValue } from "../../slices/app";
import { RootState } from "../../slices";

export default function Screen() {
  const dispatch = useDispatch();
  const { screenId } = useParams() as { screenId: string };
  const { answers } = useSelector((state: RootState) => state.app);

  const onSetAnswerValue = (name: string, value: number | string) => {
    dispatch(setAnswerValue({ name, value }));
  };

  const screenProps = {
    screenId,
    onSetAnswerValue,
    answers,
  };

  const renderScreen = () => {
    switch (screenId) {
      case "0": {
        return <MainScreen {...screenProps} />;
      }
      case "1": {
        return <OneScreen {...screenProps} />;
      }
      case "2": {
        return <TwoScreen {...screenProps} />;
      }
      case "3": {
        return <ThirdScreen {...screenProps} />;
      }
      case "4": {
        return <FourthScreen {...screenProps} />;
      }
      case "5": {
        return <FifthScreen {...screenProps} />;
      }
      case "6": {
        return <SixthScreen {...screenProps} />;
      }
      // case 8: {
      //   return <SeventhScreen {...screenProps} />;
      // }
      case "7": {
        return <NinthScreen {...screenProps} />;
      }
      case "success": {
        return <SuccessScreen {...screenProps} />;
      }
      case "payment": {
        return <PaymentScreen {...screenProps} />;
      }

      default: {
        return <Text textAlign="center">Not Found!</Text>;
      }
    }
  };
  return (
    <Box
      width="300px"
      minHeight="600px"
      overflow="auto"
      border="2px"
      borderColor="brand.primary.main"
    >
      {renderScreen()}
    </Box>
  );
}
