import React from "react";
import { Image, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";

export default function Logo() {
  const { setting } = useSelector((state: RootState) => state.app);
  console.log({ setting });
  return (
    <VStack pb="15px">
      <Image src={setting.logoUrl} w="180px" />
    </VStack>
  );
}
