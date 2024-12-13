import CampaignCard from '../components/campaigns/CampaignCard';

export default function CampaignsPage() {
  // Ejemplo de campañas (en un caso real, esto vendría de una base de datos)
  const campaigns = [
    {
      id: 1,
      title: "Alimentos para Familias",
      description: "Ayuda a proporcionar alimentos nutritivos a familias necesitadas en nuestra comunidad.",
      goal: 5000,
      raised: 3200,
      image: "/campaigns/food-drive.jpg",
      category: "Alimentación",
      endDate: "2024-12-31"
    },
    {
      id: 2,
      title: "Útiles Escolares",
      description: "Dona para proporcionar materiales escolares a niños de bajos recursos.",
      goal: 3000,
      raised: 1500,
      image: "/campaigns/education.jpg",
      category: "Educación",
      endDate: "2024-12-25"
    },
    {
      id: 3,
      title: "Atención Médica",
      description: "Ayuda a proporcionar atención médica básica a personas sin recursos.",
      goal: 10000,
      raised: 7500,
      image: "/campaigns/healthcare.jpg",
      category: "Salud",
      endDate: "2024-12-28"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-900 mb-6">
            Nuestras Campañas
          </h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Conoce las causas actuales y únete a nosotros para hacer la diferencia
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 rounded-full bg-primary-100 text-primary-900 hover:bg-primary-200 transition-colors">
              Todas
            </button>
            <button className="px-6 py-2 rounded-full hover:bg-primary-100 text-gray-700 transition-colors">
              Alimentación
            </button>
            <button className="px-6 py-2 rounded-full hover:bg-primary-100 text-gray-700 transition-colors">
              Educación
            </button>
            <button className="px-6 py-2 rounded-full hover:bg-primary-100 text-gray-700 transition-colors">
              Salud
            </button>
          </div>
        </div>
      </section>

      {/* Lista de Campañas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                {...campaign}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Impacto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            Nuestro Impacto
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">100+</div>
              <div className="text-gray-600">Campañas Exitosas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">$500K+</div>
              <div className="text-gray-600">Fondos Recaudados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">10,000+</div>
              <div className="text-gray-600">Vidas Impactadas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
