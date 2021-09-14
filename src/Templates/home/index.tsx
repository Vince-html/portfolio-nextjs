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
      <S.Section>
        {portfolios?.map((portfolio) => (
          <Card key={portfolio.id} {...portfolio} />
        ))}
      </S.Section>
    </>
  )
}
