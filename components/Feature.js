import { Text, Image, Box, Flex, Button } from "rebass";
import Container from "./Container";
import Prefix from "./Prefix";

export default ({ bgColor, py, title, titleColor, prefix, features }) => {
  return (
    <Box bg={bgColor} py={py}>
      <Container>
        <Box pb={[0, 4]}>
          <Prefix {...prefix} />
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
      </Container>
    </Box>
  );
};
