import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Its new folder',
    description: 'Add new folder',
  }

export default function Folder () {
  return (
    <div className="wrapPage">
      <h1>New Folder!</h1>
      <h3><Link href='/folder/new'>Posts</Link></h3>
    </div>
  )
}


