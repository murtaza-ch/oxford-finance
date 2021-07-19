import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { CButton, CInput } from "../..";

export default function FourthScreen() {
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
        />
        <CInput
          label="What is the total value of your assets?"
          borderColor="brand.primary.main"
        />
        <CInput
          label="what is the total value of your liabilities?"
          borderColor="brand.primary.main"
        />
      </VStack>

      <VStack mt="20px">
        <CButton title="Next Step" borderRadius="40px" px="30px" />
      </VStack>
    </Box>
  );
}
