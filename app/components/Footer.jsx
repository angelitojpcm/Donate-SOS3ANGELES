import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const SOCIAL_LINKS = [
    {
      icon: FaFacebook,
      href: "https://facebook.com/sos3angeles",
      name: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/sos3angeles",
      name: "Twitter",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/sos3angeles",
      name: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/sos3angeles",
      name: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-50 border-t animate-fade-in-up">
      {/* Grid Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna 1 - Información Principal */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-lg font-bold flex items-center gap-1 group hover:scale-105 transition-transform">
              <span className="text-red-600 animate-pulse-subtle">SOS</span>
              <span className="text-primary-900">3Ángeles</span>
            </h3>
            <p className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
              Transformando vidas a través de la generosidad y el compromiso
              social.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, name }, index) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-white shadow-soft 
                           flex items-center justify-center 
                           hover:shadow-lg hover:scale-110 hover:-translate-y-1
                           transition-all duration-300 ease-out"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 text-gray-600 hover:text-primary-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h4 className="text-sm font-semibold text-primary-900">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Campañas", href: "/campaigns" },
                { label: "Impacto", href: "/impact" },
                { label: "Sobre Nosotros", href: "/about" },
              ].map(({ label, href }, index) => (
                <li key={href} style={{ animationDelay: `${index * 50}ms` }}>
                  <a
                    href={href}
                    className="text-sm text-gray-600 hover:text-primary-600 
                             transition-all duration-300 ease-out
                             hover:translate-x-2 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contáctanos */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <h4 className="text-sm font-semibold text-primary-900">
              Contáctanos
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <a href="mailto:support@sos3angeles.org">
                <li className="hover:text-primary-600 transition-colors hover:translate-x-2 transform inline-block">
                  support@sos3angeles.org
                </li>
              </a>
              <a href="tel:+593996930230">
                <li className="hover:text-primary-600 transition-colors hover:translate-x-2 transform inline-block">
                  +593 99-693-0230
                </li>
              </a>
              <li className="hover:text-primary-600 transition-colors">
                Quito, Ecuador
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <h4 className="text-sm font-semibold text-primary-900">
              Newsletter
            </h4>
            <p className="text-sm text-gray-600">
              Suscríbete para recibir actualizaciones sobre nuestro impacto.
            </p>
            <form className="flex gap-2 group">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 text-sm border rounded-lg 
                         transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-primary-500
                         hover:border-primary-400 group-hover:shadow-md"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white text-sm font-medium 
                         rounded-lg hover:bg-primary-700 
                         transition-all duration-300
                         hover:shadow-lg hover:scale-105
                         active:scale-95"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Barra inferior con animación */}
      <div
        className="border-t animate-fade-in-up"
        style={{ animationDelay: "500ms" }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div className="hover:text-primary-900 transition-colors">
              © {new Date().getFullYear()} SOS 3 Ángeles. Todos los derechos
              reservados.
            </div>
            <div className="flex gap-6">
              {["Privacidad", "Términos", "Cookies"].map((item, index) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-primary-600 transition-all duration-300
                           hover:-translate-y-1 inline-block"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
