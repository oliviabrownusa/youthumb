import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Add your custom text here */}
          <p>
            Download YouTube and Vimeo thumbnail images of all quality for free. This application lets you download thumbnails of all quality. Just paste the URL of the thumbnail video in the input below and click "Get Thumbnail Image."
          </p>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
