import React from 'react'
import { timelineMilestones } from './story-data'

export default function Timeline() {
  const milestones = [...timelineMilestones].reverse()

  return (
    <div className="timeline-root">
      <ol className="timeline-list">
        {milestones.map((item, index) => (
          <li key={`${item.period}-${item.title}-${index}`} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <time className="timeline-period">{item.period}</time>
              <div className="timeline-title">{item.title}</div>

            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}