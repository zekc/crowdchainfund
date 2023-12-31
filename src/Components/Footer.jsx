import { Box, Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      {/* <Flex
        gap={30}
        justify="flex-start"
        border="2px solid lightgray"
        align="center"
        py="5"
        fontSize="14px"
        direction={{ base: "column", md: "row" }}
        pl="10"
      >
        <Box _hover={{ textDecoration: "underline" }}>Arts</Box>
        <Box _hover={{ textDecoration: "underline" }}>
          Comics & Illustration
        </Box>
        <Box _hover={{ textDecoration: "underline" }}>Design & Tech</Box>
        <Box _hover={{ textDecoration: "underline" }}>Film</Box>
        <Box _hover={{ textDecoration: "underline" }}>Food & Craft</Box>
        <Box _hover={{ textDecoration: "underline" }}>Games</Box>
        <Box _hover={{ textDecoration: "underline" }}>Music</Box>
        <Box _hover={{ textDecoration: "underline" }}>Publishing</Box>
      </Flex> */}
      <Flex gap={20} justify="space-evenly" mt={10} fontSize="14px">
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <h3 style={{ fontWeight: "600" }}>ABOUT</h3>
          <br />
          <li>About us</li>
          <li>Our charter</li>
          <li>Stats</li>
          <li>Press</li>
          <li>Jobs</li>
        </ul>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <h3 style={{ fontWeight: "600" }}>SUPPORT</h3>
          <br />
          <li>Help Center</li>
          <li>Our Rules</li>
          <li>Creator Resources</li>
          <li>Forward Funds</li>
          <li>Brand assets</li>
        </ul>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <h3 style={{ fontWeight: "600" }}>MORE FROM CrowdChainFund</h3>
          <br />
          <li>Newsletters</li>
          <li>CrowdChainFund Magazine</li>
          <li>The Creative Independent</li>
          <li>The CrowdChainFund Blog</li>
          <li>Mobile apps</li>
          <li>Research</li>
        </ul>
      </Flex>
      <Flex m="10" justify="space-between">
        <Box display="flex" alignItems="center" gap="3" px="1">
          {/* <Image
            src="https://cdn-icons-png.flaticon.com/512/152/152805.png"
            h="4"
          ></Image> */}
          <Text>CrowdChainFund, PBC © 2023</Text>
        </Box>
        <Box display="flex" alignItems="center" gap="10">
          <Box display="flex" alignItems="center" gap="5">
            <BsFacebook size="20"></BsFacebook>
            <AiOutlineInstagram size="20"></AiOutlineInstagram>
            <AiOutlineTwitter size="20"></AiOutlineTwitter>
            <AiFillYoutube size="20"></AiFillYoutube>
          </Box>
          <Box display="flex" alignItems="center" gap="3">
            <Select placeholder="English" w={150} h={12}>
              <option value="option1">Deutsh</option>
              <option value="option2">Italiano</option>
              <option value="option3">Espanol</option>
            </Select>
            <Select placeholder="$ US Dollar (USD)" w={250} h={12}>
              <option value="option1">Euro (EUR)</option>
              <option value="option2">Australian Dolloar (AUD)</option>
              <option value="option3">Canadian Dolloar (CAD)</option>
            </Select>
          </Box>
        </Box>
      </Flex>
      <Flex
        gap={30}
        justify="flex-start"
        borderTop="2px solid lightgray"
        align="center"
        py="5"
        fontSize="14px"
        direction={{ base: "column", md: "row" }}
        pl="10"
      >
        <Box _hover={{ textDecoration: "underline" }}>Trust & Safety</Box>
        <Box _hover={{ textDecoration: "underline" }}>Terms of Use</Box>
        <Box _hover={{ textDecoration: "underline" }}>Privacy Policy</Box>
        <Box _hover={{ textDecoration: "underline" }}>Cookie Policy</Box>
        <Box _hover={{ textDecoration: "underline" }}>
          Accessibility Statement
        </Box>
        <Box _hover={{ textDecoration: "underline" }}>CA Notice of Consent</Box>
      </Flex>
    </>
  );
}

export default Footer;
