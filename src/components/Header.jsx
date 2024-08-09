import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import PhoneIcon from "../assets/phone.svg";
import GlobusIcon from "../assets/globus.svg";

function Header() {
  return (
    <Box mt={{ base: "130px", sm: "400px", md: "410px", lg: "490px" }}>
      <Box className="container">
        <Box {...css.list}>
          <Heading {...css.title}>
            Baxtli hayot maskaniga xush kelibsiz!
          </Heading>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            align={{ base: "start", md: "center" }}
            justifyContent={"space-between"}>
            <Text {...css.text}>
              NRG JOMIY - NRGning yangi biznes-klass turarjoy majmuasi, mashhur
              o`rtaosiyolik shoir Abdurahmon Jomiy sharafiga atalgan.
            </Text>
            <Flex
              position={"relative"}
              align={"center"}
              // display={{ base: "none", md: "flex" }}
              gap={"12px"}>
              <Text {...css.button}>Rejalashtirishni tanlash</Text>
              <Text {...css.buttons}>Rejalashtirishni tanlash</Text>
              <Box {...css.span}>
                <Image w={"32px"} h={"32px"} src={PhoneIcon} />
              </Box>
              <Flex {...css.bottom} flexDirection={"column"}>
                <Box {...css.span}>
                  <Text {...css.camera}>Jonli efir</Text>
                </Box>
                <Box {...css.span}>
                  <Image w={"22px"} h={"22px"} src={GlobusIcon} />
                  <Text {...css.camera}>360</Text>
                </Box>
              </Flex>
              <Flex {...css.bottoms} flexDirection={"column"}>
                <Box {...css.spans}>
                  <Text {...css.camera}>Jonli efir</Text>
                </Box>
                <Box {...css.spans}>
                  <Image w={"19px"} h={"19px"} src={GlobusIcon} />
                  <Text {...css.camera}>360</Text>
                </Box>
                <Box {...css.spans}>
                  <Image w={"24px"} h={"24px"} src={PhoneIcon} />
                </Box>
              </Flex>
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
      md: "16px",
      xl: "20px",
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
      md: "520px",
      xl: "638px",
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
      xl: "15px",
    },
    padding: {
      base: "8px 16px",
      md: "12px 20px",
    },
    lineHeight: {
      base: "16px",
      lg: "20px",
    },
    fontWeight: "500",
    display: {
      base: "none",
      md: "flex",
    },
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexDirection: "column",
  },
  buttons: {
    background: "#384D8B",
    borderRadius: "40px",
    boxShadow:
      "0px 75px 21px 0px rgba(127, 170, 17, 0.00), 0px 48px 19px 0px rgba(127, 170, 17, 0.01), 0px 27px 16px 0px rgba(127, 170, 17, 0.05), 0px 12px 12px 0px rgba(127, 170, 17, 0.09), 0px 3px 7px 0px rgba(127, 170, 17, 0.10)",
    color: "white",
    fontSize: {
      base: "12px",
      xl: "15px",
    },
    padding: {
      base: "8px 16px",
      md: "12px 20px",
    },
    lineHeight: {
      base: "16px",
      lg: "20px",
    },
    fontWeight: "500",
    display: {
      base: "flex",
      md: "none",
    },
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexDirection: "column",
    marginTop: "16px",
    position: "relative",
    left:"180px",
  },
  span: {
    background: "#384D8B",
    borderRadius: "28px",
    width: {
      base: "40px",
      md: "56px",
    },
    height: {
      base: "40px",
      md: "56px",
    },
    display: {
      base: "none",
      md: "flex",
    },
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexDirection: "column",
  },
  bottom: {
    position: "absolute",
    bottom: "66px",
    right: "0",
    gap: "16px",
    display: {
      base: "none",
      md: "block",
    },
  },
  camera: {
    color: "white",
    fontSize: {
      base: "8px",
      md: "12px",
    },
    fontWeight: "500",
    lineHeight: "normal",
    width: {
      base: "25px",
      md: "40px",
    },
    textAlign: "center",
  },
  spans: {
    background: "#384D8B",
    borderRadius: "28px",
    width: {
      base: "40px",
      md: "56px",
    },
    height: {
      base: "40px",
      md: "56px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexDirection: "column",
  },
  bottoms: {
    position: "absolute",
    bottom: {
      base: "40px",
      md: "66px",
    },
    right: {
      base: "-180px",
      md: "0",
    },
    gap: "16px",
  },
};
