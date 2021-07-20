import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CButton, CSlider, CRadio } from "../..";
import Logo from "../../Logo";

interface ScreenOneProps {
  screenId: string;
  onSetAnswerValue: (name: string, value: number | string) => void;
  answers: {
    loanAmount: number;
    repaymentDuration: string;
  };
}

export default function ScreenOne(props: ScreenOneProps) {
  const { screenId, onSetAnswerValue, answers } = props;
  return (
    <Box p="20px">
      <Logo />
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
        <Text fontSize="18px">Loan Amount:</Text>
        <Text
          bgColor="brand.primary.main"
          color="#fff"
          fontSize="20px"
          fontWeight="500"
          px="15px"
          borderRadius="20px"
        >
          ${answers.loanAmount}
        </Text>
      </HStack>
      <CSlider
        name="loanAmount"
        mt="20px"
        onSetAnswerValue={onSetAnswerValue}
        min={0}
        max={250000}
      />

      <VStack mt="20px">
        <Text fontSize="20px" fontWeight={500}>
          Term required: (In Month)
        </Text>
        <CSlider
          name="termRequired"
          min={12}
          max={60}
          onSetAnswerValue={onSetAnswerValue}
        />
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
        <CRadio
          direction="column"
          name="repaymentDuration"
          onSetAnswerValue={onSetAnswerValue}
          radioOptions={[
            { value: "weekly", label: "Weekly" },
            { value: "frequency", label: "Frequency" },
            { value: "monthly", label: "Monthly" },
          ]}
        />
      </VStack>

      <Box
        mt="20px"
        borderRadius="10px"
        bgColor="brand.primary.main"
        w="100%"
        mx="auto"
        h="100px"
        textAlign="center"
        pt="6px"
      >
        <Text color="#fff">
          Your minimum {answers.repaymentDuration} repayment amount is
        </Text>
        <Text color="#ffde54" fontSize="30px" fontWeight={500}>
          $287.29
        </Text>
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
    </Box>
  );
}
