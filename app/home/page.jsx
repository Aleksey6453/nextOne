import styles from './pageHome.module.css'

export default function Home(){
    return <div className="wrapPage">
        <h1 className="title">Home page</h1>
        <img src="oleta.jpeg" alt="img" className={styles.image} />
    </div>
    
}