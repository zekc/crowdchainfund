import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import logo from '../logo.png'

const text = {
  fontWeight: "600",
  fontSize: "14px",
};

const pageText = {
  color: "gray",
};

function TopNavbar() {
  return (
    <>
      <Flex px="10" align="center" py="6" justify="space-between">
        <Box direction="row" display="flex" gap="8">
          <Text style={text} _hover={{ color: "green" }}>
            Discover
          </Text>
          <Text style={text} _hover={{ color: "green" }}>
            Start a Project
          </Text>
        </Box>
        <Link to="/" element={<HomePage />}>
        <Flex h="120" justify="center">
          <Image src={logo} />
          </Flex>
          </Link>
        <Box direction="row" display="flex" gap="8">
          <Box
            display="flex"
            alignItems="center"
            gap="2"
            _hover={{ color: "green" }}
          >
            <Text style={text}>Search</Text>
            <SearchIcon />
          </Box>
          <Text style={text} _hover={{ color: "green" }}>
            <Link to="/login" element={<LoginPage />}>
              Login
            </Link>
          </Text>
        </Box>
      </Flex>
      {/* <Flex
        gap={30}
        justify="center"
        border="1px solid lightgray"
        py="5"
        align="center"
      >
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Arts
        </Box>
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Comics & Illustration
        </Box>
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Design & Tech
        </Box>
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Film
        </Box>
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Food & Craft
        </Box>
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Games
        </Box>
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Music
        </Box>
        <Box _hover={{ textDecoration: "underline" }} style={pageText}>
          Publishing
        </Box>
      </Flex> */}
    </>
  );
}

export default TopNavbar;
