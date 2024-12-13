'use client';
import { useState } from 'react';
import Image from 'next/image';
import DonationForm from '../../components/DonationForm';

// En un caso real, estos datos vendrían de una base de datos
const getCampaignData = (id) => {
  return {
    id: id,
    title: "Alimentos para Familias",
    description: "Ayuda a proporcionar alimentos nutritivos a familias necesitadas en nuestra comunidad. Tu donación ayudará a asegurar que ninguna familia se quede sin una comida nutritiva en la mesa.",
    longDescription: `
      Nuestra campaña "Alimentos para Familias" tiene como objetivo proporcionar apoyo nutricional 
      a familias que enfrentan inseguridad alimentaria en nuestra comunidad. Con tu ayuda, podemos:

      - Proporcionar paquetes de alimentos nutritivos a familias necesitadas
      - Asegurar que los niños tengan acceso a comidas saludables
      - Apoyar a adultos mayores con necesidades alimentarias especiales
      - Crear un impacto duradero en la salud de nuestra comunidad
    `,
    goal: 5000,
    raised: 3200,
    donors: 150,
    daysLeft: 15,
    category: "Alimentación",
    image: "/campaigns/food-drive.jpg",
    updates: [
      {
        date: "2024-12-01",
        title: "¡Alcanzamos el 60% de nuestra meta!",
        content: "Gracias a la generosidad de nuestros donantes, hemos logrado un gran avance."
      },
      {
        date: "2024-11-15",
        title: "Inicio de distribución",
        content: "Comenzamos la distribución de alimentos a las primeras 50 familias."
      }
    ],
    impact: {
      familiesHelped: 75,
      mealsProvided: 2250,
      volunteersInvolved: 25
    }
  };
};

export default function CampaignPage({ params }) {
  const [activeTab, setActiveTab] = useState('about');
  const campaign = getCampaignData(params.id);
  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  {campaign.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-primary-900 mb-4">
                {campaign.title}
              </h1>
              <p className="text-gray-700 mb-6">
                {campaign.description}
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Recaudado</span>
                    <span className="font-semibold text-primary-900">
                      ${campaign.raised.toLocaleString()} de ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 rounded-full h-2"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {campaign.donors}
                    </div>
                    <div className="text-sm text-gray-600">Donantes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      ${campaign.raised.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Recaudado</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {campaign.daysLeft}
                    </div>
                    <div className="text-sm text-gray-600">Días Restantes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                {/* Aquí iría la imagen de la campaña */}
                <span className="text-gray-500">Imagen de la Campaña</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contenido Principal */}
            <div className="md:col-span-2">
              {/* Tabs de Navegación */}
              <div className="mb-8 border-b">
                <div className="flex space-x-8">
                  {['about', 'updates', 'impact'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-2 text-lg font-medium transition-colors ${
                        activeTab === tab
                          ? 'border-b-2 border-primary-600 text-primary-900'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contenido de los Tabs */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                {activeTab === 'about' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Sobre esta Campaña
                    </h2>
                    <div className="whitespace-pre-line text-gray-700">
                      {campaign.longDescription}
                    </div>
                  </div>
                )}

                {activeTab === 'updates' && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-6">
                      Actualizaciones
                    </h2>
                    <div className="space-y-6">
                      {campaign.updates.map((update, index) => (
                        <div key={index} className="border-b pb-6 last:border-b-0">
                          <div className="text-sm text-gray-500 mb-2">
                            {update.date}
                          </div>
                          <h3 className="text-xl font-semibold text-primary-900 mb-2">
                            {update.title}
                          </h3>
                          <p className="text-gray-700">
                            {update.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'impact' && (
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-6">
                      Impacto
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-900 mb-2">
                          {campaign.impact.familiesHelped}
                        </div>
                        <div className="text-gray-600">
                          Familias Ayudadas
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-900 mb-2">
                          {campaign.impact.mealsProvided}
                        </div>
                        <div className="text-gray-600">
                          Comidas Entregadas
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-900 mb-2">
                          {campaign.impact.volunteersInvolved}
                        </div>
                        <div className="text-gray-600">
                          Voluntarios
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar con Formulario de Donación */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <DonationForm campaignId={campaign.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Compartir */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">
            Comparte esta Campaña
          </h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Facebook
            </button>
            <button className="bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">
              Twitter
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
