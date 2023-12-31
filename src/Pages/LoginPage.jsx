import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Heading,
  HStack,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineApple, AiOutlineFacebook } from "react-icons/ai";
import SignupPage from "./SignupPage";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

function LoginPage() {
  const toast = useToast();
  const email = React.useRef();
  const password = React.useRef();
  const { checkUser } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkUser(email.current.value, password.current.value)) {
      toast({
        title: "Log in successful.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast({
        title: "Log in failed.",
        description: 'Incorrect email or password',
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0px",
        background: "#f7f7f6",
      }}
    >
      <form
        style={{
          background: "white",
          width: "400px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
        onSubmit={handleSubmit}
      >
        <Heading fontWeight="400" fontSize="30px">
          Log in
        </Heading>
        <Input type="email" placeholder="Email" ref={email} />
        <Input type="password" placeholder="Password" ref={password} />
        <p
          style={{
            color: "#2752ff",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          Forgot your password?
        </p>
        <Button color={"white"} bg="#028858" w="full" type="submit">
          Login
        </Button>
        <Checkbox>
          <Text fontSize="14px">Remember me</Text>
        </Checkbox>
        <HStack>
          <Divider></Divider>
          <p style={{ fontSize: "14px" }}>or</p>
          <Divider></Divider>
        </HStack>
        <Button color={"white"} bg="black" w="full">
          <AiOutlineApple />
          Sign in with Apple
        </Button>
        <Button color={"white"} bg="#39579A" w="full">
          <AiOutlineFacebook />
          Continue with Facebook
        </Button>
        <p style={{ fontSize: "12px", color: "gray" }}>
          Get notified when your friends back and launch projects. We'll never
          post anything on Facebook without your permission.
        </p>
        <p
          style={{
            color: "#39579A",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Read more
        </p>
        <Divider></Divider>
        <Link to="/signup" element={<SignupPage />}>
          <HStack py={2} justify="center">
            <Text fontSize="14px">New to CrowdChainFund?</Text>
            <p
              style={{
                color: "#39579A",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Sign up
            </p>
          </HStack>
        </Link>
        <Divider></Divider>
        <p style={{ fontSize: "12px", color: "gray" }}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
