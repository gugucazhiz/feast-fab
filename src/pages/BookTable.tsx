import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookTable = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Table Reserved!",
      description: "We've received your reservation. We'll call you to confirm the details.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-restaurant-dark">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-restaurant-text mb-4">
              Reserve Your Table
            </h1>
            <p className="text-xl text-restaurant-text-muted max-w-2xl mx-auto">
              Book your dining experience with us. We can't wait to serve you 
              an unforgettable meal in our welcoming atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <Card className="bg-restaurant-dark-lighter border-restaurant-primary/20">
              <CardHeader>
                <CardTitle className="text-restaurant-text text-2xl">
                  Make a Reservation
                </CardTitle>
                <CardDescription className="text-restaurant-text-muted">
                  Fill out the form below and we'll confirm your reservation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-restaurant-text">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-restaurant-dark border-restaurant-primary/30 text-restaurant-text"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-restaurant-text">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="bg-restaurant-dark border-restaurant-primary/30 text-restaurant-text"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-restaurant-text">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="bg-restaurant-dark border-restaurant-primary/30 text-restaurant-text"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-restaurant-text">
                        Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className="bg-restaurant-dark border-restaurant-primary/30 text-restaurant-text"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-restaurant-text">
                        Time *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleChange('time', value)}>
                        <SelectTrigger className="bg-restaurant-dark border-restaurant-primary/30 text-restaurant-text">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="11:30">11:30 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="12:30">12:30 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="13:30">1:30 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="18:30">6:30 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                          <SelectItem value="19:30">7:30 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                          <SelectItem value="20:30">8:30 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-restaurant-text">
                        Guests *
                      </Label>
                      <Select value={formData.guests} onValueChange={(value) => handleChange('guests', value)}>
                        <SelectTrigger className="bg-restaurant-dark border-restaurant-primary/30 text-restaurant-text">
                          <SelectValue placeholder="# of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6 Guests</SelectItem>
                          <SelectItem value="7">7 Guests</SelectItem>
                          <SelectItem value="8">8+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-restaurant-text">
                      Special Requests (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Any special dietary requirements, occasion details, or other requests..."
                      className="bg-restaurant-dark border-restaurant-primary/30 text-restaurant-text min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Reserve Table
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Restaurant Info */}
            <div className="space-y-8">
              <Card className="bg-restaurant-dark-lighter border-restaurant-primary/20">
                <CardHeader>
                  <CardTitle className="text-restaurant-text text-xl">
                    Restaurant Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-restaurant-text-muted">
                  <div>
                    <h4 className="font-semibold text-restaurant-text mb-2">Location</h4>
                    <p>123 Food Street, Culinary District</p>
                    <p>Downtown Food Hub, City Center</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-restaurant-text mb-2">Contact</h4>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: reservations@feane.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-restaurant-text mb-2">Operating Hours</h4>
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-restaurant-dark-lighter border-restaurant-primary/20">
                <CardHeader>
                  <CardTitle className="text-restaurant-text text-xl">
                    Reservation Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-restaurant-text-muted">
                  <p>• Reservations are recommended, especially during peak hours</p>
                  <p>• Please arrive within 15 minutes of your reservation time</p>
                  <p>• Large parties (8+ guests) require advance notice</p>
                  <p>• Cancellations should be made at least 2 hours in advance</p>
                  <p>• We accommodate dietary restrictions with advance notice</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookTable;