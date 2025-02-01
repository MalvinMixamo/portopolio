import Navbar from "../components/navbar"
import Main from "../components/main"
import Testimoni from "@/components/testimoni"
import Home from "../components/coba"
import Project from "@/components/projects"
import Contact from "@/components/contact"
import Kata from "@/components/kataKata"

export default function Result(){
  return(
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Testimoni></Testimoni>
      <Home></Home>
      <Kata></Kata>
      <Project></Project>
      <Contact></Contact>
      
    </>
  )
}