'use client';


export default function errorFolder({error}: {error: Error}){
    return <h1>Sorry. This is {error.message} </h1>
}