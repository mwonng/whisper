import Layout from '../layouts/Layout.js';
import fetch from 'isomorphic-unfetch'

const About = (props) =>
  <Layout>
    <h1>About Page</h1>
    <p>path: {props.path}</p>
  </Layout>


About.getInitialProps = async ({pathname, req}) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count, path: pathname }
}

export default About