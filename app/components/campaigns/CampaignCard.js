'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHandHoldingHeart,
  faUsers,
  faClock,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {
  faPaypal,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
} from '@fortawesome/free-brands-svg-icons';

export default function CampaignCard({ id, title, description, goal, raised }) {
  const progress = (raised / goal) * 100;
  const formattedGoal = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(goal);
  const formattedRaised = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(raised);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Link href={`/campaigns/${id}`}>
        <div className="relative h-full bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden border border-gray-100">
          {/* Imagen con overlay gradiente y efectos */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src="/campaign-placeholder.jpg"
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/70 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Overlay con información */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                  <FontAwesomeIcon icon={faHeart} className="w-3 h-3 mr-1.5 text-red-400" />
                  Campaña Activa
                </span>
                <span className="px-3 py-1.5 text-sm font-medium text-white bg-primary-600/90 rounded-full backdrop-blur-sm shadow-lg">
                  <FontAwesomeIcon icon={faHandHoldingHeart} className="w-4 h-4 mr-1.5" />
                  Destacado
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {title}
              </h3>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-secondary-600 mb-6 line-clamp-2 group-hover:text-secondary-900 transition-colors">
              {description}
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-b from-primary-50 to-primary-100/50 rounded-xl border border-primary-100 hover:shadow-sm transition-all">
                <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary-100">
                  <FontAwesomeIcon icon={faUsers} className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm font-semibold text-primary-900">125</p>
                <p className="text-xs text-primary-600">Donantes</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-b from-primary-50 to-primary-100/50 rounded-xl border border-primary-100 hover:shadow-sm transition-all">
                <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary-100">
                  <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm font-semibold text-primary-900">15</p>
                <p className="text-xs text-primary-600">Días restantes</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-b from-primary-50 to-primary-100/50 rounded-xl border border-primary-100 hover:shadow-sm transition-all">
                <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary-100">
                  <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-sm font-semibold text-primary-900">Alto</p>
                <p className="text-xs text-primary-600">Impacto</p>
              </div>
            </div>

            {/* Barra de progreso con animación */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-3">
                <div>
                  <span className="font-semibold text-primary-900 text-lg">{formattedRaised}</span>
                  <span className="text-xs text-primary-600 ml-1">recaudado</span>
                </div>
                <div>
                  <span className="text-secondary-500">Meta: </span>
                  <span className="font-medium text-secondary-700">{formattedGoal}</span>
                </div>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-inner"
                />
              </div>
              <div className="mt-1 text-right">
                <span className="text-xs font-medium text-primary-600">{progress.toFixed(0)}% completado</span>
              </div>
            </div>

            {/* Métodos de pago y botón */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-[#00457C]/10 hover:bg-[#00457C]/20 transition-colors">
                  <FontAwesomeIcon icon={faPaypal} className="h-4 w-4 text-[#00457C]" />
                </div>
                <div className="p-2 rounded-lg bg-[#1A1F71]/10 hover:bg-[#1A1F71]/20 transition-colors">
                  <FontAwesomeIcon icon={faCcVisa} className="h-4 w-4 text-[#1A1F71]" />
                </div>
                <div className="p-2 rounded-lg bg-[#EB001B]/10 hover:bg-[#EB001B]/20 transition-colors">
                  <FontAwesomeIcon icon={faCcMastercard} className="h-4 w-4 text-[#EB001B]" />
                </div>
                <div className="p-2 rounded-lg bg-[#006FCF]/10 hover:bg-[#006FCF]/20 transition-colors">
                  <FontAwesomeIcon icon={faCcAmex} className="h-4 w-4 text-[#006FCF]" />
                </div>
              </div>
              <button className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg flex items-center space-x-2">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="w-4 h-4" />
                <span>Donar Ahora</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
