import { Text, Image, Container, Box, Flex, Button } from "rebass";

export default () => {
  return (
    <Flex wrap bg="blue" pb={[5]}>
      <Flex
        mt={[5]}
        w={[1, 1 / 2]}
        direction="column"
        justify="center"
        align="center"
      >
        <Image
          my={[1]}
          width="100px"
          src="https://dummyimage.com/300x82/000/fff.png&text=SKYWINGS"
        />
        <Text fontSize={[0]} my={[0]} align="center">
          Skywings Paragliding Interlaken
        </Text>
        <Text fontSize={[0]} my={[0]} align="center">
          mail@skywings.ch
        </Text>
        <Text fontSize={[0]} my={[0]} align="center">
          +41 79 266 82 28
        </Text>
      </Flex>
      <Flex
        mt={[5]}
        w={[1, 1 / 2]}
        direction="column"
        justify="center"
        align="center"
      >
        <Image
          my={[1]}
          width="100px"
          src="https://dummyimage.com/300x82/000/fff.png&text=UNDEFINEIST"
        />
        <Text fontSize={[0]} my={[0]} align="center">
          Skywings Paragliding Interlaken
        </Text>
        <Text fontSize={[0]} my={[0]} align="center">
          mail@skywings.ch
        </Text>
        <Text fontSize={[0]} my={[0]} align="center">
          +41 79 266 82 28
        </Text>
      </Flex>
    </Flex>
  );
};
