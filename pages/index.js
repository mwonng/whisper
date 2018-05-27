import Layout from '../layouts/Layout.js';
import fetch from 'isomorphic-unfetch'
// import getList from '../test.js';

const Index = (props) => (
  <Layout>
    <h1>Hello World</h1>
    <p>this has: {props.stars}</p>
    <p>path: {props.path} </p>
  </Layout>
)

Index.getInitialProps = async ({pathname, req}) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count, path: pathname  }
}

export default Index