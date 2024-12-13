export default function ImpactPage() {
  const impactStats = [
    {
      number: "100,000+",
      label: "Personas Ayudadas",
      description: "Hemos llegado a más de cien mil personas necesitadas en nuestra comunidad"
    },
    {
      number: "$1M+",
      label: "Fondos Recaudados",
      description: "Gracias a la generosidad de nuestros donantes, hemos recaudado más de un millón de dólares"
    },
    {
      number: "50+",
      label: "Programas Activos",
      description: "Mantenemos más de cincuenta programas activos de ayuda comunitaria"
    }
  ];

  const successStories = [
    {
      title: "Programa de Alimentación",
      description: "Proporcionamos más de 10,000 comidas nutritivas a familias necesitadas",
      image: "/impact/food-program.jpg",
      stats: {
        beneficiaries: "500+ familias",
        meals: "10,000+ comidas",
        volunteers: "100+ voluntarios"
      }
    },
    {
      title: "Educación para Todos",
      description: "Becamos a 200 estudiantes para continuar sus estudios",
      image: "/impact/education-program.jpg",
      stats: {
        students: "200+ estudiantes",
        schools: "15 escuelas",
        graduation: "95% tasa de graduación"
      }
    },
    {
      title: "Atención Médica",
      description: "Proporcionamos atención médica gratuita a comunidades sin acceso",
      image: "/impact/healthcare-program.jpg",
      stats: {
        patients: "1,000+ pacientes",
        clinics: "5 clínicas móviles",
        doctors: "20+ médicos voluntarios"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-900 mb-6">
            Nuestro Impacto
          </h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Transformando vidas y construyendo un futuro mejor para nuestra comunidad
          </p>
        </div>
      </section>

      {/* Estadísticas de Impacto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl font-bold text-primary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-4">
                  {stat.label}
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historias de Éxito */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            Historias de Éxito
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-200">
                  {/* Aquí iría la imagen del programa */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Imagen del Programa
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {story.description}
                  </p>
                  <div className="space-y-2">
                    {Object.entries(story.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-semibold text-primary-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            Testimonios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Gracias a SOS 3 Ángeles, mi familia pudo acceder a atención médica cuando más lo necesitábamos.",
                author: "María González",
                role: "Beneficiaria"
              },
              {
                quote: "El programa de becas me permitió continuar mis estudios y ahora soy profesional.",
                author: "Juan Pérez",
                role: "Estudiante Becado"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </div>
                <div className="font-semibold text-primary-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la Acción */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sé Parte del Cambio
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tu apoyo nos permite continuar transformando vidas y construyendo un futuro mejor
            para nuestra comunidad.
          </p>
          <button className="bg-white text-primary-900 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Donar Ahora
          </button>
        </div>
      </section>
    </div>
  );
}
