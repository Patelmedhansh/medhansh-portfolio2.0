"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "CloudCraft Community Website",
    description: "Multi-page community hub with dark mode and animations.",
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
    demoUrl: "https://cloud-craft.netlify.app",
    githubUrl: "https://github.com/Patelmedhansh/cloudcraft"
  },
  {
    title: "GrowthMind AI",
    description: "AI agent for marketing automation (SEO and social media tasks).",
    techStack: ["Python", "OpenAI", "FastAPI"],
    demoUrl: "https://growthmind.netlify.app",
    githubUrl: "https://github.com/Patelmedhansh/growthmind-ai"
  },
  {
    title: "Bablu-Bot",
    description: "Discord bot with features like house sorting, tech quizzes, and SQLite integration.",
    techStack: ["Python", "Discord.py", "SQLite"],
    githubUrl: "https://github.com/Patelmedhansh/Bablu-Bot"
  },
  {
    title: "Application Monitoring Dashboard",
    description: "Real-time performance tracking with Prometheus and Grafana.",
    techStack: ["Prometheus", "Grafana", "Docker"],
    githubUrl: "https://github.com/Patelmedhansh/Monitoring-Dashboard"
  },
  {
    title: "CI/CD Pipeline with Slack Integration",
    description: "Automated deployment pipeline with real-time notifications.",
    techStack: ["GitHub Actions", "Docker", "Slack API"],
    githubUrl: "https://github.com/Patelmedhansh/MinorProject"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="text-muted-foreground md:text-lg">Featured projects I've worked on</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.demoUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}