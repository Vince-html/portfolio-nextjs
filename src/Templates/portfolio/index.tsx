import Button from 'components/Button'
import HeaderTop from 'components/Header'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import * as S from './styles'

type Icon = {
  url: string
  height: number
  width: number
}

export type PortfolioTemplateProps = {
  portfolio: {
    id: string
    heading: string
    slug: string
    sortDescription: string
    longDescription: string
    icons: Icon[]
    imgPrimary: {
      url: string
      height: number
      width: number
    }
    imgSecondary: {
      url: string
      height: number
      width: number
    }
    linkVercel: string
    linkGithub: string
  }
}

export default function PortfolioTemplate({
  portfolio
}: PortfolioTemplateProps) {
  const router = useRouter()
  console.log(
    portfolio.icons.map((icon: Icon) => (
      <S.StyledImage
        key={icon.url}
        src={icon.url}
        width={icon.width}
        height={icon.height}
      />
    ))
  )
  if (router.isFallback) return null
  return (
    <>
      <NextSeo
        title={`${portfolio.heading} - Meu Portfólio`}
        description="Um projeto de portifolio relacionado a surf"
      />
      <HeaderTop />
      <S.Content>
        <S.ContainerImg>
          <S.StyledImage
            src={portfolio.imgSecondary.url}
            width={700}
            height={400}
          />
        </S.ContainerImg>
        <S.Container>
          <div>
            <S.Heading>{portfolio.heading}</S.Heading>
            <S.Paragraph>{portfolio.longDescription}</S.Paragraph>
            <S.Heading3>Ferramentas utilizadas</S.Heading3>
          </div>
          <S.ContainerIcon>
            {portfolio.icons.map((icon: Icon) => (
              <S.StyledImage
                key={icon.url}
                src={icon.url}
                width={70}
                height={70}
              />
            ))}
          </S.ContainerIcon>
        </S.Container>
        <S.BtnContainer>
          <Button>
            <a target="_blank" href={portfolio.linkGithub} rel="noreferrer">
              Github
            </a>
          </Button>

          <Button>
            <a target="_blank" href={portfolio.linkVercel} rel="noreferrer">
              Vercel
            </a>
          </Button>
        </S.BtnContainer>
      </S.Content>
    </>
  )
}
