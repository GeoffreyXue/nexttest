import { useRouter } from 'next/router'

export default function test() {
  const router = useRouter()
  const { test } = router.query

  return <p>Post: {test}</p>
}