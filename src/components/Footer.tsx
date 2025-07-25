import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#" },
        { label: "Mobile Apps", href: "#" },
        { label: "UI/UX Design", href: "#" },
        { label: "Consulting", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Resume", href: "#" },
        { label: "Newsletter", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-hero border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 block">
              Alex.dev
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions 
              that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-tech-blue/20 border border-border hover:border-tech-blue transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-tech-blue group-hover:text-tech-cyan transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-foreground font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-tech-blue transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Alex Dev. All rights reserved.
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};