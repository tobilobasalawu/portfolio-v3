import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/project";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function ProjectArchive() {
  return (
    <div className="lg:py-24">
      <div className="mb-16">
        <Link 
          href="/"
          className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
        >
          ← Back
        </Link>
        <h1 className="text-4xl font-bold mt-16 mb-8">All Projects</h1>
      </div>

      <div className="w-full">
        <table className="min-w-full table-fixed hidden lg:table">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-6 w-1/5">Year</th>
              <th className="text-left py-4 px-6 w-2/5">Project</th>
              <th className="text-left py-4 px-6 w-1/5">Built with</th>
              <th className="text-left py-4 px-6 w-1/5">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr 
                key={index} 
                className="border-b hover:bg-muted/50 transition-colors"
              >
                <td className="py-4 px-6 text-muted-foreground">
                  {project.year}
                </td>
                <td className="py-4 px-6 font-medium ">
                  {project.name}
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
                    >
                      {new URL(project.link).hostname} ↗
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Responsive layout for tablet and smaller screens */}
        <div className="lg:hidden grid grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <ShineBorder key={index} className="p-4 rounded-md hover:bg-muted/50 transition-colors" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="font-bold">{project.year}</div>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
                      >
                        ↗
                      </Link>
                    )}
                  </div>
                  <div className="text-lg font-medium">{project.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {project.technologies.join(", ")}
                  </div>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </div>
  );
}