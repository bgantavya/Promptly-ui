import { useEffect } from "react"
import { onScroll, stagger, animate } from "animejs"
import styles from './ConsolidateSection.module.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);
export default function Cons(){
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".pin",
            pin: true,
            start: "top-=50 top",
            end: "+=1000",
            pinSpacing:false,
            markers:true,
        })
          animate('span', {
            opacity:0,
            autoplay:onScroll({
                debug:false,
                enter:'top-=2000 bottom'
            })})
            animate('span', {
                y: [
                    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
                ],
                rotate: {
                    from: '-1turn',
                    delay: 0
                },
                delay: (_, i) => i * 50,
                ease: 'inOutCirc',
                loopDelay: 1000,
                loop: true,
                autoplay:onScroll({
                    debug:false,
                    // sync:true,
                    enter: 'bottom-=80 top',
                    leave: 'top-=2000 bottom',
      })
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
        <>
            <div className='justify-items-center'>
            <h2 className={styles.heading} style={{display:"flex"}} >
                <span>T</span>
                <span>H</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>O</span>
                <span>L</span>
                <span>D</span>
                <span>&nbsp;</span>
                <span>W</span>
                <span>A</span>
                <span>Y</span>
                <span>&nbsp;</span>
                <span>O</span>
                <span>F</span>
            </h2>
            <h2 className={styles.heading} style={{display:"flex"}} >
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </h2>
            </div>
            <div className={`${styles.div} items-center justify-items-center`}>
                    <ol className={styles.list}>
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
        </>

    )
}