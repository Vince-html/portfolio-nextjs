import styled from 'styled-components'
import Image from 'next/image'

export const Content = styled.section`
  max-width: 60rem;

  border: 2px solid #ffd100;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 50px 0 50px 0;

  @media (max-width: 1000px) {
    margin: 0.5rem;
    max-width: 60rem;
  }
`

export const Heading = styled.h1`
  font-size: var(--small);
  text-transform: uppercase;

  &:after {
    margin-top: 1rem;
    content: ' ';
    height: 3px;
    width: 25rem;
    display: block;
    background: #ffd100;
  }
  @media (max-width: 768px) {
    &:after {
      margin-top: 0.5rem;
      content: ' ';
      height: 3px;
      width: 10rem;
      display: block;
      background: #ffd100;
    }
  }
`

export const Heading3 = styled.h3`
  text-transform: uppercase;

  &:after {
    margin-top: 1rem;
    content: ' ';
    height: 3px;
    width: 25rem;
    display: block;
    background: #ffd100;
  }
  @media (max-width: 768px) {
    &:after {
      margin-top: 0.5rem;
      content: ' ';
      height: 3px;
      width: 10rem;
      display: block;
      background: #ffd100;
    }
  }
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

export const Container = styled.div`
  gap: 3rem;
  padding: 0.5rem;

  margin-bottom: 1rem;
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
  }
`
export const StyledImage = styled(Image)`
  margin: 0 auto !important;
`

export const ContainerImg = styled.div`
  align-self: center;
  display: flex;
  margin-bottom: 2rem;
  & div:first-child {
    border-radius: 50px 0 50px 0;
    margin: 0 auto !important;
  }
`
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  margin-top: 1rem;
`
export const ContainerIcon = styled.div`
  margin-top: 1rem;
`
