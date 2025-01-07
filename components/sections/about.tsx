"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              Medhansh Patel is a passionate developer focused on crafting scalable solutions and leading tech communities. As the Founder of CloudCraft, he has built a thriving community bridging learners and industry professionals.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Key Roles</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Founder of CloudCraft</li>
                <li>DevRel at ReinAiScience</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="https://cloud-craft.netlify.app" target="_blank" rel="noopener noreferrer">
                  Visit CloudCraft
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://discord.gg/KxUFSRkU7j" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="medhansh.jpg"
                  alt="Medhansh Patel"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}