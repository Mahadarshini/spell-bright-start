import { ContactForm } from "@/components/ContactForm";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const heroImage = new URL("../assets/hero-image.jpg", import.meta.url).href;
const logo = new URL("../assets/logo1.png",import.meta.url).href;

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      {/* Header with Logo - Top Left */}
      <header className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="SpellDaily"
            className="w-[96px] h-[96px] object-contain"
          />
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="container mx-auto px-2 pt-0 pb-2 min-h-[calc(100vh-120px)]">
        <div className="grid lg:grid-cols-2 gap-2 items-center h-full">
          {/* Left Side - Image + Content */}
          <div className="space-y-1">
            {/* Image Container - Left Side */}

            <h2 className="font-elegant text-[24px] md:text-[40px] xl:text-[56px] font-bold leading-tight text-center max-w-[780px] mx-auto bg-gradient-primary bg-clip-text text-transparent drop-shadow-[0_2px_10px_hsl(262_85%_58%_/_0.25)]">
              Building confident spellers through practice.
            </h2>
            
            <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-[720px] mx-auto">
            
            </p>

            {/* Laptop/Desktop-only decorative image for balance */}
            <div className="hidden lg:block pt-2 max-w-[780px] mx-auto">
              <AspectRatio ratio={16 / 12}>
                <img
                  src={heroImage}
                  alt="Confident spelling practice illustration"
                  className="w-full h-full object-cover rounded-2xl shadow-glow"
                />
              </AspectRatio>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center lg:text-left">
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