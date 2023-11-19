'use client';

import styles from './pageBlog.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Posts } from '../../components/posts/Posts';
import { getAllPosts } from '../services';
import { PostSearch } from '../../components/postSearch/PostSearch';


// async function getDate(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
//         next: {
//             revalidate: 60,
//         }
//     })

//     return res.json()
// }

// export const metadata = {
//     title: 'Blog | Next app'
// }


export default function Blog() {
    // const posts = getDate()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getAllPosts().then(setPosts)
                     .finally(()=>setLoading(false))
    }, [])

    return (
        <div className="wrapPage">
            <h1 className="title">Blog page</h1>
            <PostSearch onSearch={setPosts}/>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Posts posts={posts} />
                
            )}
           
        </div>
    )
        
    
}