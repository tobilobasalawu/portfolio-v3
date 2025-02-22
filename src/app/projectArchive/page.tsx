import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/project";

export default function ProjectArchive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/"
          className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
        >
          ← Back
        </Link>
        <h1 className="text-4xl font-bold mt-4 mb-8">All Projects</h1>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-2">Year</th>
              <th className="text-left py-4 px-2">Project</th>
              <th className="text-left py-4 px-2">Made at</th>
              <th className="text-left py-4 px-2">Built with</th>
              <th className="text-left py-4 px-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr 
                key={index} 
                className="border-b hover:bg-muted/50 transition-colors"
              >
                <td className="py-4 px-2 text-muted-foreground">
                  {project.year}
                </td>
                <td className="py-4 px-2 font-medium">
                  {project.name}
                </td>
                <td className="py-4 px-2 text-muted-foreground">
                  {project.madeAt}
                </td>
                <td className="py-4 px-2">
                  <div className="flex flex-wrap gap-2">
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
                <td className="py-4 px-2">
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
      </div>
    </div>
  );
}