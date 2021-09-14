import HomeTemplate, { PortfolioProps } from 'Templates/home'
import { GET_PORTFOLIO } from 'graphql/queries'
import client from 'graphql/client'
import { GetPortfolioQuery } from 'graphql/generated/graphql'

export default function Home({ portfolios }: PortfolioProps) {
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
