import styled, { keyframes } from 'styled-components'

const entry = keyframes`
  from {
    transform: translateX(-500px);
  }

  to {
    transform: translateX(0px);
  }
`

export const Content = styled.section`
  max-width: 80rem;
  animation: ${entry} 0.5s ease-in-out forwards;

  margin-top: 3rem;
  padding: 2rem;

  @media (max-width: 1000px) {
    margin: 0.5rem;
    max-width: 60rem;
  }
`

export const Section = styled.section`
  max-width: var(--container);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`
export const Heading = styled.h1`
  text-align: center;
  color: var(--highlight);
  font-size: var(--medium);
  text-transform: uppercase;
`
export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: left;
  overflow-wrap: break-word;

  line-height: 2rem;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
