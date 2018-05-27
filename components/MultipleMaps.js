import {Embed, Avatar, Image, Box, Flex, Button, Text, Banner} from 'rebass'
import Container from './Container'
import Prefix from './Prefix'
import ElaboratedHeading from './ElaboratedHeading'
import noDataNoRender from './HOC/noDataNoRender'

export default noDataNoRender(({heading, bgColor, maps}) => {
  return (
    <Box py={[4]} bg={bgColor}>
      <Container>
        <ElaboratedHeading {...heading} />
        <Flex wrap justifyContent="space-around">
          {maps.items.map((map, i) => (
            <Box key={i} py={[3]} w={[1, 1, 1 / 3]}>
              <Flex bg={bgColor} flexDirection="column" mx={['10%', '5%']}>
                <Embed style={{paddingBottom: '110%'}}>
                  <iframe src={map.url} frameBorder="0" allowFullScreen />
                </Embed>
                <Box bg={maps.cardColor} py={[3]}>
                  <Text
                    fontWeight="bold"
                    color={maps.titleColor}
                    fontSize={[4]}>
                    {map.title}
                  </Text>
                  <Text
                    style={{wordBreak: 'keep-all'}}
                    color={maps.descriptionColor}
                    pt={3}
                    fontSize={[2]}>
                    {map.description}
                  </Text>
                  <Flex
                    flexDirection="row"
                    justifyContent="space-around"
                    pt={3}>
                    <Box pb={1} width={3 / 10}>
                      <Text fontWeight="bold" fontSize={0} children="가격:" />
                    </Box>
                    <Box width={7 / 10}>
                      <Text fontSize={0}>{map.price}</Text>
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
                      <Text fontSize={0}>{map.icons}</Text>
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
})
