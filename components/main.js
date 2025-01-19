'use client'
import styles from "../styles/Home.module.css"
import Image from "next/image"


export default function Main(){
    return(
        <div className={styles.main}>
            <div className={styles.introduction}>
                <div className={styles.left}>
                    <h3>Hi</h3>
                    <h1 className={styles.perkenalan}>I'm <span className={styles.blue}>Malvin<br/>Pradhypta</span></h1>
                    <p className={styles.deskripsiSingkat}>Saya melakukan apa yang anda minta, <br/>bukan yang anda maksud</p>
                    <button className={styles.button_contact} 
                        onClick={() => {
                            
                        }}>Contact</button>
                </div>
                <Image src="/Profil.png" alt="" width={400} height={460} quality={100} className={styles.profil}></Image>
            </div>
        </div>
    )
}