import { Box, Flex, Button, Text, Banner } from "rebass";

export default () => {
  return (
    <Banner backgroundImage="https://mrmrs.github.io/photos/u/001.jpg">
      <Flex style={{ height: "90vh" }} justify="center" align="center">
        <Box>
          <Text align="center" fontSize={[5, 8, 8, 8]} bg="white" color="blue">
            Skydiving Interlaken
          </Text>
          <Text align="center" fontSize={[2, 5, 5, 5]} bg="white" color="blue">
            Let's fly
          </Text>
        </Box>
      </Flex>
    </Banner>
  );
};
