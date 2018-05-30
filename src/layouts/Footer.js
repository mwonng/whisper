import Link from 'next/link'
import styled from 'styled-components';

const Footer = styled.footer`
  max-width: 1000px;
  color: darkgray;
  margin: 1rem auto;
  padding: 1rem 0;
  border-top: 1px #e4e4e4 solid;
`;

export default () => 
  <Footer>
    {`This is footer area, nothing to display now`}
  </Footer>
