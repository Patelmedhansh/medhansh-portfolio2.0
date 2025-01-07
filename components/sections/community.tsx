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
    content: "CloudCraft's comprehensive DevOps workshops and hands-on projects helped me master containerization and CI/CD pipelines. The community support was instrumental in my learning journey."
  },
  {
    name: "Jasmeen Kaur Pabla",
    role: "MERN Stack Developer",
    content: "Through CloudCraft, I gained invaluable experience with cloud deployment strategies and infrastructure management. The practical approach to learning made complex concepts accessible."
  },
  {
    name: "Deep Mehta",
    role: "Software Engineer",
    content: "CloudCraft's mentorship program and real-world projects significantly enhanced my understanding of cloud architecture and DevOps practices. The community's collaborative environment is exceptional."
  },
  {
    name: "Rahil Shah",
    role: "UX/UI & AI/ML Engineer",
    content: "The platform's focus on integrating AI/ML deployments with cloud infrastructure helped me bridge the gap between development and operations. CloudCraft's resources are invaluable."
  },
  {
    name: "Divya Mulchandani",
    role: "Cyber Security Engineer",
    content: "CloudCraft's emphasis on security best practices in cloud environments helped me develop a deeper understanding of secure infrastructure design and implementation."
  },
  {
    name: "Ziyan Chasmawala",
    role: "MERN Stack Developer",
    content: "The community's expertise in cloud-native development transformed my approach to building scalable applications. CloudCraft's workshops on AWS and Docker were particularly enlightening."
  },
  {
    name: "Dev Vaghela",
    role: "MERN Stack Developer",
    content: "CloudCraft provided me with essential knowledge about cloud deployment strategies and DevOps tools. The practical exercises and community support accelerated my learning significantly."
  }
]

export function CommunitySection() {
  return (
    <section id="community" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
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
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>CloudCraft Initiatives</CardTitle>
                <CardDescription>Join our thriving tech community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">What We Offer</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Interactive Workshops</li>
                    <li>Cloud Infrastructure Services</li>
                    <li>AI Agent Development</li>
                    <li>Mentorship Programs</li>
                    <li>Community Events</li>
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <Link href="https://discord.gg/KxUFSRkU7j" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Our Discord
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
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
                      <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
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