import styles from "../styles/Home.module.css"
import Link from "next/link"
import Image from "next/image"
import Testimoni from "./testimoni"

export default function Navbar (){
    return(
        <div className={styles.container}>
            <div className={styles.nama}>
                <Link href="/">MPES</Link>
            </div>
            <div className={styles.subNav}>
                <p onClick={() => {
                    const projects = document.getElementById('project')
                    if(projects){
                        projects.scrollIntoView({ behavior: "smooth" })

                    }
                }}
                
                style={{ cursor: "pointer"}}>Project</p>
                <p >Contact</p>
            </div>
            <div className={styles.gitH}>
                <Link href="https://github.com/MalvinMixamo"><Image src="/github.png" width={30} height={30} quality={100} className={styles.icon_git}></Image></Link>
            </div>
        </div>
    )
}