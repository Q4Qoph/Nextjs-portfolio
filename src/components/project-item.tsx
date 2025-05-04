// components/project-item.tsx
"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  id: string
  img: string
  title: string
  type: string
  index: number
}

const ProjectItem = ({ id, img, title, type, index }: ProjectItemProps) => {
  return (
    <div 
      className="relative group overflow-hidden rounded-xl shadow-lg shadow-muted-foreground/10 dark:shadow-none border border-muted animate-scaleIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-64 w-full relative">
        <Image 
          src={img} 
          alt={title}
          fill
          className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-foreground tracking-wider">{title}</h3>
        <p className="text-muted-foreground mb-4">{type}</p>
        <Link href={`/projects/${id}`}>
          <div className="w-full py-2 text-center rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            More Info
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem