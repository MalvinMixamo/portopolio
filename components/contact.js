import style from "@/styles/Home.module.css"

export default function Contact(){
  return(
    <div className={style.formContainer}>
      <form action="" className={style.form}>
      <label for="text">Your Name</label>
      <input type="email" placeholder="Nama" required className={style.email}></input>
      <label for="pesan">Your Message</label>
      <input type="text" placeholder="pesan" required className={style.pesan}></input>
      <div className={style.btn_submit}>
        <h2>Submit</h2>
      </div>
        </form>
    </div>
    )
}