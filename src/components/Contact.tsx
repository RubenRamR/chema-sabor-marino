import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, Facebook, Instagram, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  // Function to check if restaurant is open
  const getRestaurantStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Restaurant hours: 9:00 AM to 5:00 PM (9 to 17 in 24-hour format)
    const isOpen = currentHour >= 9 && currentHour < 17;
    
    return {
      isOpen,
      message: isOpen ? "Abierto ahora" : "Cerrado ahora",
      color: isOpen ? "text-green-600" : "text-red-600"
    };
  };
  
  const status = getRestaurantStatus();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto. Gracias por tu interés.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Llámanos Directo",
      subtitle: "Respuesta inmediata",
      value: "+52 644 114 3494",
      action: "Llamar Ahora",
      bg: "bg-primary",
      href: "tel:+526441143494"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      subtitle: "Pide tu platillo favorito",
      value: "Enviar mensaje",
      action: "Abrir WhatsApp",
      bg: "bg-green-600",
      href: "https://wa.me/526441143494?text=Hola!%20Me%20gustaría%20hacer%20un%20pedido"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      subtitle: "Para dudas y sugerencias",
      value: "info@mariscosenchema.com",
      action: "Enviar Email",
      bg: "bg-accent",
      href: "mailto:info@mariscosenchema.com"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="h-6 w-6" />,
      name: "Facebook",
      followers: "5.2K seguidores",
      bg: "bg-blue-600",
      href: "#"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      followers: "3.8K seguidores",
      bg: "bg-pink-600",
      href: "#"
    }
  ];

  return (
    <section id="contacto" className="pt-32 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes hambre? ¡Contáctanos! Estamos listos para servirte los mejores mariscos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">
              ¡Ponte en contacto!
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`${method.bg} text-white p-3 rounded-full`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-lg">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">
                          {method.subtitle}
                        </p>
                        <p className="text-foreground font-medium">
                          {method.value}
                        </p>
                      </div>
                      <Button 
                        className={`${method.bg} hover:opacity-90`}
                        onClick={() => window.open(method.href, '_blank')}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-primary mb-4">
                Síguenos en redes sociales
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`${social.bg} text-white p-2 rounded-full`}>
                          {social.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary">
                            {social.name}
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {social.followers}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <Card className="bg-light-bg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">
                      Nuestra Ubicación
                    </h4>
                    <p className="text-muted-foreground">
                      Calle Chihuahua & Mariano Escobedo, Campestre 2<br />
                      85160 Cdad. Obregón, Son.<br />
                      <span className={`font-medium ${status.color}`}>{status.message}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Envíanos un mensaje
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Nombre completo
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Tu número de teléfono"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-warm-hover text-white"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Tiempo de respuesta promedio: <span className="font-medium text-primary">2 horas</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;