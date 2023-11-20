import Link from "next/link"

export default async function Blog(){

    async function getDate() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          next: {
            revalidate: 60
          }
        })

        return response.json()
    }

    const posts = await getDate()

    return <div className="page">
        <h1>Create new post...</h1>
        <ul>
            {posts.map((post:any) => 
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`}>
                       {post.title}
                  </Link>  
                </li>
                )}
        </ul>
    </div>
    

}