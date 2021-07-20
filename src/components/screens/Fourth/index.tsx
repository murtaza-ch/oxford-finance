import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CButton, CInput } from "../..";

interface FourthScreenProps {
  screenId: string;
  onSetAnswerValue?: (name: string, value: number | string) => void;
}

export default function FourthScreen(props: FourthScreenProps) {
  const { screenId, onSetAnswerValue } = props;
  return (
    <Box p="20px">
      <Text
        mb="20px"
        fontSize="30px"
        color="brand.primary.main"
        textAlign="center"
      >
        Logo
      </Text>
      <Text
        color="brand.primary.main"
        textTransform="uppercase"
        fontSize="25px"
        fontWeight={600}
      >
        Financial <br /> Information
      </Text>

      <VStack spacing={4} mt="20px">
        <CInput
          label="What are your monthly experience?"
          borderColor="brand.primary.main"
          name="what are your monthly experience?"
          onSetAnswerValue={onSetAnswerValue}
          placeholder="incl. rent, power, internet etc"
        />
        <CInput
          label="What is the total value of your assets?"
          borderColor="brand.primary.main"
          name="what is the total value of your assets?"
          onSetAnswerValue={onSetAnswerValue}
          placeholder="incl. savings, shares, vehicles etc"
        />
        <CInput
          label="What is the total value of your liabilities?"
          borderColor="brand.primary.main"
          name="what is the total value of your liabilities?"
          onSetAnswerValue={onSetAnswerValue}
          placeholder="incl. loans, store cards, debt etc"
        />
      </VStack>

      <VStack mt="20px">
        <CButton
          title="Next Step"
          borderRadius="40px"
          px="30px"
          as={Link}
          to={`/screen/${+screenId + 1}`}
        />
      </VStack>
    </Box>
  );
}
