import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import HouseImage from "../assets/house.png";

function House() {
  return (
    <Box p={{ base: "24px 0", md: "46px 0" }}>
      <Box className="container">
        <Heading {...css.title}>Qurilish jarayoni</Heading>
        <SimpleGrid gap={"15px"} mt={"36px"} columns={{ base: 1, sm: 4 }}>
          <Box>
            <Image {...css.image} src={HouseImage} />
            <Heading {...css.subname}>Iyun</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={HouseImage} />
            <Heading {...css.subname}>Iyun</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={HouseImage} />
            <Heading {...css.subname}>Iyun</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={HouseImage} />
            <Heading {...css.subname}>Iyun</Heading>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default House;

const css = {
  title: {
    fontSize: {
      base: "24px",
      lg: "34px",
    },
    lineHeight: {
      base: "32px",
      lg: "40px",
    },
    fontWeight: "600 !important",
    color: "#141414",
    fontStyle: "normal",
  },
  subname: {
    fontSize: {
      base: "16px",
      lg: "20px",
    },
    lineHeight: {
      base: "24px",
      lg: "26px",
    },
    fontWeight: "600 !important",
    fontStyle: "normal",
    marginTop: "14px",
  },
  image: {
    borderRadius: "16px",
    height: {
      base: "233px",
      sm: "150px",
      lg: "233px",
    },
    objectFit: "cover",
    width: "100%",
  },
};
