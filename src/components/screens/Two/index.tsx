import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CButton, CInput, CSelect } from "../..";

interface ScreenTwoProps {
  screenId: string;
  onSetAnswerValue: (name: string, value: string | number) => void;
}

export default function ScreenTwo(props: ScreenTwoProps) {
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
        textTransform="uppercase"
        color="brand.primary.main"
        fontSize="25px"
        fontWeight={600}
      >
        New For Some <br />
        Personal info
      </Text>

      <VStack mt="20px">
        <CInput
          label="First Name"
          borderColor="brand.primary.main"
          name="personalInfo.firstname"
          onSetAnswerValue={onSetAnswerValue}
        />
        <CInput
          label="Middle Name"
          borderColor="brand.primary.main"
          name="personalInfo.middlename"
          onSetAnswerValue={onSetAnswerValue}
        />
        <CInput
          label="Last Name"
          borderColor="brand.primary.main"
          name="personalInfo.lastname"
          onSetAnswerValue={onSetAnswerValue}
        />
        <CInput
          label="Whats is your email?"
          borderColor="brand.primary.main"
          name="personalInfo.email"
          onSetAnswerValue={onSetAnswerValue}
        />
      </VStack>

      <Box mt="20px">
        <CSelect
          variant="filled"
          name="licenseType"
          onSetAnswerValue={onSetAnswerValue}
          options={[
            {
              value: "option 1",
              label: "Option 1",
            },
            {
              value: "option 2",
              label: "Option 2",
            },
            {
              value: "option 3",
              label: "Option 3",
            },
          ]}
          label="License type"
        />
      </Box>

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
