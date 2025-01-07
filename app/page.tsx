import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { BlogSection } from "@/components/sections/blog"
import { CommunitySection } from "@/components/sections/community"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <CommunitySection />
      <ContactSection />
    </div>
  )
}