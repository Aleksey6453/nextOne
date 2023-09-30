import styles from './pageAbout.module.css'

export default function About(){
    return <div className="wrapPage">
        <h1 className="title">About page</h1>
        <img src="oleta.jpeg" alt="img" className={styles.image} />
    </div>
    
}


