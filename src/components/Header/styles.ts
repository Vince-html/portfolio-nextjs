import styled from 'styled-components'
import { MenuOutline } from '@styled-icons/evaicons-outline'

interface setVisible {
  visible: boolean
}

export const Header = styled.header`
  background: var(--highlight);
  top: 0;
  height: 90px;
  width: 100%;
  color: var(--background);
  display: flex;
  align-items: center;
`
export const Container = styled.div<setVisible>`
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  position: ${(props) => (props.visible ? 'fixed' : 'none')};
  @media (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: block;
    text-align: center;
    background: ${(props) => (props.visible ? '#FFD100' : 'transparent')};
    h1 {
      margin-top: 2rem;
    }
  }
`

export const NavLink = styled.nav<setVisible>`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      li {
        margin-top: 2rem;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        a {
          padding: 0.5rem;
          &:hover {
            background: var(--background);
            color: #ffe100;
            border-radius: 1rem 0 1rem 0;
          }
        }
      }
    }
    a {
      font-size: 32px;
      padding: 0.5rem;
      color: var(--background);

      &:hover {
        background: var(--background);
        color: #ffe100;
        border-radius: 1rem 0 1rem 0;
      }
    }
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }
`

export const MenuH = styled(MenuOutline)`
  width: 3rem;
  height: 3rem;
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    cursor: pointer;
  }
`

export const Button = styled.button<setVisible>`
  z-index: 100;
  cursor: pointer;
  position: ${(props) => (props.visible ? 'fixed' : 'absolute')};
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  display: none;
  > svg {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
`
