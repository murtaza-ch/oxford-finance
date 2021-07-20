import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { CButton } from "../..";
import { Link } from "react-router-dom";

interface EigthScreenProps {
  screenId: string;
}

export default function EigthScreen(props: EigthScreenProps) {
  const { screenId } = props;
  return (
    <VStack
      bgColor="#eefaff"
      p="20px"
      minH="600px"
      justifyContent="space-between"
    >
      <Text
        mb="20px"
        fontSize="30px"
        color="brand.primary.main"
        textAlign="center"
      >
        Oxford Logo
      </Text>

      <Box
        w="100%"
        p="10px"
        bgColor="brand.primary.main"
        color="#fff"
        textAlign="center"
        borderRadius="10px"
        h="35%"
        fontSize="18px"
      >
        You have been approved for 6.95% over 48 months the monthly repayments
        will be $658. your dealer will get an email now
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
    </VStack>
  );
}
