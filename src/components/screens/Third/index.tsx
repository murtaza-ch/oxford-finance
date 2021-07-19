import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { CButton, CInput, CRadio } from "../..";

export default function ThirdScreen() {
  return (
    <Box>
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
        <CInput label="Date of Birth" borderColor="brand.primary.main" />
        <CRadio
          label="What is your Gender"
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
        <CInput label="What is your address" variant="filled" />
        <CInput label="Contact Number" borderColor="brand.primary.main" />
      </VStack>

      <VStack mt="20px">
        <CButton title="Next Step" borderRadius="40px" px="30px" />
      </VStack>
    </Box>
  );
}
