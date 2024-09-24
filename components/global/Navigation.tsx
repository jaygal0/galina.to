import Link from "next/link"

export default function Navigation() {
  return(
    <div className="relative w-full h-screen">
      <Link href="/" className="absolute top-5 left-5">Logo</Link>
      <Link href="/" className="absolute top-5 right-4">Menu</Link>
      <Link href="/now" className="absolute bottom-5 left-5">Now</Link>
      <Link href="/projects" className="absolute bottom-5 right-5">Projects</Link>
    </div>
  )
}