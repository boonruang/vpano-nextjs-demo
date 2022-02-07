import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../assets/css/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next.JS</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <div className="index-content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
