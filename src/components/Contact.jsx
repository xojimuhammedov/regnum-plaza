import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ContactImage from "../assets/contact.png";

function Contact() {
  return (
    <Box id="contact">
      <Box className="container">
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box>
            <Image {...css.image} src={ContactImage} />
          </Box>
          <Box {...css.list}>
            <Heading {...css.title}>Mutaxassis maslahati</Heading>
            <Text {...css.text}>
              Aloqa ma’lumotlaringizni qoldiring va menejerimiz loyiha haqida
              ko’proq qiziqarli ma’lumotlar beradi
            </Text>
            <SimpleGrid gap={"16px"} columns={{ base: 1, sm: 2 }}>
              <Flex flexDirection={"column"}>
                <label htmlFor="">Ismingiz</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Ismingizni kiriting"
                />
              </Flex>
              <Flex flexDirection={"column"}>
                <label htmlFor="">Telefon raqamingiz</label>
                <input
                  className="form-input"
                  type="number"
                  placeholder="+998"
                />
              </Flex>
            </SimpleGrid>
            <Flex gap={"8px"} mt={"20px"}>
              <Checkbox />
              <Text {...css.subtext}>
                Shaxsiy ma‘lumotlarim qayta ishlanishiga roziman
              </Text>
            </Flex>
            <Button {...css.button}>Jo‘natish</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  title: {
    fontSize: {
      base: "24px",
      lg: "26px",
    },
    lineHeight: {
      base: "32px",
      lg: "40px",
    },
    fontWeight: "600 !important",
    fontStyle: "normal",
  },
  image: {
    height: {
      base: "190px",
      sm: "209px",
      md: "340px",
    },
    borderRadius: {
      base: "16px 16px 0px 0px",
      lg: "16px 0px 0px 16px",
    },
    width: "100%",
    objectFit: {
      base: "cover",
      sm: "fill",
      lg: "cover",
    },
    maxWidth: {
      base: "100%",
      lg: "610px",
    },
  },
  list: {
    borderRadius: {
      base: "0px, 0px, 16px, 16px",
      lg: "0px 16px 16px 0px",
    },
    borderTop: {
      base: "none",
      md: "2px solid #EEEEE5",
    },
    borderRight: "2px solid #EEEEE5",
    borderBottom: "2px solid #EEEEE5",
    borderLeft: {
      base: "2px solid #EEEEE5",
      md: "none",
    },
    background: "#FFF",
    padding: {
      base: "16px",
      md: "24px",
      lg: "26px 46px",
    },
  },
  text: {
    fontSize: {
      base: "14px",
      md: "15px",
    },
    lineHeight: "20px",
    fontWeight: "400 !important",
    fontStyle: "normal",
    margin: "12px 0",
  },
  button: {
    background: "#384D8B",
    borderRadius: "32px",
    width: {
      base: "87px",
      md: "104px",
      lg: "145px",
    },
    height: {
      base: "32px",
      lg: "40px",
    },
    color: "#fff",
    marginTop: "16px",
    fontWeight: "500",
    fontSize: {
      base: "14px",
      md: "15px",
    },
    border: "2px solid #384D8B",

    _hover: {
      background: "#fff",
      color: "#384D8B",
    },
  },
  subtext: {
    color: "#505050",
    fontSize: {
      base: "14px",
      md: "15px",
    },
    fontWeight: "400",
    lineHeight: "20px",
  },
};
