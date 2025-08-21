import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Header with Logo - Top Left */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-soft">
            S
          </div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">SpellDaily</h1>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="container mx-auto px-6 py-8 min-h-[calc(100vh-120px)]">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              Building confident spellers through practice.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At SpellDaily, we help children master spelling not just by reading but through repetitive practice and word recall. 
              By consistently seeing and practicing words, kids grow confident in their spelling ability.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center lg:text-left">
                For further details, share your interest with us.
              </h3>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;