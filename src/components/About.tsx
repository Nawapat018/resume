import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Users, Award } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Code2, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Rocket, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Awards Won", value: "10+" }
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Kubernetes", "GraphQL", "Next.js", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack developer with a passion for creating innovative digital solutions. 
              With over 5 years of experience in the tech industry, I specialize in building 
              scalable web applications using modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey started with a curiosity for how things work, which evolved into a 
              deep love for coding and problem-solving. I believe in writing clean, efficient 
              code and creating user experiences that make a real impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers.
            </p>
          </div>

          {/* Skills */}
          <div className="animate-slide-up">
            <h4 className="text-xl font-semibold mb-6 text-foreground">
              Technical Skills
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 bg-card border-tech-blue/20 text-tech-cyan hover:bg-tech-blue/10 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="p-6 text-center bg-gradient-card border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:shadow-blue group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 p-3 rounded-full bg-tech-blue/10 group-hover:bg-tech-blue/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-tech-blue" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};