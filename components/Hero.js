import { Box, Flex, Text, Banner } from "rebass";

export default ({
  heroImage,
  titleBgColor,
  titleFontColor,
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
            Skydiving Interlaken
          </Text>
          <Text
            align="center"
            fontSize={[2, 5, 5, 5]}
            bg={subTitleBgColor}
            color={subTitleFontColor}
          >
            Let's fly
          </Text>
        </Box>
      </Flex>
    </Banner>
  );
};
