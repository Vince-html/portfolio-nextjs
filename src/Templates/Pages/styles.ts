import styled from 'styled-components'
import Image from 'next/image'

export const Content = styled.section`
  display: flex;

  justify-content: center;
  flex-direction: column;
  max-width: var(--container);

  margin: auto;
  border: 2px solid #ffd100;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 50px 0 50px 0;

  @media (max-width: 1240px) {
    margin: 1rem;
  }
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
  }
`

export const Heading = styled.h1`
  font-size: var(--medium);

  &:after {
    margin-top: 0.5rem;
    content: ' ';
    height: 5px;
    width: 25rem;
    display: block;
    background: #ffd100;
  }
  @media (max-width: 768px) {
    &:after {
      margin-top: 0.5rem;
      content: ' ';
      height: 5px;
      width: 10rem;
      display: block;
      background: #ffd100;
    }
  }
`

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
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

  div .image_container {
    margin-top: 1rem;
  }

  div h2 {
    margin-top: 1rem;
    &:after {
      margin-top: 0.5rem;
      content: ' ';
      height: 2px;
      width: 15rem;
      display: block;
      background: #ffd100;
    }
  }
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
  }
`
export const StyledImage = styled(Image)`
  margin: 0 auto !important;
`

export const ContainerImg = styled.div`
  & div:first-child {
    border-radius: 10px;
    margin: 0 auto !important;
    display: block !important;

    width: 70%;
    height: 100%;
  }
`
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  margin-top: 1rem;
  &:hover {
    color: black;
  }

  button {
    &:hover {
      color: black;
    }

    a {
      padding: 0.75rem 4.25rem;
      &:hover {
        color: black;
      }
    }
  }
`
