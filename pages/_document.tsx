import { Html, Head, Main, NextScript } from 'next/document';
import config from '@/config';

export default function Document() {
  return (
    <Html lang='en' data-theme={config.colors.theme}>
      <Head>
        <meta name='theme-color' content={config.colors.main} />
        <meta name='msapplication-TileColor' content={config.colors.main} />
        
        <script
          defer
          data-domain={config.domainName}
          src='https://plausible.io/js/script.js'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
