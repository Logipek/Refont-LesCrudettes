"use client";

import { motion } from "framer-motion";
import { Leaf, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 relative overflow-hidden">
      {/* Motifs décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="particles-container"></div>
      </div>

      {/* Effet de lumière */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 blur-md"
                />
                <Leaf className="h-8 w-8 text-green-400 relative" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Les Crudettes</span>
                <span className="text-xs uppercase tracking-widest font-medium text-green-400">Fraîcheur & Qualité</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Des produits frais et savoureux, cultivés avec passion pour une alimentation saine et responsable.
            </p>

            <div className="pt-4">
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Visitez notre page Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Suivez-nous sur Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Suivez-nous sur Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white/90 relative inline-block">
              Navigation
              <motion.span
                className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-green-500 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Produits', href: '/produits' },
                { name: 'Histoire', href: '/histoire' },
                { name: 'Recettes', href: '/recettes' }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white hover:text-green-300 transition-colors group flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 mr-2 transition-all duration-300 group-hover:w-2 group-hover:bg-green-400"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white/90 relative inline-block">
              Contact
              <motion.span
                className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-green-500 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </h4>
            <ul className="space-y-3 text-gray-400">
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="flex items-center space-x-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-900/40 transition-colors">
                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 10.9 21.1 10 20 10C18.9 10 18 10.9 18 12C18 13.1 18.9 14 20 14C21.1 14 22 13.1 22 12ZM16 12C16 10.9 15.1 10 14 10C12.9 10 12 10.9 12 12C12 13.1 12.9 14 14 14C15.1 14 16 13.1 16 12ZM10 12C10 10.9 9.1 10 8 10C6.9 10 6 10.9 6 12C6 13.1 6.9 14 8 14C9.1 14 10 13.1 10 12Z" fill="currentColor" />
                  </svg>
                </div>
                <span>contact@lescrudettes.fr</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="flex items-center space-x-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-900/40 transition-colors">
                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="currentColor" />
                    <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.775 16.225 6 13 6V8Z" fill="currentColor" />
                    <path d="M16.422 14.443C16.2299 14.2683 15.9774 14.1752 15.7178 14.1832C15.4583 14.1912 15.212 14.2998 15.031 14.486L12.638 17.119C12.062 17.028 10.904 16.753 9.71201 15.561C8.52001 14.369 8.24501 13.207 8.15701 12.634L10.791 10.238C10.977 10.0571 11.0857 9.81085 11.0937 9.55133C11.1017 9.2918 11.0087 9.03926 10.834 8.84701L6.59801 4.29401C6.42335 4.10152 6.1885 3.9822 5.94927 3.9636C5.71003 3.94501 5.4697 4.01782 5.27601 4.16601L2.51601 6.50701C2.34238 6.6772 2.2281 6.90362 2.19001 7.14701C2.15001 7.39701 1.45601 11.956 5.17101 15.671C8.48701 18.987 12.454 19 13.488 19C13.696 19 13.823 18.994 13.855 18.992C14.099 18.9553 14.3262 18.8421 14.497 18.669L16.838 15.908C16.9871 15.7146 17.0606 15.4741 17.0423 15.2345C17.024 14.9948 16.9147 14.7693 16.731 14.599L16.422 14.443Z" fill="currentColor" />
                  </svg>
                </div>
                <span>01 23 45 67 89</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1 }}
                className="flex items-start space-x-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-900/40 transition-colors mt-0.5">
                  <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                  </svg>
                </div>
                <span>123 rue des Légumes<br />75000 Paris</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white/90 relative inline-block">
              Newsletter
              <motion.span
                className="absolute left-0 bottom-0 w-1/2 h-px bg-gradient-to-r from-green-500 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </h4>
            <p className="text-gray-400 mb-4">Recevez nos dernières actualités et recettes exclusives.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent pr-12 placeholder-gray-500"
              />
              <button className="absolute right-1 top-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-2 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all" aria-label="S'inscrire à la newsletter">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">En vous inscrivant, vous acceptez notre politique de confidentialité.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400"
        >
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {['Mentions légales', 'Politique de confidentialité', 'CGV', 'Cookies'].map((item, index) => (
              <a key={item} href="#" className="text-sm hover:text-green-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p>&copy; 2024 Les Crudettes. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
