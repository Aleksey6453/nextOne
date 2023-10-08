'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navigation = ({navLinks}) => {
    const pathname = usePathname()

    return <>
    {navLinks.map((link) => {
        const isActiv = pathname === link.href;

        return (
            <Link key={link.label} 
                  href={link.href} 
                  className={isActiv ? 'active' : 'linkHeader'}>
                {link.label}
            </Link>
        )

    })}
    </>
}

export { Navigation }