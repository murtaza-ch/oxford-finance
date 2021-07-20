import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CButton, CInput, CRadio } from "../..";

interface ThirdScreenProps {
  screenId: string;
  onSetAnswerValue: (name: string, value: string | number) => void;
}

export default function ThirdScreen(props: ThirdScreenProps) {
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
      <Text color="brand.primary.main" fontSize="25px" fontWeight={600}>
        A Bit More Personal Info
      </Text>

      <VStack spacing={4} mt="20px">
        <CInput
          label="Date of Birth"
          borderColor="brand.primary.main"
          name="personalInfo.dateOfBirth"
          onSetAnswerValue={onSetAnswerValue}
          type="date"
        />
        <CRadio
          label="What is your Gender"
          name="personalInfo.gender"
          onSetAnswerValue={onSetAnswerValue}
          radioOptions={[
            {
              value: "male",
              label: "Male",
            },
            {
              value: "female",
              label: "Female",
            },
          ]}
        />
        <CInput
          label="What is your address"
          variant="filled"
          name="personalInfo.address"
          onSetAnswerValue={onSetAnswerValue}
        />
        <CInput
          label="Contact Number"
          borderColor="brand.primary.main"
          name="personalInfo.contactNumber"
          onSetAnswerValue={onSetAnswerValue}
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
