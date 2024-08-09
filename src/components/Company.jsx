import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import OneImage from "../assets/01.svg";
import LocationIcon from "../assets/Group.svg";
import AboutUsImage from "../assets/contacts.png";
import { Fade } from "react-reveal";

function Company() {
  return (
    <Box id="about" p={{ base: "40px 0", md: "64px 0" }}>
      <Box className="container">
        <Fade bottom>
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            width={"100%"}
            gap={"32px"}
            justifyContent={"space-between"}>
            <Box>
              <Heading {...css.title}>Loyiha haqida</Heading>
              <Text {...css.text}>
                NRG Qorasuvda hammasi ajoyib! Joylashgan o`rnidan boshlab,
                xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy
                majmuasining bolg`usi aholisi uchun parkovkalarning
                mavjudligigacha puxta o`ylangan.
              </Text>
              <Text mb={"32px"} {...css.text}>
                Yangi turarjoy majmuasining konseptini ishlab chigish davomida,
                NRG Uzbekistan rivojlantirish jamoasi, binolar, landshaft va
                xollning zamonaviy dizaynini, majmua ichidagi yashash uchun
                qulay bo`ladigan shart-sharoitlar bilan uyg`unlashtirishga
                muvaffaq bo`ldi.
              </Text>
              <SimpleGrid
                columns={{ base: 2, sm: 3, lg: 2 }}
                display={{ base: "grid", sm: "none", lg: "grid" }}
                gap={{ base: "20px", md: "32px" }}>
                <Flex
                  align={{ base: "baseline", sm: "center" }}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={"12px"}>
                  <Image {...css.icon} src={OneImage} alt="OneImage" />
                  <Heading {...css.subname}>
                    Rivojlangan <br /> infratuzilma
                  </Heading>
                </Flex>
                <Flex
                  align={{ base: "baseline", sm: "center" }}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={"12px"}>
                  <Image {...css.icon} src={OneImage} alt="OneImage" />
                  <Heading {...css.subname}>
                    Qulay transport <br /> o‘tkazgichi
                  </Heading>
                </Flex>
                <Flex
                  align={{ base: "baseline", sm: "center" }}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={"12px"}>
                  <Image {...css.icon} src={OneImage} alt="OneImage" />
                  <Heading {...css.subname}>
                    Puxta o‘ylangan <br /> joylashtirish tartibi
                  </Heading>
                </Flex>
                <Flex
                  align={{ base: "baseline", sm: "center" }}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={"12px"}>
                  <Image {...css.icon} src={OneImage} alt="OneImage" />
                  <Heading {...css.subname}>
                    Ko‘p funksiyali <br /> hovli
                  </Heading>
                </Flex>
                <Flex
                  align={{ base: "baseline", sm: "center" }}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={"12px"}>
                  <Image {...css.icon} src={OneImage} alt="OneImage" />
                  <Heading {...css.subname}>
                    So‘nggi qavatlardagi <br /> terrasalar
                  </Heading>
                </Flex>
                <Flex
                  align={{ base: "baseline", sm: "center" }}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={"12px"}>
                  <Image {...css.icon} src={OneImage} alt="OneImage" />
                  <Heading {...css.subname}>
                    Zamonaviy <br /> mualliflik landshafti
                  </Heading>
                </Flex>
              </SimpleGrid>
            </Box>
            <Box {...css.rightBox}>
              <Image {...css.image} src={AboutUsImage} />
              <Box {...css.right}>
                <Box {...css.span}>
                  <Image src={LocationIcon} />
                </Box>
                <Text {...css.subtext}>
                  Hududning o`zgacha bir muhiti, uning tarixiga hurmat bilan
                  munosabatda bolish loyihaning nomini va uning konseptsiyasini
                  belgilab berdi
                </Text>
                <Text {...css.more}>Xaritada ko‘rish</Text>
              </Box>
            </Box>
          </Flex>
        </Fade>
        <Fade bottom>
          <SimpleGrid
            columns={{ base: 2, sm: 3 }}
            display={{ base: "none", sm: "grid", xl: "none" }}
            mt={"40px"}
            gap={{ base: "20px", md: "0" }}>
            <Flex
              align={{ base: "baseline", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              gap={"12px"}>
              <Image {...css.icon} src={OneImage} alt="OneImage" />
              <Heading {...css.subname}>
                Rivojlangan <br /> infratuzilma
              </Heading>
            </Flex>
            <Flex
              align={{ base: "baseline", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              gap={"12px"}>
              <Image {...css.icon} src={OneImage} alt="OneImage" />
              <Heading {...css.subname}>
                Qulay transport <br /> o‘tkazgichi
              </Heading>
            </Flex>
            <Flex
              align={{ base: "baseline", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              gap={"12px"}>
              <Image {...css.icon} src={OneImage} alt="OneImage" />
              <Heading {...css.subname}>
                Puxta o‘ylangan <br /> joylashtirish tartibi
              </Heading>
            </Flex>
            <Flex
              align={{ base: "baseline", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              gap={"12px"}>
              <Image {...css.icon} src={OneImage} alt="OneImage" />
              <Heading {...css.subname}>
                Ko‘p funksiyali <br /> hovli
              </Heading>
            </Flex>
            <Flex
              align={{ base: "baseline", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              gap={"12px"}>
              <Image {...css.icon} src={OneImage} alt="OneImage" />
              <Heading {...css.subname}>
                So‘nggi qavatlardagi <br /> terrasalar
              </Heading>
            </Flex>
            <Flex
              align={{ base: "baseline", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
              gap={"12px"}>
              <Image {...css.icon} src={OneImage} alt="OneImage" />
              <Heading {...css.subname}>
                Zamonaviy <br /> mualliflik landshafti
              </Heading>
            </Flex>
          </SimpleGrid>
        </Fade>
      </Box>
    </Box>
  );
}

export default Company;

const css = {
  title: {
    fontSize: {
      base: "24px",
      lg: "32px",
    },
    lineHeight: {
      base: "32px",
      lg: "46px",
    },
    fontWeight: "600 !important",
  },
  text: {
    color: "#505050",
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "20px",
    },
    fontStyle: "normal",
    lineHeight: {
      base: "20px",
      lg: "26px",
    },
    fontWeight: "400",
    width: {
      base: "100%",
      sm: "324px",
      lg: "570px",
    },
    marginTop: "16px",
  },
  subname: {
    fontSize: {
      base: "14px",
      md: "20px",
    },
    fontStyle: "normal",
    lineHeight: {
      base: "20px",
      md: "26px",
    },
    fontWeight: "500 !important",
  },
  right: {
    width: {
      base: "100%",
      lg: "540px",
    },
    padding: {
      base: "16px 24px",
      lg: "26px 38px",
    },
    borderRadius: "16px",
    background: "#fff",
    boxShadow:
      "0px 299px 84px 0px rgba(0, 0, 0, 0.00), 0px 191px 77px 0px rgba(0, 0, 0, 0.01), 0px 108px 65px 0px rgba(0, 0, 0, 0.05), 0px 48px 48px 0px rgba(0, 0, 0, 0.09), 0px 12px 26px 0px rgba(0, 0, 0, 0.10)",
    position: "absolute",
    right: {
      base: "0px",
      sm: "30px",
      lg: "120px",
      "2xl": "190px",
    },
    bottom: {
      base: "-60px",
      sm: "20px",
      lg: "0",
    },
  },
  subtext: {
    fontSize: {
      base: "14px",
      sm: "12px",
      lg: "20px",
    },
    fontStyle: "normal",
    lineHeight: {
      base: "20px",
      lg: "26px",
    },
    fontWeight: "400",
    marginTop: "16px",
  },
  more: {
    fontSize: {
      base: "14px",
      lg: "20px",
    },
    fontStyle: "normal",
    lineHeight: "26px",
    fontWeight: "600",
    marginTop: {
      base: "12px",
      sm: "24px",
    },
  },
  span: {
    borderRadius: "16px",
    background: "#F3F3EF",
    width: "56px",
    height: "56px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: {
      base: "40px",
      sm: "32px",
      md: "60px",
    },
    height: {
      base: "40px",
      sm: "32px",
      md: "60px",
    },
  },
  image: {
    width: "100%",
    height: {
      base: "343px",
      sm: "300px",
      lg: "466px",
    },
    objectFit: {
      base: "fill",
      xl: "contain",
    },
  },
  rightBox: {
    width: {
      base: "100%",
      md: "380px",
      lg: "690px",
    },
    position: "relative",
  },
};
