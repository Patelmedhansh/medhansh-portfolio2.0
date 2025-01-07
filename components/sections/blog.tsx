"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { getHashnodeArticles } from "@/lib/hashnode"

interface BlogPost {
  title: string
  brief: string
  slug: string
  dateAdded: string
  coverImage?: string
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      const articles = await getHashnodeArticles()
      setPosts(articles as BlogPost[])
      setLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="py-16 md:py-24 bg-muted/50 w-full">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
            <p className="text-muted-foreground md:text-lg">Latest articles and tutorials</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {loading ? (
              <p className="text-center col-span-3">Loading blog posts...</p>
            ) : posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full max-w-sm"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        {new Date(post.dateAdded).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{post.brief}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button variant="outline" asChild>
                        <Link 
                          href={`https://medhansh.hashnode.dev/${post.slug}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-3">No blog posts found</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}