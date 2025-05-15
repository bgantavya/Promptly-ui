"use client"
import Image from "next/image"
import bg from './assets/bg.png'
import styles from './ConsolidateSection.module.css'
import { useEffect } from "react"
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import Head from "./Head"
import { animate,onScroll,stagger } from "animejs"
gsap.registerPlugin(ScrollTrigger);
export default function Pros() {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".pin",
            pin: true,
            start: "top top",
            end: "+=2000",
            // pinSpacing:false,
            markers:false,
        })

 animate('.bg', {
  opacity: 1,
  borderTopLeftRadius: '0%',
  borderTopRightRadius: '0%',
  borderRadius:'50%',
  width:'100%',
  height:'auto',
  delay:100,
  ease: 'linear',
    alternate:true,
  autoplay:onScroll({
    debug:false,
    enter: 'bottom-=150 top+=50',
    leave: 'bottom-=200 top+=400',
    sync: true,
  })})
  animate('.etc', {
  opacity:0,
  delay:100,
  ease: 'linear',
    alternate:true,
  autoplay:onScroll({
    debug:false,
    enter: 'top bottom+=400',
    leave: 'top bottom+=600',
    sync: true,
  })})
  animate('.pro', {
  opacity:1,
  delay:100,
  ease: 'linear',
    alternate:true,
  autoplay:onScroll({
    debug:false,
    enter: 'top bottom+=500',
    leave: 'top bottom+=700',
    sync: true,
  })})
  animate('p', {
    opacity: 1,
    delay:stagger(100),
    ease: 'linear',
      alternate:true,
    autoplay:onScroll({
      debug:false,
      enter: 'bottom-=100 bottom',
      leave: 'top+=100 bottom',
      sync: true,
    })
  })
    })
    return(
       <div className="pin" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
  <Image
    className={`${styles.bg} bg`}
    src={bg}
    alt="bg"
    
    priority
    style={{ objectFit: 'cover', zIndex: 1 }}
  />
  
  <div className={styles.overlayContent}>
    <div className={`${styles.etc} etc`}>
      Escape the Clutter
    </div>
    <div className={`${styles.pro} pro`}>
      <Head/>
      <p style={{justifySelf:'left'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos at vel minima hic perferendis saepe debitis accusamus laborum id, dolore quam ipsa eveniet excepturi.
      </p>
    </div>
  </div>
</div>


    )
}