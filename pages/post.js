import Layout from '../layouts/Layout.js'
import { withRouter } from 'next/router'
import blogs from '../posts/blogs';
import Markdown from 'react-markdown';

const Content = (props) => {
  const post = blogs.filter(b => b.slogon == props.url.query.title)[0]
  return(
    <div>
      <h1>{post.title}</h1>
      <p>{props.content}</p>
      <hr/>
      <h3>Markdown</h3>
      <Markdown source={post.content} />
    </div>
  )
}

const Post = (props) => {
  const { router, content } = props
  console.log(props.test)
  return(
    <Layout>
      <Content url={router} content={content} />
    </Layout>
  )
}

Post.getInitialProps = async (props) => {
  const link = `https://api.github.com/repos/mwonng/whisper/contents/posts/${props.query.title}.md`
  const res = await fetch(link)
  const json = await res.json()
  return { content: json.content }
}
export default withRouter(Post)