// components/skills-section.tsx
"use client"

import React from 'react'
import SkillItem from './skill-item'
import { skills } from '@/data/skills'

const SkillsSection = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-8 animate-fadeIn">
        Skills
      </h1>
      {skills.map((item, idx) => (
        <SkillItem 
          key={idx}
          index={idx}
          category={item.category}
          title={item.title}
          duration={item.duration}
          details={item.description} 
        />
      ))}
    </div>
  )
}

export default SkillsSection