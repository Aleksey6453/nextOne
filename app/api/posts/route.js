import { NextResponse } from "next/server";
import Post from '../../models/Post'
import connect from '../../utils/db'


export const GET = async(request) => {
    try{
        await connect()
        const posts = await Post.find()

        return new NextResponse(posts, {status: 200})

    }catch(error){
        return new NextResponse('Error in response of DB', {status: 500})
    }
}


// export async function GET(req){
//     return NextResponse.json({message: 'hello!'})
// }

// //http://localhost:3000/api/users
// export async function GET(req){
//     const users =  [
//         {id: 1, name: 'One'},
//         {id: 2, name: 'Two'},
//         {id: 3, name: 'Three'},
//     ]

//     return new Response(JSON.stringify(users))
// }