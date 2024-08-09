import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import MaketImage from "../assets/maket.png";

function Products() {
  return (
    <Box id="products" {...css.box}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          gap="16px"
          align={{ base: "start", md: "center" }}>
          <Heading {...css.title}>Xonadonlarning o‘ylangan rejalari</Heading>
          <Flex {...css.right}>
            <Text {...css.button}>Hammasi</Text>
            <Text {...css.name}>1 - xonali</Text>
            <Text {...css.name}>2 - xonali</Text>
            <Text {...css.name}>3 - xonali</Text>
            <Text className="products-catalog" {...css.name}>
              4 - xonali
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid mt={"52px"} columns={{ base: 1, sm: 3 }}>
          <Image className="product-image" {...css.image} src={MaketImage} />
          <Image
            display={{ base: "none", sm: "block" }}
            className="product-image"
            {...css.image}
            src={MaketImage}
          />
          <Image
            display={{ base: "none", sm: "block" }}
            className="product-image"
            {...css.image}
            src={MaketImage}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Products;

const css = {
  box: {
    padding: {
      base: "24px 0",
      md: "48px 0",
    },
  },
  title: {
    fontSize: {
      base: "24px",
      lg: "40px",
    },
    lineHeight: {
      base: "32px",
      lg: "48px",
    },
    fontWeight: "600 !important",
  },
  right: {
    background: "#F6F6F4",
    borderRadius: "32px",
    padding: "4px",
    // height: {
    //   base: "40px",
    //   sm: "48px",
    //   md: "64px",
    // },
    alignItems: "center",
    gap: {
      base: "20px",
      lg: "32px",
    },
    paddingRight: {
      base: "16px",
      md: "24px",
    },
  },
  button: {
    background: "#384D8B",
    borderRadius: "32px",
    color: "white",
    fontSize: {
      base: "12px",
      md: "16px",
      lg: "18px",
    },
    lineHeight: {
      base: "20px",
      lg: "26px",
    },
    fontWeight: "500",
    padding: {
      base: "6px 12px",
      sm: "8px 12px",
      md: "12px 24px",
    },
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
  },
  name: {
    color: "#505050",
    // fontSize: "20px",
    // lineHeight: "26px",
    fontSize: {
      base: "12px",
      md: "16px",
      lg: "18px",
      "2xl": "20px",
    },
    lineHeight: {
      base: "20px",
      lg: "26px",
    },
    fontWeight: "500",
    cursor: "pointer",
  },
  image: {
    width: {
      base: "100%",
      lg: "400px",
    },
    height: {
      base: "340px",
      sm: "207px",
      lg: "400px",
    },
  },
};
