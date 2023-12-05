'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import { sign } from 'crypto';
import Link from 'next/link';
import Feed from './Feed'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

export const metadata ={
    title: "Jarvis",
    descrition: "About Jarvis"
}

export default function Jarvis(){
    const isUserLoginIn = true;
    const signOut = () => {
        
    }

    const [providers, setProviders] = useState(null)
    useEffect(() => {
        const setProviders = async() => {
            const response = await getProviders()

            setProviders(response)
        }
        setProviders()
    }, [])


    return (
        <div className='wrapPage'>
            <h1>Jarvis</h1>
            <Feed />
            
            {isUserLoginIn ? (
                <div>
                    <Link href='/create-prompt' className='btn m-10'>
                        Create new post...
                    </Link>
                    <button className='btn m-10' onClick={signOut}>
                        Sign Out
                    </button>
                </div>
            ) : (
                <>
                { providers &&
                   Object.values(providers).map((provider) => (
                    <button type='button' 
                            key={provider.name} 
                            onClick={()=>signIn(provider.id)} 
                            className='btn m-10'>
                                Sign In!
                    </button>
                   ))}
                </>
            )

            }
        </div>
    )
}