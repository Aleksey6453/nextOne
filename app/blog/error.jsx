'use client';

export default function ErrorWrapper({error}) {
    return <h1>Oooops! {error.message}</h1>
}