import { Text, Image, Container, Box, Flex, Button } from "rebass";

export default () => {
  return (
    <Container px={0}>
      <Box py={[4]} bg="#7b566d">
        <Box pb={[0, 4]}>
          <Text align="center" fontSize={[5]}>
            Benefits work with us
          </Text>
        </Box>
        <Flex wrap bg="blue" justify="space-around">
          <Box bg="blue" w={[1, 1 / 4]}>
            <Flex direction="column" py={[3]} px={["10%", "5%"]}>
              <Image
                style={{ width: "100%" }}
                px={[3, 4, 4, 5]}
                py={[3, 3, 3, 3]}
                src="http://svgshare.com/i/4Cy.svg"
              />
              <Text fontSize={[4]} align="center">
                Hello world
              </Text>
              <Text fontSize={[2]} align="center">
                Come prepared, wear loose, casual and comfortable clothing with
                sneakers as footwear, remember it gets cold up there. We will
                provide your jump suit to put on over your clothes and gloves if
                its chilly.
              </Text>
            </Flex>
          </Box>
          <Box bg="blue" w={[1, 1 / 4]}>
            <Flex direction="column" py={[3]} px={["10%", "5%"]}>
              <Image
                style={{ width: "100%" }}
                px={[3, 4, 4, 5]}
                py={[3, 3, 3, 3]}
                src="http://svgshare.com/i/4Cy.svg"
              />
              <Text fontSize={[4]} align="center">
                Hello world
              </Text>
              <Text fontSize={[2]} align="center">
                Come prepared, wear loose, casual and comfortable clothing with
                sneakers as footwear, remember it gets cold up there. We will
                provide your jump suit to put on over your clothes and gloves if
                its chilly.
              </Text>
            </Flex>
          </Box>
          <Box bg="blue" w={[1, 1 / 4]}>
            <Flex direction="column" py={[3]} px={["10%", "5%"]}>
              <Image
                style={{ width: "100%" }}
                px={[3, 4, 4, 5]}
                py={[3, 3, 3, 3]}
                src="http://svgshare.com/i/4Cy.svg"
              />
              <Text fontSize={[4]} align="center">
                Hello world
              </Text>
              <Text fontSize={[2]} align="center">
                Come prepared, wear loose, casual and comfortable clothing with
                sneakers as footwear, remember it gets cold up there. We will
                provide your jump suit to put on over your clothes and gloves if
                its chilly.
              </Text>
            </Flex>
          </Box>
          <Box bg="blue" w={[1, 1 / 4]}>
            <Flex direction="column" py={[3]} px={["10%", "5%"]}>
              <Image
                style={{ width: "100%" }}
                px={[3, 4, 4, 5]}
                py={[3, 3, 3, 3]}
                src="http://svgshare.com/i/4Cy.svg"
              />
              <Text fontSize={[4]} align="center">
                Hello world
              </Text>
              <Text fontSize={[2]} align="center">
                Come prepared, wear loose, casual and comfortable clothing with
                sneakers as footwear, remember it gets cold up there. We will
                provide your jump suit to put on over your clothes and gloves if
                its chilly.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};
