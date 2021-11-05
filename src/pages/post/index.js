import { useRouter } from 'next/router'

export default function post() {
  const router = useRouter()
  const { test } = router.query

  return <p>Post: {test}</p>
}