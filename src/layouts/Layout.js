import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  font-family: 'Lato', sans-serif;
  max-width: 1000px;
  margin: auto;
`

export default (props) => {
  const { children, title } = props;
  // default title bar
  const pageTitle = title || "Welcome - Michael Wonng"
  return(
    <LayoutWrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      { children }
      <Footer />
    </LayoutWrapper>   
  )
}
