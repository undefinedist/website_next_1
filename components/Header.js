import { Fixed, Image, Container, Box, Flex, Button } from "rebass";

export default () => {
  return (
    <Fixed top right left bg="green">
      <Container>
        <Flex justify="space-between" align="center" bg="green">
          <Box ml={[3, 3, 5, 3]}>
            <Image
              py={["10px"]}
              src="https://dummyimage.com/120x40/000/fff.png&text=UNDEFINED"
            />
          </Box>
          <Box>
            <Button mr={[3, 3, 5, 3]}>예약하기</Button>
          </Box>
        </Flex>
      </Container>
    </Fixed>
  );
};
