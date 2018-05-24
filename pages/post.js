import Layout from '../layouts/Layout.js'
import { withRouter } from 'next/router'
import blogs from '../posts/blogs';

const Content = (props) => {
  const post = blogs.filter(b => b.slogon == props.url.query.title)[0]
  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
} 

const Post = (props) => {
  const { router } = props
  console.log("router",router)
  return(
    <Layout>
      <Content url={router}/>
    </Layout>
  )
}
export default withRouter(Post)