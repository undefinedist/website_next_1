import React, {Component} from 'react'
import {withState} from 'recompose'
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

export default withState('currentSlide', 'setCurrentSlide', 0)(
  ({slides, currentSlide, setCurrentSlide}) => (
    <Relative>
      <Carousel style={{margin: '0 auto'}} index={currentSlide}>
        {slides.map(slide => (
          <Box>
            <BackgroundImage src={slide.src} />
          </Box>
        ))}
      </Carousel>
      <Absolute bottom={0} right={0}>
        <Button
          bg="transparent"
          m={2}
          onClick={() =>
            setCurrentSlide(prevSlide => {
              if (prevSlide === 0) {
                return slides.length - 1
              }
              return prevSlide - 1
            })
          }
          children="Back"
        />
        <Button
          bg="transparent"
          m={2}
          onClick={() =>
            setCurrentSlide(prevSlide => {
              if (prevSlide === slides.length - 1) {
                return 0
              }
              return prevSlide + 1
            })
          }
          children="Next"
        />
      </Absolute>
    </Relative>
  ),
)
