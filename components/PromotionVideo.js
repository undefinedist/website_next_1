import { Box, Flex, Button, Text, Embed } from "rebass";
import Container from "./Container";
import Prefix from "./Prefix";

export default ({
  bg,
  prefix,
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
          <Box order={[2, 2, 2, 1]} w={[1, 1, 1, 1 / 2]}>
            <Embed>
              <iframe src={videoUrl} frameBorder="0" allowFullScreen />
            </Embed>
          </Box>
          <Box order={[1, 1, 1, 2]} px={[3, 3, 4]} py={2} w={[1, 1, 1, 1 / 2]}>
            <Flex direction="column">
              <Prefix {...prefix} />
              <Text
                style={{ lineHeight: 1 }}
                color={titleFontColor}
                f={[5, 7]}
                bold="bold"
              >
                {title}
              </Text>
              <Text
                style={{ fontFamily: "Neuton", fontStyle: "italic" }}
                color={subTitleFontColor}
                f={[2, 5]}
                my={[1]}
              >
                {subTitle}
              </Text>
              <Text color={thirdTitleFontColor} f={[1, 3]} my={[1]}>
                {thirdTitle}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
