import {Avatar, Image, Box, Flex, Button, Text, Banner} from 'rebass'
import Container from './Container'
import Prefix from './Prefix'
import ElaboratedHeading from './ElaboratedHeading'

export default ({heading, bgColor, prices}) => {
  return (
    <Box py={[4]} bg={bgColor}>
      <Container>
        <ElaboratedHeading {...heading} />
        <Flex wrap justifyContent="space-around">
          {prices.items.map((price, i) => (
            <Box key={i} py={[3]} w={[1, 1, 1 / 3]}>
              <Flex bg={bgColor} flexDirection="column" mx={['10%', '5%']}>
                <Image src={price.src} />
                <Box bg={prices.cardColor} py={[3]}>
                  <Text
                    fontWeight="bold"
                    color={prices.titleColor}
                    fontSize={[4]}>
                    {price.title}
                  </Text>
                  <Text
                    style={{wordBreak: 'keep-all'}}
                    color={prices.descriptionColor}
                    pt={3}
                    fontSize={[2]}>
                    {price.description}
                  </Text>
                  <Flex
                    flexDirection="row"
                    justifyContent="space-around"
                    py={2}>
                    <Box width={3 / 10}>
                      <Text fontWeight="bold" fontSize={0} children="가격:" />
                    </Box>
                    <Box width={7 / 10}>
                      <Text fontSize={0}>{price.price}</Text>
                    </Box>
                  </Flex>
                  <Flex wrap justifyContent="space-between" alignItems="center">
                    <Box width={3 / 10}>
                      <Text
                        fontWeight="bold"
                        fontSize={0}
                        children="포함사항:"
                      />
                    </Box>
                    <Box width={7 / 10}>
                      <Text fontSize={0}>{price.icons}</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
