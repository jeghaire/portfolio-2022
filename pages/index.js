import Head from 'next/head'
import { Header, About, Projects, Skills, Footer, Navbar } from '../components'
// import { configuredSanityClient } from '../sanity/client'

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
      <Skills />
      <Footer />
    </>
  )
}

// export const getServerSideProps = async function () {
//   const query = '*[_type=="abouts"]{_id, description, title, imgUrl}'
//   const abouts = await configuredSanityClient.fetch(query)
//   return { props: { abouts } }
// }