import styled from 'styled-components'

export const Header = styled.header`
  background: var(--highlight);
  height: 90px;
  width: 100%;
  display: flex;
  color: var(--background);
  align-items: center;
  justify-content: space-around;
  ul {
    list-style: none;
    display: flex;
    a {
      font-size: 32px;
      padding: 20px;
      color: var(--background);
    }
  }
`
