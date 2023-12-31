import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ScrollCard({ src }) {
  return (
    <VStack w={270} gap="4" align="flex-start">
      <Image src={src}></Image>
      <h3 style={{ fontSize: "18px" }}>
        Sweater Weather Cardigans and Enamel Pins
      </h3>
      <Text fontSize="14px">
        A collection of cute and comfortable cardigans designed as a pun on
        "Sweater Weather"
      </Text>
      <p style={{ fontSize: "12px", color: "gray" }}>By Zack</p>
    </VStack>
  );
}

export default ScrollCard;
