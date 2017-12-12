import { Text, Box } from "rebass";
import Container from "./Container";
import Prefix from "./Prefix";

export default ({ mainColor, subColor, prefix, primary, surfix, align }) => {
  return (
    <Box px={[3, 3, 4]} pb={[0, 4]}>
      <Prefix color={subColor} text={prefix} align={align} />
      <Text color={mainColor} mb="-8px" align={align} fontSize={[5]}>
        {primary}
      </Text>
      <Prefix color={subColor} text={surfix} align={align} />
    </Box>
  );
};
