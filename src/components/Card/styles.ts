import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  width: 20rem;
  height: 20rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(0.9);
  gap: 1rem;

  border: 2px solid #ffd100;

  padding: 1rem;
  border-radius: 25px 0 25px 0;

  &:hover {
    transform: scale(1);
  }

  p {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`
export const ContainerImg = styled.div`
  max-width: 100%;
  max-height: 10rem;
  object-fit: contain;

  & div:first-child {
    border-radius: 25px 0 0 0;

    width: 100%;
    top: -5px;
  }
`
export const StyledImage = styled(Image)``
