import Layout from "../layouts/Main";
import { Divider } from "rebass";
import Hero from "../components/Hero";
import PromotionVideo from "../components/PromotionVideo";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import CallToAction from "../components/CallToAction";
import ReactDisqusComments from "react-disqus-comments";
import data from "../data.json";
import Container from "../components/Container";

export default () => (
  <Layout>
    <Hero {...data.hero} />
    <Divider py={1} color="transparent" />
    <PromotionVideo {...data.promotionVideo} />
    <Divider py={0} color="transparent" />
    <Feature {...data.feature} />
    <Divider py={0} color="transparent" />
    <Gallery {...data.gallery} />
    <Divider py={0} color="transparent" />
    <Pricing {...data.pricing} />
    <Divider py={0} color="transparent" />
    <Contact {...data.contact} />
    <Divider py={0} color="transparent" />
    <CallToAction {...data.callToAction} />
    <Divider py={3} color="transparent" />
    <Container>
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
