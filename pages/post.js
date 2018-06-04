import Layout from '../src/layouts/Layout.js'
import { withRouter } from 'next/router'
import Markdown from 'react-markdown';
// import fetch from 'isomorphic-unfetch'
// import atob from 'atob';
import { removeExt } from '../src/util/lib';
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
  const { currentPost } = props
  return(
    <ContentWrapper>
      <LeftContent><Markdown source={currentPost.body} /></LeftContent>
      <RightContent><PreWrapper>{currentPost.body}</PreWrapper></RightContent>
    </ContentWrapper>
  )
}

const Post = (props) => {
  const { router, currentPost } = props
  return(
    <Layout>
      <Content currentPost={currentPost} />
    </Layout>
  )
}

Post.getInitialProps = (props) => {
  const currentPost = summary.filter( s => removeExt(s.filename) === props.query.title)[0];
  return { currentPost }
}


export default withRouter(Post)