import Layout from '../layouts/Layout.js';
import Link from 'next/link'
import blogs from '../posts/blogs';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={{ pathname: '/post', query: { title: props.id } }}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () =>
  <Layout>
    <h1>Blog</h1>
    <PostLink id="hello-nextjs" title="Hello Next.js"/>
    <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
  </Layout>