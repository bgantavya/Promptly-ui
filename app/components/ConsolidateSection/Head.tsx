"use client"
import { useEffect } from 'react'
import styles from './ConsolidateSection.module.css'
import { onScroll, animate } from "animejs"
export default function Head(){
    useEffect(() =>{
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
    })
    return(
        <div className='justify-items-center'> {/* con heading */}
            <h2 className={styles.heading} style={{display:"flex"}} >
              <span>T</span>
              <span>H</span>
              <span>E</span>
              <span>&nbsp;</span>
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>M</span>
              <span>P</span>
              <span>T</span>
              <span>L</span>
              <span>Y</span>
              <span>&nbsp;</span>
              <span>W</span>
              <span>A</span>
              <span>Y</span>
            </h2>
                    </div>
    )
}