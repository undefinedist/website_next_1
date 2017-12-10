import Layout from "../layouts/Main";
import { Divider } from "rebass";
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
    <Divider py={0} color="transparent" />
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
  </Layout>
);
