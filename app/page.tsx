"use client";

import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sprout,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Star,
  Clock,
  Users,
  Recycle,
  Heart
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, lazy, Suspense } from "react";
import Image from "next/image";

// Chargement paresseux des composants non-critiques
const Testimonials = lazy(() => import("@/components/testimonials"));
const Navbar = lazy(() => import("@/components/navbar"));

// Constantes pour réduire les recalculs
const ANIMATION_DEFAULTS = {
  once: true,
  amount: 0.3
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Optimisation: Réduction des transformations parallaxes
  const opacity = useTransform(scrollY, [0, 200], [1, 0], { clamp: true });
  const headerOpacity = useTransform(scrollY, [0, 60], [0, 1], { clamp: true });

  // Hooks optimisés pour réduire les recalculs
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Utilisation de passive: true pour optimiser les événements de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Désactiver les animations si l'utilisateur préfère les animations réduites
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section - Version optimisée */}
        <section className="relative h-screen overflow-hidden">
          {/* Arrière-plan simplifié */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/optimized/hero-bg.webp"
                alt="Fresh vegetables background"
                className="object-cover object-center"
                loading="eager"
                priority={true}
                fill
                sizes="100vw"
                quality={90}
              />

              {/* Dégradé simplifié - réduit la complexité du rendu */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-green-950/20" />
            </div>
          </div>

          {/* Contenu principal avec animations simplifiées */}
          <div
            className="relative z-10 h-full flex flex-col items-center justify-center text-white"
            style={{ opacity: prefersReducedMotion ? 1 : opacity.get() }}
          >
            <div className="container mx-auto px-4 md:px-8 text-center relative">

              {/* Section titre principale avec disposition en grille pour mobiles et desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="order-2 md:order-1">
                  {/* Titre et sous-titre */}
                  <div className="text-left">
                    <motion.h1
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                      <span className="text-white">
                        Cultivé avec soin,
                      </span>
                      <br />
                      <span className="text-green-200">
                        Savouré avec plaisir
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-base md:text-lg text-white/90 mb-8 max-w-lg"
                    >
                      Notre approche de l'agriculture allie tradition et innovation pour vous
                      offrir les meilleures salades et légumes frais, tout en respectant la planète.
                    </motion.p>

                    {/* Badges des caractéristiques */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                      {["Bio", "Sans pesticides", "Local", "Durable"].map((tag, i) => (
                        <Badge
                          key={i}
                          className="bg-white/10 text-white border-white/20 px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Bouton d'action */}
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg transition-colors"
                    >
                      <span className="flex items-center font-medium">
                        Nos produits frais
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  {/* Image ou éléments décoratifs simplifiés */}
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Cercle décoratif simple */}
                    <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>

                    {/* Contenu central */}
                    <div className="absolute inset-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                      <div className="text-center">
                        <Leaf className="w-12 h-12 mx-auto text-green-300/80 mb-2" />
                        <p className="text-xs uppercase tracking-wider text-white/70">Depuis 1985</p>
                      </div>
                    </div>
                    <button
                      className="absolute right-1 top-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-2 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all"
                      aria-label="Plus d&apos;informations"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Statistiques en bas */}
              <div className="mt-8 md:mt-12">
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { number: "35+", text: "Années d'expérience" },
                    { number: "100%", text: "Produits français" },
                    { number: "0%", text: "Pesticides chimiques" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">
                        {stat.number}
                      </p>
                      <p className="text-xs md:text-sm text-white/70">{stat.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Version optimisée */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Arrière-plan simplifié */}
          <div className="absolute inset-0 bg-white z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <Badge className="bg-green-50 text-green-700 rounded-md px-3 py-1">
                  Nos Valeurs
                </Badge>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Ce qui nous <span className="text-green-600">définit</span>
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Notre philosophie s'articule autour de valeurs fortes qui guident chacune de nos actions
                pour vous offrir des produits d'exception.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "100% Naturel",
                  description: "Des produits frais sans conservateurs, pour préserver toute leur saveur et leurs bienfaits nutritionnels."
                },
                {
                  icon: ShieldCheck,
                  title: "Qualité Garantie",
                  description: "Un contrôle rigoureux à chaque étape de la production pour vous offrir le meilleur de la nature."
                },
                {
                  icon: Sprout,
                  title: "Éco-responsable",
                  description: "Un engagement fort pour la protection de l'environnement et la préservation de notre biodiversité."
                }
              ].map((value, index) => (
                <div key={index} className="motion-safe:animate-fadeIn" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-8 transition-shadow h-full border border-green-100 flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="bg-green-50 p-4 rounded-lg mr-4 flex-shrink-0">
                        <value.icon className="w-7 h-7 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-xl text-gray-900">
                        {value.title}
                      </h3>
                    </div>

                    <div className="h-px w-full bg-gray-100 my-4"></div>

                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {value.description}
                    </p>

                    <div className="mt-6 text-green-600 flex items-center text-sm font-medium hover:text-green-700 cursor-pointer">
                      En savoir plus
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloc d'engagement */}
            <div className="mt-16 bg-green-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-green-100/50 motion-safe:animate-fadeIn" style={{animationDelay: "500ms"}}>
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  Rejoignez-nous dans notre démarche
                </h3>
                <p className="text-gray-600 mb-0">
                  Ensemble, nous pouvons créer un futur plus sain pour nous et pour notre planète.
                  Découvrez comment nos valeurs se traduisent en actions concrètes.
                </p>
              </div>

              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span className="flex items-center">
                    Découvrir
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Histoire Section - Version optimisée */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Arrière-plan simplifié */}
          <div className="absolute inset-0 bg-white z-0"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-green-50/50 z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8 motion-safe:animate-fadeIn">
                <div className="inline-block">
                  <Badge className="bg-white shadow-sm border-green-100 text-green-600" variant="outline">
                    Notre Histoire
                  </Badge>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Une passion pour la fraîcheur depuis 1985
                </h2>

                <div className="h-1 w-20 bg-green-500 rounded-full"></div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Depuis plus de 35 ans, Les Crudettes s'engage à fournir les meilleures salades et crudités,
                  cultivées avec soin dans nos fermes françaises. Notre histoire est celle d'une entreprise familiale
                  qui a su grandir tout en préservant ses valeurs et son amour pour les produits de qualité.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "35+", text: "Années d'expérience" },
                    { number: "100%", text: "Made in France" },
                    { number: "500+", text: "Agriculteurs partenaires" }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-sm rounded-xl p-4 text-center border border-green-100/50 h-full flex flex-col justify-center motion-safe:animate-fadeIn"
                      style={{animationDelay: `${index * 100 + 300}ms`}}
                    >
                      <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.text}</div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg mt-4 px-8 py-3 font-medium transition-colors"
                >
                  <span className="flex items-center">
                    Notre histoire complète
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </div>

              <div className="relative aspect-[4/3] w-full motion-safe:animate-fadeIn" style={{animationDelay: "300ms"}}>
                {/* Image simplifiée */}
                <div className="rounded-2xl overflow-hidden border-2 border-white shadow-xl relative h-full">
                  <Image
                    src="/images/optimized/histoire.webp"
                    alt="Notre Histoire"
                    className="object-cover object-center"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement écologique - Version optimisée */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Arrière-plan simplifié */}
          <div className="absolute inset-0 bg-white z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
              {/* Partie gauche: Titre et texte */}
              <div className="md:w-1/2 text-left motion-safe:animate-fadeIn">
                <div className="inline-block mb-6">
                  <Badge className="bg-green-50 text-green-700 rounded-md px-3 py-1">
                    Notre Engagement
                  </Badge>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pour un avenir <span className="text-green-600">plus vert</span>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  Chaque jour, nous travaillons à réduire notre empreinte environnementale.
                  De la culture responsable à l'emballage écologique, notre mission est de
                  nourrir sans épuiser les ressources de notre planète.
                </p>

                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors"
                >
                  <span className="flex items-center">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </div>

              {/* Partie droite: Cards en layout en décalé */}
              <div className="md:w-1/2 relative motion-safe:animate-fadeIn" style={{animationDelay: "200ms"}}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  {[
                    {
                      icon: Recycle,
                      title: "100% Recyclable",
                      description: "Tous nos emballages sont conçus pour minimiser l'impact environnemental"
                    },
                    {
                      icon: Users,
                      title: "Agriculture locale",
                      description: "Nous soutenons plus de 500 agriculteurs locaux et leurs familles"
                    },
                    {
                      icon: Clock,
                      title: "Circuit court",
                      description: "De la récolte à l'assiette en moins de 24h pour une fraîcheur garantie"
                    },
                    {
                      icon: Heart,
                      title: "Zéro gaspillage",
                      description: "Valorisation complète de notre production pour un modèle durable"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`${index % 2 === 1 ? 'md:mt-8' : ''} motion-safe:animate-fadeIn`}
                      style={{animationDelay: `${index * 100 + 400}ms`}}
                    >
                      <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition-shadow border border-green-100 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="bg-green-50 p-3 rounded-lg mr-4">
                            <item.icon className="w-6 h-6 text-green-600" />
                          </div>
                          <h3 className="font-semibold text-lg text-gray-900">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistiques en bas */}
            <div className="mt-20 pt-12 border-t border-green-100 motion-safe:animate-fadeIn" style={{animationDelay: "500ms"}}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "35+", text: "Années d'engagement" },
                  { number: "-40%", text: "Réduction empreinte carbone" },
                  { number: "100%", text: "Emballages recyclables" },
                  { number: "0", text: "Pesticides chimiques" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white z-0"></div>

          <div className="relative z-10">
            <Suspense fallback={<div className="text-center py-10">Chargement des témoignages...</div>}>
              <Testimonials />
            </Suspense>
          </div>
        </section>

        {/* Recettes - Version optimisée */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Arrière-plan simplifié */}
          <div className="absolute inset-0 bg-white z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 motion-safe:animate-fadeIn">
              <div className="inline-block mb-4">
                <Badge className="bg-green-50 text-green-700 rounded-md px-3 py-1">
                  Recettes
                </Badge>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nos recettes favorites
              </h2>

              <div className="h-1 w-20 bg-green-500 mx-auto mt-6 rounded-full"></div>

              <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto mt-6">
                Découvrez nos meilleures recettes pour sublimer nos produits et ravir vos papilles
                avec des plats sains, savoureux et faciles à préparer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  image: "/images/optimized/recette1.webp",
                  title: "Salade Méditerranéenne",
                  time: "15 min",
                  difficulty: "Facile",
                  calories: "320 cal",
                  description: "Une explosion de saveurs méditerranéennes pour un repas léger et vitaminé.",
                  tags: ["Légère", "Méditerranéenne"],
                  width: 600,
                  height: 600
                },
                {
                  image: "/images/optimized/recette2.webp",
                  title: "Bowl Végétarien",
                  time: "20 min",
                  difficulty: "Moyen",
                  calories: "450 cal",
                  description: "Un concentré d'énergie et de nutrients pour un repas complet et équilibré.",
                  tags: ["Végétarien", "Protéiné"],
                  width: 600,
                  height: 600
                },
                {
                  image: "/images/optimized/recette3.webp",
                  title: "Salade César Revisitée",
                  time: "25 min",
                  difficulty: "Facile",
                  calories: "380 cal",
                  description: "Notre interprétation gourmande du grand classique, enrichie de saveurs uniques.",
                  tags: ["Classique", "Gourmande"],
                  width: 600,
                  height: 600
                }
              ].map((recipe, index) => (
                <div
                  key={index}
                  className="cursor-pointer h-full motion-safe:animate-fadeIn"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <Card className="overflow-hidden border shadow-md hover:shadow-lg transition-shadow h-full bg-white relative">
                    <div className="relative h-56 overflow-hidden rounded-t-xl">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        className="object-cover object-center"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                      />

                      {/* Tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                        {recipe.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            className="bg-white/90 text-green-600 border-0 shadow-sm px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <CardContent className="p-6 relative z-10 flex flex-col h-[calc(100%-14rem)]">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          {recipe.title}
                        </h3>

                        <p className="text-gray-600 text-sm line-clamp-2">
                          {recipe.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-green-500" />
                            {recipe.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            {recipe.difficulty}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            {recipe.calories}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 motion-safe:animate-fadeIn" style={{animationDelay: "800ms"}}>
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-8 py-3 font-medium transition-colors"
              >
                <span className="flex items-center">
                  Explorer toutes nos recettes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
