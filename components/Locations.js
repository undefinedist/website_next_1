import {Avatar, Image, Box, Flex, Button, Text, Banner} from 'rebass'
import Container from './Container'
import Prefix from './Prefix'
import ElaboratedHeading from './ElaboratedHeading'
import noDataNoRender from './HOC/noDataNoRender'

export default noDataNoRender(({heading, bgColor, locs}) => {
  return (
    <Box py={[4]} bg={bgColor}>
      <Container>
        <ElaboratedHeading {...heading} />
        <Flex wrap justifyContent="space-around">
          {locs.items.map((loc, i) => (
            <Box key={i} py={[3]} w={[1, 1, 1 / 3]}>
              <Flex bg={bgColor} flexDirection="column" mx={['10%', '5%']}>
                <Image src={loc.src} />
                <Box bg={locs.cardColor} py={[3]}>
                  <Text fontWeight="bold" color={loc.titleColor} fontSize={[4]}>
                    {loc.title}
                  </Text>
                  <Text
                    style={{wordBreak: 'keep-all'}}
                    color={locs.descriptionColor}
                    pt={3}
                    fontSize={[2]}>
                    {loc.description}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  )
})
