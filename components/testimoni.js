import styles from "../styles/Home.module.css"
import CardTesti from "../components/needed/cardTesti"
export default function(){
    return(
        <div id="testi" className={styles.testimoni}>
            <h1>Testimoni</h1>
            <div className={styles.content_testi}>
                <CardTesti></CardTesti>
                <CardTesti></CardTesti>
                <CardTesti></CardTesti>
                <CardTesti></CardTesti>
            </div>
        </div>
    )
}
