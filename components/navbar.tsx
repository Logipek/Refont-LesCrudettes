"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Backdrop blur et gradient premium */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-r from-black/20 via-black/10 to-black/20 backdrop-blur-sm'
        }`}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-3"
            style={{ scale: isScrolled ? 0.8 : 1 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: isScrolled ? 0 : [0, 10, 0] }}
                transition={{ repeat: isScrolled ? 0 : Infinity, duration: 3 }}
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-green-300 to-emerald-500 opacity-30 blur-md"
              />
              <Leaf className={`h-8 w-8 transition-colors duration-500 relative ${
                isScrolled ? 'text-green-600' : 'text-white drop-shadow-glow'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'
              }`}>Les Crudettes</span>
              <span className={`text-xs uppercase tracking-widest font-medium transition-all duration-500 ${
                isScrolled ? 'text-green-600' : 'text-green-200'
              }`}>Fraîcheur & Qualité</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Accueil', href: '/', delay: 0.2 },
              { name: 'Produits', href: '/produits', delay: 0.3 },
              { name: 'Histoire', href: '/histoire', delay: 0.4 },
              { name: 'Recettes', href: '/recettes', delay: 0.5 }
            ].map((item) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Link
                  href={item.href}
                  className={`relative transition-colors duration-300 text-sm uppercase tracking-wider font-medium ${
                    isScrolled
                      ? 'text-gray-700 hover:text-green-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <motion.span
                    whileHover={!isScrolled ? {
                      textShadow: "0 0 8px rgb(255,255,255)"
                    } : {}}
                  >
                    {item.name}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-current origin-left transform scale-x-0 transition-transform duration-300`}
                      whileHover={{ scaleX: 1 }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={`rounded-full px-6 py-5 transition-all duration-300 font-medium ${
                  isScrolled
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 hover:shadow-lg hover:shadow-green-200/30"
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                }`}
              >
                Contact
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <motion.div
                className={`absolute -inset-3 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "bg-red-100" : isScrolled ? "bg-green-50" : "bg-white/10"
                }`}
                animate={{ scale: isMenuOpen ? 1 : 0.7, opacity: isMenuOpen ? 0.8 : 0 }}
              />
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden py-4 rounded-2xl overflow-hidden backdrop-blur-lg"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98))",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1), 0 1px 5px rgba(0,0,0,0.05)"
              }}
            >
              <nav className="flex flex-col space-y-0">
                {[
                  { name: 'Accueil', href: '/' },
                  { name: 'Produits', href: '/produits' },
                  { name: 'Histoire', href: '/histoire' },
                  { name: 'Recettes', href: '/recettes' }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors px-6 py-3 font-medium block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 px-4">
                  <Button
                    variant="default"
                    className="rounded-full w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 font-medium"
                  >
                    Contact
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
