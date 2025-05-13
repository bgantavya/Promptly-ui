import Image from "next/image"
import bg from './assets/bg.png'
import styles from './ConsolidateSection.module.css'
import { useEffect } from "react"
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);
export default function Pros() {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".pin",
            pin: true,
            start: "top-=50 top",
            end: "+=1000",
            pinSpacing:false,
            markers:true,
        })
    })
    return(
         <div className="panel justify-items-center">
              <Image className={styles.bg}
              src={bg}
              alt='bg'/>
            </div>
    )
}