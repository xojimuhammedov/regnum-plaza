import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import PhoneIcon from "../assets/phone.svg";

function Header() {
  return (
    <Box mt={{ base: "160px", sm: "400px", lg: "490px" }}>
      <Box className="container">
        <Box {...css.list}>
          <Heading {...css.title}>
            Baxtli hayot maskaniga xush kelibsiz!
          </Heading>
          <Flex align={"center"} justifyContent={"space-between"}>
            <Text {...css.text}>
              NRG JOMIY - NRGning yangi biznes-klass turarjoy majmuasi, mashhur
              o`rtaosiyolik shoir Abdurahmon Jomiy sharafiga atalgan.
            </Text>
            <Flex display={{ base: "none", lg: "flex" }} gap={"12px"}>
              <Text {...css.button}>Rejalashtirishni tanlash</Text>
              <Box {...css.span}>
                <Image w={"32px"} h={"32px"} src={PhoneIcon} />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    color: "white",
    fontSize: {
      base: "24px",
      md: "32px",
      lg: "60px",
    },
    fontStyle: "normal",
    lineHeight: {
      base: "32px",
      md: "40px",
      lg: "72px",
    },
    fontWeight: "600 !important",
    width: {
      base: "80%",
      sm: "50%",
      md: "686px",
    },
  },
  text: {
    color: "white",
    fontSize: {
      base: "14px",
      lg: "20px",
    },
    fontStyle: "normal",
    lineHeight: {
      base: "16px",
      md: "20px",
      lg: "26px",
    },
    fontWeight: "400",
    width: {
      base: "216px",
      sm: "450px",
      md: "638px",
    },
    marginTop: "13px",
  },
  button: {
    background: "#384D8B",
    borderRadius: "40px",
    boxShadow:
      "0px 75px 21px 0px rgba(127, 170, 17, 0.00), 0px 48px 19px 0px rgba(127, 170, 17, 0.01), 0px 27px 16px 0px rgba(127, 170, 17, 0.05), 0px 12px 12px 0px rgba(127, 170, 17, 0.09), 0px 3px 7px 0px rgba(127, 170, 17, 0.10)",
    color: "white",
    fontSize: {
      base: "12px",
      lg: "15px",
    },
    padding: "12px 20px",
    lineHeight: {
      base: "16px",
      lg: "20px",
    },
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexDirection: "column",
  },
  span: {
    background: "#384D8B",
    borderRadius: "28px",
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexDirection: "column",
  },
};
