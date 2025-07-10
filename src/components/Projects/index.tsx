import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink } from "lucide-react"

const PROJECTS = [
  {
    title: "SuperScrape",
    description: "A google maps scraping tool",
    image: "/img/supescrape.png", 
    technologies: ["C#", ".NET 9","React", "2025"],
    href: "https://github.com/ronny8dm/google-scraper",
  },
  {
    title: "Directed By San",
    description: "Static photography portfolio",
    image: "/img/directedbysan.png", 
    technologies: ["Static","React", "2025"],
    href: "https://directedbyysan.hackneywebdesigns.com/",
  },
  {
    title: "Serene",
    description: "Wellness and meditation demo web app",
    image: "/img/serene.png", 
    technologies: ["Static","React", "2025"],
    href: "https://serene.hackneywebdesigns.com/",
  },
  {
    title: "GibFit30",
    description: "A Gym membership demo web app",
    image: "/img/gitbfit30.png", 
    technologies: ["Static","React", "2025"],
    href: "https://gibfit30.hackneywebdesigns.com/",
  },
  
]

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-2xl mx-auto ">
      <div className="flex min-h-0 flex-col gap-y-3"> 
        <h2 className="text-xl font-bold">Projects</h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {PROJECTS.map((project, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/1 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer overflow-hidden p-0">
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="relative">
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                <span class="text-2xl font-bold text-primary">${project.title[0]}</span>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="p-2 bg-background/80 backdrop-blur-sm rounded-full">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3 pl-2">
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0 pl-2">
                      <div className="flex flex-wrap gap-1 pb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-[10px] px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}