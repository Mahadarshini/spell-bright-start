import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <h1 className="text-3xl font-bold text-primary">SpellDaily</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Building confident spellers through practice.
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At SpellDaily, we help children master spelling not just by reading but through repetitive practice and word recall. 
            By consistently seeing and practicing words, kids grow confident in their spelling ability.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact-form" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              For further details, share your interest with us.
            </h3>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;