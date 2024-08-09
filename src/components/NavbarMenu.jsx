import {
  Box,
  Flex,
  Link,
  Modal,
  useDisclosure,
  ModalContent,
  Image,
  Text,
} from "@chakra-ui/react";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import TelegramIcon from "../assets/telegram.svg";
import YouTubeIcon from "../assets/youtube.svg";
import DownloadIcon from "../assets/download.svg";
import PhoneIcon from "../assets/phone.svg";

function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Image onClick={onOpen} src={MenuIcon} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className="navbar-modal">
          <Box className="modal-close" onClick={onClose}>
            <Image src={CloseIcon} />
            {/* <ModalCloseButton color={"white"} fontSize={"25px"} /> */}
          </Box>
          <Box>
            <Flex
              justifyContent={"center"}
              align={"center"}
              mt={"88px"}
              flexDirection={"column"}
              gap={"24px"}>
              <Link onClick={onClose} {...css.link} href="#about">
                Loyiha haqida
              </Link>
              <Link onClick={onClose} {...css.link} href="#location">
                Joylashgan o‘rni
              </Link>
              <Link onClick={onClose} {...css.link} href="#products">
                Hovli
              </Link>
              <Link onClick={onClose} {...css.link} href="/">
                Xollar
              </Link>
              <Link onClick={onClose} {...css.link} href="#company">
                Rejalashtirish
              </Link>
              <Link onClick={onClose} {...css.link} href="#contact">
                Bog‘lanish
              </Link>
              <Flex gap={"4px"}>
                <Link
                  target="_blank"
                  {...css.social}
                  href="https://facebook.com/">
                  <Image w={"24px"} h={"24px"} src={FacebookIcon} />
                </Link>
                <Link
                  {...css.social}
                  href="https://www.instagram.com/"
                  target="_blank">
                  <Image w={"24px"} h={"24px"} src={InstagramIcon} />
                </Link>
                <Link
                  target="_blank"
                  {...css.social}
                  href="https://web.telegram.org/k/">
                  <Image w={"24px"} h={"24px"} src={TelegramIcon} />
                </Link>
                <Link
                  target="_blank"
                  {...css.social}
                  href="https://www.youtube.com/">
                  <Image w={"24px"} h={"24px"} src={YouTubeIcon} />
                </Link>
              </Flex>
              <Flex gap={"10px"} align={"center"}>
                <Image w={"26px"} h={"26px"} src={PhoneIcon} />
                <Link {...css.number} href="tel:1066">
                  1066
                </Link>
              </Flex>
              <Flex gap={"10px"} flexDirection={"column"} align={"center"}>
                <Image w={"26px"} h={"26px"} src={DownloadIcon} />
                <Text {...css.download}>
                  Taqdimot <Text {...css.hajm}>5.3 mb yuklab olish</Text>
                </Text>
              </Flex>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default NavbarMenu;

const css = {
  link: {
    color: "white",
    fontSize: {
      base: "14px",
      sm: "16px",
    },
    lineHeight: {
      base: "20px",
      sm: "24px",
    },
  },
  social: {
    background: "#58699E",
    borderRadius: "8px",
    padding: "4px 8px",
  },
  download: {
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "20px",
    fontWeight: "400 !important",
    color: "white",
    textAlign: "center",
  },
  hajm: {
    fontSize: "12px",
    fontStyle: "normal",
    lineHeight: "16px",
    fontWeight: "400",
    color: "#C0C0C0",
  },
  number: {
    color: "white",
    fontSize: {
      base: "18px",
      md: "20px",
    },
    // fontStyle: "normal",
    lineHeight: "20px",
    fontWeight: "600",
  },
};
