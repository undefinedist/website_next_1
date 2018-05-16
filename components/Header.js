import {Fixed, Container, Image, Box, Flex, Button} from 'rebass'

export default ({
  headerColor,
  logoSrc,
  logoPy,
  btnText,
  btnTextColor,
  btnBgColor,
  reviewBtnText,
  reviewBtnBgColor,
  reviewBtnTextColor,
}) => {
  return (
    <Fixed z={1000} top right left bg={headerColor}>
      <Container px={0}>
        <Flex justify="space-between" align="center">
          <Box ml={[3, 3, 5, 3]}>
            <Image py={logoPy} src={logoSrc} />
          </Box>
          <Box>
            <Button
              is="a"
              href="/reviews"
              px={[20, 20, 28]}
              py="10px"
              color={reviewBtnTextColor}
              bg={reviewBtnBgColor}
              mr={[3, 3, 5, 3]}>
              {reviewBtnText}
            </Button>
            <Button
              is="a"
              target="_blank"
              href="http://pf.kakao.com/_xeisixd"
              px={[20, 20, 28]}
              py="10px"
              color={btnTextColor}
              bg={btnBgColor}
              mr={[3, 3, 5, 3]}>
              {btnText}
            </Button>
          </Box>
        </Flex>
      </Container>
    </Fixed>
  )
}
