import Head from 'next/head';

export default function Meta(props) {
  const {children, description, pageTitle} = props;
  return (
    <Head>
      <meta charSet="utf-8" />s
      <title>Mudavar{ pageTitle && ` | ${ pageTitle }` }</title>

      {description &&
        <meta name="description" content={description} />
      }
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#03090C" />
      <link rel="apple-touch-icon" href="/favicon/180.png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@700&Mada:wght@400;700&display=swap" rel="stylesheet" />

      {children}
    </Head>
  )
}