'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

type HeaderProps = {
  scrollToSection: (section: string) => void
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Education']

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent<string>) => {
      setActiveSection(event.detail)
    }

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      setActiveSection(hash || 'about')
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('sectionChange', handleSectionChange as EventListener)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('sectionChange', handleSectionChange as EventListener)
    }
  }, [])

  return (
    <header className="bg-notion-bg border-b border-notion-gray fixed  top-0 left-0 right-0 z-10 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            Portfolio
          </h1>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`flex flex-col bg-white md:flex-row md:space-x-4 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-notion-bg shadow-md' : 'hidden md:flex'}`}>
            {navItems.map((item) => (
              <li key={item.toLowerCase()} className={isMenuOpen ? 'border-b border-notion-gray last:border-b-0' : ''}>
                <button
                  onClick={() => {
                    scrollToSection(item.toLowerCase())
                    setActiveSection(item.toLowerCase())
                    setIsMenuOpen(false)
                  }}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-notion-gray rounded transition-colors ${activeSection === item.toLowerCase() ? 'font-medium' : ''}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

