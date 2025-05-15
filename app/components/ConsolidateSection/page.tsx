"use client"

import ScrollTrigger from 'gsap/ScrollTrigger';
import { animate, stagger, onScroll } from 'animejs';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './ConsolidateSection.module.css'
import asana from './assets/asana.png'
import gpt from './assets/gpt.png'
import jira from './assets/jira.png'
import kissflow from './assets/kissflow.png'
import looker from './assets/looker.png'
import miro from './assets/miro.png'
import monday from './assets/monday.png'
import notion from './assets/notion.png'
import sales from './assets/sales.png'
import slack from './assets/slack.png'
import bg from './assets/bg.png'
import tableau from './assets/tableau.png'
import teams from './assets/teams.png'
import TestSection from '../TestSection/page';
import Cons from './Cons';
import Pros from './pros';

export default function ConsolidateSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".icon",
      pin: true,
      start: "top top",
      end: "bottom+=3000 top-=100",
      pinSpacing:false,
      markers:false,
    })

    animate('.left', {
      x: stagger(['10rem','-10rem']),
      y: stagger(['+30rem','-30rem']),
      rotate: stagger(['.125turn','1turn']),
      ease: 'linear',
      delay: stagger(100),
      autoplay:onScroll({
        debug:false,
        enter: 'top bottom+=525',
        leave: 'top-=400 bottom+=1100',
        sync: .5,
      }) 
    });
    
    animate('.right', {
      x: stagger(['-10rem','10rem']),
      y: stagger(['+30rem','-30rem']),
      rotate: stagger(['.125turn','1turn']),
      ease: 'linear',
      delay: stagger(100),
      autoplay:onScroll({
      debug:false,
      enter: 'top bottom+=500',
      leave: 'top-=400 bottom+=1000',
      sync: .5,
    })
  })
    animate('.left', {
      delay: stagger(100),
      opacity:0,
      autoplay:onScroll({
        debug:false,
        enter: 'top bottom+=2525',
        leave: 'top-=400 bottom+=2600',
        sync: .5,
      }) 
    });
    
    animate('.right', {
      delay: stagger(100),
      opacity:0,
      autoplay:onScroll({
      debug:false,
      enter: 'top bottom+=2500',
      leave: 'top-=400 bottom+=2550',
      sync: .5,
    })
  })

  }, []);

  return (
    <div className={``} style={{paddingTop:200}}>
      <div className={`${styles.test} icon`}>
          <div>
            <Image
              src={asana}
              alt="Responsive Image"
              className={`${styles.icon} img left`}
            />
            <Image
              src={gpt}
              alt="Responsive Image"
              className={`${styles.icon} img ${styles.right} right`}
            />
          </div>
          <div>
          <Image
            src={jira}
            alt="Responsive Image"
            className={`${styles.icon} img ${styles.right} right`}     
          />
          <Image
            src={kissflow}
            alt="Responsive Image"
            className={`${styles.icon} img ${styles.right} right`}
          />
          <Image
            src={monday}
            alt="Responsive Image"
            className={`${styles.icon} img left`}
          />
          <Image
            src={slack}
            alt="Responsive Image"
            className={`${styles.icon} img left`}
          />
          </div>
          <div>
            <Image
              src={teams}
              alt="Responsive Image"
              className={`${styles.icon} img ${styles.right} right`}            
            />
            <Image
              src={looker}
              alt="Responsive Image"
              className={`${styles.icon} img ${styles.right} right`}  
          />
            <Image
              src={miro}
              alt="Responsive Image"
              className={`${styles.icon} img ${styles.right} right`}
            />
            <Image
              src={notion}
              alt="Responsive Image"
              className={`${styles.icon} img left`}
            />
            <Image
              src={sales}
              alt="Responsive Image"
              className={`${styles.icon} img left`}
            />
            <Image
              src={tableau}
              alt="Responsive Image"
              className={`${styles.icon} img left`}
            />
          
                
            
            </div>
            </div>
<div>

                  <Cons/>
                  <Pros/>
</div>
      
        </div>
  )}