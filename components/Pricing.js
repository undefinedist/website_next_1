import {
  Avatar,
  Image,
  Container,
  Box,
  Flex,
  Button,
  Text,
  Banner
} from "rebass";

export default ({ title, titleColor, bgColor, prices }) => {
  return (
    <Container px={0}>
      <Box py={[4]} bg={bgColor}>
        <Box pb={[0, 4]}>
          <Text color={titleColor} align="center" fontSize={[5]}>
            {title}
          </Text>
        </Box>
        <Flex wrap justify="space-around">
          {prices.items.map((price, i) => (
            <Box key={i} py={[3]} bg="white" w={[1, 1, 1 / 3]}>
              <Flex
                style={{
                  boxShadow: "0 2px 6px 0 #000"
                }}
                direction="column"
                mx={["10%", "5%"]}
              >
                <Image src={price.src} />
                <Box bg="white" p={[3]}>
                  <Text color={prices.titleColor} fontSize={[4]}>
                    {price.title}
                  </Text>
                  <Text color={prices.descriptionColor} pt={3} fontSize={[2]}>
                    {price.description}
                  </Text>
                  <Flex wrap pt={4} justify="space-between" align="center">
                    <Flex align="center">
                      <Avatar
                        size="32px"
                        src="https://s3-us-west-1.amazonaws.com/c8r-demo/jxnblk.jpg"
                      />
                      <Text fontSize={0}>Diving</Text>
                      <Avatar
                        size="32px"
                        src="https://s3-us-west-1.amazonaws.com/c8r-demo/jxnblk.jpg"
                      />
                      <Text fontSize={0}>Picture</Text>
                      <Avatar
                        size="32px"
                        src="https://s3-us-west-1.amazonaws.com/c8r-demo/jxnblk.jpg"
                      />
                      <Text fontSize={0}>Videio</Text>
                    </Flex>
                    <Text pl="6px" fontSize={[4]} align="center">
                      $3000
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};
