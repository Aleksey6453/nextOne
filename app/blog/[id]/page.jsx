async function getDate(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        }
    })

    return res.json()
}

export async function generateMetadata({params: {id}}){
    const post = await getDate(id)
    return {
        title: post.title,
    }
}

export default async function Post({params: {id} }){
    const post = await getDate(id)
    console.log(post)
    return (
        <>
            <h1 className="title"> {post.title} </h1>
            <h3> {post.body} </h3>
        </>
    )
}