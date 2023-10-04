import styles from './pageBlog.module.css'
import Link from 'next/link'

async function getDate(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        next: {
            revalidate: 60,
        }
    })

    return res.json()
}

export const metadata = {
    title: 'Blog | Next app'
}

export default async function Blog() {
    const posts = await getDate()

    return (
        <div className="wrapPage">
            <h1 className="title">Blog page</h1>
            <img src="oleta.jpeg" alt="img" className={styles.image} />
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