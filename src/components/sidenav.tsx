// components/sidenav.tsx
"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { ThemeToggle } from './theme-toggle'

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div>
      <div className="fixed top-4 right-4 z-[99] flex items-center gap-2">
        <ThemeToggle />
        <button
          className="rounded-full p-2 bg-background border border-border shadow-md dark:bg-secondary md:hidden"
          onClick={handleNav}
        >
          {nav ? (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          )}
        </button>
      </div>

      {nav && (
        <div className="fixed w-full h-screen bg-background/90 dark:bg-background/95 backdrop-blur-sm flex flex-col justify-center items-center z-20 animate-fadeIn">
          <Link
            onClick={handleNav}
            href="/"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              isActive('/') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/skills"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              isActive('/skills') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <GrProjects size={20} />
            <span className="pl-4">Skills</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/projects"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              isActive('/projects') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/contact"
            className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ${
              isActive('/contact') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <Link
            href="/"
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${
              isActive('/') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            href="/skills"
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${
              isActive('/skills') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <GrProjects size={20} />
          </Link>
          <Link
            href="/projects"
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${
              isActive('/projects') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            href="/contact"
            className={`rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${
              isActive('/contact') 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidenav