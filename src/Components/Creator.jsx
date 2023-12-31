import { Box, Grid, GridItem, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function Creator() {
  return (
    <>
      <h3
        style={{
          fontWeight: "600",
          fontSize: "14px",
          color: "gray",
          paddingLeft: "2.5rem",
          paddingTop: "3rem",
        }}
      >
        CREATOR'S CORNER
      </h3>
      <Grid
        gridTemplateColumns="repeat(2,1fr)"
        rowGap={14}
        columnGap={10}
        px="10"
        py="16"
      >
        <GridItem gap={4} display="flex" border="1px solid lightgray" p="5">
          <Image
            src="https://ksr-static.imgix.net/creator_handbook-2f861a5.jpeg?ixlib=rb-2.1.0&s=db586fa544dbb66ff7a4cbb312474b5d"
            w="40%"
            h="180"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "21px",
                fontWeight: "400",
              }}
            >
              The CrowdChainFund Creator Handbook
            </h3>
            <Text lineHeight={6} fontSize="14px">
              This guide will walk you through everything from planning your
              shipping to communicating with backers.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
                fontSize: "14px",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
        <GridItem gap={4} display="flex" border="1px solid lightgray" p="5">
          <Image
            src="https://ksr-static.imgix.net/TCI_storytelling-9fe71bf.png?ixlib=rb-2.1.0&s=dca8c6b2fbb2d3d423ae9a9e2f11c165"
            w="40%"
            h="180"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "21px",
                fontWeight: "400",
              }}
            >
              How to tell the story of your creative work
            </h3>
            <Text lineHeight={6} fontSize="14px">
              Tips for uncovering the best story you can tell to press, funders,
              followers, and everybody else.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
                fontSize: "14px",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
        <GridItem gap={4} display="flex" border="1px solid lightgray" p="5">
          <Image
            src="https://ksr-static.imgix.net/embrace_mistakes_without_romanticizing_failure_the_creative_independent-059993c.jpg?ixlib=rb-2.1.0&s=943d20dca2ae75fa4a41a574dd5584f1"
            w="40%"
            h="180"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "21px",
                fontWeight: "400",
              }}
            >
              How to embrace mistakes without romanticizing failure
            </h3>
            <Text lineHeight={6} fontSize="14px">
              A set of tactics you can use to renegotiate your relationship with
              failure.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
                fontSize: "14px",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
        <GridItem gap={4} display="flex" border="1px solid lightgray" p="5">
          <Image
            src="https://ksr-static.imgix.net/how_to_archive_your_owrk_digitally_the_creative_indpendent-91b6a74.jpg?ixlib=rb-2.1.0&s=1c54a33aaff65ffa773a480318d5be26"
            w="40%"
            h="180"
          ></Image>
          <Box
            gap="6"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h3
              style={{
                fontSize: "21px",
                fontWeight: "400",
              }}
            >
              How to archive your work digitally
            </h3>
            <Text lineHeight={6} fontSize="14px">
              A guide to preserving your portfolio of work—and your peace of
              mind—in the digital realm.
            </Text>
            <p
              style={{
                color: "#4C6CF8",
                fontSize: "14px",
              }}
            >
              Read More
            </p>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Creator;
