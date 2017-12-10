import { Container, Box, Flex, Button, Text, Embed } from "rebass";

export default () => {
  return (
    <Container px={0}>
      <Flex py={5} bg="black" wrap align="center">
        <Box bg="blue" w={[1, 1, 1, 1 / 2]}>
          <Embed>
            <iframe
              src="https://www.youtube.com/embed/KQ6zr6kCPj8?ecver=1"
              frameBorder="0"
              allowFullScreen
            />
          </Embed>
        </Box>
        <Box px={[2, 4]} bg="black" w={[1, 1, 1, 1 / 2]}>
          <Flex direction="column">
            <Text f={[5, 7]} color="main" bold="bold" py={[3]} lineHeight={1}>
              Skwydiving Interlaken
            </Text>
            <Text f={[2, 5]} color="#8e8e8e" bold="normal" my={[1]}>
              Let's go
            </Text>
            <Text f={[1, 3]} color="#8e8e8e" bold="normal" my={[1]}>
              Jaebonge@naver.com
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};
