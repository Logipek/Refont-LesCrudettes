"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Clock,
  Users,
  ChefHat,
  Bookmark,
  Share2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

// Optimiser les recettes en ajoutant les dimensions appropriées
const recipes = [
  {
    id: 1,
    title: "Salade Méditerranéenne",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    width: 800,
    height: 600,
    time: "15 min",
    difficulty: "Facile",
    servings: 4,
    category: "Entrée",
    diet: "Végétarien",
    rating: 4.8,
    season: "Été",
    popular: true,
  },
  {
    id: 2,
    title: "Buddha Bowl aux Légumes Grillés",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    width: 800,
    height: 600,
    time: "25 min",
    difficulty: "Moyen",
    servings: 2,
    category: "Plat",
    diet: "Vegan",
    rating: 4.5,
    season: "Toutes saisons",
    popular: true,
  },
  {
    id: 3,
    title: "Salade César Revisitée",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    width: 800,
    height: 600,
    time: "20 min",
    difficulty: "Facile",
    servings: 3,
    category: "Entrée",
    diet: "Standard",
    rating: 4.7,
    season: "Toutes saisons",
    popular: true,
  },
];

// Héberger l'image d'arrière-plan localement pour un meilleur contrôle
const HERO_BG =
  "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Optimiser les animations pour des raisons de performance
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const animationProps = prefersReducedMotion
    ? { initial: {}, animate: {}, whileHover: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        whileHover: { y: -5 },
      };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section avec image optimisée */}
      <section className="relative h-[40vh]">
        {/* Image optimisée et préchargée */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-recettes.webp"
            alt="Délicieuses recettes fraîches"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBP/EACMQAAIBAwQCAwEAAAAAAAAAAAECAwAEERIhMUEFE1FhcZH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//EABkRAAMAAwAAAAAAAAAAAAAAAAABEQISIf/aAAwDAQACEQMRAD8AuTc8FQc027W8N0NE6Bx3jrFNLxDFbBmGJ0G6ew/1SlZZFeaZt9stx1qKPinpKp7a/Wgqn//Z"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <motion.h1
              initial={animationProps.initial}
              animate={animationProps.animate}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Nos Recettes
            </motion.h1>
            <motion.p
              initial={animationProps.initial}
              animate={animationProps.animate}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Découvrez nos meilleures recettes pour sublimer vos légumes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher une recette..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entree">Entrée</SelectItem>
                  <SelectItem value="plat">Plat principal</SelectItem>
                  <SelectItem value="dessert">Dessert</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDiet} onValueChange={setSelectedDiet}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Régime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="vegetarien">Végétarien</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="sans-gluten">Sans gluten</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Temps" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">- de 15 min</SelectItem>
                  <SelectItem value="30">15-30 min</SelectItem>
                  <SelectItem value="45">30-45 min</SelectItem>
                  <SelectItem value="60">+ de 45 min</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes avec images optimisées */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Recettes Populaires</h2>
            <Button variant="ghost">Voir tout</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes
              .filter((recipe) => recipe.popular)
              .map((recipe) => (
                <motion.div
                  key={recipe.id}
                  initial={animationProps.initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={animationProps.whileHover}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden group cursor-pointer flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        className="transition-transform duration-300 group-hover:scale-105 object-cover"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                        }}
                        width={recipe.width}
                        height={recipe.height}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                        loading={recipe.id === 1 ? "eager" : "lazy"}
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-800"
                        >
                          {recipe.category}
                        </Badge>
                        {recipe.diet === "Végétarien" && (
                          <Badge
                            variant="secondary"
                            className="bg-green-500/90 text-white"
                          >
                            {recipe.diet}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold group-hover:text-green-600 transition-colors">
                          {recipe.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {recipe.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recipe.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {recipe.servings} pers.
                        </span>
                        <span className="flex items-center gap-1">
                          <ChefHat className="w-4 h-4" />
                          {recipe.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <Link href="/recettes/test">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full"
                          >
                            Voir la recette
                          </Button>
                        </Link>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            aria-label="Sauvegarder la recette"
                          >
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            aria-label="Partager la recette"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Seasonal Recipes avec images optimisées */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Recettes de Saison</h2>
            <Button variant="ghost">Voir tout</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes
              .filter((recipe) => recipe.season === "Été")
              .map((recipe) => (
                <motion.div
                  key={recipe.id}
                  initial={animationProps.initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={animationProps.whileHover}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden group cursor-pointer flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        className="transition-transform duration-300 group-hover:scale-105 object-cover"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                        }}
                        width={recipe.width}
                        height={recipe.height}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-800"
                        >
                          {recipe.category}
                        </Badge>
                        {recipe.diet === "Végétarien" && (
                          <Badge
                            variant="secondary"
                            className="bg-green-500/90 text-white"
                          >
                            {recipe.diet}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold group-hover:text-green-600 transition-colors">
                          {recipe.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {recipe.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recipe.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {recipe.servings} pers.
                        </span>
                        <span className="flex items-center gap-1">
                          <ChefHat className="w-4 h-4" />
                          {recipe.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <Link href="/recettes/test">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full"
                          >
                            Voir la recette
                          </Button>
                        </Link>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            aria-label="Sauvegarder la recette"
                          >
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            aria-label="Partager la recette"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
