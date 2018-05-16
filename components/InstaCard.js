import {Flex, Box, Text} from 'rebass'
import styled from 'styled-components'
import {Image} from 'cloudinary-react'

const Container = styled(Box)`
  max-width: 40em;
`
Container.defaultProps = {
  mx: 'auto',
}

export default ({imgUrls, text, date}) => (
  <Container py={5}>
    <Flex flexDirection="column">
      <Box py={[3]} bg="white" w={[1, 1]}>
        <Flex
          style={{
            boxShadow: '0 2px 6px 0 #000',
          }}
          mx={['10%', '5%']}>
          <Box bg="white" p={[3]}>
            <Text fontSize={[4]}>{date}</Text>
            <Text pt={3} fontSize={[2]}>
              {text}
            </Text>
            <Box>
              {imgUrls.map(url => (
                <Image cloudName="undefinedist" publicId="1" crop="scale" />
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Container>
)
