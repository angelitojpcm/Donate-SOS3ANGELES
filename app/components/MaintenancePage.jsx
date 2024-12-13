"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/assets/img/logo.png"
              alt="SOS 3 Ángeles"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Sitio en Mantenimiento
          </h1>

          {/* Mensaje */}
          <p className="text-xl text-gray-600 mb-8">
            Estamos realizando mejoras para brindarte una mejor experiencia.
            Volveremos pronto.
          </p>

          {/* Animación de Progreso */}
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Información de Contacto */}
          <div className="space-y-4">
            <p className="text-gray-600">Para consultas urgentes:</p>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="mailto:soporte@sos3angeles.org"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                soporte@sos3angeles.org
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="tel:+593996930230"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                +593 99-693-0230
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
