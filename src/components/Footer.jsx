import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import LocationIcon from "../assets/location.svg";
import CallIcon from "../assets/call.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import TelegramIcon from "../assets/telegram.svg";
import YouTubeIcon from "../assets/youtube.svg";
import MapIcon from "../assets/map.png";

function Footer() {
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column-reverse", sm: "row" }}
          justifyContent={"space-between"}
          gap={{ base: "16px", lg: "68px" }}>
          <Box>
            <Heading {...css.title}>Bog‘lanish</Heading>
            <Flex mb={"8px"} align={"center"} gap={"8px"}>
              <Image src={LocationIcon} />{" "}
              <Heading {...css.subname}>Sotuv bo‘limi</Heading>
            </Flex>
            <Text {...css.text}>
              Toshkent shahri, Mirobod tumani,
              <br /> Oybek ko‘chasi 38а, Biznes center `Avalon`, 1 qavat
            </Text>
            <Flex mb={"8px"} align={"center"} gap={"8px"}>
              <Image src={LocationIcon} />{" "}
              <Heading {...css.subname}>Sotuv bo‘limi</Heading>
            </Flex>
            <Text {...css.text}>
              Toshkent shahri, Mirobod tumani, <br /> Oybek ko‘chasi 38а, Biznes
              center `Avalon`, 1 qavat
            </Text>
            <Heading mb={"8px"} {...css.subname}>
              Telefon
            </Heading>
            <Flex mb={"26px"} align={"center"} gap={"8px"}>
              <Image w={"32px"} h={"32px"} src={CallIcon} />
              <Link {...css.number} href="tel:1066">
                1066
              </Link>
            </Flex>
            <Flex gap={"4px"}>
              <Link
                target="_blank"
                {...css.social}
                href="https://facebook.com/">
                <Image w={"40px"} h={"40px"} src={FacebookIcon} />
              </Link>
              <Link
                {...css.social}
                href="https://www.instagram.com/"
                target="_blank">
                <Image w={"40px"} h={"40px"} src={InstagramIcon} />
              </Link>
              <Link
                target="_blank"
                {...css.social}
                href="https://web.telegram.org/k/">
                <Image w={"40px"} h={"40px"} src={TelegramIcon} />
              </Link>
              <Link
                target="_blank"
                {...css.social}
                href="https://www.youtube.com/">
                <Image w={"40px"} h={"40px"} src={YouTubeIcon} />
              </Link>
            </Flex>
            <Text {...css.subtext}>
              Loyiha arxitekturasi, obodonlashtirish, fasadlar, interyer
              tasvirlari, qo`llaniladigan materiallar, ularni ragamlashtirish
              tartibi, majmua infratuzilmasi shartli bo`lib, loyihalashtirish,
              qurilish ishlari va foydalgnishda.
            </Text>
            <Text {...css.subtext}>
              TM tog`risidagi ma`lumotlar ko`rsatib o`tilgan mahsulotga bolgan
              talabni aniqlash magsadida chop etilgan. Ushbu buklet ommaviy
              oferta sanalmaydi.
            </Text>
          </Box>
          <Box {...css.image}>
            <Image {...css.images} src={MapIcon} />
          </Box>
        </Flex>
        <Text {...css.subtexts}>
          Loyiha arxitekturasi, obodonlashtirish, fasadlar, interyer tasvirlari,
          qo`llaniladigan materiallar, ularni ragamlashtirish tartibi, majmua
          infratuzilmasi shartli bo`lib, loyihalashtirish, qurilish ishlari va
          foydalgnishda.
        </Text>
        <Text {...css.subtexts}>
          TM tog`risidagi ma`lumotlar ko`rsatib o`tilgan mahsulotga bolgan
          talabni aniqlash magsadida chop etilgan. Ushbu buklet ommaviy oferta
          sanalmaydi.
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  footer: {
    background: "#384D8B",
    padding: {
      base: "24px 0",
      lg: "60px 0",
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
    color: "#FFFFFF",
    marginBottom: {
      base: "16px",
      lg: "26px",
    },
  },
  text: {
    fontSize: {
      base: "12px",
      md: "15px",
    },
    lineHeight: {
      base: "16px",
      md: "20px",
    },
    color: "#FFFFFF",
    marginBottom: "32px",
    fontWeight: "400 !important",
  },
  subname: {
    fontSize: {
      base: "16px",
      lg: "20px",
    },
    lineHeight: "26px",
    fontWeight: "600 !important",
    color: "#FFFFFF",
  },
  number: {
    fontSize: {
      base: "24px",
      lg: "26px",
    },
    lineHeight: {
      base: "32px",
    },
    fontWeight: "600 !important",
    color: "#FFFFFF",
  },
  social: {
    background: "rgba(255, 255, 255, 0.16)",
    borderRadius: "8px",
    padding: "4px 8px",
  },
  subtext: {
    color: "#FFFFFF",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400 !important",
    marginTop: {
      base: "16px",
      lg: "26px",
    },
    width: {
      base: "100%",
      md: "480px",
      xl: "628px",
    },
    display: {
      base: "block",
      sm: "none",
      md: "block",
    },
  },
  image: {
    width: {
      base: "100%",
      sm: "324px",
      lg: "690px",
    },
    height: {
      base: "265px",
      sm: "288px",
      lg: "550px",
    },
  },
  images: {
    height: {
      base: "265px",
      sm: "288px",
      lg: "550px",
    },
    objectFit: "cover",
    borderRadius: "16px",
    width: "100%",
  },
  subtexts: {
    color: "#FFFFFF",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400 !important",
    marginTop: {
      base: "16px",
      lg: "26px",
    },
    width: {
      base: "100%",
      md: "480px",
      xl: "628px",
    },
    display: {
      base: "none",
      sm: "block",
      md: "none",
    },
  },
};
