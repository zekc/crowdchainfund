import { Alert, AlertIcon, Box, Button, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { AppContext } from "../Contexts/AppContext";

function Newsletter() {
  const { subscribed, setSubscribed } = React.useContext(AppContext);
  return (
    <>
      <VStack py="14" gap="3" border="1px solid lightgray">
        <h3 style={{ fontSize: "24px" }}>See the future in your inbox.</h3>
        <p style={{ fontSize: "16px" }}>
          Sign up to receive Invent, CrowdChainFund’s Design and Tech newsletter.
        </p>
        {subscribed ? (
          <Alert
            status="success"
            w="50%"
            bg="white"
            color="green"
            margin="auto"
            display="flex"
            justifyContent="center"
          >
            <AlertIcon />
            You've successfully subscribed to our CrowdChainFund Arts newsletter.
          </Alert>
        ) : (
          <Box display="flex" justify="center" gap="5">
            <Input
              placeholder="Enter email address"
              w={500}
              type="email"
            ></Input>
            <Button
              bg="gray"
              color="white"
              _hover={{ bg: "black" }}
              onClick={() => setSubscribed(true)}
            >
              Subscribe
            </Button>
          </Box>
        )}
      </VStack>
    </>
  );
}

export default Newsletter;
