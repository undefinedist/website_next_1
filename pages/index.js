import Layout from "../layouts/Main";
import Hero from "../components/Hero";
import PromotionVideo from "../components/PromotionVideo";
import CallToAction from "../components/CallToAction";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import ReactDisqusComments from "react-disqus-comments";
import data from "../data.json";
import Container from "../components/Container";

export default () => (
  <Layout>
    <Hero {...data.hero} />
    <PromotionVideo py={5} {...data.promotionVideo} />
    <CallToAction py={6} {...data.callToAction} />
    <Feature py={5} {...data.feature} />
    <Gallery py={5} {...data.gallery} />
    <Pricing py={5} {...data.pricing} />
    <Contact py={6} {...data.contact} />
    <Container py={6}>
      <ReactDisqusComments
        shortname="example"
        identifier="something-unique-12345"
        title="Example Thread"
        url="http://www.example.com/example-thread"
        category_id="123456"
      />
    </Container>
  </Layout>
);
