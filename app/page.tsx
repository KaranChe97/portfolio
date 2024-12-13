'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const sections = ['about', 'experience', 'skills', 'projects', 'education']

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (window.location.hash !== `#${sectionId}`) {
            window.history.pushState(null, '', `#${sectionId}`)
            window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionId }))
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    if (!window.location.hash) {
      window.history.pushState(null, '', '#about')
      window.dispatchEvent(new CustomEvent('sectionChange', { detail: 'about' }))
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionId }))
    }
  }

  return (
    <div className="min-h-screen bg-notion-bg">
      <Header scrollToSection={scrollToSection} />
      <main className="notion-page">
        {sections.map((section, index) => (
          <motion.section
            key={section}
            id={section}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {section === 'about' && <About />}
            {section === 'experience' && <Experience />}
            {section === 'skills' && <Skills />}
            {section === 'projects' && <Projects />}
            {section === 'education' && <Education />}
          </motion.section>
        ))}
      </main>
    </div>
  )
}

