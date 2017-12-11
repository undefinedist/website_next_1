import { Fixed, Container, Image, Box, Flex, Button } from "rebass";

export default ({ headerColor, logoSrc, logoPy, btnTextColor, btnBgColor }) => {
  return (
    <Fixed top right left bg={headerColor}>
      <Container px={0}>
        <Flex justify="space-between" align="center">
          <Box ml={[3, 3, 5, 3]}>
            <Image py={logoPy} src={logoSrc} />
          </Box>
          <Box>
            <Button color={btnTextColor} bg={btnBgColor} mr={[3, 3, 5, 3]}>
              예약하기
            </Button>
          </Box>
        </Flex>
      </Container>
    </Fixed>
  );
};
