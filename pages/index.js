import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colectivoazotea</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>

      <main className={styles.main}>
        <div className={styles.logocontainer}>
          <img src='/img/logo.jpg'></img>
          <a href="mailto:contacto@colectivoazotea.cl"><p>contacto@colectivoazotea.cl</p></a>
          </div>
      </main>

    </div>
  )
}
