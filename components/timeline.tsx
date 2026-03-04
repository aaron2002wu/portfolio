import React from 'react'
import { timelineMilestones } from './story-data'

export default function Timeline() {
  return (
    <div className="relative ml-3 mt-6 mb-10 border-l border-gray-300 dark:border-gray-700">
      {timelineMilestones.map((item) => {
        const href = item.projectSlug ? `/projects#${item.projectSlug}` : null

        return (
          <article key={`${item.period}-${item.title}`} className="ml-6 mb-8">
            <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900" />
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
                Learn more
              </a>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}
