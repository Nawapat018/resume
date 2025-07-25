import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payments, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered suggestions and automation. Built using React, TypeScript, and OpenAI API.",
      tech: ["React", "TypeScript", "OpenAI", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Real-Time Chat App",
      description: "Scalable chat application with real-time messaging, file sharing, and video calls. Built with React, Socket.io, and WebRTC.",
      tech: ["React", "Socket.io", "WebRTC", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Crypto Trading Dashboard",
      description: "Professional trading dashboard with real-time market data, technical analysis tools, and portfolio management.",
      tech: ["Vue.js", "Python", "WebSockets", "TradingView"],
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Smart Home IoT Platform",
      description: "Complete IoT platform for smart home automation with device management, scheduling, and energy monitoring.",
      tech: ["React Native", "IoT", "MQTT", "Firebase"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive data visualization platform for business analytics with customizable charts and real-time updates.",
      tech: ["D3.js", "React", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden bg-gradient-card border-border/50 hover:border-tech-blue/50 transition-all duration-500 hover:shadow-blue animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-tech-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-tech-cyan hover:bg-tech-blue/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-tech-blue hover:bg-tech-blue-dark shadow-blue"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-background"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group p-6 bg-gradient-card border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:shadow-blue animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-tech-blue transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map(tech => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-secondary/50 text-tech-cyan"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/50 text-muted-foreground">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="p-2 h-auto text-tech-blue hover:bg-tech-blue/10"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="p-2 h-auto text-tech-cyan hover:bg-tech-cyan/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            className="border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-background"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
