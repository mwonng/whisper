
import Link from 'next/link'
import styled from 'styled-components';

import Footer from './Footer';

const NavLink = styled.a`
  padding: 0 1rem;
  cursor: pointer;
`

export default () => 
  <header>
    <nav>
      <Link href='/'><NavLink>Home</NavLink></Link>
      <Link href='/about'><NavLink>About</NavLink></Link>
      <Link href='/blog'><NavLink>Blog</NavLink></Link>
    </nav>
  </header>
