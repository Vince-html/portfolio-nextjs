import PageTemplate from 'Templates/Pages'

import { useRouter } from 'next/dist/client/router'

export default function Page() {
  const router = useRouter()
  if (router.isFallback) return null
  return <PageTemplate />
}
