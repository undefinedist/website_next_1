import { Text, Image, Container, Box, Flex, Button } from "rebass";

export default ({ images }) => {
  return (
    <Flex wrap>
      {images.map((image, i) => (
        <Box key={i} w={[1 / 2, 1 / 3]}>
          <Image src={image.src} />
        </Box>
      ))}
    </Flex>
  );
};
