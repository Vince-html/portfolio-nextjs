import { gql } from 'graphql-request'

export const GET_PORTFOLIO = gql`
  query getPortfolio {
    portfolios {
      id
      heading
      slug
      sortDescription
      longDescription
      heading
      icons {
        url
        height
        width
      }
      imgPrimary {
        url
        height
        width
      }
      imgSecondary {
        url
        height
        width
      }
      linkVercel
      linkGithub
    }
  }
`

export const GET_PORTFOLIO_BY_SLUG = gql`
  query getPorfolioBySlug($slug: String) {
    portfolio(where: { slug: $slug }) {
      id
      heading
      slug
      sortDescription
      longDescription
      heading
      icons {
        url
        height
        width
      }
      imgPrimary {
        url
        height
        width
      }
      imgSecondary {
        url
        height
        width
      }
      linkVercel
      linkGithub
    }
  }
`
