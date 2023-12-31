import { Box, Button, ButtonGroup, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ScrollCard from "./ScrollCard";
import mystyle from "./Scrolly.module.css";

const data = [
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/507/213/441faeb055944afb4f4daea3710aab1b_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1662484309&auto=format&frame=1&q=92&s=fd2cb0b26c72a92d5b7804a878ab48a8",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/704/866/6e7b1fb502d1a449a0be435856e93a7f_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1664182774&auto=format&frame=1&q=92&s=d9a48c90db3aea02ee0d137940c52ad1",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/444/947/3d56fcdd04b26acfaf9e058ef2fa1a44_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661943088&auto=format&frame=1&q=92&s=fd8d0ca1070029fda82262a5eebba4d7",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/383/174/a6f5f31522f2dee43e1424ff3155cb3f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661388654&auto=format&frame=1&q=92&s=3fbbe0cf30288382ac5ff68bee191cde",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/676/426/699b0e6c6b06b15a954da961900e8f4f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1663886261&auto=format&frame=1&q=92&s=28be488cbfbfc2dd2618cee118930685",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/509/206/ad4e374f549d9ab50ec19a14746a79b7_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1662495286&auto=format&frame=1&q=92&s=bad71573bd21cd97f6204cfdd7d5b84c",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/417/415/9686dbab3c481d52d5eb3a24f6933b20_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661743427&auto=format&frame=1&q=92&s=a6ae0c3d9b55bdceeebc1edd5ec76228",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/476/674/44266c65a55eae42088200d8baa5567c_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1662207819&auto=format&frame=1&q=92&s=490f8dc35ae5f032658528255d2ef909",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/584/016/0f427d334d95f26f64969bbcdfe69d34_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1663134409&auto=format&frame=1&q=92&s=6ae046b8f836a5cf61b228723ffb2c04",
  },
  {
    image:
      "https://ksr-ugc.imgix.net/assets/038/656/469/9541e60b8def52268820c5469c3ff5a0_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1663743151&auto=format&frame=1&q=92&s=196b42f72eb17be183035fd000bcb290",
  },
];

function Scrolly() {
  const ref = React.useRef();

  const scrollLeft = () => {
    ref.current.scrollLeft = +ref.current.scrollLeft - 400;
    console.log(ref.current.scrollLeft);
  };

  const scrollRight = () => {
    ref.current.scrollLeft = +ref.current.scrollLeft + 400;
    console.log(ref.current.scrollLeft);
  };

  return (
    <div style={{ padding: "50px 0px", border: "1px solid lightgray" }}>
      <HStack display="flex" justify="space-between" align="center" px="10">
        <h3
          style={{
            fontWeight: "600",
            fontSize: "14px",
            color: "gray",
            paddingLeft: "3rem",
            paddingTop: "3rem",
            padding: "0",
          }}
        >
          FRESH FAVORITES
        </h3>
        <ButtonGroup>
          <Button onClick={scrollLeft} bg="transparent">
            <FiChevronLeft></FiChevronLeft>
          </Button>
          <Button onClick={scrollRight} bg="transparent">
            <FiChevronRight></FiChevronRight>
          </Button>
        </ButtonGroup>
      </HStack>
      <Flex overflowX="scroll" style={mystyle} ref={ref} p="10">
        <Flex gap={3}>
          {data.map((item) => {
            return <ScrollCard src={item.image} />;
          })}
        </Flex>
      </Flex>
    </div>
  );
}

export default Scrolly;
