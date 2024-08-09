import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import AboutUsImage from "../assets/contacts.png";
import LocationBanner from "../assets/location-banner.png";

function AboutUs() {
  return (
    <Box id="company" {...css.box}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          width={"100%"}
          justifyContent={"space-between"}>
          <Box>
            <Heading {...css.title}>Quruvchi kompaniya to‘g‘risida</Heading>
            <Text {...css.text}>
              Sizning uyingizda hozirdan baxtli oilalar yashamoqdalar,
              bolajonlar birinchi do`stlarini topmoqdalar va do stona
              qo`shnichilik madaniyati gullab-yashnamoqda.
            </Text>
            <Text {...css.text}>
              NRG - O`zbekiston va Qozog`iston qardosh xalqlarining do`stligi va
              madaniy birligining, hamfikrlilik ittifogining yaggol tasdig`idir.
              Biz o`zbek xalgining ko`p asrlik eng zo`r me`moriy ananalari bilan
              Qozog`istonning ilg`or qurilish tajribasini
              mujassamlashtirmoqdamiz.
            </Text>
            <Text {...css.text}>
              Biz hayot uchun qulay makon barpo etmoqdamiz, 24/7 sifatli servis
              va maishiy masalalarda kafolatlangan yordam taqdim etamiz
            </Text>
            <Flex gap={"16px"} mt={"32px"}>
              <Box>
                <Heading {...css.number}>1684+</Heading>
                <Text {...css.subname}>Oila bizning uylarda yashamoqda</Text>
              </Box>
              <Box>
                <Heading {...css.number}>188 430+ m</Heading>
                <Text {...css.subname}>
                  Xonadonlar qurib bitkazilib o‘z egalariga topshirildi
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box {...css.image}>
            <Image
              display={{ base: "none", sm: "block" }}
              {...css.images}
              src={AboutUsImage}
              alt="AboutUsImage"
            />
            <Image
              display={{ base: "block", sm: "none" }}
              {...css.images}
              src={LocationBanner}
              alt="AboutUsImage"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AboutUs;

const css = {
  box: {
    background: "#F6F6F4",
    padding: {
      base: "16px 0",
      md: "48px 0",
    },
  },
  title: {
    fontSize: {
      base: "24px",
      md: "32px",
    },
    lineHeight: {
      base: "32px",
      lg: "48px",
    },
    fontWeight: "600 !important",
    marginBottom: "16px",
  },
  text: {
    color: "#505050",
    fontSize: {
      base: "14px",
      md: "15px",
    },
    lineHeight: "20px",
    fontWeight: "400 !important",
    marginBottom: "16px",
    width: {
      base: "100%",
      sm: "320px",
      lg: "570px",
    },
  },
  number: {
    color: "#384D8B",
    fontSize: {
      base: "24px",
      lg: "40px",
    },
    lineHeight: {
      base: "32px",
      lg: "48px",
    },
    fontWeight: "600 !important",
    marginBottom: "16px",
  },
  subname: {
    fontSize: {
      base: "14px",
      md: "15px",
    },
    lineHeight: "20px",
    fontWeight: "400 !important",
    width: {
      base: "80%",
      md: "200px",
    },
  },
  image: {
    width: {
      base: "100%",
      lg: "650px",
    },
  },
  images: {
    width: "100%",
    height: {
      base: "auto",
      sm: "519px",
      lg: "466px",
    },
    objectFit: {
      base: "contain",
      sm: "fill",
      xl: "contain",
    },
    marginTop: {
      base: "16px",
      lg: "0",
    },
  },
};
