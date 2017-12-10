import Layout from "../layouts/Main";
import Hero from "../components/Hero";
import PromotionVideo from "../components/PromotionVideo";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import CallToAction from "../components/CallToAction";

export default () => (
  <Layout>
    <Hero />
    <PromotionVideo />
    <Feature />
    <Gallery />
    <Pricing />
    <Contact />
    <CallToAction />
  </Layout>
);
