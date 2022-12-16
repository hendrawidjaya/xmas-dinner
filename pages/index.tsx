import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Wild Christmas Dinner </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by going&nbsp;
            <a href='https://www.google.com/maps/place/Kluckstra%C3%9Fe+25,+10785+Berlin/@52.5030137,13.3529007,15z/data=!3m1!4b1!4m5!3m4!1s0x47a8504b16f63165:0x643a719ad31a3b1b!8m2!3d52.503014!4d13.361634' className={styles.code}>HERE!</a>
          </p>
          <div>
            <a
              href="https://github.com/hendrawidjaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by{' '}
              <h2 className={styles.vercelLogo}>H. W. D.</h2>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          <h1>Wild Christmas Dinner</h1>
          <div className={styles.thirteen}>
            16.12
          </div>
        </div>
        <div className={styles.grid}>
          <a
            href="https://odyssey.wildcodeschool.com/crew"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.className}>
              RSVP <span>&gt;</span>
            </h2>
            <p className={styles.className}>
              Find out who might be attending.
            </p>
          </a>

          <a
            href="https://en.wikipedia.org/wiki/Secret_Santa"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.className}>
              Secret Santa <span>&gt;</span>
            </h2>
            <p className={styles.className}>
              Exchange your present with the others and feel the festivities!
            </p>
          </a>

          <a
            href="http://localhost:3000/drinks"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.className}>
              Drinks <span>&gt;</span>
            </h2>
            <p className={styles.className}>
              Discover your poison and be wild!
            </p>
          </a>

          <a
            href="https://www.uber.com/global/de/cities/berlin/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.className}>
              Going Home <span>&gt;</span>
            </h2>
            <p className={styles.className}>
              How to go home safely after a wild night.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
