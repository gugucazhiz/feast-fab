import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Chefs",
      description: "Our team of experienced chefs brings passion and creativity to every dish."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Ingredients",
      description: "We source only the finest, freshest ingredients from local suppliers."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Service",
      description: "Quick preparation without compromising on taste and quality."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made with Love",
      description: "Every meal is prepared with care and attention to detail."
    }
  ];

  return (
    <div className="min-h-screen bg-restaurant-dark">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-restaurant-text mb-6">
              About Feane
            </h1>
            <p className="text-xl text-restaurant-text-muted max-w-3xl mx-auto leading-relaxed">
              Welcome to Feane, where culinary excellence meets warm hospitality. 
              Since our founding, we've been dedicated to creating exceptional dining 
              experiences that bring people together over delicious food.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-restaurant-text">
                Our Story
              </h2>
              <div className="space-y-4 text-restaurant-text-muted">
                <p>
                  Founded with a simple vision: to serve exceptional food that brings 
                  comfort and joy to every customer. Our journey began with a small 
                  team of passionate food lovers who believed that great meals should 
                  be accessible to everyone.
                </p>
                <p>
                  Today, we continue to honor that vision by carefully selecting the 
                  finest ingredients, perfecting our recipes, and training our staff 
                  to deliver service that exceeds expectations.
                </p>
                <p>
                  From our signature burgers to our wood-fired pizzas, every dish 
                  tells a story of dedication, creativity, and love for great food.
                </p>
              </div>
              <Button variant="hero" size="lg">
                Visit Us Today
              </Button>
            </div>
            
            <div className="bg-restaurant-dark-lighter rounded-lg p-8 border border-restaurant-primary/20">
              <h3 className="text-2xl font-bold text-restaurant-text mb-6">
                Restaurant Hours
              </h3>
              <div className="space-y-3 text-restaurant-text-muted">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-restaurant-text mb-4">
                  Contact Information
                </h4>
                <div className="space-y-2 text-restaurant-text-muted">
                  <p>📍 123 Food Street, Culinary District</p>
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ hello@feane.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-restaurant-dark-lighter border-restaurant-primary/20 hover:border-restaurant-primary/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="flex justify-center text-restaurant-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-restaurant-text">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-restaurant-text-muted">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;