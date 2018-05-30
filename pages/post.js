import Layout from '../layouts/Layout.js'
import { withRouter } from 'next/router'
import blogs from '../posts/blogs';
import Markdown from 'react-markdown';
import fetch from 'isomorphic-unfetch'
import atob from 'atob';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`
const LeftContent = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: top;
`

const RightContent = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: top;
`

const Content = (props) => {
  return(
    <ContentWrapper>
      <LeftContent><Markdown source={atob(props.content)} /></LeftContent>
      <RightContent>{atob(props.content)}</RightContent>
    </ContentWrapper>
  )
}

const Post = (props) => {
  const { router, content } = props
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