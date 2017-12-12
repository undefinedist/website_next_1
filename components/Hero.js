import { Box, Flex, Text, Banner } from "rebass";
import BannerResponsive from "./BannerResponsive";

export default ({
  heroImage,
  title,
  titleBgColor,
  titleFontColor,
  subTitle,
  subTitleBgColor,
  subTitleFontColor
}) => {
  return (
    <BannerResponsive backgroundImage={heroImage}>
      <Box pt={4}>
        <Text
          align="center"
          fontSize={[5, 8, 8, 8]}
          bg={titleBgColor}
          color={titleFontColor}
        >
          {title}
        </Text>
        <Text
          align="center"
          fontSize={[2, 5, 5, 5]}
          bg={subTitleBgColor}
          color={subTitleFontColor}
        >
          {subTitle}
        </Text>
      </Box>
    </BannerResponsive>
  );
};
