import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

export default ({ children, title = 'This is the default title' }) =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    { children }
    <Footer />
  </div>