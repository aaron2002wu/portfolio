'use client'

import React, { useMemo, useState } from 'react'

function BaseIcon({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-6 w-6 ${className || ''}`}
    >
      {children}
    </svg>
  )
}

const DockerIcon = ({ className }: { className?: string }) => (
  <BaseIcon className={className}>
    <rect x="3" y="13" width="4" height="3" rx="0.5" />
    <rect x="8" y="13" width="4" height="3" rx="0.5" />
    <rect x="13" y="13" width="4" height="3" rx="0.5" />
    <rect x="8" y="9" width="4" height="3" rx="0.5" />
    <path d="M3 17.5h16a3 3 0 0 1-3 3H8a5 5 0 0 1-5-5v-2z" />
  </BaseIcon>
)

const ChipIcon = ({ className }: { className?: string }) => (
  <BaseIcon className={className}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M9 10h6M9 14h6M10 9v6M14 9v6M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" />
  </BaseIcon>
)

const SensorIcon = ({ className }: { className?: string }) => (
  <BaseIcon className={className}>
    <path d="M4 12a8 8 0 0 1 16 0" />
    <path d="M7 12a5 5 0 0 1 10 0" />
    <circle cx="12" cy="12" r="2" />
  </BaseIcon>
)

const EyeIcon = ({ className }: { className?: string }) => (
  <BaseIcon className={className}>
    <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
    <circle cx="12" cy="12" r="2.5" />
  </BaseIcon>
)

const GearIcon = ({ className }: { className?: string }) => (
  <BaseIcon className={className}>
    <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
    <path d="M12 3v3M12 18v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M3 12h3M18 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
  </BaseIcon>
)

const NetworkIcon = ({ className }: { className?: string }) => (
  <BaseIcon className={className}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="19" cy="7" r="2" />
    <circle cx="19" cy="17" r="2" />
    <path d="M7 12h6M16.5 8.2l-4.7 3.1M16.5 15.8l-4.7-3.1" />
  </BaseIcon>
)

type ContainerNode = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  description: string
  tech: string[]
  code: string
  status: string
  ports: string
  ram: string
}

type Connection = {
  from: string
  to: string
  topic: string
  dynamic?: boolean
}

const containerData: {
  host: string
  containers: ContainerNode[]
  connections: Connection[]
} = {
  host: 'Jetson AGX Orin',
  containers: [
    {
      id: 'sensor_driver',
      name: 'Sensors (LiDAR/Cam)',
      icon: SensorIcon,
      color: 'border-emerald-500',
      description: 'Reads raw data from hardware drivers and publishes sensor topics.',
      tech: ['C++', 'ROS 2 Driver', 'V4L2'],
      code: 'image: ros:humble-perception-driver\nnetwork_mode: host\ndevices:\n  - /dev/video0:/dev/video0',
      status: 'Running',
      ports: 'Host networking',
      ram: '620 MB'
    },
    {
      id: 'perception',
      name: 'Perception Node',
      icon: EyeIcon,
      color: 'border-sky-500',
      description: 'Processes images and LiDAR scans for object-level semantic cues.',
      tech: ['Python', 'PyTorch', 'CUDA', 'OpenCV'],
      code: 'image: my-perception:latest\nvolumes:\n  - ./models:/models\ndeploy:\n  resources:\n    reservations:\n      devices:\n        - driver: nvidia',
      status: 'Running',
      ports: '5000, 8765',
      ram: '2.1 GB'
    },
    {
      id: 'navigation',
      name: 'Navigation Stack',
      icon: GearIcon,
      color: 'border-amber-500',
      description: 'Computes costmaps and path plans for multi-domain autonomy.',
      tech: ['C++', 'ROS 2 Nav2', 'Costmap2D'],
      code: 'image: ros:humble-nav2\nvolumes:\n  - ./config/nav2_params.yaml',
      status: 'Running',
      ports: '11311',
      ram: '880 MB'
    },
    {
      id: 'motion_control',
      name: 'Motion Control',
      icon: NetworkIcon,
      color: 'border-rose-500',
      description: 'Converts /cmd_vel messages into low-level actuation commands.',
      tech: ['C++', 'PID Loop', 'SocketCAN'],
      code: 'image: my-motion-control:latest\nprivileged: true\nnetwork_mode: host',
      status: 'Running',
      ports: 'Host networking',
      ram: '410 MB'
    }
  ],
  connections: [
    { from: 'sensor_driver', to: 'perception', topic: '/camera/image_raw', dynamic: true },
    { from: 'sensor_driver', to: 'navigation', topic: '/scan', dynamic: true },
    { from: 'perception', to: 'navigation', topic: '/detected_objects' },
    { from: 'navigation', to: 'motion_control', topic: '/cmd_vel', dynamic: true }
  ]
}

const nodePositions: Record<string, { x: number; y: number }> = {
  sensor_driver: { x: 25, y: 22 },
  perception: { x: 75, y: 22 },
  navigation: { x: 25, y: 74 },
  motion_control: { x: 75, y: 74 }
}

export default function ContainerGraph() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedContainer = useMemo(
    () => containerData.containers.find((c) => c.id === selectedId),
    [selectedId]
  )

  const isRelated = (containerId: string) => {
    if (!selectedId) return true
    if (selectedId === containerId) return true
    return containerData.connections.some(
      (conn) =>
        (conn.from === selectedId && conn.to === containerId) ||
        (conn.to === selectedId && conn.from === containerId)
    )
  }

  const isConnectionActive = (from: string, to: string) => {
    if (!selectedId) return false
    return (
      (selectedId === from || selectedId === to) &&
      containerData.connections.some((conn) => conn.from === from && conn.to === to)
    )
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative flex-1 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-900 dark:bg-black/30">
          <header className="mb-8 flex items-center gap-3 border-b border-gray-200 pb-3 dark:border-gray-800">
            <DockerIcon className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">ROS 2 Distributed System</h3>
              <p className="flex items-center gap-1.5 text-sm text-gray-500">
                <ChipIcon className="h-4 w-4" /> Host: {containerData.host}
              </p>
            </div>
          </header>

          <div className="relative min-h-[360px]">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              {containerData.connections.map((conn) => {
                const fromPos = nodePositions[conn.from]
                const toPos = nodePositions[conn.to]
                const active = isConnectionActive(conn.from, conn.to)
                const related = !selectedId || active

                return (
                  <g key={`${conn.from}-${conn.to}-${conn.topic}`}>
                    <line
                      x1={`${fromPos.x}%`}
                      y1={`${fromPos.y}%`}
                      x2={`${toPos.x}%`}
                      y2={`${toPos.y}%`}
                      stroke={active ? '#3b82f6' : '#9ca3af'}
                      strokeWidth={active ? 3 : 2}
                      strokeDasharray={conn.dynamic ? '6 5' : '0'}
                      style={active && conn.dynamic ? { animation: 'dash 1.2s linear infinite' } : undefined}
                      opacity={related ? 1 : 0.25}
                    />
                    <text
                      x={`${(fromPos.x + toPos.x) / 2}%`}
                      y={`${(fromPos.y + toPos.y) / 2 - 2}%`}
                      textAnchor="middle"
                      className="fill-gray-500 text-[10px]"
                    >
                      {conn.topic}
                    </text>
                  </g>
                )
              })}
            </svg>

            <div className="grid grid-cols-2 gap-x-10 gap-y-16">
              {containerData.containers.map((container) => {
                const isActive = selectedId === container.id
                const related = isRelated(container.id)
                const ContainerIcon = container.icon

                return (
                  <button
                    key={container.id}
                    onClick={() => setSelectedId(isActive ? null : container.id)}
                    className={`
                      relative z-10 flex flex-col items-center gap-3 rounded-xl border-2 p-4 transition-all duration-300 ease-in-out
                      ${container.color}
                      ${isActive ? 'scale-105 bg-white shadow-xl dark:bg-gray-900' : 'bg-gray-100 dark:bg-gray-800'}
                      ${!related ? 'opacity-20' : 'opacity-100'}
                      hover:scale-105 hover:border-blue-500 hover:shadow-lg
                    `}
                  >
                    <ContainerIcon className={`h-10 w-10 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                    <span className="text-center text-sm font-medium md:text-base">{container.name}</span>
                    {isActive ? (
                      <span className="absolute -right-3 -top-3 flex h-6 w-6">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                          On
                        </span>
                      </span>
                    ) : null}
                  </button>
                )
              })}
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            Click a container to highlight communication paths and inspect deployment details.
          </p>
        </div>

        <div className="w-full flex-shrink-0 border-gray-100 pt-6 md:w-80 md:border-l md:pl-6 md:pt-0 dark:border-gray-900">
          {selectedContainer ? (
            <aside className="space-y-5">
              <h4 className="flex items-center gap-2 text-2xl font-bold">
                <DockerIcon className="h-7 w-7 text-blue-500" />
                {selectedContainer.id}.service
              </h4>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {selectedContainer.description}
              </p>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-md bg-gray-100 p-2 text-center dark:bg-gray-900">
                  <p className="text-gray-500">Status</p>
                  <p className="font-semibold text-green-600">{selectedContainer.status}</p>
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center dark:bg-gray-900">
                  <p className="text-gray-500">Ports</p>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">{selectedContainer.ports}</p>
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center dark:bg-gray-900">
                  <p className="text-gray-500">RAM</p>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">{selectedContainer.ram}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Container Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedContainer.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  docker-compose.yml snippet
                </h5>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-xs leading-snug text-gray-200">
                  {selectedContainer.code}
                </pre>
              </div>
            </aside>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-400 dark:border-gray-800">
              <DockerIcon className="mb-4 h-16 w-16" />
              <p className="font-medium">System Architecture Overview</p>
              <p className="text-sm">
                Select a container to inspect ROS 2 communication flow and container deployment configuration.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -22;
          }
        }
      `}</style>
    </div>
  )
}
