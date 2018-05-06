import {Text, Image, Container, Box, Flex, Button} from 'rebass'

export default ({bgColor, companies}) => {
  return (
    <Flex wrap bg={bgColor} pb={[5]}>
      {companies.map((company, i) => (
        <Flex
          key={i}
          mt={[5]}
          w={[1, 1 / 2]}
          direction="column"
          justify="center"
          align="center">
          <Image my={[1]} width="100px" src={company.logoUrl} />
          <Text fontSize={[0]} my={[0]} align="center">
            {company.name}
          </Text>
          <Text fontSize={[0]} my={[0]} align="center">
            {company.phone}
          </Text>
          <Text fontSize={[0]} my={[0]} align="center">
            {company.serial}
          </Text>
          <Text fontSize={[0]} my={[0]} align="center">
            {company.email}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}
