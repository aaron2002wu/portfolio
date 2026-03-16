import React from 'react'
import { projectEntries } from './story-data'

const sectionOrder = ['ASDL', 'Marine Robotics Group', 'Undergraduate Research', 'Other'] as const
const sectionLabel: Record<(typeof sectionOrder)[number], string> = {
  ASDL: 'ASDL (Aerospace Systems Design Lab)',
  'Marine Robotics Group': 'Marine Robotics Group',
  'Undergraduate Research': 'Undergraduate Research',
  Other: 'Other'
}

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
      {sectionOrder.map((groupName) =>
        grouped[groupName].length === 0 ? null : (
          <div key={groupName} className="projects-group">
            <p className="projects-group-label">{sectionLabel[groupName]}</p>
            <div className="projects-list">
              {grouped[groupName].map((project) => (
                <div key={project.slug} id={project.slug} className="projects-item">
                  <div className="projects-item-body">
                    <h3 className="projects-item-title">
                      <a href={`/projects/${project.slug}`} className="projects-item-title-link">
                        {project.title}
                      </a>
                      {project.paperUrls?.length ? (
                        <span className="projects-item-title-links">
                          {project.paperUrls.map((url, index) => (
                            <a
                              key={url}
                              href={url}
                              className="projects-item-title-link projects-item-title-link-aux"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {project.paperUrls.length > 1 ? `IEEE ${index + 1}` : 'IEEE'}
                            </a>
                          ))}
                        </span>
                      ) : null}
                    </h3>
                    <p className="projects-item-summary">{project.summary}</p>
                  </div>
                  <div className="projects-item-links">
                    <a href={`/projects/${project.slug}`} className="projects-item-link">
                      Open →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}
