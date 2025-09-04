import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
      price: "$12.99",
      category: "Burgers"
    },
    {
      id: 2,
      name: "Chicken Deluxe",
      description: "Grilled chicken breast with avocado, bacon, and herb mayo",
      price: "$14.99",
      category: "Burgers"
    },
    {
      id: 3,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
      price: "$16.99",
      category: "Pizza"
    },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      description: "BBQ sauce, grilled chicken, red onions, and cilantro",
      price: "$18.99",
      category: "Pizza"
    },
    {
      id: 5,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, caesar dressing",
      price: "$9.99",
      category: "Salads"
    },
    {
      id: 6,
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon herb seasoning and vegetables",
      price: "$22.99",
      category: "Mains"
    }
  ];

  const categories = ["All", "Burgers", "Pizza", "Salads", "Mains"];

  return (
    <div className="min-h-screen bg-restaurant-dark">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-restaurant-text mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-restaurant-text-muted max-w-2xl mx-auto">
              Discover our delicious selection of freshly prepared dishes, 
              made with the finest ingredients and served with love.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost-white"
                className="border border-restaurant-primary/30 hover:border-restaurant-primary"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="bg-restaurant-dark-lighter border-restaurant-primary/20 hover:border-restaurant-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-restaurant-text text-xl">
                      {item.name}
                    </CardTitle>
                    <span className="text-restaurant-primary font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <CardDescription className="text-restaurant-text-muted">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="hero" className="w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;