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
gsap.registerPlugin(ScrollTrigger);

export default function ConsolidateSection() {
  useEffect(() => {

    ScrollTrigger.create({
      trigger: ".icon",
      pin: true,
      start: "top top",
      end: "bottom+=200 top-=100",
      // pinSpacing:false,
      // markers:true,
    })
    ScrollTrigger.create({
      trigger: ".panel1",
      pin: true,
      start: "top+=50 top+=100",
      end:"+=1000",
      // end: "+=1500",
      // pinSpacing:false,
      // markers:true,
    })
    ScrollTrigger.create({
      trigger: ".panel2",
      pin: true,
      start: "top+=50 top+=100",
      end:"+=1500",
      // end: "+=1500",
      // pinSpacing:false,
      // markers:true,
    })

    const scrollObserver = onScroll({
    enter: 'top-=100 top',
    leave: 'top-=500 bottom',
    sync: .10,
    debug: false,
  })

    animate('.left', {
      x: stagger(['20rem','-20rem']),
      y: stagger(['+20rem','-30rem']),
      // opacity:.0,
      rotate: stagger(['.125turn','1turn']),
      ease: 'linear',
      alternate:true,
      delay: stagger(100),
      autoplay:onScroll({
        debug:true,
        enter: 'top top',
        leave: 'top-=400 bottom',
        sync: .5,
      }) 
    });
    
    animate('.right', {
      x: stagger(['-20rem','20rem']),
      y: stagger(['+20rem','-30rem']),
      rotate: stagger(['.125turn','1turn']),
      // opacity:0,
      // rotate:'2turn',
      ease: 'linear',
      alternate:true,
      delay: stagger(100),
      autoplay:onScroll({
      debug:false,
      enter: 'top-=80 top',
      leave: 'top-=500 bottom',
      sync: .5,
    })
  })
    animate('.icon',{
      opacity:0,
      delay:stagger(1000),
      ease:'linear',
      autoplay: onScroll({
        debug:true,
        sync:true,
        enter:'top bottom',
        leave:'bottom bottm',
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
    enter: 'bottom-=150 top',
    leave: 'bottom-=200 top+=200',
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
    leave: 'top bottom+=450',
    sync: true,
  })})
  animate('.pro', {
  opacity:1,
  delay:100,
  ease: 'linear',
    alternate:true,
  autoplay:onScroll({
    debug:false,
    enter: 'top bottom+=300',
    leave: 'top bottom+=400',
    sync: true,
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
  // scrollObserver.link(heading);
  // scrollObserver.link(items);
  // scrollObserver.link(rightToLeft);
  // scrollObserver.link(leftToRight);
  }, []);

  return (
    <div className={`${styles.container}`} style={{paddingTop:200}}>
<div className={`${styles.div} ${styles.set} icon`}>
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
      <div className={`scroll-container scroll-y pt-20 w-full `}>
        <div className="scroll-content grid square-grid">
          <div className="scroll-section padded"><div className="large row"></div></div>
          
            <div className={` large row scroll-section padded`}> 
              <div>
                <div className={`justify-items-center`}>
                  {/* cons section */}

                  <div className="panel1">
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
                  <div className={`${styles.div} ${styles.set} icon`}>
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
                  <div className={`panel2 justify-items-center`}  style={{width:'100%'}}> 
                        {/* <div className={`{  ${styles.bg}}`} style={{width:'100%'}}> */}
                          <Image className={`${styles.bg} 4{styles.div} bg justify-items-center`}
                          //  style={{width:'100%'}}
                          src={bg}
                          alt='bg'/> 
                          <div className={`${styles.div} etc ${styles.etc}`}>
                            Escape the Clutter
                          </div>
                          <div className={`${styles.div} pro ${styles.pro}`}>
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
                            <p>
                              One place for ideas, docs, and projects
One place for conversations and decisions
One place for important info and files
One place for notifications
Work feels calm and focused
Pay for one tool and free up budget
                            </p>
                          </div>
                        {/* </div> */}
                          </div>
                  </div>
                </div>
                </div>
                </div>
                 
          </div>
          <div className="scroll-section"></div>
        </div>
        </div>
  )}