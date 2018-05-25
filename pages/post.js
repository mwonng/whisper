import Layout from '../layouts/Layout.js'
import { withRouter } from 'next/router'
import blogs from '../posts/blogs';
import Markdown from 'react-markdown';

const Content = (props) => {
  const post = blogs.filter(b => b.slogon == props.url.query.title)[0]
  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <hr/>
      <h3>Markdown</h3>
      <Markdown source={post.content} />
    </div>
  )
} 

const Post = (props) => {
  const { router } = props
  return(
    <Layout>
      <Content url={router}/>
    </Layout>
  )
}
export default withRouter(Post)