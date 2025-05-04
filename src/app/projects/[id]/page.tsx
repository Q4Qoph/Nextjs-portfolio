// app/project/[id]/page.tsx
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Button } from '@/components/ui/button'

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="max-w-4xl mx-auto pt-20 px-6 pb-20">
      <Link href="/projects" className="inline-block mb-6">
        <Button variant="outline" className="gap-2">
          <AiOutlineArrowLeft />
          Back to Projects
        </Button>
      </Link>
      
      <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-2 text-primary">{project.title}</h1>
      <p className="text-xl text-muted-foreground mb-6">{project.type}</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-medium mb-4">Project Description</h2>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-medium mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="gap-2">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Button>
        </a>
      </div>
    </div>
  )
}