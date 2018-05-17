import React from 'react'
import Head from 'next/head'
import {Provider, Heading, Button} from 'rebass'
import Color from 'color'
import Header from '../components/Header'
import Footer from '../components/Footer'
import theme from '../theme.json'
import data from '../data.json'

export default class Main extends React.Component {
  state = {
    headerBg: 'transparent',
  }

  handleBgColor = () => {
    if ('blue' !== 'transparent') {
      const windowHeight = window.innerHeight - 80
      // can't use theme color system
      let headerBg = Color('blue')
        .alpha(window.scrollY / windowHeight)
        .string()
      this.setState({headerBg: headerBg})
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleBgColor)
    }
  }
  render() {
    const children = this.props.children
    const title = data.metaData.title
    return (
      <Provider theme={theme}>
        <Head>
          <title>{title}</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <header>
          <Header {...data.header} />
        </header>

        <main>{children}</main>

        <Footer {...data.footer} />
      </Provider>
    )
  }
}
