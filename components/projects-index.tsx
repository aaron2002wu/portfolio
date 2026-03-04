import React from 'react'
import { projectEntries } from './story-data'

export default function ProjectsIndex() {
  return (
    <section className="mt-6 space-y-6">
      {projectEntries.map((project) => (
        <article
          id={project.slug}
          key={project.slug}
          className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-gray-700"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {project.timeframe}
          </p>
          <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h2>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{project.summary}</p>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-200">
            <strong>Role:</strong> {project.role}
          </p>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-200">
            <strong>Impact:</strong> {project.impact}
          </p>
          <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">{project.tags.join(' • ')}</p>
          <p className="text-sm">
            <a
              href={`#${project.slug}`}
              className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Deep dive placeholder
            </a>
          </p>
        </article>
      ))}
    </section>
  )
}
