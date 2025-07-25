import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-tech-cyan rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-tech-purple rounded-full animate-float" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-tech-blue rounded-full animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-tech-cyan rounded-full animate-float" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-tech-cyan text-lg font-mono">Hello, I'm</span>
          </div>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
            Alex Dev
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-foreground/90 animate-slide-up">
            Full Stack Developer & Tech Innovator
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up">
            Crafting digital experiences with cutting-edge technologies. 
            Passionate about building scalable solutions that make a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-tech-blue hover:bg-tech-blue-dark shadow-blue text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-background text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in">
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/20 hover:bg-tech-blue/20 border border-border hover:border-tech-blue transition-all duration-300 hover:shadow-blue"
            >
              <Github className="w-6 h-6 text-tech-blue" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/20 hover:bg-tech-cyan/20 border border-border hover:border-tech-cyan transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-tech-cyan" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/20 hover:bg-tech-purple/20 border border-border hover:border-tech-purple transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-tech-purple" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="w-6 h-6 text-tech-cyan" />
        </div>
      </div>
    </section>
  );
};