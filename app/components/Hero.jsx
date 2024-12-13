import Image from "next/image";
import React from "react";

export default function Hero({
  title = "Transformando Vidas a Través de tu Generosidad",
  description = "Únete a nuestra misión de crear un impacto positivo en la comunidad. Cada donación cuenta para construir un futuro mejor.",
  primaryButtonText = "Donar Ahora",
  primaryButtonLink = "#donate",
  secondaryButtonText = "Ver Campañas",
  secondaryButtonLink = "#campaigns",
  imageSrc = "/hero-image.jpg",
  imageAlt = "Impacto Social",
}) {
  return (
    <>
      {/* Hero Section con Gradiente Animado y Patrón */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 animate-gradient-xy overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        {/* Elementos decorativos flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500 rounded-full opacity-10 animate-float"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-accent-500 rounded-full opacity-10 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary-500 rounded-full opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                {title}
              </h1>
              <p
                className="text-xl text-primary-100 max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {description}
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="#donate"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-all duration-300 hover:shadow-glow-strong overflow-hidden"
                >
                  <span className="relative z-10">{primaryButtonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#campaigns"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-primary-400 hover:border-primary-300 rounded-lg transition-all duration-300 hover:shadow-glow"
                >
                  {secondaryButtonText}
                </a>
              </div>
            </div>
            <div
              className="hidden md:block relative animate-fade-in-left"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-strong">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
