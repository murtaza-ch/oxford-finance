import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { CButton } from "../..";

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
        fontSize="20px"
        fontWeight={600}
        textAlign="center"
      >
        Final Step is verifying your income? This is completely secure
      </Text>
      <iframe
        height="400"
        width="280px"
        src="https://test.bankstatements.com.au/iframe/start/SNMV"
        title="Bank Statements"
      ></iframe>

      <VStack mt="20px">
        <CButton title="Next Step" borderRadius="40px" px="30px" />
      </VStack>
    </Box>
  );
}
