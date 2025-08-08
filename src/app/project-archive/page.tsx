import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/project";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ExternalLink, Github, Globe } from "lucide-react";

export default function ProjectArchive() {
  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const years = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <span className="mr-2">←</span>
            Back to Home
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Project Archive
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive collection of my projects, experiments and creations
            </p>
            <p className="text-sm text-muted-foreground/70">
              💡 Note: Some projects might be in private repositories or lost in the depths of my hard drive
            </p>
          </div>
        </div>

        {/* Projects by Year */}
        <div className="space-y-16">
          {years.map((year) => (
            <section key={year} className="space-y-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl lg:text-3xl font-bold">{year}</h2>
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-sm text-muted-foreground font-medium">
                  {projectsByYear[year].length} project{projectsByYear[year].length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsByYear[year].map((project, index) => (
                  <ShineBorder 
                    key={index} 
                    className="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  >
                    <Card className="border-0 shadow-none bg-transparent">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {project.name}
                          </CardTitle>
                                                     {project.link && (
                             <Link
                               href={project.link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-primary"
                             >
                               {project.link.includes('github.com') ? (
                                 <Github className="h-4 w-4" />
                               ) : (
                                 <ExternalLink className="h-4 w-4" />
                               )}
                             </Link>
                           )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0 space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="text-xs font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        {project.link && (
                          <div className="pt-2">
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {project.link.includes('github.com') ? (
                                <>
                                  <Github className="h-3 w-3 mr-1" />
                                  View on GitHub
                                </>
                              ) : project.link.includes('vercel.app') || project.link.includes('.app') ? (
                                <>
                                  <Globe className="h-3 w-3 mr-1" />
                                  Live Demo
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Visit Project
                                </>
                              )}
                            </Link>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}