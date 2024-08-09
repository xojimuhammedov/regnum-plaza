import {
  Box,
  Flex,
  Link,
  Modal,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import TelegramIcon from "../assets/telegram.svg";
import YouTubeIcon from "../assets/youtube.svg";

function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Image onClick={onOpen} src={MenuIcon} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className="navbar-modal">
          <ModalCloseButton color={"white"} fontSize={"25px"} />
          <Box>
            <Flex
              justifyContent={"center"}
              align={"center"}
              mt={"88px"}
              flexDirection={"column"}
              gap={"24px"}>
              <Link {...css.link} href="/">
                Loyiha haqida
              </Link>
              <Link {...css.link} href="/">
                Joylashgan o‘rni
              </Link>
              <Link {...css.link} href="/">
                Hovli
              </Link>
              <Link {...css.link} href="/">
                Xollar
              </Link>
              <Link {...css.link} href="/">
                Rejalashtirish
              </Link>
              <Link {...css.link} href="/">
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
};
