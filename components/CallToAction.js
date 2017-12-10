import { Text, Image, Container, Box, Flex, Button } from "rebass";

export default () => {
  return (
    <Container px={0}>
      <Flex
        bg="green"
        py={[5]}
        direction="column"
        justify="center"
        align="center"
      >
        <Text color="white" align="center" fontSize={[2]}>
          HOT SALE
        </Text>
        <Text pt={[2]} pb={[1]} color="white" align="center" fontSize={[4, 6]}>
          Don't Miss This Deal
        </Text>
        <Button bg="white" color="green" fontSize={[0]} py={[3]} px={[5]}>
          BUTTON
        </Button>
      </Flex>
    </Container>
  );
};
