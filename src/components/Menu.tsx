import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ShoppingCart } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      id: 1,
      name: "Cócteles de Mariscos",
      description: "Frescos camarones, pulpo y callo con nuestra salsa secreta",
      icon: "🍤",
      price: "Desde $85",
      popular: true
    },
    {
      id: 2,
      name: "Ceviches Especiales",
      description: "Pescado del día marinado en limón con chile y especias",
      icon: "🐟",
      price: "Desde $75",
      popular: false
    },
    {
      id: 3,
      name: "Ostiones Preparados",
      description: "Ostiones frescos con salsa negra y aguacate",
      icon: "🦪",
      price: "Desde $15 c/u",
      popular: false
    },
    {
      id: 4,
      name: "Tostadas de Mariscos",
      description: "Tostadas crujientes con mariscos mixtos y aguacate",
      icon: "🌮",
      price: "Desde $49 c/u",
      popular: true
    },
    {
      id: 5,
      name: "Caldos y Sopas",
      description: "Caldos calientes con mariscos frescos y verduras",
      icon: "🍲",
      price: "Desde $120",
      popular: false
    },
    {
      id: 6,
      name: "Platillos Especiales",
      description: "Creaciones únicas del Chef Chema con sello distintivo",
      icon: "⭐",
      price: "Desde $150",
      popular: true
    }
  ];

  return (
    <section id="menu" className="pt-32 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestro Menú
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los sabores auténticos de Sinaloa con nuestros platillos preparados con mariscos frescos del día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuCategories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {category.popular && (
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Popular
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="text-lg font-bold text-accent">
                    {category.price}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Ver Opciones
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para disfrutar?
          </h3>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Consulta nuestra carta completa con precios actualizados y haz tu pedido directo desde casa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Ver Carta Completa
            </Button>
            
            <Button 
              size="lg"
              className="bg-accent hover:bg-warm-hover text-white"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Haz tu Pedido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;