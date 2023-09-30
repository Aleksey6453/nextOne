import styles from './pageBlog.module.css'

export default function Blog(){
    return <div className="wrapPage">
        <h1 className="title">Blog page</h1>
        <img src="oleta.jpeg" alt="img" className={styles.image} />
    </div>
    
}