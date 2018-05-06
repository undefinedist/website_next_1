import {Text, Image, Box, Flex, Button} from 'rebass'

export default ({py, images}) => (
  <Flex py={py} wrap>
    {images.map((image, i) => (
      <Box key={i} w={[1 / 2, 1 / 3]}>
        <Image src={image.src} />
      </Box>
    ))}
  </Flex>
)
