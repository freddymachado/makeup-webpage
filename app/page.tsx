import { Button } from "../components/ui/button"
import { Ballet } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'


const dancingScript = localFont({ src: '../public/fonts/MrDafoe-Regular.ttf' })


const ballet = Ballet({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen w-full" style={{ backgroundColor: "#3d2f1f" }}>
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-12 mt-40">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-2">
            {/* Top line with MARCA and PERSONAL */}
            <div className="flex items-center gap-8 text-white text-sm font-small tracking-[0.1em]">
              <span>MARCA</span>
            <div className={`text-white text-7xl md:text-8xl lg:text-9xl font-dancing-script font-normal leading-none ${ballet.className}`}>
              Visible
            </div>
              <span>PERSONAL</span>
            </div>


            {/* Bottom text */}
            <div className="text-white text-sm font-medium tracking-[0.2em] uppercase">BOOTCAMP INTENSIVO</div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-orange-400 hover:bg-orange-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg"
            size="lg"
          >
            ¿Quieres inscribirte?
          </Button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full px-8 py-16 lg:py-24 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
            {/* Quote Section */}
            <div className="space-y-8 items-center">
              <blockquote className="text-white text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-light justify-center text-center">
                <span className="text-5xl lg:text-6xl">"</span>
                Visible no solo <em className="font-dancing-script text-3xl lg:text-4xl xl:text-5xl">transforma</em> tu
                presencia en redes, transforma la forma{" "}
                <em className="font-dancing-script text-3xl lg:text-4xl xl:text-5xl">
                  en que te ves, te comunicas y te posicionas
                </em>
                . No es sólo mostrarte: es reconocerte, sostenerte y elegirte con estrategia y con verdad.
                <span className="text-5xl lg:text-6xl">"</span>
              </blockquote>

              <div className="flex justify-center">
                <Button
                  className="bg-orange-400 hover:bg-orange-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg underline"
                  size="lg"
                >
                  Descubre más
                </Button>
              </div>
            </div>

            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone frame effect */}
                <div className="bg-gray-200 p-4 rounded-3xl shadow-2xl max-w-sm">
                    <Image
                      src="/barbara-makeup3.jpeg"
                      alt="Professional woman in business attire"
                      className="w-full h-auto rounded-xl grayscale"
                      width={400}
                      height={600}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="w-full px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* 6 Semanas */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-20 bg-gray-300 rounded-lg transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-6xl lg:text-7xl font-bold">6</span>
                </div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                SEMANAS DE
                <br />
                FORMACIÓN
              </div>
            </div>

            {/* TU Biblia */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-12 h-16 bg-amber-200 rounded-sm transform rotate-6"></div>
                <div className="absolute -top-2 -right-2 w-12 h-16 bg-amber-100 rounded-sm transform -rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black text-4xl lg:text-5xl font-bold">TU</span>
                </div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                BIBLIA DE MARCA
                <br />
                PERSONAL
              </div>
            </div>

            {/* 15 Acciones */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-amber-300 rounded-full opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black text-5xl lg:text-6xl font-bold">15</span>
                </div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                ACCIONES
                <br />
                PRÁCTICAS
              </div>
            </div>

            {/* 16 Clases */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-12 bg-gray-300 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black text-4xl lg:text-5xl font-bold">16</span>
                </div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                CLASES
                <br />
                GRABADAS
              </div>
            </div>

            {/* 12 Sesiones */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-green-600 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl lg:text-5xl font-bold">12</span>
                </div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                SESIONES
                <br />
                EN VIVO
              </div>
            </div>

            {/* 5 Clases Adicionales */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-red-600 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl lg:text-5xl font-bold">5</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                CLASES EN VIVO
                <br />
                ADICIONALES
              </div>
            </div>

            {/* Sesiones Exclusivas */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-black rounded-full border-2 border-gray-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">8</span>
                </div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                SESIONES EXCLUSIVAS
                <br />
                CON PROFESIONALES
              </div>
            </div>

            {/* Certificado */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-12 bg-amber-100 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                CERTIFICADO DE
                <br />
                PARTICIPACIÓN
              </div>
            </div>

            {/* Comunidad */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-12 h-20 bg-gray-800 rounded-lg border border-gray-600"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="text-white text-sm font-medium tracking-[0.15em] uppercase">
                COMUNIDAD PRIVADA Y<br />
                EXCLUSIVA
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}