import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
<nav 
className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        {/**TODO: Reemplazar logo por uno con letras blancas, sin fondo y que no aumente el height del navbar*/}
        <Image src='/logo.png' 
        alt='logotipo de Barbara Machado' 
        width="150" height="50" className='img-fluid'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link href="/">
                <a className="nav-link active" aria-current="page">Inicio</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/cursos">
                <a className="nav-link">Cursos</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/testimonios">
                <a className="nav-link" >Testimonios</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/faq">
                <a className="nav-link">Preguntas Frecuentes</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/contacto">
                <a className="nav-link">Contacto</a>
            </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Zona Premium</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default Navbar;