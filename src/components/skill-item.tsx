// components/skill-item.tsx
"use client"

import React from "react"

interface SkillItemProps {
  category: string
  title: string
  duration: string
  details: string
  index: number
}

const SkillItem = ({ category, title, duration, details, index }: SkillItemProps) => {
  return (
    <ol 
      className="flex flex-col md:flex-row relative border-l border-muted-foreground/30 dark:border-muted-foreground/20 animate-slideUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-muted-foreground/50 dark:bg-muted-foreground/30 rounded-full mt-1.5 -left-1.5 border border-background" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-primary-foreground bg-primary rounded">{category}</span>
          <span className="text-lg font-semibold text-foreground/90">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-muted-foreground">{duration}</span>
        </p>
        <p className="my-2 text-base font-normal text-muted-foreground">{details}</p>
      </li>
    </ol>
  )
}

export default SkillItem