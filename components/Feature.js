import { Text, Image, Container, Box, Flex, Button } from "rebass";

export default ({ bgColor, title, titleColor, features }) => {
  return (
    <Container px={0}>
      <Box py={[4]} bg={bgColor}>
        <Box pb={[0, 4]}>
          <Text color={titleColor} align="center" fontSize={[5]}>
            {title}
          </Text>
        </Box>
        <Flex wrap justify="space-around">
          {features.items.map((feature, i) => (
            <Box w={[1, 1 / 4]} key={i}>
              <Flex direction="column" py={[3]} px={["10%", "5%"]}>
                <Image
                  style={{ width: "100%" }}
                  px={[3, 4, 4, 5]}
                  py={[3, 3, 3, 3]}
                  src={feature.src}
                />
                <Text color={features.titleColor} fontSize={[4]} align="center">
                  {feature.title}
                </Text>
                <Text
                  color={features.descriptionColor}
                  fontSize={[2]}
                  align="center"
                >
                  {feature.description}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};
