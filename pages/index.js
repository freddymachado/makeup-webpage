import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/**Header card */}
      <header className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-secondary text-light'>
            <div className='row'>
              <div className='col-md-4'>
                <img src='/barbara-makeup.jpeg' alt='' className='img-fluid'/>
              </div>
              <div className='col-md-8'>
                <h1>Bienvenidos</h1>
                <h3>Artista del maquillaje</h3>
                <p>A mi academia de maquillaje online A mi academia de maquillaje online A mi academia de maquillaje online A mi academia de maquillaje online A mi academia de maquillaje online A mi academia de maquillaje online </p>
                <a href="/hireme">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/**Second section */}
      <div className='row py-2'>
        <div className='col-md-4'>
          <div className='card bg-light'>
            <div className='card-body'>
              <h1>Skills</h1>
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='card bg-light'>
            <div className='card-body'>
              <h1>Experience</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
