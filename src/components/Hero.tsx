import { Button } from "@/components/ui/button";
import { MessageCircle, Eye } from "lucide-react";
import heroImage from "@/assets/hero-shrimp.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-hero-bg/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo prominente */}
          <div className="mb-8">
            <img 
              src="/logo-mariscos.png" 
              alt="Mariscos El Chema Logo" 
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl rounded-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            ¡Sabor que provoca{" "}
            <span className="text-accent">adicción!</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Mariscos intensos, frescos y al estilo Chema
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-warm-hover text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 touch-manipulation"
            >
              <Eye className="mr-2 h-5 w-5" />
              Ver Menú
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-black/30 hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 touch-manipulation"
              onClick={() => window.open('https://wa.me/526441143494?text=Hola!%20Me%20gustaría%20hacer%20un%20pedido', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Pedir por WhatsApp
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-200">Años de experiencia</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-200">Mariscos frescos</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">★★★★★</div>
              <div className="text-gray-200">Satisfacción garantizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;