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
          <a className='text' href="mailto:space@studioneida.com" target="_blank">space@studioneida.com</a>
        </p>
      </main>
    </div>
  )
}
