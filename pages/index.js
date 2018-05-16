import Layout from '../layouts/Main'
import Hero from '../components/Hero'
import PromotionVideo from '../components/PromotionVideo'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import ReactDisqusComments from 'react-disqus-comments'
import data from '../data.json'
import Container from '../components/Container'
import CallToAction from '../components/CallToAction'

export default () => (
  <Layout>
    <Hero {...data.hero} />
    <PromotionVideo py={5} {...data.promotionVideo} />
    <Gallery py={5} {...data.gallery} />
    <Feature py={5} {...data.feature} />
    <Contact py={5} {...data.contact} />
    <Pricing py={5} {...data.pricing} />
    <Container py={6}>
      <ReactDisqusComments
        shortname="kantorskydive"
        identifier="kantorskydive-main"
        title="reviews"
      />
    </Container>
    <CallToAction py={5} {...data.callToAction} />
  </Layout>
)
