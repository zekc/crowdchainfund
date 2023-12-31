import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Interact from "./Interact";

function RecCard({ data }) {
  return (
    <>
      <Stack direction="row" gap={5}>
        <Image src={data.image} h="6rem"></Image>
        <VStack align="left" justify="flex-start">
          <h3 style={{ fontSize: "14px" }}>{data.title}</h3>
          <p style={{ color: " #037362", fontSize: "12px", fontWeight: "600" }}>
            {data.funded}
          </p>
          <p style={{ color: "gray", fontSize: "12px" }}>{data.author}</p>
          <HStack>
            <Interact />
          </HStack>
        </VStack>
      </Stack>
    </>
  );
}

export default RecCard;
