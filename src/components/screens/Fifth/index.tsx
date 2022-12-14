import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CButton } from "../..";
import Logo from '../../Logo'

interface FifthScreenProps {
  screenId: string;
}

export default function FifthScreen(props: FifthScreenProps) {
  const { screenId } = props;
  return (
    <Box p="20px">
      <Logo />
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
