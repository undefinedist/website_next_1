import { Embed, Text, Container, Box, Flex, Button } from "rebass";

export default ({
  title,
  description,
  details,
  detailTitleFontColor,
  detailDescriptionFontColor,
  map,
  mapDescriptionFontColor
}) => {
  return (
    <Container px={0}>
      <Flex pb={[3, 5]} direction="column" align="center">
        <Text fontSize={[6]}>{title}</Text>
        <Text align="center" color="gray" width={[4 / 5]} fontSize={[2]}>
          {description}
        </Text>
      </Flex>
      <Flex wrap justify="space-around" align="flex-start">
        <Box w={[1, 1 / 2]}>
          <Flex pl={[4]} direction="column">
            {details.map((detail, i) => (
              <Box key={i} my={[3]}>
                <Text color={detailTitleFontColor} fontSize={[0]}>
                  {detail.title}
                </Text>
                <Text color={detailDescriptionFontColor} fontSize={[2]}>
                  {detail.description}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box pr={[0, 4]} w={[1, 1 / 2]}>
          <Embed>
            <iframe src={map.url} frameBorder="0" allowFullScreen />
          </Embed>
          <Text
            color={map.mapDescriptionFontColor}
            px={[3, 0]}
            pt={[3]}
            fontSize={[3]}
          >
            {map.description}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};
