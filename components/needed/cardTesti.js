import { useEffect, useState } from "react"
import styles from "../../styles/Home.module.css"
import Image from "next/image"


export default function card(){
    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('../../pages//api/testi')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //             setLoading(false)
    //         })
    // }, [])
    // if(isLoading) return <p>Loading...</p>
    // if (!data) return <p>No Data</p> 
    return(
        <div className={styles._card}>
            <div className={styles.nama_card}>
                <Image src="/profil.png" width={30} height={30} className={styles.img_card}></Image>
                <h3>Miaww</h3>
            </div>
            <div className={styles.isi_testi}>
                <p>Wahh keren banget hasilnya</p>
            </div>
        </div>
    )
} 