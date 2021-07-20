import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CButton, CInput, CRadio, CSelect } from "../..";

interface FourthScreenProps {
  screenId: string;
  onSetAnswerValue: (name: string, value: string | number) => void;
  answers: {
    wantMechanicalIsurance: string;
    buyingOffaDealer: string;
  };
}

export default function FourthScreen(props: FourthScreenProps) {
  const { screenId, onSetAnswerValue, answers } = props;
  return (
    <Box p="20px">
      <Text
        mb="20px"
        fontSize="30px"
        color="brand.primary.main"
        textAlign="center"
      >
        Oxford Logo
      </Text>

      <Text fontSize="20px" fontWeight={600}>
        Are you buying the car off a dealer? if yes who?
      </Text>

      <CRadio
        radioOptions={[
          {
            value: "yes",
            label: "Yes",
          },
          {
            value: "no",
            label: "No",
          },
        ]}
        name="buyingOffaDealer"
        onSetAnswerValue={onSetAnswerValue}
      />

      {answers.buyingOffaDealer === "yes" ? (
        <Box mt="20px">
          <CInput
            label="Dealer Name"
            name="dealerName"
            onSetAnswerValue={onSetAnswerValue}
          />
        </Box>
      ) : null}

      <Text mt="20px" fontSize="20px" fontWeight="500">
        Do you want mechinal insurance?
      </Text>

      <CRadio
        radioOptions={[
          {
            value: "yes",
            label: "Yes",
          },
          {
            value: "no",
            label: "No",
          },
        ]}
        name="wantMechanicalIsurance"
        onSetAnswerValue={onSetAnswerValue}
      />

      {answers.wantMechanicalIsurance === "yes" ? (
        <>
          <Text color="blue" textAlign="center" my="20px">
            Autosure Logo
          </Text>

          <Box
            w="100%"
            p="10px"
            borderRadius="10px"
          >
            <CInput
              label="Registration Number"
              
              name="autoSure.registrationNumber"
              onSetAnswerValue={onSetAnswerValue}
            />
            <Box mt="10px">
              <CSelect
                label="Excess"
                options={[
                  { value: "standard", label: "Standard" },
                  { value: "voluntary", label: "Voluntary" },
                ]}
                name="autoSure.excess"
                onSetAnswerValue={onSetAnswerValue}
              />
            </Box>
          </Box>
        </>
      ) : null}
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
