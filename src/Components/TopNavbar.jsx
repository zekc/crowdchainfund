import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from '../logo.png';

const text = {
  fontWeight: "600",
  fontSize: "14px",
};

function TopNavbar() {
  return (
    <>
      <Flex px="10" align="center" py="6" justify="space-between">
        <Box direction="row" display="flex" gap="8">
          <Link to="/discover">
            <Text style={text} _hover={{ color: "green" }}>
              Discover
            </Text>
          </Link>
          <Link to="/startproject">
            <Text style={text} _hover={{ color: "green" }}>
              Start a Project
            </Text>
          </Link>
        </Box>
        <Link to="/">
          <Image src={logo} h="120" justifySelf="center" />
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
          <Link to="/login">
            <Text style={text} _hover={{ color: "green" }}>
              Login
            </Text>
          </Link>
        </Box>
      </Flex>
      
    </>
  );
}

export default TopNavbar;
