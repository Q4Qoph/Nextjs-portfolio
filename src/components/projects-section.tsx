// components/projects-section.tsx
"use client"

import React from 'react'
import ProjectItem from './project-item'
import { projects } from '@/data/projects'

const ProjectsSection = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-8 animate-fadeIn">
        Projects
      </h1>
      <p className="text-center py-8 text-muted-foreground animate-fadeIn" style={{ animationDelay: '100ms' }}>
        In these projects I applied my skills for coding and software development
        as a whole. The process is documented to show the life cycle of each project.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <ProjectItem 
            key={project.id}
            id={project.id}
            img={project.image}
            title={project.title}
            type={project.type}
            index={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection