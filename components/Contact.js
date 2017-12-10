import { Embed, Text, Container, Box, Flex, Button } from "rebass";

export default () => {
  return (
    <Container px={0}>
      <Flex pb={[3, 5]} direction="column" align="center">
        <Text fontSize={[6]}>Contacts</Text>
        <Text align="center" color="gray" width={[4 / 5]} fontSize={[2]}>
          At half-past eight the door opened, the policeman appeared, and,
          requesting them to follow him, led the way to an adjoining hall. It
          was evidently a court-room.
        </Text>
      </Flex>
      <Flex wrap justify="space-around" align="flex-start">
        <Box w={[1, 1 / 2]}>
          <Flex pl={[4]} direction="column">
            <Box my={[3]}>
              <Text color="green" fontSize={[0]}>
                ADDRESS
              </Text>
              <Text fontSize={[2]}>this is address hehelhelhe </Text>
            </Box>
            <Box my={[3]}>
              <Text color="green" fontSize={[0]}>
                PHONE NUMBER
              </Text>
              <Text fontSize={[2]}>this is address hehelhelhe </Text>
            </Box>
            <Box my={[3]}>
              <Text color="green" fontSize={[0]}>
                DDONG
              </Text>
              <Text fontSize={[2]}>this is address hehelhelhe </Text>
            </Box>
          </Flex>
        </Box>
        <Box pr={[0, 4]} w={[1, 1 / 2]}>
          <Embed>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.313896524734!2d127.03006105076032!3d37.52409723421628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca38e866bff59%3A0xd35080ce6de5bd31!2s627-1+Sinsa-dong%2C+Gangnam-gu%2C+Seoul!5e0!3m2!1sen!2skr!4v1512655476351"
              frameBorder="0"
              allowFullScreen
            />
          </Embed>
          <Text px={[3, 0]} pt={[3]} fontSize={[3]}>
            Hello world with all the mcdonald and startbuck com eon
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};
