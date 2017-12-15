import { Text } from "rebass";

export default ({ text, bg, color, align, fontStyle }) => {
  return (
    <Text
      style={{
        fontFamily: "Neuton",
        fontStyle: fontStyle ? fontStyle : "normal"
      }}
      align={align}
      fontSize={[2, 4]}
      bg={bg}
      color={color}
    >
      {text}
    </Text>
  );
};
