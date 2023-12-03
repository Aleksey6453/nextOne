import { NextResponse } from "next/server";

export async function GET(req){
    return NextResponse.json({message: 'hello!'})
}

//http://localhost:3000/api/users
export async function GET(req){
    const users =  [
        {id: 1, name: 'One'},
        {id: 2, name: 'Two'},
        {id: 3, name: 'Three'},
    ]

    return new Response(JSON.stringify(users))
}