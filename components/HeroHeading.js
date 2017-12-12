import { Box, Flex, Text, Banner } from "rebass";
import Prefix from "./Prefix";

export default ({
  prefix,
  prefixColor,
  primary,
  primaryColor,
  surfix,
  surfixColor,
  surfixBgColor
}) => {
  return (
    <Box pt={4}>
      <Prefix color={prefixColor} text={prefix} align="center" />
      <Text
        align="center"
        fontSize={[5, 8, 8, 8]}
        bold="bold"
        color={primaryColor}
      >
        {primary}
      </Text>
      <Text
        align="center"
        style={{ fontFamily: "Neuton" }}
        fontSize={[2, 5, 5, 5]}
        bg={surfixBgColor}
        color={surfixColor}
      >
        {surfix}
      </Text>
    </Box>
  );
};
