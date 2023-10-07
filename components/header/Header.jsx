import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/home' className={styles.linkHeader}>Home</Link>
      <Link href='/blog' className={styles.linkHeader}>Blog</Link>
      <Link href='/about' className={styles.linkHeader}>About</Link>
    </header>
  )
}

export {Header}
