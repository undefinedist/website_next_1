import { Box, Flex, Text, Banner } from "rebass";
import BannerResponsive from "./BannerResponsive";
import Prefix from "./Prefix";
import HeroHeading from "./HeroHeading";

export default ({ heroImage, heading }) => {
  return (
    <BannerResponsive backgroundImage={heroImage}>
      <HeroHeading {...heading} />
    </BannerResponsive>
  );
};
