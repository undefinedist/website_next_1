import { Text, Image, Box, Flex, Button } from "rebass";
import Container from "./Container";

export default ({
  py,
  bgColor,
  smallTitle,
  smallTitleColor,
  title,
  titleColor,
  btnBgColor,
  btnFontColor,
  btnText
}) => {
  return (
    <Box py={py} bg={bgColor}>
      <Container>
        <Flex direction="column" justify="center" align="center">
          <Text color={smallTitleColor} align="center" fontSize={[2]}>
            {smallTitle}
          </Text>
          <Text
            pt={[2]}
            pb={[1]}
            color={titleColor}
            align="center"
            fontSize={[4, 6]}
          >
            {title}
          </Text>
          <Button
            bg={btnBgColor}
            color={btnFontColor}
            fontSize={[0]}
            py={[3]}
            px={[5]}
          >
            {btnText}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
