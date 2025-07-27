import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Menú", href: "#menu" },
    { name: "Promociones", href: "#promociones" },
    { name: "Contacto", href: "#contacto" }
  ];

  const menuHighlights = [
    "Cócteles de Mariscos",
    "Ceviches Especiales",
    "Ostiones Preparados",
    "Platillos del Chef"
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Mariscos El Chema
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sabor auténtico de Sinaloa desde hace más de 15 años. Mariscos frescos, abundantes y con nuestra salsa secreta que nos hace únicos.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="text-lg font-bold mb-4">Especialidades</h4>
            <ul className="space-y-3">
              {menuHighlights.map((item) => (
                <li key={item}>
                  <span className="text-gray-300 flex items-center">
                    <span className="text-accent mr-3">🍤</span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Esquina Chihuahua y Mariano Escobedo<br />
                    Culiacán, Sinaloa
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+526671234567"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +52 667 123 4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@mariscosenchema.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@mariscosenchema.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white mb-1">Horarios:</div>
                  <div>Lun - Jue: 11:00 AM - 9:00 PM</div>
                  <div>Vie - Sáb: 11:00 AM - 10:00 PM</div>
                  <div>Dom: 11:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Mariscos El Chema. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl animate-pulse"
          onClick={() => window.open('https://wa.me/526671234567?text=Hola!%20Me%20gustaría%20hacer%20un%20pedido', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;