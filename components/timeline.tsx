'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { timelineMilestones } from './story-data'

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const milestones = useMemo(() => {
    return [...timelineMilestones].reverse()
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const el = containerRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const start = viewportHeight * 0.75
      const distance = rect.height + viewportHeight * 0.35
      const progress = clamp((start - rect.top) / distance)

      setScrollProgress(progress)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative mt-6 mb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"
        style={{ left: '11px' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 w-0.5 origin-top bg-gradient-to-b from-blue-500 to-cyan-400 transition-all duration-200 dark:from-blue-400 dark:to-cyan-300"
        style={{ left: '11px', height: `${Math.max(scrollProgress * 100, 3)}%` }}
      />

      {milestones.map((item, index) => {
        const href = item.projectPath
        const threshold = (index + 0.25) / milestones.length
        const isActive = scrollProgress >= threshold

        return (
          <article key={`${item.period}-${item.title}`} className="relative mb-8 pl-10">
            <span
              aria-hidden="true"
              className={`absolute top-5 h-3 w-3 rounded-full ring-4 ring-white transition-all duration-300 dark:ring-gray-900 ${
                isActive ? 'bg-blue-500 shadow-sm' : 'bg-gray-400 dark:bg-gray-600'
              }`}
              style={{ left: '6px' }}
            />

            <div
              className={`rounded-xl border p-4 backdrop-blur-sm transition-all duration-500 ${
                isActive
                  ? 'translate-y-0 border-blue-200 bg-white/80 opacity-100 dark:border-blue-900 dark:bg-gray-900/70'
                  : 'translate-y-4 border-gray-200 bg-white/50 opacity-50 dark:border-gray-800 dark:bg-gray-900/40'
              }`}
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {item.period}
              </p>
              <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
                <span className="mx-2 font-normal text-gray-500 dark:text-gray-400">@</span>
                {item.organization}
              </h3>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{item.summary}</p>
              {href ? (
                <a
                  href={href}
                  className="text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Learn project
                </a>
              ) : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}
