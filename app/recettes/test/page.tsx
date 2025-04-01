"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, ChefHat, Bookmark, Share2, Star, Printer as Print, ArrowLeft, Utensils, Timer, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock data for the recipe
const recipe = {
  id: 1,
  title: "Salade Méditerranéenne aux Légumes Grillés",
  description: "Une salade fraîche et colorée qui vous transportera directement sur les rives de la Méditerranée. Un mélange parfait de légumes grillés, d'herbes aromatiques et de fromage feta.",
  mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1622973536968-3efe2e2d194a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  time: {
    prep: "15 min",
    cooking: "10 min",
    total: "25 min"
  },
  difficulty: "Facile",
  servings: 4,
  category: "Entrée",
  diet: "Végétarien",
  rating: 4.8,
  reviews: 124,
  ingredients: [
    {
      title: "Pour la salade",
      items: [
        "2 poivrons (rouge et jaune)",
        "1 courgette moyenne",
        "1 aubergine",
        "200g de tomates cerises",
        "1 concombre",
        "150g de feta",
        "100g d'olives Kalamata",
        "Quelques feuilles de basilic frais"
      ]
    },
    {
      title: "Pour la vinaigrette",
      items: [
        "4 cuillères à soupe d'huile d'olive",
        "2 cuillères à soupe de vinaigre balsamique",
        "1 gousse d'ail écrasée",
        "Sel et poivre du moulin"
      ]
    }
  ],
  steps: [
    {
      title: "Préparation des légumes",
      description: "Lavez et coupez les poivrons, la courgette et l'aubergine en morceaux de taille moyenne. Badigeonnez-les d'huile d'olive et assaisonnez.",
      image: "https://images.unsplash.com/photo-1622973536968-3efe2e2d194a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cuisson au gril",
      description: "Faites griller les légumes sur une plancha ou un gril bien chaud pendant 8-10 minutes en les retournant régulièrement.",
      image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Assemblage de la salade",
      description: "Dans un grand saladier, disposez les légumes grillés refroidis, ajoutez les tomates cerises coupées en deux, le concombre en rondelles, la feta émiettée et les olives.",
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  tips: [
    "Vous pouvez préparer les légumes grillés à l'avance et les servir à température ambiante",
    "Pour plus de saveur, laissez mariner les légumes dans la vinaigrette pendant 30 minutes",
    "Ajoutez des pignons de pin grillés pour plus de croquant"
  ],
  comments: [
    {
      author: "Marie L.",
      date: "il y a 2 jours",
      rating: 5,
      content: "Délicieuse recette ! J'ai ajouté des pignons de pin comme suggéré dans les conseils, c'était parfait !"
    },
    {
      author: "Pierre D.",
      date: "il y a 1 semaine",
      rating: 4,
      content: "Très bonne recette estivale. Je recommande de bien griller les légumes pour plus de saveur."
    }
  ]
};

export default function RecipeDetail() {
  const [activeTab, setActiveTab] = useState("ingredients");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Main Image */}
      <section className="relative h-[60vh]">
        <img
          src={recipe.mainImage}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back Button */}
        <Button
          variant="ghost"
          className="absolute top-[7rem] left-4 text-white hover:bg-white/20"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>

        {/* Recipe Title and Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/90 text-gray-800">
                {recipe.category}
              </Badge>
              <Badge variant="secondary" className="bg-green-500/90 text-white">
                {recipe.diet}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{recipe.rating}</span>
                <span className="text-white/60">({recipe.reviews} avis)</span>
              </div>
              <div className="flex items-center gap-1">
                <Timer className="w-5 h-5" />
                <span>{recipe.time.total}</span>
              </div>
              <div className="flex items-center gap-1">
                <ChefHat className="w-5 h-5" />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-5 h-5" />
                <span>{recipe.servings} pers.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Recipe Details */}
            <div className="lg:col-span-2">
              {/* Description */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{recipe.description}</p>
                </CardContent>
              </Card>

              {/* Tabs for Ingredients and Steps */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="w-full">
                  <TabsTrigger value="ingredients" className="flex-1">Ingrédients</TabsTrigger>
                  <TabsTrigger value="steps" className="flex-1">Préparation</TabsTrigger>
                </TabsList>

                <TabsContent value="ingredients">
                  <Card>
                    <CardContent className="p-6">
                      {recipe.ingredients.map((section, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center gap-3">
                                <Utensils className="w-4 h-4 text-green-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="steps">
                  <Card>
                    <CardContent className="p-6 space-y-8">
                      {recipe.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex flex-col md:flex-row gap-6"
                        >
                          <div className="md:w-1/3">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <h3 className="text-lg font-semibold mb-2">
                              {index + 1}. {step.title}
                            </h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Tips Section */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Conseils du Chef</h2>
                  <ul className="space-y-3">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ThumbsUp className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Avis et Commentaires</h2>
                    <Button variant="outline">Laisser un avis</Button>
                  </div>
                  <div className="space-y-6">
                    {recipe.comments.map((comment, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{comment.author}</span>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <div className="flex gap-1">
                            {Array(comment.rating).fill(null).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Time and Servings Card */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Temps de Préparation</h2>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Préparation</span>
                        <span className="font-medium">{recipe.time.prep}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Cuisson</span>
                        <span className="font-medium">{recipe.time.cooking}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="font-medium">Temps Total</span>
                        <span className="font-medium">{recipe.time.total}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Print className="w-4 h-4 mr-2" />
                    Imprimer la recette
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>

                {/* Recipe Gallery */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-4">Galerie</h2>
                  <Carousel>
                    <CarouselContent>
                      {recipe.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image}
                            alt={`Étape ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
