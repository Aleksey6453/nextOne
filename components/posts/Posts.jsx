import React from 'react'
import Link from 'next/link'

const Posts = ({posts}) => {
  return (
    <div>
        <div className="imageBlock">
            <img src="oleta.jpeg" alt="img" className='image' />
        </div>
       
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`} className='wrapPage'>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export { Posts }
