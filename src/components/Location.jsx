import { Box, Heading, Image } from "@chakra-ui/react";
import LocationImage from "../assets/location.png";

function Location() {
  return (
    <Box {...css.location}>
      <Image {...css.image} src={LocationImage} />
      <Box className="container">
        <Heading {...css.title}>Bloklar joylashuvi</Heading>
      </Box>
    </Box>
  );
}

export default Location;

const css = {
  title: {
    color: "white",
    fontSize: {
      base: "24px",
      lg: "32px",
    },
    lineHeight: {
      base: "32px",
      lg: "46px",
    },
    fontWeight: "600 !important",
    paddingTop: "44px",
    position: "absolute",
    top: {
      base: "0px",
      md: "32px",
    },
  },
  location: {
    position: "relative",
    height: {
      base: "70vh",
      md: "100vh",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
