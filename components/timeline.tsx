// components/Timeline.tsx
import React from 'react';

const workTimeline = [
  {
    date: "August 2024 - Present",
    role: "PhD Student in Robotics & Marine Robotics President",
    organization: "Georgia Institute of Technology",
    description: "Focusing on deep reinforcement learning, Sim2Real transfer, and state estimation. Leading the university team for the RoboBoat 2026 competition in Sarasota, FL."
  },
  {
    date: "Spring 2024 - Fall 2024",
    role: "RF Engineering Intern",
    organization: "SpaceX",
    description: "Supported RF engineering initiatives and aerospace communications systems in Seattle, WA."
  },
  {
    date: "May 2024",
    role: "B.S. in Electrical Engineering",
    organization: "Georgia Institute of Technology",
    description: "Completed undergraduate degree while participating actively in marine robotics and undergraduate research."
  },
  {
    date: "Summer 2023",
    role: "Undergraduate Intern",
    organization: "Scripps Institution of Oceanography MPL REU",
    description: "Marine Physical Laboratory Research Experience for Undergraduates."
  }
];

export default function Timeline() {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3 mt-8 mb-8">
      {workTimeline.map((item, index) => (
        <div key={index} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full -left-1.5 ring-4 ring-white dark:ring-gray-900"></span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {item.role} <span className="text-gray-500 dark:text-gray-400 font-normal mx-2">@</span> {item.organization}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.date}
          </time>
          <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}