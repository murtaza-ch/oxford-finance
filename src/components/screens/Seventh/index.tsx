import React from "react";
import { Box, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CButton } from "../..";

interface SeventhScreenProps {
  screenId: string;
}

export default function SeventhScreen(props: SeventhScreenProps) {
  const { screenId } = props;
  return (
    <Box p="20px">
      <Box bgColor="#eefaff" w="100%" h="150px">
        <Text
          mb="20px"
          fontSize="30px"
          color="brand.primary.main"
          textAlign="center"
        >
          Oxford Logo
        </Text>
        <Text
          textAlign="center"
          color="brand.primary.main"
          textTransform="uppercase"
          fontSize="25px"
          fontWeight={600}
        >
          Choose Policy
        </Text>
      </Box>

      <Text
        textAlign="center"
        mt="20px"
        textTransform="uppercase"
        fontSize="20px"
        fontWeight="500"
      >
        Smart Cover
      </Text>

      <VStack mt="10px">
        <HStack
          justifyContent="space-between"
          bgColor="#eeeeee"
          boxShadow="md"
          w="100%"
          fontSize="13px"
          align="start"
          p="4px"
        >
          <Text>Eligibility Criteria for a standard vehicle</Text>
          <Text>Vehicle up to 16 years a 175,000 kms</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="100%"
          fontSize="13px"
          align="start"
          p="4px"
        >
          <Text>Limit per claim</Text>
          <Text>$10,000</Text>
        </HStack>
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="#eeeeee"
          boxShadow="md"
          fontSize="13px"
          align="start"
          p="4px"
        >
          <Text>Consumable items</Text>
          <Text>Up to $750 per claim</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="100%"
          fontSize="13px"
          align="start"
          p="4px"
        >
          <Text>Repartriaon costs</Text>
          <Text>Up to $750 per claim</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          bgColor="#eeeeee"
          boxShadow="md"
          fontSize="13px"
          align="start"
          p="4px"
          w="100%"
        >
          <Text>Accounmmodation and return home travel</Text>
          <Text>Up to $750 per claim</Text>
        </HStack>
        <HStack justifyContent="space-between" fontSize="13px" w="100%" p="4px">
          <Text>AA Roadside Assisten</Text>
          <Icon as={BiCheck} color="brand.primary.main" fontSize="30px" />
        </HStack>
        <HStack
          bgColor="#eeeeee"
          boxShadow="md"
          justifyContent="space-between"
          fontSize="13px"
          w="100%"
          p="4px"
        >
          <Text>Factory Filled components</Text>
          <Icon as={BiCheck} color="brand.primary.main" fontSize="30px" />
        </HStack>
      </VStack>

      <VStack mt="20px" bgColor="#eefaff" py="20px">
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
