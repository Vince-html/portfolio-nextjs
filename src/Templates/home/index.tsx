import { NextSeo } from 'next-seo'
import HeaderTop from 'components/Header'
import Card from 'components/Card'
import { MapProps } from 'components/Map'
import * as S from './styles'

export default function HomeTemplate({ portfolios }: MapProps) {
  console.log(portfolios)
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um projeto de portifolio relacionado a surf"
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
