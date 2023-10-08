import Link from 'next/link'
import { Navigation } from '../navigation/Navigation'
import styles from './Header.module.css'

const navItems = [
  {label: 'Home', href: '/home'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'}
]

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
      {/* <Link href='/home' className={styles.linkHeader}>Home</Link>
      <Link href='/blog' className={styles.linkHeader}>Blog</Link>
      <Link href='/about' className={styles.linkHeader}>About</Link> */}
    </header>
  )
}

export {Header}
