import { Text, Box } from "rebass";
import Container from "./Container";
import Prefix from "./Prefix";

export default ({
  prefixColor,
  surfixColor,
  primaryColor,
  prefix,
  primary,
  surfix,
  align
}) => {
  return (
    <Box px={[3, 3, 4]} pb={[0, 4]}>
      <Prefix color={prefixColor} text={prefix} align={align} />
      <Text color={primaryColor} mb="-8px" align={align} fontSize={[5]}>
        {primary}
      </Text>
      <Prefix color={surfixColor} text={surfix} align={align} />
    </Box>
  );
};
