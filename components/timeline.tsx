import React from 'react'
import { timelineMilestones } from './story-data'

export default function Timeline() {
  const milestones = [...timelineMilestones].reverse()

  return (
    <div className="timeline-root">
      <div className="timeline-list-wrap">
        <ol className="timeline-list">
          {milestones.map((item, index) => (
            <li key={`${item.period}-${item.title}-${index}`} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-period-row">
                  <time className="timeline-period">{item.period}</time>
                  {item.tag ? <span className="timeline-tag">{item.tag}</span> : null}
                </div>
                {item.projectPath ? (
                  <a className="timeline-title timeline-title-link" href={item.projectPath}>
                    {item.title}
                  </a>
                ) : (
                  <div className="timeline-title">{item.title}</div>
                )}
                <p className="timeline-description">{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
