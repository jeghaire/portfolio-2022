import Head from 'next/head'
import { Header, About, Projects, Skills, Footer, Navbar, Experience } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mavi</title>
        <meta name="description" content="The Portfolio website of Eghaire, Praise Jomavi (Mavi, the dev)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Projects />
      {/* <Skills /> */}
      <Experience />
      <Footer />
    </>
  )
}