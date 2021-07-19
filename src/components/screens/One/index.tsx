import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { CButton, CSlider } from "../..";

export default function ScreenOne() {
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
        Apply Now! <br />
        Get a greate deal
      </Text>

      <HStack justifyContent="space-between" mt="18px">
        <Text fontSize="20px">Loan Amount:</Text>
        <Text
          bgColor="brand.primary.main"
          color="#fff"
          fontSize="20px"
          fontWeight="500"
          px="15px"
          borderRadius="20px"
        >
          $37,300
        </Text>
      </HStack>
      <CSlider mt="20px" />

      <VStack mt="20px">
        <Text fontSize="20px" fontWeight={500}>
          Term required: (In Month)
        </Text>
        <CSlider />
        <HStack w="full" justifyContent="space-between">
          {[12, 18, 24, 30, 36, 42, 48, 54, 60].map((month) => (
            <>
              <Text fontSize="14px" color="#979494">
                {month}
              </Text>
            </>
          ))}
        </HStack>
      </VStack>

      <VStack mt="20px" align="start">
        <Text fontSize="18px">Repayment Frequency</Text>
        <HStack>
          <HStack>
            <Box
              h="10px"
              w="10px"
              borderRadius="50%"
              bgColor="brand.primary.main"
            ></Box>
            <Text>Weekly</Text>
          </HStack>
          <HStack>
            <Box
              h="10px"
              w="10px"
              borderRadius="50%"
              bgColor="brand.primary.main"
            ></Box>
            <Text>Frequency</Text>
          </HStack>
          <HStack>
            <Box
              h="10px"
              w="10px"
              borderRadius="50%"
              bgColor="brand.primary.main"
            ></Box>
            <Text>Monthly</Text>
          </HStack>
        </HStack>
      </VStack>

      <Box
        mt="20px"
        borderRadius="10px"
        bgColor="brand.primary.main"
        w="80%"
        mx="auto"
        h="100px"
        textAlign="center"
        pt="6px"
      >
        <Text color="#fff">Your minimum weekly repayment amount is</Text>
        <Text color="#ffde54" fontSize="30px" fontWeight={500}>
          $287.29
        </Text>
      </Box>

      <VStack mt="20px">
        <CButton title="Next Step" borderRadius="40px" px="30px" />
      </VStack>
    </Box>
  );
}
