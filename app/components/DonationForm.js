"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DONATION_AMOUNTS = [
  { value: 10, label: "$10", description: "Proporciona 5 comidas" },
  {
    value: 25,
    label: "$25",
    description: "Ayuda a una familia por una semana",
  },
  { value: 50, label: "$50", description: "Apoya la educación de un niño" },
  { value: 100, label: "$100", description: "Brinda atención médica mensual" },
];

const PAYMENT_METHODS = [
  {
    id: "card",
    name: "Tarjeta",
    icon: "/assets/icons/card.svg",
    description: "Débito o Crédito",
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: "/assets/icons/paypal.svg",
    description: "Pago seguro online",
  },
  {
    id: "transfer",
    name: "Transferencia",
    icon: "/assets/icons/bank.svg",
    description: "Transferencia bancaria",
  },
];

export default function DonationForm({ campaignId }) {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isRecurring, setIsRecurring] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [customAmountError, setCustomAmountError] = useState("");

  const handleCustomAmountChange = (e) => {
    const inputValue = e.target.value;

    // Remove non-numeric characters except for decimal point
    const cleanedValue = inputValue.replace(/[^\d.]/g, "");

    // Validate amount
    if (cleanedValue === "") {
      setCustomAmount("");
      setAmount(0);
      setCustomAmountError("");
    } else {
      const numericValue = parseFloat(cleanedValue);

      if (isNaN(numericValue)) {
        setCustomAmountError("Ingrese un monto válido");
      } else if (numericValue < 5) {
        setCustomAmountError("El monto mínimo es $5");
        setCustomAmount(cleanedValue);
        setAmount(0);
      } else if (numericValue > 10000) {
        setCustomAmountError("El monto máximo es $10,000");
        setCustomAmount(cleanedValue);
        setAmount(0);
      } else {
        setCustomAmount(cleanedValue);
        setAmount(numericValue);
        setCustomAmountError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Aquí iría la lógica real de procesamiento
  };

  return (
    <div className="bg-white rounded-2xl shadow-strong overflow-hidden transform transition-all duration-500 hover:shadow-glow animate-fade-in">
      {/* Header con gradiente */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 p-8 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">
            Haz tu Donación
          </h3>
          <p className="text-primary-100">
            Tu generosidad puede transformar vidas
          </p>
        </div>
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {/* Selector de Monto */}
        <div className="space-y-4 mb-8">
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Selecciona el monto a donar
          </label>
          <div className="grid grid-cols-2 gap-4">
            {DONATION_AMOUNTS.map(({ value, label, description }) => (
              <motion.button
                key={value}
                type="button"
                onClick={() => {
                  setAmount(value);
                  setCustomAmount("");
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className={`
        relative group p-4 rounded-xl border-2
        ${
          amount === value
            ? "border-primary-500 bg-primary-50 shadow-md"
            : "border-gray-200 hover:border-primary-300 hover:shadow-md"
        }
      `}
              >
                <motion.div
                  animate={{
                    scale: amount === value ? 1.05 : 1,
                    color: amount === value ? "#1a56db" : "#1f2937",
                  }}
                  className="text-lg font-bold mb-1"
                >
                  {label}
                </motion.div>

                <motion.div
                  animate={{
                    color: amount === value ? "#4b5563" : "#6b7280",
                  }}
                  className="text-sm"
                >
                  {description}
                </motion.div>

                <AnimatePresence>
                  {amount === value && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full 
                     flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>

          {/* Monto personalizado */}
          <div className="relative mt-4 animate-fade-in-up group">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-500 text-lg font-medium group-focus-within:text-primary-500 transition-colors">
                  $
                </span>
              </div>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Otro monto (mínimo $5)"
                className="
        w-full
        pl-8 pr-4 py-4
        text-lg font-medium
        text-gray-800
        placeholder:text-gray-400
        bg-white
        border-2 border-gray-200
        rounded-xl
        outline-none
        transition-all duration-300
        hover:border-primary-400
        focus:border-primary-500
        focus:ring-4 
        focus:ring-primary-500/20
      "
              />
            </div>
            {customAmountError && (
              <div className="mt-1 text-sm text-red-500 flex items-center animate-shake">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {customAmountError}
              </div>
            )}
          </div>
        </div>

        {/* Tipo de Donación */}
        <div className="mb-8 animate-fade-in-up">
          <label className="block text-sm font-medium text-secondary-700 mb-4">
            Frecuencia de donación
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setIsRecurring(false)}
              className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                !isRecurring
                  ? "border-primary-500 bg-primary-50"
                  : "border-gray-200 hover:border-primary-300"
              }`}
            >
              <div className="text-lg font-medium text-primary-900">Única</div>
              <div className="text-sm text-secondary-600">Una sola vez</div>
            </button>
            <button
              type="button"
              onClick={() => setIsRecurring(true)}
              className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                isRecurring
                  ? "border-primary-500 bg-primary-50"
                  : "border-gray-200 hover:border-primary-300"
              }`}
            >
              <div className="text-lg font-medium text-primary-900">
                Mensual
              </div>
              <div className="text-sm text-secondary-600">Cada mes</div>
            </button>
          </div>
        </div>

        {/* Métodos de Pago */}
        <div className="mb-8 animate-fade-in-up">
          <label className="block text-sm font-medium text-secondary-700 mb-4">
            Método de pago
          </label>
          <div className="space-y-4">
            {PAYMENT_METHODS.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setPaymentMethod(method.id)}
                className={`
                  w-full flex items-center p-4 rounded-xl border-2 
                  transition-all duration-300 transform
                  ${
                    paymentMethod === method.id
                      ? "border-primary-500 bg-primary-50 scale-[1.02] shadow-md"
                      : "border-gray-200 hover:border-primary-300 hover:scale-[1.01]"
                  }
                `}
              >
                <div
                  className="w-12 h-12 bg-white rounded-lg shadow-soft flex items-center justify-center mr-4 
                              transition-transform duration-300 
                              ${paymentMethod === method.id ? 'scale-110' : ''}"
                >
                  <div className="w-8 h-8 text-primary-600 transition-all duration-300">
                    <Image
                      src={method.icon}
                      alt={method.name}
                      width={80}
                      height={80}
                      className={`transition-transform duration-300 
                                 ${
                                   paymentMethod === method.id
                                     ? "scale-110"
                                     : ""
                                 }`}
                    />
                  </div>
                </div>
                <div className="flex-1 transition-colors duration-300">
                  <div
                    className={`text-lg font-medium transition-colors duration-300
                                 ${
                                   paymentMethod === method.id
                                     ? "text-primary-900"
                                     : "text-secondary-700"
                                 }`}
                  >
                    {method.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {method.description}
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ml-4
                                transition-all duration-300 transform
                                ${
                                  paymentMethod === method.id
                                    ? "bg-primary-500 scale-100 rotate-0 opacity-100"
                                    : "scale-0 -rotate-90 opacity-0"
                                }`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Botón de Donación */}
        <button
          type="submit"
          disabled={isProcessing || amount <= 0}
          className="relative w-full py-4 px-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center justify-center">
            {isProcessing ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Procesando...
              </>
            ) : (
              <>
                Donar ${amount}
                {isRecurring && " mensualmente"}
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </>
            )}
          </span>
        </button>

        {/* Indicadores de Seguridad */}
        <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-secondary-500 animate-fade-in-up">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Donación Segura
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            SSL Encriptado
          </div>
        </div>
      </form>
    </div>
  );
}
