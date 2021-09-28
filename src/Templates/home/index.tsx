import { NextSeo } from 'next-seo'
import HeaderTop from 'components/Header'
import Card from 'components/Card'
import * as S from './styles'

type Icons = {
  url: string
  height: number
  width: number
}

export type Portfolio = {
  id: string

  heading: string
  slug: string
  sortDescription: string
  longDescription: string
  icons: Icons[]
  imgPrimary: {
    url: string
    height: number
    width: number
  }
  linkVercel: string
  linkGithub: string
}

export type PortfolioProps = {
  portfolios?: Portfolio[]
}

export default function HomeTemplate({ portfolios }: PortfolioProps) {
  return (
    <>
      <NextSeo
        title="Portfolio do Vince"
        description="Site Portfolio do Vince, onde mostro um pouco do meu conhecimento e um pouco sobre mim."
        canonical="https://localhost:3000"
      />

      <HeaderTop />
      <S.Content>
        <S.Heading>Meu Portfólio</S.Heading>
        <S.Paragraph>
          Conhecido também por Vince , tenho 32 anos de idade, casado e um filho
          de 3 anos, gosto de games, de surf e da familia. Sou desenvolvedor com
          foco em aplicações web usando React e Next, Mas sempre aberto a novas
          tecnologias e buscando inovações.
        </S.Paragraph>
        <S.Section>
          {portfolios?.map((portfolio) => (
            <Card key={portfolio.id} {...portfolio} />
          ))}
        </S.Section>
      </S.Content>
    </>
  )
}
