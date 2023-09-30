import Link from "next/link"


const TheHeader = () => {
  return (
    <header className="header">
      <Link href='/' className="linkHeader">Home</Link>
      <Link href='/blog' className="linkHeader">Blog</Link>
      <Link href='/about' className="linkHeader">About</Link>
    </header>
  )
}

export {TheHeader}
