import React, {Component} from 'react'
import {
  Absolute,
  Button,
  Relative,
  Box,
  Flex,
  BackgroundImage,
  Image,
  Carousel,
  Heading,
} from 'rebass'

class InstructionCarousel extends Component {
  state = {
    checked: 0,
  }

  render() {
    return (
      <Relative>
        <Carousel style={{margin: '0 auto'}} index={this.state.checked}>
          <Box bg="blue">
            <BackgroundImage src={'/static/insta_1.jpg'} />
          </Box>
          <Box bg="gray">
            <Flex p={6} justify="center" align="center">
              <Heading>Rebass</Heading>
            </Flex>
          </Box>
          <Box bg="red">
            <Flex p={6} justify="center" align="center">
              <Heading>Rebass</Heading>
            </Flex>
          </Box>
        </Carousel>
        <Absolute bottom={0} right={0}>
          <Button
            m={2}
            onClick={() =>
              this.setState(prevState => {
                if (prevState.checked === 0) {
                  return {
                    checked: 2,
                  }
                }
                return {
                  checked: prevState.checked - 1,
                }
              })
            }
            children="Back"
          />
          <Button
            m={2}
            onClick={() =>
              this.setState(prevState => {
                if (prevState.checked === 2) {
                  return {
                    checked: 0,
                  }
                }
                return {
                  checked: prevState.checked + 1,
                }
              })
            }
            children="Next"
          />
        </Absolute>
      </Relative>
    )
  }
}

export default InstructionCarousel
