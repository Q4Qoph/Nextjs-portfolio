// components/social-icons.tsx
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"

const SocialIcons = () => {
  return (
    <div className="flex justify-between pt-6 max-w-[200px] w-full">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
      >
        <FaLinkedinIn size={20} />
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 dark:hover:text-gray-300 transition duration-300"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-900 dark:hover:text-white transition duration-300"
      >
        <FaXTwitter size={20} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 dark:hover:text-pink-400 transition duration-300"
      >
        <FaInstagram size={20} />
      </a>
    </div>
  )
}

export default SocialIcons