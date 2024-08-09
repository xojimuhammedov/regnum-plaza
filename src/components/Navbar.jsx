import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import RegnumPlaza from "../assets/logo.svg";
import PhoneIcon from "../assets/phone.svg";
import DownloadIcon from "../assets/download.svg";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
  return (
    <Box pt={"26px"}>
      <Box className="container">
        <Flex {...css.list}>
          <Flex gap={"50px"} align={"center"}>
            <Link href="/">
              <Image
                width={{ base: "130px", lg: "170px" }}
                src={RegnumPlaza}
                alt="RegnumPlaza"
              />
            </Link>
            <Flex
              gap={{ base: "26px", md: "16px", lg: "26px" }}
              align={"center"}>
              <Link {...css.link} href="#about">
                Loyiha haqida
              </Link>
              <Link {...css.link} href="#location">
                Joylashgan o‘rni
              </Link>
              <Link {...css.link} href="#products">
                Hovli
              </Link>
              <Link {...css.link} href="/">
                Xollar
              </Link>
              <Link {...css.link} href="#company">
                Rejalashtirish
              </Link>
              <Link {...css.link} href="#contact">
                Bog‘lanish
              </Link>
            </Flex>
          </Flex>
          <Flex gap={{ base: "12px", md: "26px" }} align={"center"}>
            <Flex gap={"10px"} align={"center"}>
              <Image w={"26px"} h={"26px"} src={PhoneIcon} />
              <Link {...css.number} href="tel:1066">
                1066
              </Link>
            </Flex>
            <Flex
              display={{ base: "none", lg: "flex" }}
              gap={"10px"}
              align={"center"}>
              <Image w={"26px"} h={"26px"} src={DownloadIcon} />
              <Text {...css.download}>
                Taqdimot <Text {...css.hajm}>5.3 mb yuklab olish</Text>
              </Text>
            </Flex>
            <Box display={{ base: "block", md: "none" }}>
              <NavbarMenu />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  list: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    color: "white",
    fontSize: {
      base: "16px",
      md: "12px",
      lg: "15px",
    },
    lineHeight: "20px",
    fontWeight: "400",
    display: {
      base: "none",
      md: "block",
    },
  },
  number: {
    color: "white",
    fontSize: {
      base: "16px",
      md: "20px",
    },
    // fontStyle: "normal",
    lineHeight: "20px",
    fontWeight: "600",
  },
  download: {
    fontSize: "15px",
    fontStyle: "normal",
    lineHeight: "20px",
    fontWeight: "400 !important",
    color: "white",
  },
  hajm: {
    fontSize: "11px",
    fontStyle: "normal",
    lineHeight: "15px",
    fontWeight: "400",
    color: "#C0C0C0",
  },
};
