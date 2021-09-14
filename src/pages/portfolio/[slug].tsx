import { GET_PORTFOLIO, GET_PORTFOLIO_BY_SLUG } from 'graphql/queries'
import client from 'graphql/client'
import { useRouter } from 'next/dist/client/router'
import { GetStaticProps } from 'next'
import {
  GetPorfolioBySlugQuery,
  GetPortfolioQuery
} from 'graphql/generated/graphql'
import PortfolioTemplate, { PortfolioTemplateProps } from 'Templates/portfolio'

export default function Trips({ portfolio }: PortfolioTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null
  return <PortfolioTemplate portfolio={portfolio} />
}

export async function getStaticPaths() {
  const { portfolios } = await client.request<GetPortfolioQuery>(GET_PORTFOLIO)

  const paths = portfolios.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { portfolio } = await client.request<GetPorfolioBySlugQuery>(
    GET_PORTFOLIO_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!portfolio) return { notFound: true }

  return {
    revalidate: 6000,
    props: {
      portfolio
    }
  }
}
