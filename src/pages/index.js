import Link from "next/link"

export default function Home() {
  return (
    <>
      Home
      <div>
        <Link href="/login">Login</Link>
      </div>

      <div>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </>
  )
}
