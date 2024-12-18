"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { RainEffect, RainSound } from "./Rain";

export default function MaintenancePage({ message, endTime }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isValid: false,
  });

  useEffect(() => {
    if (endTime) {
      const timer = setInterval(() => {
        const end = new Date(endTime);
        const now = new Date();
        const diff = end - now;

        if (diff <= 0) {
          clearInterval(timer);
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isValid: false,
          });
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isValid: true,
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [endTime]);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/assets/img/backgrounds/vidanocampo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <RainEffect />
      <RainSound />
      <div className="container px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-32 h-32 mx-auto relative">
            <Image
              src="/assets/img/logo.png"
              alt="Mantenimiento"
              width={128}
              height={128}
              className="mx-auto"
            />
          </div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sitio en Mantenimiento
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {message ||
              "Estamos realizando mejoras para brindarte una mejor experiencia. Volveremos pronto."}
          </motion.p>

          {timeLeft && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <p className="text-lg text-white/70 mb-4">Volveremos en:</p>
              <div className="flex justify-center gap-4">
                <motion.div
                  className="bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl font-bold text-primary-600">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-gray-500">días</p>
                </motion.div>
                <motion.div
                  className="bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl font-bold text-primary-600">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-gray-500">horas</p>
                </motion.div>
                <motion.div
                  className="bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl font-bold text-primary-600">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-gray-500">minutos</p>
                </motion.div>
                <motion.div
                  className="bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: { duration: 1, repeat: Infinity },
                  }}
                >
                  <span className="text-3xl font-bold text-primary-600">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-gray-500">segundos</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-12">
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

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white/90">Para consultas urgentes:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <a
                href="mailto:soporte@sos3angeles.org"
                className="flex items-center gap-2 
                text-white/80 hover:text-white
                transition-all hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                soporte@sos3angeles.org
              </a>
              <span className="hidden md:inline text-gray-300">|</span>
              <a
                href="tel:+593996930230"
                className="flex items-center gap-2 
                text-white/80 hover:text-white
                transition-all hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +593 99-693-0230
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
