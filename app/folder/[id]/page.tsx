import { Metadata } from "next"

async function getDate(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60
      }
    })

    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({
    params: {id},
}: Props): Promise<Metadata>{
 return {
    title: id,
 }
}

export default async function Post({params: {id}}: Props){
    const post = await getDate(id)

    return <div className="page">
         <h1>{post.title}</h1>
         <p>{post.body}</p>
    </div>
}