import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    "Configured and managed Azure Entra ID for secure identity and access management",
    "Designed secure Azure networks with VNets, subnets, NSGs",
    "Provisioned Azure Compute (VMs, Scale Sets, AKS)",
    "Implemented CI/CD with Azure Pipelines & Git",
    "Orchestrated infrastructure using Terraform",
    "Managed AKS clusters for production-grade containerized workloads",
    "Automated provisioning with reusable Terraform modules",
    "Used Docker for containerization",
    "Monitored systems with Prometheus & Grafana"
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable infrastructure and automated solutions in cloud environments
          </p>
        </div>

        <Card className="bg-gradient-card border-border shadow-card animate-fade-in">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  DevOps Engineer
                </CardTitle>
                <div className="flex items-center text-primary mb-2">
                  <Building2 className="w-5 h-5 mr-2" />
                  <span className="text-lg font-semibold">Tata Consultancy Services</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:items-end gap-2">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>May 2022 – Present</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Kolkata, India</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Key Achievements & Responsibilities
                </h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Microsoft Azure", "Terraform", "Docker", "Kubernetes", 
                    "Azure Pipelines", "Git", "Azure CLI", "Prometheus", 
                    "Grafana", "Azure Entra ID", "Linux"
                  ].map((tech, index) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.05 + 0.9}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border shadow-card animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Building2 className="w-6 h-6 mr-2 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  Bachelor of Technology
                </h4>
                <p className="text-primary font-medium">REC Ramgarh</p>
                <p className="text-muted-foreground">2021 • CGPA: 7.8</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card animate-fade-in" style={{ animationDelay: "1.3s" }}>
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-primary" />
                Career Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-foreground font-semibold">2+ Years</p>
                  <p className="text-muted-foreground text-sm">DevOps Experience</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Cloud Infrastructure</p>
                  <p className="text-muted-foreground text-sm">Azure Specialist</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Automation Expert</p>
                  <p className="text-muted-foreground text-sm">CI/CD & Infrastructure as Code</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;