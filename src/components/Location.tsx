import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="ubicacion" className="py-16 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Visítanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos encontramos en una ubicación privilegiada, fácil de llegar y con estacionamiento disponible
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Section */}
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-80 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold">Mapa Interactivo</p>
                  <p className="text-sm">Google Maps se cargaría aquí</p>
                </div>
              </div>
              <div className="p-6 bg-primary text-white">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Dirección Principal</h3>
                    <p className="text-gray-200">Esquina Chihuahua y Mariano Escobedo</p>
                    <p className="text-gray-200">Culiacán, Sinaloa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Section */}
          <div className="space-y-6">
            {/* Hours */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-3">
                      Horarios de Atención
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Lunes - Jueves:</span>
                        <span className="font-medium">11:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Viernes - Sábado:</span>
                        <span className="font-medium">11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span className="font-medium">11:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-700 text-sm font-medium">
                        🟢 Abierto ahora - Cierra a las 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parking & Access */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Car className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-3">
                      Acceso y Estacionamiento
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Estacionamiento gratuito disponible
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Acceso para personas con discapacidad
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Zona segura y bien iluminada
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Cerca de transporte público
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                className="bg-primary hover:bg-warm-hover h-auto py-4 flex-col space-y-2"
                size="lg"
              >
                <Navigation className="h-5 w-5" />
                <span>Cómo Llegar</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="hover:bg-accent hover:text-white h-auto py-4 flex-col space-y-2"
                size="lg"
              >
                <MapPin className="h-5 w-5" />
                <span>Ver en Mapa</span>
              </Button>
            </div>

            {/* Additional Info */}
            <Card className="bg-accent text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">
                  ¿Vienes en grupo grande?
                </h3>
                <p className="text-gray-200 mb-4">
                  Contamos con espacio para grupos y eventos especiales
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-accent"
                >
                  Reservar Mesa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;