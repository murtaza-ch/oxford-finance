import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { CButton, CInput, CSelect } from "../..";

export default function ScreenTwo() {
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
        textTransform="uppercase"
        color="brand.primary.main"
        fontSize="25px"
        fontWeight={600}
      >
        New For Some <br />
        Personal info
      </Text>

      <VStack mt="20px">
        <CInput label="First Name" borderColor="brand.primary.main" />
        <CInput label="Middle Name" borderColor="brand.primary.main" />
        <CInput label="Last Name" borderColor="brand.primary.main" />
        <CInput label="Whats is your email?" borderColor="brand.primary.main" />
      </VStack>

      <Box mt="20px">
        <CSelect
          variant="filled"
          options={[
            {
              value: "",
              label: "",
            },
          ]}
          label="Liecence type"
        />
      </Box>

      <VStack mt="20px">
        <CButton title="Next Step" borderRadius="40px" px="30px" />
      </VStack>
    </Box>
  );
}
