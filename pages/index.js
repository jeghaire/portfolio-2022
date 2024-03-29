import Head from 'next/head'
import { Hero, Navbar, Projects, Experience } from '../components'

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
    </>
  )
}