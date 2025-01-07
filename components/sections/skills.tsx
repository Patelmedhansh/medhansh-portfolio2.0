"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Database, 
  Cloud, 
  Boxes, 
  Library, 
  Terminal,
  Network,
  MonitorCheck,
  FileCode,
  LineChart,
  Server,
  Settings
} from "lucide-react"

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="h-6 w-6 mb-2" />,
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Go", level: 75 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "YAML", level: 80 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Library className="h-6 w-6 mb-2" />,
    items: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "Bootstrap/Tailwind", level: 90 }
    ]
  },
  {
    category: "DevOps Tools",
    icon: <Terminal className="h-6 w-6 mb-2" />,
    items: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Prometheus", level: 75 },
      { name: "Grafana", level: 75 },
      { name: "GitHub Actions", level: 85 }
    ]
  },
  {
    category: "Infrastructure & Monitoring",
    icon: <MonitorCheck className="h-6 w-6 mb-2" />,
    items: [
      { name: "Terraform (IaC)", level: 80 },
      { name: "Application Monitoring", level: 85 },
      { name: "Log Management", level: 80 },
      { name: "Performance Tracking", level: 85 },
      { name: "Data Visualization", level: 80 }
    ]
  },
  {
    category: "Networking & System Admin",
    icon: <Network className="h-6 w-6 mb-2" />,
    items: [
      { name: "Network Protocols", level: 85 },
      { name: "Linux Administration", level: 80 },
      { name: "Security Best Practices", level: 85 },
      { name: "Load Balancing", level: 75 },
      { name: "Firewall Configuration", level: 80 }
    ]
  },
  {
    category: "Cloud Technologies",
    icon: <Cloud className="h-6 w-6 mb-2" />,
    items: [
      { name: "AWS EC2", level: 85 },
      { name: "AWS S3", level: 80 },
      { name: "AWS Lambda", level: 75 },
      { name: "CloudFormation", level: 70 },
      { name: "Multi-cloud", level: 75 }
    ]
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6 mb-2" />,
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "Supabase", level: 80 },
      { name: "SQLite", level: 85 }
    ]
  },
  {
    category: "Other Tools",
    icon: <Boxes className="h-6 w-6 mb-2" />,
    items: [
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 80 },
      { name: "WebSockets", level: 75 }
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="text-muted-foreground md:text-lg">Technical expertise and tools I work with</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      {category.icon}
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.items.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}