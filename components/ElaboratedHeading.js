import {Text, Box} from 'rebass'
import Container from './Container'
import Prefix from './Prefix'

export default ({
  prefixColor,
  surfixColor,
  primaryColor,
  prefix,
  primary,
  surfix,
  type,
}) => {
  return (
    <Box px={[3, 3, 4]} pb={[0, 4]}>
      <Prefix
        fontStyle="italic"
        color={prefixColor}
        text={prefix}
        align={type}
      />
      <Text
        fontWeight="bold"
        color={primaryColor}
        mb={type === 'left' ? '-8px' : '0px'}
        align={type}
        fontSize={[5]}>
        {primary.toUpperCase()}
      </Text>
      <Prefix
        fontStyle={type === 'left' ? 'italic' : 'normal'}
        color={surfixColor}
        text={surfix}
        align={type}
      />
    </Box>
  )
}
