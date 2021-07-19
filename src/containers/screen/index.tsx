import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  MainScreen,
  OneScreen,
  TwoScreen,
  ThirdScreen,
  FourthScreen,
  FifthScreen,
} from "../../components";

export default function Screen() {
  const { screenId } = useParams() as { screenId: string };
  console.log(screenId);
  const renderScreen = () => {
    switch (+screenId) {
      case 0: {
        return <MainScreen />;
      }
      case 1: {
        return <OneScreen />;
      }
      case 2: {
        return <TwoScreen />;
      }
      case 3: {
        return <ThirdScreen />;
      }
      case 4: {
        return <FourthScreen />;
      }
      case 5: {
        return <FifthScreen />;
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
      p="10px"
      pr="10px"
      borderColor="brand.primary.main"
    >
      {renderScreen()}
    </Box>
  );
}
