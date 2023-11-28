import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import grid from '@/assets/grid.png'
import cover from '@/assets/cover.png'
import Logo from '@/assets/Logo'
import Medium from '@/assets/Medium'
import Twitter from '@/assets/Twitter'
import { Bitcoin, Bounce, Lets, Slogan, Slogan2, Year } from '@/assets/Text'
import Ball, { BallBase } from '@/assets/Ball'
import { useEffect, useState } from 'react'
import gsap, { Power2 } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const bound = document.querySelector('main')!.getBoundingClientRect()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll',
        start: 'top top',
        end: 'bottom bottom-=400',
        scrub: 0.5,
        snap: {
          snapTo: 'labels',
          duration: { min: 1, max: 2 }
        }
      }
    })
    tl.addLabel('start')
    gsap.fromTo(
      '.header, .bg',
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 2.5,
        ease: Power2.easeInOut
      }
    )
    tl.addLabel('text')
    const yearbound = document.querySelector('.year')?.getBoundingClientRect()
    tl.to(
      '.year',
      {
        x: bound.width / 2 - yearbound!.x - yearbound!.width / 2,
        ease: Power2.easeOut,
        duration: 2.5
      },
      'text'
    )

    const bounceBound = document
      .querySelector('.bounce')
      ?.getBoundingClientRect()
    tl.to(
      '.bounce',
      {
        x: bound.width / 2 - bounceBound!.x - bounceBound!.width / 2,
        ease: Power2.easeOut,
        duration: 2.5
      },
      'text'
    )

    tl.fromTo(
      '.lets',
      {
        y: -window.innerHeight - 500,
        scale: 0.5
      },
      { y: 0, ease: Power2.easeOut, duration: 2, opacity: 1, scale: 1 },
      'text'
    )
    tl.fromTo(
      '.bitcoin',
      {
        y: window.innerHeight + 500
      },
      { y: 0, ease: Power2.easeOut, duration: 2, opacity: 1 },
      'text'
    )

    tl.fromTo(
      '.slogan',
      {
        y: window.innerHeight + 500
      },
      { y: 0, ease: Power2.easeOut, duration: 2.5, opacity: 1 },
      'text'
    )
    tl.add('shrink')
    const headerBound = document
      .querySelector('.header')!
      .getBoundingClientRect()

    tl.to(
      '.year',
      {
        y: headerBound.bottom - yearbound!.top,
        duration: 1.5,
        ease: Power2.easeInOut
      },
      'shrink'
    )

    tl.to(
      '.textsInner',
      {
        scale: 0.5,
        y:
          -document.querySelector('.textsInner')!.getBoundingClientRect().top +
          headerBound.bottom -
          15,
        duration: 1.5,
        ease: Power2.easeInOut
      },
      'shrink'
    )
    tl.to(
      '.slogan',
      {
        y: -180,
        duration: 1.5,
        ease: Power2.easeInOut
      },
      'shrink'
    )

    tl.add('ball')

    tl.fromTo(
      '.ball, .ballBase',
      { opacity: 0, y: bound.height },
      {
        opacity: 1,
        duration: 0.1,
        delay: 0.3,
        y: 0,
        ease: Power2.easeOut
      },
      'ball'
    )
  }, [])

  return (
    <>
      <Head>
        <title>Bounce Bitcoin</title>
        <meta name="description" content="Bounce Bitcoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`scroll ${styles.scroll}`}></div>
      <div className={`${styles.scroll2}`}></div>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="bg">
          <Image src={grid} className={styles.grid} alt="" />
          <Image src={cover} className={styles.cover} alt="" />
        </div>
        <div className={`${styles.header} header `}>
          <Logo />
          <div>
            <a href="https://bouncefinance.medium.com/" target="_blank">
              <button>
                <Medium />
              </button>
            </a>
            <a href="https://twitter.com/bounce_finance?s=21" target="_blank">
              <button>
                <Twitter />
              </button>
            </a>
          </div>
        </div>
        <div className={`${styles.texts} texts`}>
          <Year className={`${styles.year} year`} />
          <div className={`${styles.textsInner} textsInner`}>
            <Lets className={`${styles.lets} lets`} />
            <Bounce className={`${styles.bounce} bounce`} />
            <Bitcoin className={`${styles.bitcoin} bitcoin`} />
          </div>

          <Slogan2
            className={`${styles.slogan} ${styles.sloganMobile} slogan sloganMobile`}
          />

          <Slogan
            className={`${styles.slogan} ${styles.sloganDesktop} slogan sloganDesktop`}
          />
        </div>
        <div className={`${styles.ballWrap} ballwrap`}>
          <Ball className={`${styles.ball} ball`} />
          <BallBase className={`${styles.ballBase} ballBase`} />
        </div>
      </main>
    </>
  )
}
