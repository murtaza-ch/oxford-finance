import React from "react";
import { Box, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { CButton, CCheckbox, CRadio } from "../../..";
import { Link } from "react-router-dom";

interface SmartCoverProps {
  onSetAnswerValue: (name: string, value: string | number) => void;
}

export default function SmartCover(props: SmartCoverProps) {
  const { onSetAnswerValue } = props;
  return (
    <Box p="20px">
      <Box bgColor="#eefaff" w="100%" py="10px">
        <Text
          mb="20px"
          fontSize="30px"
          color="brand.primary.main"
          textAlign="center"
        >
          Oxford Logo
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

      <VStack my="10px">
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
          <Text>Vehicle up to 18 years a 295,000 kms</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="100%"
          fontSize="13px"
          align="start"
          p="4px"
        >
          <Text>Limit per claim</Text>
          <Text>$5,000</Text>
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
          <Text>Up to $350 per claim</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          w="100%"
          fontSize="13px"
          align="start"
          p="4px"
        >
          <Text>Repartriaon costs</Text>
          <Text>Up to $250 per claim</Text>
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
          <Text>Up to $500 per claim</Text>
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
          <Icon as={ImCross} color="red.400" fontSize="20px" />
        </HStack>
      </VStack>

      <VStack bgColor="#eefaff" textAlign="center">
        <Text
          fontWeight={500}
          fontSize="20px"
          color="brand.primary.main"
          textTransform="uppercase"
        >
          Choose Your term
        </Text>
        <VStack align="start" bgColor="#fff" p="20px">
          <CRadio
            radioOptions={[
              { label: "12 Month $1437.00", value: "12 1437.00" },
              { label: "24 Month $1886.00", value: "24 1886.00" },
              { label: "36 Month $2277.00", value: "36 2277.00" },
              { label: "48 Month $2530.00", value: "48 2530.00" },
            ]}
            direction="column"
            name="chooseYourTerm.monthsAndPrice"
            onSetAnswerValue={onSetAnswerValue}
          />
        </VStack>
        <Text fontSize="14px">*Policy Excess of $500</Text>
        <VStack mt="20px" bgColor="#eefaff" py="20px">
          <CButton
            title="Buy Now"
            borderRadius="40px"
            px="30px"
            as={Link}
            to="/screen/payment"
          />
        </VStack>
      </VStack>
    </Box>
  );
}
