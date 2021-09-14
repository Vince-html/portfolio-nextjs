import HomeTemplate from 'Templates/home'
import { MapProps } from 'components/Map'
import { GET_PORTFOLIO } from 'graphql/queries'
import client from 'graphql/client'
import { GetPortfolioQuery } from 'graphql/generated/graphql'

export default function Home({ portfolios }: MapProps) {
  return <HomeTemplate portfolios={portfolios} />
}

export const getStaticProps = async () => {
  const { portfolios } = await client.request<GetPortfolioQuery>(GET_PORTFOLIO)

  return {
    props: {
      portfolios
    }
  }
}
