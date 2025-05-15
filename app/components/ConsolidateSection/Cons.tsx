"use client"
import { useEffect } from "react"
import { onScroll, stagger, animate } from "animejs"
import styles from './ConsolidateSection.module.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);
export default function Cons(){
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".p",
            pin: true,
            start: "top top",
            end: "+=1000",
            // pinSpacing:false,
            markers:false,
        })
     animate('li', {
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
  });
    })
    return(
        <div className="p">
            <div className='justify-items-center'> {/* con heading */}
            <h2 className={styles.heading} style={{display:"flex"}} >
              THE OLD WAY OF
            </h2>
            <h2 className={styles.heading} style={{display:"flex"}} >
              WORKING
            </h2>
                    </div>
                    <div className=' justify-items-center'>{/* cons list */}
                    <ol className={`${styles.list}`}> 
                      <li style={{padding:4,opacity:0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={styles.icons}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
                        Time wasted switching between apps
                      </li>
                      <li style={{padding:4,opacity:0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={styles.icons}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>

                        Scattered conversations and decisions
                      </li>
                      <li style={{padding:4,opacity:0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={styles.icons}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
                        Can’t find important info or files
                      </li>
                      <li style={{padding:4,opacity:0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={styles.icons}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
                        Too many notifications in too many places
                      </li>
                      <li style={{padding:4,opacity:0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={styles.icons}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
                        Work feels chaotic and unfocused
                      </li>
                      <li style={{padding:4,opacity:0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className={styles.icons}>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                        Paying for many tools drains your budget
                      </li>
                    </ol>
                    </div>
        </div>

    )
}