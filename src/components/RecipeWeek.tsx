import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, ChefHat, ExternalLink } from "lucide-react";
import cevicheImage from "@/assets/ceviche-special.jpg";

const RecipeWeek = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Receta de la Semana
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprende a preparar nuestros platillos más populares con los secretos del Chef Chema
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={cevicheImage}
                  alt="Ceviche Estilo Chema"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:hidden"></div>
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Receta Destacada
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    Ceviche Estilo Chema
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nuestro ceviche más popular con pescado fresco, nuestra salsa secreta y un toque especial que lo hace irresistible. Una receta familiar que ahora compartimos contigo.
                  </p>
                </div>

                {/* Recipe Details */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-light-bg rounded-lg">
                    <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="font-semibold text-primary">25 min</div>
                    <div className="text-sm text-muted-foreground">Preparación</div>
                  </div>
                  <div className="text-center p-4 bg-light-bg rounded-lg">
                    <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="font-semibold text-primary">4 personas</div>
                    <div className="text-sm text-muted-foreground">Porciones</div>
                  </div>
                  <div className="text-center p-4 bg-light-bg rounded-lg">
                    <ChefHat className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="font-semibold text-primary">Fácil</div>
                    <div className="text-sm text-muted-foreground">Dificultad</div>
                  </div>
                </div>

                {/* Ingredients Preview */}
                <div className="mb-8">
                  <h4 className="font-bold text-primary mb-3">Ingredientes principales:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      500g de pescado fresco (robalo o huachinango)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Limones frescos al gusto
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Nuestra salsa secreta (¡el ingrediente estrella!)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Y más ingredientes frescos...
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-warm-hover text-white" size="lg">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Ver Receta Completa
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      ¿Prefieres que nosotros lo preparemos?
                    </p>
                    <Button variant="outline" className="hover:bg-accent hover:text-white">
                      Ordenar Este Platillo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Additional Recipes */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">
              Más recetas de la casa
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="hover:bg-primary hover:text-white">
                Aguachile Verde
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-white">
                Tostadas de Atún
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-white">
                Cóctel de Camarón
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-white">
                Ostiones Gratinados
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeWeek;