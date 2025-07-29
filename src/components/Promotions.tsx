import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Gift, Clock } from "lucide-react";

const Promotions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "2x1 en Cocteles",
      description: "Todos los martes y jueves trae a tu amigo y el segundo cóctel va por la casa",
      badge: "Martes y Jueves",
      bgColor: "bg-primary",
      icon: <Gift className="h-8 w-8" />
    },
    {
      id: 2,
      title: "Sushi Gratis para Graduados",
      description: "Presenta tu título o certificado y recibe un rollo de sushi especial completamente gratis",
      badge: "Todo el año",
      bgColor: "bg-secondary",
      icon: <Star className="h-8 w-8" />
    },
    {
      id: 3,
      title: "Happy Hour",
      description: "De 3:00 PM a 6:00 PM descuento del 20% en toda la carta de bebidas",
      badge: "Lunes a Viernes",
      bgColor: "bg-accent",
      icon: <Clock className="h-8 w-8" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <section id="promociones" className="pt-32 pb-16 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Promociones del Chema
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestras increíbles ofertas y disfruta de más sabor por menos dinero
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {promotions.map((promo) => (
                <div key={promo.id} className="w-full flex-shrink-0">
                  <div className={`${promo.bgColor} text-white p-8 md:p-12 min-h-[300px] flex items-center`}>
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white/20 p-3 rounded-full">
                            {promo.icon}
                          </div>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                            {promo.badge}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {promo.title}
                      </h3>
                      
                      <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
                        {promo.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-primary"
                      >
                        Más Información
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Tienes dudas sobre nuestras promociones?
          </p>
          <Button className="bg-primary hover:bg-warm-hover">
            Preguntar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Promotions;