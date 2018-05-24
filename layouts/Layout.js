import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default (props) => {
  const { children, title } = props;
  // default title bar
  const pageTitle = title || "Welcome - Michael Wonng"
  return(
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      { children }
      <Footer />
    </div>   
  )
}
