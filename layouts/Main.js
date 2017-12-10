import React from "react";
import Head from "next/head";
import { Provider, Heading, Button } from "rebass";
import Color from "color";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Main extends React.Component {
  state = {
    headerBg: "transparent"
  };

  handleBgColor = () => {
    if ("blue" !== "transparent") {
      const windowHeight = window.innerHeight - 80;
      // can't use theme color system
      let headerBg = Color("blue")
        .alpha(window.scrollY / windowHeight)
        .string();
      this.setState({ headerBg: headerBg });
    }
  };

  componentWillMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.handleBgColor);
    }
  }
  render() {
    const children = this.props.children;
    const title = this.props.title;
    return (
      <Provider
        theme={{
          font: '"Avenir Next", Helvetica, sans-serif',
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
          spaces: [4, 8, 16, 32, 64, 128, 256],
          breakpoints: ["640px", "840px", "1024px"],
          colors: {
            black: "#000",
            blue: "#07c",
            main: "#ea9a4c"
          }
        }}
      >
        <Head>
          <title>{title}</title>
        </Head>
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <Footer />
      </Provider>
    );
  }
}
