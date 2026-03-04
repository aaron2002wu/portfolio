'use client'

import React, { useMemo, useState, useEffect } from 'react'

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
  const [hoveredId, setHoveredId] = useState<string | null>(null)

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
    <div className="rounded-xl border border-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:border-purple-900/40 dark:bg-gradient-to-br dark:from-purple-950/30 dark:via-blue-950/30 dark:to-pink-950/30">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative flex-1 rounded-xl border border-gradient-to-r from-indigo-200 to-pink-200 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 shadow-sm dark:border-purple-500/20 dark:bg-gradient-to-br dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
          <header className="mb-8 flex items-center gap-3 border-b border-purple-200 pb-3 dark:border-purple-500/20">
            <div className="animate-bounce">
              <DockerIcon className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent" />
            </div>
            <div>
              <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
                ROS 2 Distributed System
              </h3>
              <p className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
                <ChipIcon className="h-4 w-4" /> Host: {containerData.host}
              </p>
            </div>
          </header>

          <div className="relative min-h-[400px]">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              {containerData.connections.map((conn) => {
                const fromPos = nodePositions[conn.from]
                const toPos = nodePositions[conn.to]
                const active = isConnectionActive(conn.from, conn.to)
                const hovered = hoveredId && (hoveredId === conn.from || hoveredId === conn.to)

                return (
                  <g key={`${conn.from}-${conn.to}-${conn.topic}`}>
                    {/* Glow effect for active connections */}
                    {(active || hovered) && (
                      <line
                        x1={`${fromPos.x}%`}
                        y1={`${fromPos.y}%`}
                        x2={`${toPos.x}%`}
                        y2={`${toPos.y}%`}
                        stroke={active ? '#ec4899' : '#a78bfa'}
                        strokeWidth={8}
                        opacity="0.3"
                        style={{ filter: 'blur(3px)' }}
                      />
                    )}
                    {/* Main connection line */}
                    <line
                      x1={`${fromPos.x}%`}
                      y1={`${fromPos.y}%`}
                      x2={`${toPos.x}%`}
                      y2={`${toPos.y}%`}
                      stroke={active ? '#ec4899' : hovered ? '#a78bfa' : '#cbd5e1'}
                      strokeWidth={active || hovered ? 3 : 2}
                      strokeDasharray={conn.dynamic ? '8 6' : '0'}
                      style={
                        (active || hovered) && conn.dynamic
                          ? { animation: 'dash 1.5s linear infinite' }
                          : undefined
                      }
                      opacity={selectedId === null || active || hovered ? 1 : 0.15}
                      className="transition-all duration-300"
                    />
                    {/* Topic label */}
                    {(active || hovered || !selectedId) && (
                      <text
                        x={`${(fromPos.x + toPos.x) / 2}%`}
                        y={`${(fromPos.y + toPos.y) / 2 - 3}%`}
                        textAnchor="middle"
                        className="fill-purple-600 text-[11px] font-semibold dark:fill-purple-300"
                        style={{ opacity: active ? 1 : 0.6 }}
                      >
                        {conn.topic}
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>

            <div className="grid grid-cols-2 gap-x-10 gap-y-16">
              {containerData.containers.map((container) => {
                const isActive = selectedId === container.id
                const isHovered = hoveredId === container.id
                const related = !selectedId || isActive
                const ContainerIcon = container.icon
                const colorMap: Record<string, { gradient: string; light: string; dark: string }> = {
                  'border-emerald-500': { gradient: 'from-emerald-400 to-teal-500', light: 'bg-emerald-50', dark: 'dark:bg-emerald-950/20' },
                  'border-sky-500': { gradient: 'from-sky-400 to-blue-500', light: 'bg-sky-50', dark: 'dark:bg-sky-950/20' },
                  'border-amber-500': { gradient: 'from-amber-400 to-orange-500', light: 'bg-amber-50', dark: 'dark:bg-amber-950/20' },
                  'border-rose-500': { gradient: 'from-rose-400 to-pink-500', light: 'bg-rose-50', dark: 'dark:bg-rose-950/20' }
                }
                const colors = colorMap[container.color] || colorMap['border-sky-500']

                return (
                  <button
                    key={container.id}
                    onClick={() => setSelectedId(isActive ? null : container.id)}
                    onMouseEnter={() => setHoveredId(container.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`
                      group relative z-10 flex flex-col items-center gap-3 rounded-2xl border-2 p-5 transition-all duration-300 ease-out cursor-pointer
                      ${container.color}
                      ${isActive ? `scale-110 shadow-2xl ring-2 ring-purple-400 ${colors.light} ${colors.dark}` : isHovered ? 'scale-105 shadow-lg ring-1 ring-purple-300' : `shadow-md ${colors.light} ${colors.dark}`}
                      ${!related ? 'opacity-30 blur-sm' : 'opacity-100'}
                    `}
                  >
                    {/* Background glow for active/hovered */}
                    {(isActive || isHovered) && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-10 blur-lg transition-opacity duration-300`} />
                    )}
                    
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className={`relative transition-all duration-300 ${isActive ? 'scale-125' : isHovered ? 'scale-110' : ''}`}>
                        <ContainerIcon className={`h-10 w-10 transition-all ${isActive ? `bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent` : isHovered ? 'text-purple-500' : 'text-gray-700 dark:text-gray-300'}`} />
                        {isActive && (
                          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur opacity-30" />
                        )}
                      </div>
                      <span className="text-center text-sm font-semibold md:text-base transition-colors duration-300 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text group-hover:text-transparent dark:group-hover:text-transparent animate-text">
                        {container.name}
                      </span>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -right-4 -top-4">
                        <div className="relative flex h-8 w-8 items-center justify-center">
                          <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                          <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-[10px] font-bold text-white shadow-lg">
                            ✓
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <p className="mt-10 text-center text-xs font-medium text-gray-500 dark:text-gray-400">
            ✨ Click a container to explore connections • Hover to preview ✨
          </p>
        </div>

        <div className="w-full flex-shrink-0 border-purple-200 pt-6 md:w-80 md:border-l md:pl-6 md:pt-0 dark:border-purple-500/20">
          {selectedContainer ? (
            <aside className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <DockerIcon className="h-6 w-6 text-white" />
                </div>
                <h4 className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{selectedContainer.id}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">.service</span>
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {selectedContainer.description}
              </p>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 p-3 text-center dark:from-green-900/30 dark:to-emerald-900/30">
                  <p className="text-gray-600 dark:text-gray-400">Status</p>
                  <p className="font-bold text-green-600 dark:text-green-400">{selectedContainer.status}</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 p-3 text-center dark:from-blue-900/30 dark:to-cyan-900/30">
                  <p className="text-gray-600 dark:text-gray-400">Ports</p>
                  <p className="font-bold text-blue-600 dark:text-blue-400 text-[10px]">{selectedContainer.ports}</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-3 text-center dark:from-purple-900/30 dark:to-pink-900/30">
                  <p className="text-gray-600 dark:text-gray-400">RAM</p>
                  <p className="font-bold text-purple-600 dark:text-purple-400">{selectedContainer.ram}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                  Container Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedContainer.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gradient-to-r from-purple-200 to-pink-200 px-3 py-1 text-xs font-semibold text-purple-800 dark:from-purple-900/40 dark:to-pink-900/40 dark:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                  docker-compose snippet
                </h5>
                <pre className="overflow-x-auto rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 p-4 font-mono text-xs leading-snug text-gray-100 border border-gray-800 shadow-lg dark:border-gray-700">
                  {selectedContainer.code}
                </pre>
              </div>
            </aside>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-purple-300 p-8 text-center text-gray-500 dark:border-purple-500/30">
              <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
                <DockerIcon className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="font-bold text-gray-900 dark:text-white">System Architecture</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Click a container to explore ROS 2 flows & deployment configs
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -28;
          }
        }
        @keyframes text {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-text {
          animation: text 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
