import { Box, Flex, Text, Banner } from "rebass";

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
    <Banner backgroundImage={heroImage}>
      <Flex style={{ height: "90vh" }} justify="center" align="center">
        <Box>
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
      </Flex>
    </Banner>
  );
};
