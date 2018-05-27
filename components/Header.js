import {Fixed, Container, Image, Box, Flex, Button} from 'rebass'

export default ({
  pfKakao,
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
    <Fixed z={1000} top={0} right={0} left={0} bg={headerColor}>
      <Container px={0}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box ml={[3, 3, 5, 3]}>
            <a href="/">
              <Image py={logoPy} src={logoSrc} />
            </a>
          </Box>
          <Box right>
            {/*            <Button
              is="a"
              href="/reviews"
              px={[20, 20, 28]}
              py="10px"
              color={reviewBtnTextColor}
              bg={reviewBtnBgColor}
              mr={[3, 3, 5, 3]}>
              {reviewBtnText}
            </Button>
            */}
            <Button
              is="a"
              target="_blank"
              href={pfKakao}
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
