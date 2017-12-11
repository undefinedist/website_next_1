import { Box, Flex, Button, Text, Embed } from "rebass";
import Container from "./Container";

export default ({
  bg,
  videoUrl,
  title,
  subTitle,
  thirdTitle,
  titleFontColor,
  subTitleFontColor,
  thirdTitleFontColor,
  py
}) => {
  return (
    <Box bg={bg} py={py}>
      <Container>
        <Flex wrap align="center">
          <Box w={[1, 1, 1, 1 / 2]}>
            <Embed>
              <iframe src={videoUrl} frameBorder="0" allowFullScreen />
            </Embed>
          </Box>
          <Box px={[2, 4]} w={[1, 1, 1, 1 / 2]}>
            <Flex direction="column">
              <Text
                color={titleFontColor}
                f={[5, 7]}
                bold="bold"
                py={[3]}
                lineHeight={1}
              >
                {title}
              </Text>
              <Text color={subTitleFontColor} f={[2, 5]} bold="normal" my={[1]}>
                {subTitle}
              </Text>
              <Text
                color={thirdTitleFontColor}
                f={[1, 3]}
                bold="normal"
                my={[1]}
              >
                {thirdTitle}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
