import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Fish, UtensilsCrossed, Clock, Heart, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Droplets className="h-8 w-8 text-accent" />,
      title: "Salsa Secreta Inigualable",
      description: "Nuestra receta familiar de 15 años que hace la diferencia en cada platillo"
    },
    {
      icon: <Fish className="h-8 w-8 text-accent" />,
      title: "Mariscos Frescos del Día",
      description: "Seleccionamos diariamente los mejores mariscos directo del puerto"
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8 text-accent" />,
      title: "Platillos Abundantes",
      description: "Porciones generosas que satisfacen hasta el apetito más exigente"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Preparación Rápida",
      description: "Tu platillo listo en 15 minutos sin comprometer la calidad"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Tradición Familiar",
      description: "Recetas transmitidas de generación en generación con amor"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Reconocimiento Local",
      description: "Elegidos como los mejores mariscos de la zona por 3 años consecutivos"
    }
  ];

  return (
    <section id="nosotros" className="pt-32 pb-16 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sabor que nos hace únicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué miles de clientes confían en nosotros para disfrutar los mejores mariscos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:px-4">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-none bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Image */}
          <div className="relative">
            {/* Stats Cards - Centered together */}
            <div className="flex justify-center items-start gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-xl p-4 z-10">
                <div className="text-center min-w-[80px]">
                  <div className="text-2xl font-bold text-primary mb-1">4.8</div>
                  <div className="text-yellow-500 text-lg mb-1">★★★★★</div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">+500 reseñas</div>
                </div>
              </div>
              
              <div className="bg-accent text-white rounded-xl shadow-xl p-4 z-10">
                <div className="text-center min-w-[80px]">
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-xs whitespace-nowrap">Años de<br />experiencia</div>
                </div>
              </div>
            </div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl lg:mx-8">
              <img 
                src="/MCHTostada.png"
                alt="Tostada especial de Mariscos El Chema"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Tostada de la Casa
                </h3>
                <p className="text-gray-200">
                  Nuestra especialidad que conquistó el paladar de la región
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl text-accent mb-4">"</div>
            <p className="text-lg text-muted-foreground italic mb-6">
              "Sin duda los mejores mariscos que he probado en mi vida. La salsa es adictiva y las porciones son súper generosas. Ya llevamos 3 años siendo clientes y siempre nos sorprenden."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <div className="font-semibold text-primary">María González</div>
                <div className="text-sm text-muted-foreground">Cliente frecuente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;