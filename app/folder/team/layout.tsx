import React from "react";
import Link from "next/link";

export default function LayoutTeam({children}: {children: React.ReactNode}){
    return <div>
        <h1>Team</h1>
        <ul>
            <li><Link href='/team/one'>One</Link></li>
            <li><Link href='/team/two'>Two</Link></li>
            <li><Link href='/team/three'>Three</Link></li>
            <li><Link href='/team/four'>Four</Link></li>
            <li><Link href='/team/five'>Five</Link></li>
        </ul>
        {children}
    </div>
}