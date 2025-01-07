"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Youtube, Twitter, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Medhansh Patel
              </h1>
              <p className="text-xl text-muted-foreground sm:text-2xl">
                Full Stack Developer, DevOps Engineer & Community Leader
              </p>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Founder of CloudCraft | Building scalable solutions and fostering tech communities
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="#projects">
                  Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://cloud-craft.netlify.app" target="_blank" rel="noopener noreferrer">
                  Join CloudCraft
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/medhansh-patel-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="https://github.com/Patelmedhansh" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/medhansh-patel-6b9349215/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@medhansh39" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
              <Link href="https://x.com/Medhanshhhh" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}