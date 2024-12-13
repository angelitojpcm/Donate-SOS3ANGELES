"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandHoldingHeart,
  faCreditCard,
  faUser,
  faBars,
  faTimes,
  faChevronDown,
  faSignOutAlt,
  faDashboard,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPaypal,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/95 shadow-lg backdrop-blur-md py-2"
      : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm py-6"
  }`;

  const linkClasses = `font-medium transition-colors ${
    isScrolled
      ? "text-secondary-600 hover:text-primary-500"
      : "text-white hover:text-primary-300"
  }`;

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled
                  ? "text-primary-600 group-hover:text-primary-700"
                  : "text-white group-hover:text-gray-200"
              }`}
            />
            <span
              className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-primary-900" : "text-white"
              }`}
            >
              <span className="text-red-700 px-1 py-0.5 rounded bg-white">
                SOS
              </span>{" "}
              3Ángeles
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/campaigns" className={linkClasses}>
              Campañas
            </Link>
            <Link href="/contact" className={linkClasses}>
              Contacto
            </Link>

            {/* Opciones de Administrador */}
            {session && session.user.role === "admin" && (
              <Link href="/admin" className={linkClasses}>
                Admin
              </Link>
            )}

            {/* Métodos de pago aceptados */}
            <div className="flex items-center space-x-2 ml-4 opacity-70 hover:opacity-100 transition-opacity">
              <FontAwesomeIcon
                icon={faPaypal}
                className={`h-4 w-4 ${
                  isScrolled ? "text-[#00457C]" : "text-white"
                } hover:scale-110 transition-transform`}
              />
              <FontAwesomeIcon
                icon={faCcVisa}
                className={`h-4 w-4 ${
                  isScrolled ? "text-[#1A1F71]" : "text-white"
                } hover:scale-110 transition-transform`}
              />
              <FontAwesomeIcon
                icon={faCcMastercard}
                className={`h-4 w-4 ${
                  isScrolled ? "text-[#EB001B]" : "text-white"
                } hover:scale-110 transition-transform`}
              />
              <FontAwesomeIcon
                icon={faCcAmex}
                className={`h-4 w-4 ${
                  isScrolled ? "text-[#006FCF]" : "text-white"
                } hover:scale-110 transition-transform`}
              />
            </div>

            {session ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                    <span className="text-white font-medium">
                      {session.user.name?.[0].toUpperCase()}
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`h-4 w-4 transition-transform ${
                      isProfileMenuOpen ? "rotate-180" : ""
                    } ${isScrolled ? "text-secondary-600" : "text-white"}`}
                  />
                </button>

                <AnimatePresence>
                  {isProfileMenuOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={menuVariants}
                      className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg py-2"
                    >
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50"
                      >
                        <FontAwesomeIcon
                          icon={faDashboard}
                          className="h-4 w-4 mr-2"
                        />
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="h-4 w-4 mr-2"
                        />
                        Mi Perfil
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50"
                      >
                        <FontAwesomeIcon
                          icon={faCog}
                          className="h-4 w-4 mr-2"
                        />
                        Configuración
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        <FontAwesomeIcon
                          icon={faSignOutAlt}
                          className="h-4 w-4 mr-2"
                        />
                        Cerrar Sesión
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/login"
                  className={`font-medium hover:text-primary-500 transition-colors ${
                    isScrolled ? "text-secondary-600" : "text-white"
                  }`}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className={`h-6 w-6 ${
                isScrolled ? "text-secondary-600" : "text-white"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden mt-4 rounded-lg shadow-lg"
            >
              <div className="flex flex-col space-y-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-gray-100">
                <Link
                  href="/campaigns"
                  className="text-secondary-600 hover:text-primary-500 transition-colors"
                >
                  Campañas
                </Link>
                <Link
                  href="/about"
                  className="text-secondary-600 hover:text-primary-500 transition-colors"
                >
                  Nosotros
                </Link>
                <Link
                  href="/contact"
                  className="text-secondary-600 hover:text-primary-500 transition-colors"
                >
                  Contacto
                </Link>

                {/* Opciones de Administrador */}
                {session && session.user.role === "admin" && (
                  <Link
                    href="/admin"
                    className="text-secondary-600 hover:text-primary-500 transition-colors"
                  >
                    Admin
                  </Link>
                )}

                {session ? (
                  <>
                    <div className="pt-4 border-t border-secondary-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                          <span className="text-white font-medium">
                            {session.user.name?.[0].toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-secondary-900 font-medium">
                            {session.user.name}
                          </p>
                          <p className="text-secondary-500 text-sm">
                            {session.user.email}
                          </p>
                        </div>
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center py-2 text-secondary-600 hover:text-primary-500"
                      >
                        <FontAwesomeIcon
                          icon={faDashboard}
                          className="h-4 w-4 mr-2"
                        />
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center py-2 text-secondary-600 hover:text-primary-500"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="h-4 w-4 mr-2"
                        />
                        Mi Perfil
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center py-2 text-secondary-600 hover:text-primary-500"
                      >
                        <FontAwesomeIcon
                          icon={faCog}
                          className="h-4 w-4 mr-2"
                        />
                        Configuración
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="flex items-center w-full py-2 text-red-600 hover:text-red-700"
                      >
                        <FontAwesomeIcon
                          icon={faSignOutAlt}
                          className="h-4 w-4 mr-2"
                        />
                        Cerrar Sesión
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2 pt-4 border-t border-secondary-200">
                    <Link
                      href="/auth/login"
                      className="w-full px-4 py-2 text-center text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      href="/auth/register"
                      className="w-full px-4 py-2 text-center rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
                    >
                      Registrarse
                    </Link>
                  </div>
                )}

                {/* Métodos de pago en móvil */}
                <div className="pt-4 border-t border-secondary-200">
                  <p className="text-sm text-secondary-500 mb-2">
                    Métodos de pago aceptados:
                  </p>
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon
                      icon={faPaypal}
                      className="h-6 w-6 text-[#00457C]"
                    />
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="h-6 w-6 text-[#1A1F71]"
                    />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="h-6 w-6 text-[#EB001B]"
                    />
                    <FontAwesomeIcon
                      icon={faCcAmex}
                      className="h-6 w-6 text-[#006FCF]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
