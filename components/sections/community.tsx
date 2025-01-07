"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

const testimonials = [
  {
    name: "Poojan Prajapati",
    role: "Full Stack Developer",
    content: "CloudCraft's comprehensive DevOps workshops helped me master containerization and CI/CD pipelines. The hands-on projects were invaluable for my professional growth."
  },
  {
    name: "Jasmeen Kaur Pabla",
    role: "MERN Stack Developer",
    content: "Through CloudCraft, I learned how to deploy and scale MERN applications on cloud platforms. The community support made complex concepts easy to grasp."
  },
  {
    name: "Deep Mehta",
    role: "Software Engineer",
    content: "CloudCraft's infrastructure-as-code sessions transformed my approach to cloud architecture. The practical exercises in AWS and Azure were extremely beneficial."
  },
  {
    name: "Rahil Shah",
    role: "UX/UI Designer & AI/ML Engineer",
    content: "The community helped me understand how to deploy and manage ML models in production. The DevOps practices I learned are essential for my AI projects."
  },
  {
    name: "Divya Mulchandani",
    role: "Cybersecurity Specialist",
    content: "CloudCraft's focus on security best practices in cloud environments has been crucial for my career in cybersecurity. The hands-on labs were particularly helpful."
  },
  {
    name: "Ziyan Chasmawala",
    role: "MERN Stack Developer",
    content: "The community's expertise in cloud services helped me optimize my MERN applications for scale. The mentorship program was a game-changer."
  },
  {
    name: "Dev Vaghela",
    role: "MERN Stack Developer",
    content: "CloudCraft taught me essential DevOps practices for MERN applications. The community's guidance on cloud deployment strategies was invaluable."
  }
]

export function CommunitySection() {
  return (
    <section id="community" className="py-16 md:py-24 w-full flex justify-center">
      <div className="container px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Community</h2>
            <p className="text-muted-foreground md:text-lg">Making cloud learning accessible and fun for everyone</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-start">
            <Card className="h-fit lg:sticky lg:top-24">
              <CardHeader>
                <CardTitle>CloudCraft Initiatives</CardTitle>
                <CardDescription>Join our thriving tech community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What We Offer</h3>
                  <ul className="grid gap-3 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Interactive Workshops
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Cloud Infrastructure Services
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      AI Agent Development
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Mentorship Programs
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Community Events
                    </li>
                  </ul>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link href="https://discord.gg/KxUFSRkU7j" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Join Our Discord
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent pr-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <p className="mb-4 text-muted-foreground leading-relaxed">{testimonial.content}</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}