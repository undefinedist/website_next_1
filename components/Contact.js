import { Embed, Text, Box, Flex, Button } from "rebass";
import Container from "./Container";
import Prefix from "./Prefix";

export default ({
  py,
  bg,
  prefix,
  title,
  titleColor,
  description,
  details,
  detailTitleFontColor,
  detailDescriptionFontColor,
  map,
  mapDescriptionFontColor
}) => {
  return (
    <Box bg={bg} py={py}>
      <Container>
        <Flex wrap justify="space-around" align="flex-start" align="center">
          <Box w={[1, 1, 1 / 2]}>
            <Flex px={[3, 3, 4]} direction="column">
              <Box>
                <Prefix {...prefix} />
                <Text pb={3} color={titleColor} fontSize={[5]}>
                  {title}
                </Text>
                <Text color="gray" fontSize={[2]}>
                  {description}
                </Text>
              </Box>
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
          <Box pr={[0, 0, 4]} w={[1, 1, 1 / 2]}>
            <Embed style={{ paddingBottom: "110%" }}>
              <iframe src={map.url} frameBorder="0" allowFullScreen />
            </Embed>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
