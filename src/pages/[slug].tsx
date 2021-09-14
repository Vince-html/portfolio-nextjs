import PageTemplate from 'Templates/Pages'
import client from 'graphql/client'
import { useRouter } from 'next/dist/client/router'
import { GetStaticProps } from 'next'
import { GET_PORTFOLIO_BY_SLUG } from 'graphql/queries'
import { GetPorfolioBySlugQuery } from 'graphql/generated/graphql'

export default function Page() {
  const router = useRouter()
  if (router.isFallback) return null
  return <PageTemplate />
}

// export async function getStaticPaths() {
//   const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

//   const paths = pages.map(({ slug }: SlugProps) => ({ params: { slug } }))

//   return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { portfolio } = await client.request<GetPorfolioBySlugQuery>(
//     GET_PORTFOLIO_BY_SLUG,
//     {
//       slug: `${params?.slug}`
//     }
//   )

//   if (!portfolio) return { notFound: true }

//   return {
//     revalidate: 60,
//     props: {
//       heading: portfolio.heading
//     }
//   }
// }
