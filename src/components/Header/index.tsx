import React from 'react'
import Link from 'next/link'

import { Header } from './styles'

const HeaderTop = () => {
  return (
    <Header>
      <div>
        <h1>VINCE</h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Portfólio</Link>
            </li>
            <li>
              <Link href="/about">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  )
}

export default HeaderTop
