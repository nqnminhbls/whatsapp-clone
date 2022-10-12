import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from './../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
    </div>
  )
}

export default Home
