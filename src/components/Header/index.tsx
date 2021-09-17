import React, { useState } from 'react'
import Link from 'next/link'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import { Header, MenuH, NavLink, Button, Container } from './styles'

const HeaderTop = () => {
  const [visible, setVisible] = useState(false)
  console.log(visible)
  return (
    <>
      <Button
        visible={visible}
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseOutline aria-label="Close menu" />
        ) : (
          <MenuH aria-label="Open menu" />
        )}
      </Button>
      <Header>
        <Container visible={visible}>
          <div>
            <h1>VINCE</h1>
          </div>
          <NavLink onClick={() => setVisible(false)} visible={visible}>
            <ul>
              <li>
                <Link href="/">Portfólio</Link>
              </li>
              <li>
                <Link href="/about">Contato</Link>
              </li>
            </ul>
          </NavLink>
        </Container>
      </Header>
    </>
  )
}

export default HeaderTop
