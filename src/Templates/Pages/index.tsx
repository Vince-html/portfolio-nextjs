import Button from 'components/Button'
import HeaderTop from 'components/Header'
import { useEffect, useState, useRef } from 'react'

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

            <h2>Conhecimentos:</h2>
            <div className="image_container">
              <S.StyledImage src="/img/iconJs.svg" width={70} height={70} />
              <S.StyledImage src="/img/iconReact.svg" width={70} height={70} />
              <S.StyledImage src="/img/iconStyled.png" width={70} height={70} />
              <S.StyledImage src="/img/iconNext.svg" width={70} height={70} />
              <S.StyledImage src="/img/iconSass.svg" width={70} height={70} />
              <S.StyledImage
                src="/img/iconTypescript.svg"
                width={70}
                height={70}
              />
              <S.StyledImage src="/img/iconHtml.svg" width={70} height={70} />
            </div>
          </div>
        </S.Container>
        <S.BtnContainer>
          <Button>
            <a
              target="_blank"
              href="https://github.com/Vince-html"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button>
            {' '}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vicente-augusto-282b37211/"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </Button>
        </S.BtnContainer>
      </S.Content>
    </>
  )
}
export default PageTemplate
