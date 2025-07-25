import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@alexdev.com",
      href: "mailto:alex@alexdev.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border/50 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send me a message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-secondary/20 border-border focus:border-tech-blue"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-secondary/20 border-border focus:border-tech-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary/20 border-border focus:border-tech-blue"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Let's work together"
                  className="bg-secondary/20 border-border focus:border-tech-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="bg-secondary/20 border-border focus:border-tech-blue resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-tech-blue hover:bg-tech-blue-dark shadow-blue"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.label}
                    className="p-6 bg-gradient-card border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:shadow-blue group"
                  >
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center group-hover:bg-tech-blue/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-tech-blue" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium group-hover:text-tech-blue transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* CTA */}
            <Card className="p-6 bg-gradient-primary/5 border-tech-blue/20">
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Ready to start your project?
              </h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Let's schedule a call to discuss your ideas and how I can help bring them to life.
              </p>
              <Button 
                variant="outline"
                className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-background"
              >
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};