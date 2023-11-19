import React from "react";
import Link from "next/link";



export default function LayoutTeam({children}: {children: React.ReactNode}){
    return <div>
        <h1>Team</h1>
        <ul>
            <li><Link href='/folder/new/edit'>Edit</Link></li>
            <li><Link href='/folder/team'>Team</Link></li>
        </ul>
        {children}
    </div>
}