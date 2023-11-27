interface Props{
    params: {
        id: string[]
    }
}

export default function Post({params}: Props){
    return (
        <div>
           <h1>Post Folder id = {JSON.stringify(params)}!</h1> 
        </div>  
    )
}