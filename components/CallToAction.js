import { Text, Image, Container, Box, Flex, Button } from "rebass";

export default ({
  smallTitle,
  smallTitleColor,
  title,
  titleColor,
  btnBgColor,
  btnFontColor,
  btnText
}) => {
  return (
    <Container px={0}>
      <Flex
        bg="green"
        py={[5]}
        direction="column"
        justify="center"
        align="center"
      >
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
  );
};
