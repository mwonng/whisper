import Layout from '../src/layouts/Layout.js'
import { withRouter } from 'next/router'
import Markdown from 'react-markdown';
// import fetch from 'isomorphic-unfetch'
// import atob from 'atob';
import styled from 'styled-components';
import summary from '../json/summary.js';

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 60vh;
`
const LeftContent = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: middle;
`

const RightContent = styled.div`
  width: 50%;
  display: inline-block;
  vertical-align: middle;
`

const PreWrapper = styled.pre`
  white-space: pre-wrap;
`

const Content = (props) => {
  return(
    <ContentWrapper>
      <LeftContent><Markdown source={props.content.body} /></LeftContent>
      <RightContent><PreWrapper>{props.content.body}</PreWrapper></RightContent>
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
  // const link = `https://api.github.com/repos/mwonng/whisper/contents/posts/${props.query.title}.md`
  // const res = await fetch(link)
  // const json = await res.json()

  const json = summary.find( s => s.filename == props.query.title);
  return { content: json }
}
export default withRouter(Post)