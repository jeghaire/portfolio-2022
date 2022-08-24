import Head from 'next/head'
import { About, Projects, Footer, Navbar, Experience } from '../components'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jomavi Eghaire</title>
        <meta name="description" content="The Portfolio website of Eghaire, Praise Jomavi (Mavi, the dev)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}