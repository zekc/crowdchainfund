import React from "react";
import { BsBookmark } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import {
  Button,
  Circle,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AppContext } from "../Contexts/AppContext";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import { Navigate } from "react-router-dom";

const OverlayTwo = () => (
  <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
);

function Interact() {
  const { auth, setAuth } = React.useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <>
      <Circle
        border="1px solid black"
        p="1"
        cursor="pointer"
        onClick={() => {
          if (!auth) {
            setOverlay(OverlayTwo);
            onOpen();
          }
        }}
      >
        <BsBookmark size={14}></BsBookmark>
      </Circle>
      <Circle
        border="1px solid black"
        p="1"
        cursor="pointer"
        onClick={() => {
          if (!auth) {
            setOverlay(OverlayTwo);
            onOpen();
          }
        }}
      >
        <BiLike size={14}></BiLike>
      </Circle>
      <Circle
        border="1px solid black"
        p="1"
        cursor="pointer"
        onClick={() => {
          if (!auth) {
            setOverlay(OverlayTwo);
            onOpen();
          }
        }}
      >
        <BiDislike size={14}></BiDislike>
      </Circle>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Save</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="14px">
            <Text>
              <Link color="purple" to="/login" element={<LoginPage />}>
                Log in
              </Link>{" "}
              to your CrowdChainFund account to save this project.
            </Text>
            <br />
            <Text>
              Don't have one yet?{" "}
              <Link color="purple" to="/signup" element={<SignupPage />}>
                Sign up
              </Link>{" "}
              for an account.
            </Text>
          </ModalBody>
          <ModalFooter m="auto">
            <Button
              onClick={onClose}
              bg="transparent"
              color="gray"
              textDecoration="underline"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Interact;
