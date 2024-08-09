import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import LocationBanner from "../assets/location-banner.png";
import OneImage from "../assets/01.svg";
import LocationIcon from "../assets/Group.svg";

function Architexture() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex
          align={"center"}
          flexDirection={{ base: "column-reverse", sm: "row" }}
          width={"100%"}
          gap={"32px"}
          justifyContent={"space-between"}>
          <Box {...css.image}>
            <Image {...css.images} src={LocationBanner} />
            <Box {...css.right}>
              <Box {...css.span}>
                <Image src={LocationIcon} />
              </Box>
              <Text {...css.subtext}>
                NRG Qorasuv - bu Yevropa va Sharq uslublarini birgalikda qollash
                orqali ishlab chigilgan eksklyuziv mualliflik dizayni.
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading {...css.title}>Majmua arxitekturasi</Heading>
            <Text {...css.text}>
              Majmua mutlaq xavfsiz va erkin hudud sifatida chuqur o`ylangan.
              Hech ganday begona kishilar va chagirilmagan mehmonlar.
            </Text>
            <Text {...css.text}>
              Hovlilarda avtomashina bo`lmaydi. Ishga mahorat ila yondashuv,
              barcha tafsilotlarga e tiborli bo`lish va qurilish
              materiallarining maxsus tanlovi mualliflar g`oyalarining amalga
              oshishi uchun ishonchli kafolatdir.
            </Text>
            <SimpleGrid
              display={{ base: "grid", sm: "none", lg: "grid" }}
              mt={"40px"}
              gap={{ base: "20px", md: "0" }}
              columns={{ base: 1, lg: 3 }}>
              <Flex
                align={{ base: "center", md: "baseline" }}
                flexDirection={{ base: "row", md: "column" }}
                gap={"12px"}>
                <Image {...css.icon} src={OneImage} alt="OneImage" />
                <Text {...css.subname}>
                  Ventilyatsiya qurilmasiga ega fasad
                </Text>
              </Flex>
              <Flex
                align={{ base: "center", md: "baseline" }}
                flexDirection={{ base: "row", md: "column" }}
                gap={"12px"}>
                <Image {...css.icon} src={OneImage} alt="OneImage" />
                <Text {...css.subname}>
                  Manolit karkas va xonalararo g‘isht devorlar
                </Text>
              </Flex>
              <Flex
                align={{ base: "center", md: "baseline" }}
                flexDirection={{ base: "row", md: "column" }}
                gap={"12px"}>
                <Image {...css.icon} src={OneImage} alt="OneImage" />
                <Text {...css.subname}>
                  Sovuq o‘tkazmaydigan metalloplastik profil
                </Text>
              </Flex>
            </SimpleGrid>
          </Box>
        </Flex>
        <SimpleGrid
          display={{ base: "none", sm: "grid", lg: "none" }}
          mt={"40px"}
          gap={{ base: "20px", md: "0" }}
          columns={3}>
          <Flex
            align={{ base: "center", sm: "start" }}
            flexDirection={{ base: "row", sm: "column" }}
            gap={"12px"}>
            <Image {...css.icon} src={OneImage} alt="OneImage" />
            <Text {...css.subname}>Ventilyatsiya qurilmasiga ega fasad</Text>
          </Flex>
          <Flex
            align={{ base: "center", sm: "start" }}
            flexDirection={{ base: "row", sm: "column" }}
            gap={"12px"}>
            <Image {...css.icon} src={OneImage} alt="OneImage" />
            <Text {...css.subname}>
              Manolit karkas va xonalararo g‘isht devorlar
            </Text>
          </Flex>
          <Flex
            align={{ base: "center", sm: "start" }}
            flexDirection={{ base: "row", sm: "column" }}
            gap={"12px"}>
            <Image {...css.icon} src={OneImage} alt="OneImage" />
            <Text {...css.subname}>
              Sovuq o‘tkazmaydigan metalloplastik profil
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Architexture;

const css = {
  box: {
    padding: {
      base: "24px 0",
      md: "48px 0",
    },
    position: "relative",
  },
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
  span: {
    borderRadius: "16px",
    background: "#F3F3EF",
    width: "56px",
    height: "56px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
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
      lg: "590px",
    },
    marginTop: "16px",
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
    width: {
      base: "100%",
      md: "380px",
      lg: "690px",
    },
    position: "relative",
  },
  images: {
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
  subname: {
    fontSize: {
      base: "14px",
      lg: "20px",
    },
    fontStyle: "normal",
    lineHeight: {
      base: "20px",
      lg: "26px",
    },
    fontWeight: "500 !important",
    width: {
      base: "70%",
      md: "200px",
    },
  },
  right: {
    width: {
      base: "100%",
      sm: "290px",
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
    left: {
      base: "0",
      md: "50px",
      lg: "100px",
      "2xl": "190px",
    },
    bottom: {
      base: "-20px",
      lg: "-60px",
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
    fontSize: "20px",
    fontStyle: "normal",
    lineHeight: "26px",
    fontWeight: "600",
    marginTop: "24px",
  },
};
