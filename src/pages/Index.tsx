import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { FeatureCard } from "@/components/FeatureCard";
import { BookOpen, Target, Trophy, Users } from "lucide-react";
import logoImage from "@/assets/logo.png";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="SpellMaster Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-primary">SpellMaster</h1>
          </div>
          <Button variant="outline" onClick={scrollToForm}>
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Help Your Child Master
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Spelling </span>
              Through Fun Daily Challenges
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform spelling practice into an exciting daily adventure. Our interactive game makes learning engaging 
              while building confidence and skills that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={scrollToForm}>
                Start Your Child's Journey
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Trusted by 10,000+ parents</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <img 
              src={heroImage} 
              alt="Children learning spelling through interactive games" 
              className="w-full rounded-2xl shadow-medium animate-float"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Parents Choose SpellMaster
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach combines fun, learning, and progress tracking to ensure 
              your child develops strong spelling skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Adaptive Learning"
              description="Personalized challenges that adapt to your child's learning pace and skill level."
            />
            <FeatureCard
              icon={Target}
              title="Daily Challenges"
              description="Engaging daily spelling challenges that build consistency and motivation."
            />
            <FeatureCard
              icon={Trophy}
              title="Progress Tracking"
              description="Detailed insights and reports to track your child's improvement over time."
            />
            <FeatureCard
              icon={Users}
              title="Parent Involvement"
              description="Tools and updates that keep you involved in your child's learning journey."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple Steps to Success
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started is easy. Your child will be spelling with confidence in no time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Sign Up & Assess",
                description: "Quick registration and initial assessment to understand your child's current level."
              },
              {
                step: "2", 
                title: "Daily Practice",
                description: "15-minute daily challenges tailored to your child's grade and learning board."
              },
              {
                step: "3",
                title: "Track Progress", 
                description: "Watch your child improve with detailed progress reports and achievement badges."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary text-white flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of parents who are already helping their children excel in spelling. 
              Fill out the form below and we'll be in touch soon!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={logoImage} alt="SpellMaster Logo" className="w-8 h-8 brightness-0 invert" />
              <span className="text-xl font-bold">SpellMaster</span>
            </div>
            <p className="text-primary-foreground/80 text-center md:text-right">
              © 2024 SpellMaster. Helping children spell their way to success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;