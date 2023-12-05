import Link from 'next/link';
import Feed from './Feed'

export const metadata ={
    title: "Jarvis",
    descrition: "About Jarvis"
}

export default function Jarvis(){
    const isUserLoginIn = true;

    return (
        <div className='wrapPage'>
            <h1>Jarvis</h1>
            <Feed />
            
            {isUserLoginIn ? (
                <div>
                    <Link href='/create-prompt' className='btn'>
                        Create new post...
                    </Link>
                </div>
            ) : 
            <h1>User is dont Logining</h1>}
        </div>
    )
}