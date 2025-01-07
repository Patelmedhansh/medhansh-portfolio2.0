"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "Cloud Engineer",
    content: "CloudCraft has been instrumental in my cloud journey. The community is supportive and the learning resources are excellent."
  },
  {
    name: "Jane Smith",
    role: "DevOps Engineer",
    content: "The workshops and hands-on projects helped me transition into DevOps. Great community!"
  },
  {
    name: "Mike Johnson",
    role: "Full Stack Developer",
    content: "The mentorship program is fantastic. I learned so much about cloud architecture and best practices."
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
          
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>CloudCraft Initiatives</CardTitle>
                <CardDescription>Join our thriving tech community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What We Offer</h3>
                  <ul className="grid gap-2 text-muted-foreground">
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