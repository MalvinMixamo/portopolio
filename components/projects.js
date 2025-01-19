import { useEffect, useState } from "react"
import CardProject from "./needed/CardProject"
import styles from "../styles/Home.module.css"

export default function Project(){
    return(
        <div className={styles.project_container} id="project_container">
            <h1 className={styles.project} id="project">Projects</h1>
            <div className={styles.projects}>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
                <CardProject></CardProject>
            </div>
        </div>
    )
}