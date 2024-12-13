import Navbar from "./components/Navbar";
import CampaignCard from "./components/campaigns/CampaignCard";
import DonationForm from "./components/DonationForm";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Hero from "./components/Hero";

async function getCampaigns() {
  return [
    {
      id: 1,
      title: "Ayuda Humanitaria",
      description: "Apoyo a familias afectadas por desastres naturales",
      goal: 10000,
      raised: 7500,
    },
  ];
}

export default async function Home() {
  const campaigns = await getCampaigns();

  return (
    <>
      <Hero />
      {/* Sección de Campañas con Efectos de Hover */}
      <section id="campaigns" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Campañas Destacadas
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Descubre proyectos que están transformando nuestra comunidad y
              únete a nuestra causa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CampaignCard {...campaign} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Donación con Fondo Gradiente */}
      <section
        id="donate"
        className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 animate-gradient-xy relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <DonationForm />
          </div>
        </div>
      </section>
    </>
  );
}
