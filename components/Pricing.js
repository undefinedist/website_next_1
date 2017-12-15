import { Avatar, Image, Box, Flex, Button, Text, Banner } from "rebass";
import Container from "./Container";
import Prefix from "./Prefix";
import ElaboratedHeading from "./ElaboratedHeading";

export default ({ heading, bgColor, prices }) => {
  return (
    <Box py={[4]} bg={bgColor}>
      <Container>
        <ElaboratedHeading {...heading} />
        <Flex wrap justify="space-around">
          {prices.items.map((price, i) => (
            <Box key={i} py={[3]} w={[1, 1, 1 / 2]}>
              <Flex
                style={{
                  boxShadow: "0 2px 6px 0 #000",
                  borderRadius: "4px"
                }}
                bg={bgColor}
                direction="column"
                mx={["10%", "5%"]}
              >
                <Image
                  style={{ borderRadius: "4px 4px 0 0" }}
                  src={price.src}
                />
                <Box
                  style={{ borderRadius: "0 0 4px 4px" }}
                  bg={prices.cardColor}
                  p={[3]}
                >
                  <Text bold="bold" color={prices.titleColor} fontSize={[4]}>
                    {price.title}
                  </Text>
                  <Text color={prices.descriptionColor} pt={3} fontSize={[2]}>
                    {price.description}
                  </Text>
                  <Flex wrap pt={4} justify="space-between" align="center">
                    <Flex align="center">
                      {price.icons.map((icon, i) => (
                        <Flex direction="row" align="center" pr={2}>
                          <Box>
                            <Image
                              width="32px"
                              src={`/static/${icon}.svg`}
                              mr={2}
                            />
                          </Box>
                          <Box>
                            <Text fontSize={0}>{icon.toUpperCase()}</Text>
                          </Box>
                        </Flex>
                      ))}
                    </Flex>
                    <Text pl="6px" fontSize={[4]} align="center">
                      {price.price}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
