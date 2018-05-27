import Layout from '../layouts/Main'
import Hero from '../components/Hero'
import PromotionVideo from '../components/PromotionVideo'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import ReactDisqusComments from 'react-disqus-comments'
import data from '../data.json'
import CallToAction from '../components/CallToAction'
import InstructionCarousel from '../components/InstructionCarousel'
import {Box} from 'rebass'
import Container from '../components/Container'
import TwoColumnCarousel from '../components/TwoColumnCarousel'
import MultipleMaps from '../components/MultipleMaps'
import Locations from '../components/Locations'

export default () => (
  <Layout>
    <Hero {...data.hero} />
    <PromotionVideo py={5} {...data.promotionVideo} />
    <Gallery py={5} {...data.gallery} />
    <Feature py={5} {...data.feature} />
    <Contact py={5} {...data.contact} />
    <Pricing py={5} {...data.pricing} />
    <Locations py={5} {...data.locations} />
    <MultipleMaps py={5} {...data.multipleMaps} />
    <TwoColumnCarousel py={5} {...data.twoColumnCarousel} />
    <Container>
      <Box py={5} mx={['3.3%', '1.3%']}>
        <ReactDisqusComments
          shortname={data.disqus.shortname}
          identifier={data.disqus.identifier}
          title={data.disqus.title}
        />
      </Box>
    </Container>
    <CallToAction py={5} {...data.callToAction} />
  </Layout>
)
