import * as S from './styles'

import Button from 'components/Button'
import { Portfolio } from '../Map/index'
import { useRouter } from 'next/dist/client/router'

const Card = (portfolio: Portfolio) => {
  const router = useRouter()
  const url = portfolio.imgPrimary
  console.log(url)
  return (
    <S.Container>
      <S.ContainerImg>
        <S.StyledImage src={url.url} width={url.width} height={url.height} />
      </S.ContainerImg>
      <p>{portfolio.sortDescription}</p>
      <Button
        onClick={() => {
          router.push(`/portfolio/${portfolio.slug}`)
        }}
      >
        Saiba mais...
      </Button>
    </S.Container>
  )
}

export default Card
