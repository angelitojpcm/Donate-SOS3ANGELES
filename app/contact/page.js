"use client";
import { useState } from "react";
import Hero from "../components/Hero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Hero />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-900 mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
              Estamos aquí para escucharte y responder tus preguntas
            </p>
          </div>
        </section>

        {/* Información de Contacto + Formulario */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de Contacto */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Información de Contacto
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Dirección
                    </h3>
                    <p className="text-gray-600">
                      Calle Principal #123
                      <br />
                      Ciudad, Estado 12345
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Teléfono
                    </h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">contacto@sos3angeles.org</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Horario de Atención
                    </h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábado: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Envíanos un Mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa o Imagen de Ubicación */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="h-96 bg-gray-200 rounded-lg">
              {/* Aquí iría el componente de mapa o una imagen */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Mapa de Ubicación
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
