import styled from 'styled-components'

export const Btn = styled.button`
  color: white;
  width: 200px;
  height: 45px;
  background-color: var(--background);
  border: 1px solid #ffd100;
  border-radius: 20px 0 20px 0;
  font-family: 'Ubuntu mono';
  cursor: pointer;

  &:hover {
    background-color: var(--highlight);
    color: var(--background);
    font-weight: bold;
  }
`
