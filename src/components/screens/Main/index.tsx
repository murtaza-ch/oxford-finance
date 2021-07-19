import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { CButton } from "../..";

export default function MainScreen() {
  return (
    <Box>
      <Text fontSize="30px" color="brand.primary.main" textAlign="center">
        Logo
      </Text>
      <Text
        color="brand.primary.main"
        textAlign="center"
        fontSize="25px"
        fontWeight={600}
      >
        New And Refinanced Motor Vehicle Loan
      </Text>

      <VStack
        mt="20px"
        spacing={0}
        justifyContent="center"
        bgColor="brand.primary.main"
        w="170px"
        color="#fff"
        height="170px"
        opacity="0.9"
        borderRadius="50%"
      >
        <Text fontSize="12px" fontWeight={500}>
          Fixed Rated
        </Text>
        <Text fontSize="45px" fontWeight={600}>
          5.95%
        </Text>
        <Text fontSize="12px" fontWeight={500}>
          For Loans over $50k
        </Text>
      </VStack>
      <VStack
        p="20px"
        spacing={0}
        justifyContent="center"
        bgColor="brand.primary.main"
        w="220px"
        color="#fff"
        ml="auto"
        height="220px"
        opacity="0.9"
        borderRadius="50%"
        mt="-30px"
      >
        <Text fontSize="12px" fontWeight={500}>
          Fixed Rated From
        </Text>
        <Text fontSize="45px" fontWeight={600}>
          6.95%
        </Text>
        <Text textAlign="center" fontSize="12px" fontWeight={500}>
          For Loans over $30k or Any Hybrid/ Electric Vehicle
        </Text>
      </VStack>
      <VStack mt="20px">
        <CButton title="Find Out More" />
      </VStack>
    </Box>
  );
}
