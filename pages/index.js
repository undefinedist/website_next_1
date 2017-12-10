import Layout from "../layouts/Main";
import Hero from "../components/Hero";
import PromotionVideo from "../components/PromotionVideo";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import CallToAction from "../components/CallToAction";
import data from "../data.json";

export default () => (
  <Layout>
    <Hero {...data.hero} />
    <PromotionVideo {...data.promotionVideo} />
    <Feature {...data.feature} />
    <Gallery {...data.gallery} />
    <Pricing {...data.pricing} />
    <Contact {...data.contact} />
    <CallToAction {...data.callToAction} />
  </Layout>
);
