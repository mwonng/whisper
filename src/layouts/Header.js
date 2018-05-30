
import Link from 'next/link'
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0;
  border-bottom: 1px #e4e4e4 solid;
`

const NavLink = styled.a`
  padding: 0 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`

export default () => 
  <HeaderWrapper>
    <nav>
      <Link href='/'><NavLink>Home</NavLink></Link>
      <Link href='/about'><NavLink>About</NavLink></Link>
      <Link href='/blog'><NavLink>Blog</NavLink></Link>
    </nav>
  </HeaderWrapper>
