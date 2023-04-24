import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      Hi there, visit to 
      <div>
        <Link href="/login">Login</Link>
      </div>
      to continue
    </>
  )
}
