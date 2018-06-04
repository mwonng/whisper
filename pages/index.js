import Layout from '../src/layouts/Layout.js';
import fetch from 'isomorphic-unfetch'
// import getList from '../test.js';

const Index = (props) => (
  <Layout>
    <h1>Hello World</h1>
    <p>This is static homepage</p>
    <p>You can find it in ./pages </p>
  </Layout>
)


export default Index