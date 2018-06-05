import Layout from '../src/layouts/Layout.js';
import Link from 'next/link'
import summary from '../json/summary.js';
import { removeExt } from '../src/util/client';
// const CONTENT_API = 'https://api.github.com/repos/mwonng/whisper/contents/posts'

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
        { props.postsList.map( post => 
          <PostLink id={removeExt(post.filename)} title={titlized(post.attributes.title)} key={post.attributes.title}/>
        )}
    </Layout>
  )
}


Blog.getInitialProps = async ({pathname, req}) => {
  const postsList = summary.sort((a,b) => { return a.attributes.num -b.attributes.num; })
  return { postsList, path: pathname }
}

const titlized = (fileName) => {
  var newstr = fileName.replace(/\..+$/, '').replace(/-|_/, ' ');
  var titlizeString = newstr.charAt(0).toUpperCase() + newstr.slice(1); // capitalize the first letter - as an example.
  return titlizeString
}

export default Blog