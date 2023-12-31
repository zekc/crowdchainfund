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
import { AiOutlineApple } from "react-icons/ai";
import { AppContext } from "../Contexts/AppContext";

const initState = {
  name: "",
  password: "",
  email: "",
};

function Signup() {
  const toast = useToast();
  const { setUser } = React.useContext(AppContext);
  const [data, setData] = React.useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Account created.",
      description: "We've created your account 😊.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setUser(data);
    setData(initState);
  };
  const { name, password, email } = data;

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
          gap: "15px",
        }}
        onSubmit={handleSubmit}
      >
        <Heading fontWeight="400" fontSize="30px">
          Sign up
        </Heading>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Checkbox>
          <Text fontSize="14px">
            Send me a weekly mix of handpicked projects, plus occasional
            CrowdChainFund news
          </Text>
        </Checkbox>
        <Checkbox>
          <Text fontSize="14px">
            Contact me about participating in CrowdChainFund research
          </Text>
        </Checkbox>
        <Button color={"white"} bg="#028858" w="full" type="submit">
          Create account
        </Button>

        <p style={{ fontSize: "12px", color: "gray" }}>
          By signing up, you agree to our Privacy Policy, Cookie Policy and
          Terms of Use.
          <br />
          <span
            style={{
              color: "#39579A",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Read More
          </span>
        </p>
        <HStack>
          <Divider></Divider>
          <p>or</p>
          <Divider></Divider>
        </HStack>
        <Button color={"white"} bg="black" w="full">
          <AiOutlineApple />
          Sign in with Apple
        </Button>
      </form>
    </div>
  );
}

export default Signup;
