import { NavLink } from 'react-router-dom'

import logo from '@/assets/footy-analytics.svg'
import gitHubIcon from '@/assets/github-mark.svg'

import { ThemeToggle } from '../theme/theme-toggle'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <nav>
        <NavLink to="https://github.com/luisgustavoTbarbosa">
          <div>
            <span className="sr-only">GitHub ícone</span>
            <img src={gitHubIcon} alt="GitHub logo marca" />
          </div>
        </NavLink>
        <ThemeToggle />
      </nav>
    </HeaderContainer>
  )
}
