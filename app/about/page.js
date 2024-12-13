import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-900 mb-6">
            Sobre SOS 3 Ángeles
          </h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Dedicados a transformar vidas y construir un futuro mejor para nuestra comunidad
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Nuestra Misión</h2>
            <p className="text-gray-700">
              Trabajamos incansablemente para proporcionar ayuda y apoyo a quienes más lo necesitan,
              creando un impacto positivo y duradero en nuestra comunidad a través de programas
              sostenibles y acciones concretas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Nuestra Visión</h2>
            <p className="text-gray-700">
              Aspiramos a construir una sociedad más equitativa y solidaria, donde cada persona
              tenga acceso a las oportunidades y recursos necesarios para desarrollar su máximo
              potencial.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparencia',
                description: 'Mantenemos la claridad y honestidad en todas nuestras acciones y el uso de recursos.'
              },
              {
                title: 'Compromiso',
                description: 'Dedicamos nuestro esfuerzo y recursos para lograr un impacto positivo y duradero.'
              },
              {
                title: 'Solidaridad',
                description: 'Trabajamos unidos para ayudar a quienes más lo necesitan en nuestra comunidad.'
              }
            ].map((valor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {valor.title}
                </h3>
                <p className="text-gray-700">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ana García',
                role: 'Directora Ejecutiva',
                image: '/team/member1.jpg'
              },
              {
                name: 'Carlos Rodríguez',
                role: 'Coordinador de Proyectos',
                image: '/team/member2.jpg'
              },
              {
                name: 'María López',
                role: 'Responsable de Voluntariado',
                image: '/team/member3.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl text-gray-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
