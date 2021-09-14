import Button from 'components/Button'
import HeaderTop from 'components/Header'
import { useEffect, useState, useRef } from 'react'

import Photo from '../../assets/vince.jpeg'

import * as S from './styles'

const PageTemplate = () => {
  const index = useRef(0)
  const [letter, setLetter] = useState('')
  const title = 'Quem Sou Eu :)'

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLetter((value: string) => value + title.charAt(index.current))
      index.current += 1
    }, 150)
    return () => {
      clearTimeout(timeOut)
    }
  }, [letter, title])

  return (
    <>
      <HeaderTop />
      <S.Content>
        <S.Container>
          <div>
            <S.Heading>{letter}</S.Heading>
            <S.Paragraph>
              Olá eu sou o Vicente 👋
              <S.Paragraph>
                Conhecido também por Vince , tenho 32 anos de idade, casado e um
                filho de 3 anos, gosto de games, de surf e da familia.
              </S.Paragraph>
              <S.Paragraph>
                {' '}
                Atualmente tenho estudado React , javascript, typescript,
                Styled-Components, NextJs e outros complementos. Um pouco da
                minha historia, sou natural de Curitiba-PR , mas hoje resido em
                Imbituba-SC, perto do mar aonde me sinto bem.
              </S.Paragraph>
              <S.Paragraph>
                {' '}
                Sou Tranquilo, focado em atingir meus objetivos. Minha primeira
                experiencia com programação foi em 2007-08, onde na época,
                jogava tibia, e acabei fazendo alguns sites para o jogo. Mas não
                levei a fundo. Resolvi voltar para programação esse ano(2021),
                por causa de amigos e necessidade de me encontrar
                profissionalmente, e até o momento estou muito feliz com essa
                escolha.
              </S.Paragraph>
            </S.Paragraph>
          </div>
          <S.ContainerImg>
            <S.StyledImage src={Photo} />
          </S.ContainerImg>
        </S.Container>
        <S.BtnContainer>
          <Button>GitHub</Button>
          <Button>Linkedin</Button>
        </S.BtnContainer>
      </S.Content>
    </>
  )
}
export default PageTemplate
