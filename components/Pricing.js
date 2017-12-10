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

export default () => {
  return (
    <Container px={0}>
      <Box py={[4]} bg="#7b566d">
        <Box pb={[0, 4]}>
          <Text align="center" fontSize={[5]}>
            Benefits work with us
          </Text>
        </Box>
        <Flex wrap bg="blue" justify="space-around">
          <Box py={[3]} bg="white" w={[1, 1, 1 / 3]}>
            <Flex
              style={{
                boxShadow: "0 2px 6px 0 #000"
              }}
              direction="column"
              mx={["10%", "5%"]}
            >
              <Image src="https://mrmrs.github.io/photos/u/001.jpg" />
              <Box bg="white" p={[3]}>
                <Text fontSize={[4]}>Hello world</Text>
                <Text pt={3} fontSize={[2]}>
                  Come prepared, wear loose, casualdkfjlwj fkjlwefj elf jelkjf
                  ekf jek fke jfke
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
          <Box py={[3]} bg="white" w={[1, 1, 1 / 3]}>
            <Flex
              style={{
                boxShadow: "0 2px 6px 0 #000"
              }}
              direction="column"
              mx={["10%", "5%"]}
            >
              <Image src="https://mrmrs.github.io/photos/u/001.jpg" />
              <Box bg="white" p={[3]}>
                <Text fontSize={[4]}>Hello world</Text>
                <Text pt={3} fontSize={[2]}>
                  Come prepared, wear loose, casualdkfjlwj fkjlwefj elf jelkjf
                  ekf jek fke jfke
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
          <Box py={[3]} bg="white" w={[1, 1, 1 / 3]}>
            <Flex
              style={{
                boxShadow: "0 2px 6px 0 #000"
              }}
              direction="column"
              mx={["10%", "5%"]}
            >
              <Image src="https://mrmrs.github.io/photos/u/001.jpg" />
              <Box bg="white" p={[3]}>
                <Text fontSize={[4]}>Hello world</Text>
                <Text pt={3} fontSize={[2]}>
                  Come prepared, wear loose, casualdkfjlwj fkjlwefj elf jelkjf
                  ekf jek fke jfke
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
        </Flex>
      </Box>
    </Container>
  );
};
