import { Text } from "rebass";

export default ({ text, bg, color, align }) => {
  return (
    <Text
      style={{ fontFamily: "Neuton", fontStyle: "italic" }}
      align={align}
      fontSize={[2, 4]}
      bg={bg}
      color={color}
    >
      {text}
    </Text>
  );
};
