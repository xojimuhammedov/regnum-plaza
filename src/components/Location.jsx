import { Box, Heading } from "@chakra-ui/react";
import LocationImage from "../assets/location.png";

function Location() {
  return (
    <Box {...css.location}>
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
  },
  location: {
    backgroundImage: `url(${LocationImage})`,
    backgroundSize: "cover",
    height: {
      base: "400px",
      md: "454px",
      lg: "700px",
    },
  },
};
