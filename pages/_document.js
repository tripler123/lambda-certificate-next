import Document, { Html, Head, Main, NextScript, H } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument