import Layout from '../layouts/Layout.js';
import Link from 'next/link'
import blogs from '../posts/blogs';
import fetch from 'isomorphic-unfetch'

const CONTENT_API = 'https://api.github.com/repos/mwonng/whisper/contents/posts'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={{ pathname: '/post', query: { title: props.id } }}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Blog = (props) => {
  return(
    <Layout title="Blog | Michael Wonng">
      <h1>Blog</h1>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
      <PostLink id="new-post" title="Post from GitHub"/>
      <hr/>
        { props.postsTitle.map( post => 
          <PostLink id={removeExt(post.name)} title={titlized(post.name)} key={post.name}/>
        )}
    </Layout>
  )
}


Blog.getInitialProps = async ({pathname, req}) => {
  const res = await fetch(CONTENT_API)
  const json = await res.json()
  return { postsTitle: json, path: pathname }
}

const titlized = (fileName) => {
  var newstr = fileName.replace(/\..+$/, '').replace(/-|_/, ' ');
  var titlizeString = newstr.charAt(0).toUpperCase() + newstr.slice(1); // capitalize the first letter - as an example.
  return titlizeString
}

const removeExt = (fileName) => {
  var newstr = fileName.replace(/\..+$/, '');
  return newstr
}

export default Blog