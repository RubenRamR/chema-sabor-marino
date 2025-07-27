import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Menu from "@/components/Menu";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecipeWeek from "@/components/RecipeWeek";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Promotions />
        <Menu />
        <WhyChooseUs />
        <RecipeWeek />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
