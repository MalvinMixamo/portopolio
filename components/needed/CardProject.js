import Image from "next/image";
import styles from "../../styles/Home.module.css"

export default function CardProject(){
    return(
        <div>
            <Image src='/porto.png' height={275} width={500} className={styles.projects_card}></Image>
        </div>
    )
}