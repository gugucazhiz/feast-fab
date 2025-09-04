import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroBurger from '@/assets/hero-burger.jpg';
import sandwichSpecial from '@/assets/sandwich-special.jpg';
import pizzaSpecial from '@/assets/pizza-special.jpg';

const Index = () => {
  const specialOffers = [
    {
      title: "Tasty Thursdays",
      discount: "20% off",
      description: "Get 20% off on all burger combos every Thursday",
      image: sandwichSpecial,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Pizza Days",
      discount: "15% off", 
      description: "Enjoy 15% off on all pizzas during weekends",
      image: pizzaSpecial,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-restaurant-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroBurger} 
            alt="Delicious gourmet burger with fries" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-restaurant-dark via-restaurant-dark/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-restaurant-text mb-6 leading-tight">
              Fast Food Restaurant
            </h1>
            <p className="text-lg md:text-xl text-restaurant-text-muted mb-8 leading-relaxed max-w-lg">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
              mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, 
              sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Order Now
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-restaurant-primary animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-restaurant-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-restaurant-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-b from-restaurant-dark to-restaurant-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-restaurant-text mb-4">
              Special Offers
            </h2>
            <p className="text-xl text-restaurant-text-muted">
              Don't miss out on our amazing deals and promotions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialOffers.map((offer, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden bg-restaurant-dark-lighter border-restaurant-primary/20 hover:border-restaurant-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-20`}></div>
                </div>
                
                <CardContent className="relative z-10 p-8 h-64 flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-restaurant-text mb-2 italic">
                      {offer.title}
                    </h3>
                    <div className="text-4xl md:text-6xl font-bold text-restaurant-primary mb-4">
                      {offer.discount}
                    </div>
                    <p className="text-restaurant-text-muted mb-6">
                      {offer.description}
                    </p>
                    <Button variant="hero">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-restaurant-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-restaurant-text mb-6">
                We Are Feane
              </h2>
              <p className="text-lg text-restaurant-text-muted mb-6 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the 
                majority have suffered alteration in some form, by injected humour, or 
                randomised words which don't look even slightly believable.
              </p>
              <p className="text-lg text-restaurant-text-muted mb-8 leading-relaxed">
                If you are going to use a passage of Lorem Ipsum, you need to be sure 
                there isn't anything embarrassing hidden in the middle of text.
              </p>
              <Link to="/about">
                <Button variant="order" size="lg">
                  Read More
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-restaurant-dark-lighter rounded-lg p-8 border border-restaurant-primary/20">
                <h3 className="text-2xl font-bold text-restaurant-text mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-restaurant-primary rounded-full"></div>
                    <span className="text-restaurant-text-muted">Fresh ingredients daily</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-restaurant-primary rounded-full"></div>
                    <span className="text-restaurant-text-muted">Expert chefs with passion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-restaurant-primary rounded-full"></div>
                    <span className="text-restaurant-text-muted">Fast and friendly service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-restaurant-primary rounded-full"></div>
                    <span className="text-restaurant-text-muted">Comfortable dining atmosphere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-restaurant-primary/10 to-amber-400/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-restaurant-text mb-6">
            Ready to Experience Amazing Food?
          </h2>
          <p className="text-xl text-restaurant-text-muted mb-8">
            Visit us today or book a table for an unforgettable dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                View Our Menu
              </Button>
            </Link>
            <Link to="/book">
              <Button variant="order" size="lg" className="w-full sm:w-auto">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
