// app/page.tsx
import MainSection from "@/components/main-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div>
      <MainSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}