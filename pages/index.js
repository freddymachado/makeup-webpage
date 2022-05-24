import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faGraduationCap, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <Layout>
      {/**Header card */}
      <header className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-secondary text-light'>
            <div className='row'>
              <div className='col-md-4'>
                <Image src='/barbara-makeup.jpeg' width={400} height={400} alt='Barbara Machado' className='img-fluid'/>
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

      <div className='col-md-12 py-4'>
        <Link href="/cursos">
          <a  
          className="btn btn-primary col-md-12 btn-lg">
            Ver cursos
          </a>        
        </Link>
      </div>

      {/**Second section */}
      <div className='col-md-12 py-4 row'>
        <div className='col-md-6 '>
            <h1 className='text-center display-2'>Barbara Machado</h1>
            <h6>Artista de Maquillaje</h6>
            <p>Bienvenido a mi academia de maquillaje en línea. Este es mi espacio de aprendizaje sobre maquillaje y estoy feliz de compartir lo que he aprendido a lo alrgo de los años.</p>
        </div>
        
        <div className='col-md-6'>
          <div className='card card-body bg-secondary'>
                <Image src='/barbara-makeup3.jpeg' width={400} height={500} alt='Barbara Machado recreando el arte de maquillar' className='img-fluid py-2'/>
          </div>
        </div>
      </div>

      {/**Third Section */}
      <div className='col-md-12 py-4'>
        <Image src='/pagoseguro.png' width={1200} height={200} alt='Pago seguro' className='img-fluid py-2'/>
      </div>

      {/**Fourth Section */}
      <div className='col-md-12 py-4 row text-center'>
        <div className='col-md-4'>
          <div className='card bg-light'>
                <FontAwesomeIcon
                style={{fontSize:"40px"}} 
                icon={faArrowTrendUp} />
            <div className='card-body'>
              <h5>
                <b> Impulsa</b> tu pasión por el arte del maquillaje
              </h5>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card bg-light row'>
            <div className='card-body '>
                <FontAwesomeIcon 
                style={{fontSize:"40px"}}
                icon={faPeopleGroup} />
              <h5>
                <b> Ideal</b> para profesionales y aficionados</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card bg-light'>
                <FontAwesomeIcon 
                style={{fontSize:"40px"}}
                icon={faGraduationCap} />
            <div className='card-body'>
              <h5>
                <b> Aprende</b> información exclusiva</h5>
            </div>
          </div>
        </div>
      </div>

      {/**Fifth Section */}
      <div className='row py-2' >
        <div className='col-md-4 btn-circle'>
                <FontAwesomeIcon
                style={{fontSize:"40px"}} 
                icon={faArrowTrendUp} />
        </div>
        <div className='col-md-4 btn-circle'>
                <FontAwesomeIcon
                style={{fontSize:"40px"}} 
                icon={faArrowTrendUp} />
        </div>
        <div className='col-md-4'>
          <button type="button" className="btn btn-secondary btn-circle btn-xl">Gray circular button</button>	
        </div>
      </div>
    </Layout>
  )
}
