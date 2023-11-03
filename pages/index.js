import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Studio Neida</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          <a href="mailto:studio@studioneida.com" target="_blank">studio@studioneida.com</a>
        </p>
      </main>
    </div>
  )
}
