import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Testing Next on Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          title="Welcome to my app!"
          paragraph="This is just a small paragraph, the glass you gave me is not here"
        />
      </main>

      <Footer />
    </div>
  )
}
