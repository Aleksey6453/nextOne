import Link from "next/link";

export default function AboutLayout({children}){
    return (
        <div>
            <h1 className="title">About us</h1>
            <ul>
                <li><Link href ='/about/contacts'>Contacts</Link></li>
                <li><Link href ='/about/team'>Team</Link></li>
            </ul>
            {children}
        </div>
    )
    
}