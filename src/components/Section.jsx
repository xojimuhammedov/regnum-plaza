import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LocationBanner from "../assets/location-banner.png";
function Section() {
  return (
    <Box id="location" {...css.box}>
      <Box className="container">
        <Flex
          align={"center"}
          width={"100%"}
          flexDirection={{ base: "column-reverse", sm: "row" }}
          gap={{ base: 0, sm: "32px" }}
          justifyContent={"space-between"}>
          <Box {...css.image}>
            <Image {...css.images} src={LocationBanner} />
          </Box>
          <Box>
            <Heading {...css.title}>Joylashgan o‘rni</Heading>
            <Text {...css.text}>
              Qorasuv dahasi - Toshkentdagi tarixiy qaror topgan ko`rkam hudud.
              Bu yerda bir maromdagi hayot surati va poytaxtning dinamik maromi
              muvaffagiyatli tarzda uyg`unlashadi.
            </Text>
            <Text {...css.text}>
              Bu yerda yashash ajoyib, biznes bilan shug`ullanish esa qulay
              Transport infratuzilmasi shaharning istalgan nuqtasiga oson yetib
              borish imkonini beradi: Siz faqat istagan va zarur
              yo`nalishingizni tanlashingiz kifoya.
            </Text>
            <Box {...css.right}>
              <Text {...css.subtext}>
                <b>NRG Qorasuv</b> - Siz va yaginlaringiz uchun zarur bolgan
                barcha qulayliklarni o`zida jamlagan, shahar xaritasidagi yangi
                nuqta va o`ziga tortuvchi joyga aylanadi!
              </Text>
            </Box>
          </Box>
        </Flex>
        <Box {...css.rights}>
          <Text {...css.subtext}>
            <b>NRG Qorasuv</b> - Siz va yaginlaringiz uchun zarur bolgan barcha
            qulayliklarni o`zida jamlagan, shahar xaritasidagi yangi nuqta va
            o`ziga tortuvchi joyga aylanadi!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  box: {
    padding: {
      base: "32px 0",
      lg: "64px 0",
    },
    paddingBottom: {
      base: "16px",
      lg: "100px",
    },
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
    display: {
      base: "none",
      sm: "block",
    },
  },
  text: {
    color: "#505050",
    fontSize: "15px",
    fontStyle: "normal",
    lineHeight: "20px",
    fontWeight: "400",
    width: {
      base: "100%",
      sm: "320px",
      lg: "570px",
    },
    marginTop: "16px",
  },
  image: {
    width: {
      base: "100%",
      sm: "100%",
      md: "690px",
    },
  },
  images: {
    width: "100%",
    height: {
      base: "auto",
      sm: "320px",
      lg: "466px",
    },
    objectFit: {
      base: "contain",
      sm: "fill",
      xl: "contain",
    },
  },
  right: {
    background: "#F3F3EF",
    padding: "20px 26px",
    marginTop: {
      base: "24px",
      lg: "52px",
    },
    marginBottom: {
      base: "16px",
      lg: 0,
    },
    position: "relative",
    display: {
      base: "block",
      sm: "none",
      lg: "block",
    },
    borderRadius: {
      base: "64px 32px 32px 0px",
      lg: "32px 32px 32px 0px",
    },
  },
  subtext: {
    fontSize: {
      base: "14px",
      lg: "15px",
    },
    fontStyle: "normal",
    lineHeight: "20px",
    fontWeight: "400",
    width: {
      base: "100%",
      lg: "440px",
    },

    _before: {
      content: "''",
      background: "#384D8B",
      width: "4px",
      position: "absolute",
      height: {
        base: "60px",
        sm: "40px",
        md: "60px",
      },
      left: "16px",
      top: {
        base: "30px",
        sm: "20px",
        md: "10px",
        lg: "20px",
      },
    },
  },
  rights: {
    background: "#F3F3EF",
    padding: "20px 26px",
    marginTop: {
      base: "24px",
      lg: "52px",
    },
    marginBottom: {
      base: "16px",
      lg: 0,
    },
    position: "relative",
    display: {
      base: "none",
      sm: "block",
      lg: "none",
    },
    borderRadius: {
      base: "64px 32px 32px 0px",
      sm: "0px 32px 32px 32px",
      lg: "32px 32px 32px 0px",
    },
  },
};
