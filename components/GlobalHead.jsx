import Head from 'next/head';

export default function GlobalHead(props) {
  return (
    <Head>
      <meta charSet="utf-8" />s
      <title>Mudavar{ props.pageTitle && ` | ${ props.pageTitle }` }</title>

      {props.description &&
        <meta name="description" content={props.description} />
      }
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#03090C" />
      <link rel="apple-touch-icon" href="/favicon/180.png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@700&Mada:wght@400;700&display=swap" rel="stylesheet" />

      {props.children}
    </Head>
  )
}