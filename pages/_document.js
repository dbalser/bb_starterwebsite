// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="We live by NO Excuses"/>
					<meta name="keywords" content="Online Coaching, Fitness, t-shirts"/>
					<meta name="author" content="Brodie Balesr"/>
					<meta name="google-site-verification" content="hzg-vD_2Lt8NmSR3disYG1mkA3YeowlvDzVQsP5mZSM" />

					<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

					<title>Brodies Port</title>

				</Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
