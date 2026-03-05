import React from 'react'
import { projectEntries } from './story-data'

const sectionOrder = ['Undergraduate Research', 'Marine Robotics Group', 'ASDL', 'Other'] as const

export default function ProjectsIndex() {
  const grouped = projectEntries.reduce<Record<(typeof sectionOrder)[number], typeof projectEntries>>(
    (acc, project) => {
      acc[project.category].push(project)
      return acc
    },
    { 'Undergraduate Research': [], 'Marine Robotics Group': [], ASDL: [], Other: [] }
  )

  return (
    <div className="projects-root">
      <details className="projects-howto">
        <summary>How to add a project</summary>
        <div className="projects-howto-body">
          <p>
            Add an entry in <code>components/story-data.ts</code> and create{' '}
            <code>pages/projects/&lt;slug&gt;.mdx</code>.
          </p>
          <pre>
{`---
title: Project Title
category: Undergraduate Research | Marine Robotics Group | ASDL | Other
date: 2026-03-04
---
# Project Title
1-2 sentence summary.
## What I Did
- bullet
## Outcome
1-2 measurable results.`}
          </pre>
        </div>
      </details>

      {sectionOrder.map((groupName) =>
        grouped[groupName].length === 0 ? null : (
          <div key={groupName} className="projects-group">
            <p className="projects-group-label">{groupName}</p>
            <div className="projects-list">
              {grouped[groupName].map((project) => (
                <div key={project.slug} id={project.slug} className="projects-item">
                  <div className="projects-item-body">
                    <h3 className="projects-item-title">{project.title}</h3>
                    <p className="projects-item-summary">{project.summary}</p>
                  </div>
                  <a href={`/projects/${project.slug}`} className="projects-item-link">
                    Open →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}