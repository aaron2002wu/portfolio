export type TimelineMilestone = {
  id: string
  period: string
  title: string
  summary: string
  tag?: string
  organization?: string
  projectPath?: string
}

export type ProjectEntry = {
  slug: string
  title: string
  category: ProjectCategory
  timeframe: string
  experience: string
  tags: string[]
  role: string
  impact: string
  summary: string
  paperUrls?: string[]
}

export type ProjectCategory =
  | 'Undergraduate Research'
  | 'Marine Robotics Group'
  | 'ASDL'
  | 'Other'

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'bs-start',
    period: 'Fall 2021',
    title: 'Started B.S. in Electrical Engineering',
    summary:
      'Began undergraduate studies in electrical engineering at Georgia Tech.',
  },
  {
    id: 'mmwave-radiation-measurement',
    period: 'Fall 2022 - Spring 2023',
    title: '6-110 GHz Robotic Radiation Measurement Infrastructure',
    summary:
      'Designed durable hardware infrastructure for robotic radiation-pattern measurement workflows.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/mmwave-radiation-measurement',
  },
  {
    id: 'underwater-rf-modulation',
    period: 'Spring 2023 - Fall 2023',
    title: 'Perfect-Pulse Underwater RF Modulation Study',
    summary:
      'Modeled underwater antenna transfer functions and proposed a more power-efficient communication scheme.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/underwater-rf-modulation',
  },
  {
    id: 'scripps-sonar-navigation',
    period: 'Summer 2023',
    title: 'ASV Side-Scan Sonar Navigation Integration',
    summary:
      'Integrated side-scan sonar navigation and produced field datasets for localization validation.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/scripps-sonar-navigation',
  },
  {
    id: 'mrg-president',
    period: 'Fall 2023 - Present',
    title: 'MRG Leadership & Advising',
    summary:
      'Stepped into MRG leadership in 2023 and scaled project onboarding, systems integration, and field-test execution.',
    tag: 'Marine Robotics Group',
    projectPath: '/projects/mrg-leadership-advising',
  },
  {
    id: 'spacex-array-calibration',
    period: 'Spring 2024 - Fall 2024',
    title: 'SpaceX Phased-Array Calibration Automation',
    summary:
      'Built automation that reduced calibration runtime from hours to seconds for production-scale workflows.',
    projectPath: '/projects/spacex-array-calibration',
  },
  {
    id: 'bs-graduation',
    period: 'Spring 2024',
    title: 'Graduated B.S. in Electrical Engineering',
    summary:
      'Completed the B.S. at Georgia Tech and transitioned into full-time graduate robotics research.',
  },
  {
    id: 'ms-transition',
    period: 'Fall 2024 - Present',
    title: 'Started MS in Robotics',
    summary:
      'Transitioned from undergraduate research and industry execution into graduate systems research.',
  },
  {
    id: 'mrg-join',
    period: 'Fall 2024 - Present',
    title: 'Stinger Tug Educational ASV Platform',
    summary:
      'Joined MRG in freshman year and started building the marine systems context that shaped later research choices.',
    tag: 'Marine Robotics Group',
    projectPath: '/projects/stinger-tug-education-platform',
  },
  {
    id: 'ucrt-ros2-deployment',
    period: 'Fall 2024 - Present',
    title: 'UCRT Distributed ROS 2 + Docker Architecture',
    summary:
      'Built containerized navigation, sensor-fusion, and HITL validation workflows for multi-domain marine testbed development.',
    projectPath: '/projects/ucrt-ros2-deployment',
  }
]

export const projectEntries: ProjectEntry[] = [
  {
    slug: 'spacex-array-calibration',
    title: 'SpaceX Phased-Array Calibration Automation',
    category: 'Other',
    timeframe: 'Spring 2024 - Fall 2024',
    experience: 'SpaceX RF Engineering Internship',
    tags: ['RF Systems', 'Python', 'Automation'],
    role: 'RF Engineering Intern',
    impact: 'Cut calibration runtime from 3 hours to 30 seconds for production workflows.',
    summary:
      'Automated antenna calibration/validation pipelines under strict hardware delivery deadlines.'
  },
  {
    slug: 'high-school-foundation',
    title: 'High School Foundation',
    category: 'Other',
    timeframe: '2017 – 2021',
    experience: 'Pre-Georgia Tech',
    tags: ['Science Olympiad', 'Leadership', 'SNHS'],
    role: 'Club President',
    impact: 'Led Science Olympiad and SNHS through COVID with no playbook and kept both organizations running.',
    summary:
      'Served as president of Science Olympiad and Science National Honor Society during the pandemic.',
  },
  {
    slug: 'mmwave-radiation-measurement',
    title: '6-110 GHz Robotic Radiation Measurement Infrastructure',
    category: 'Undergraduate Research',
    timeframe: 'Fall 2022 - Spring 2023',
    experience: 'mmWave Antennas & Arrays Lab',
    tags: ['RF', 'Robotics', 'Hardware'],
    role: 'Undergraduate Researcher',
    impact: 'Custom antenna mounts remain in active lab use as core measurement infrastructure.',
    summary:
      'Designed and fabricated fixture hardware for repeatable robotic radiation-pattern measurement.',
    paperUrls: ['https://ieeexplore.ieee.org/document/10161734']
  },
  {
    slug: 'underwater-rf-modulation',
    title: 'Perfect-Pulse Underwater RF Modulation Study',
    category: 'Undergraduate Research',
    timeframe: 'Spring 2023 - Fall 2023',
    experience: 'Propagation Group',
    tags: ['RF', 'HFSS', 'Research'],
    role: 'Undergraduate Researcher',
    impact: "Won President's Undergraduate Research Award and best poster at IEEE DTPI 2023.",
    summary:
      'Modeled underwater transfer functions and proposed a novel modulation strategy for efficient propagation.',
    paperUrls: ['https://ieeexplore.ieee.org/document/10161793']
  },
  {
    slug: 'scripps-sonar-navigation',
    title: 'ASV Side-Scan Sonar Navigation Integration',
    category: 'Undergraduate Research',
    timeframe: 'Summer 2023',
    experience: 'Scripps Institution of Oceanography MPL REU',
    tags: ['Marine Robotics', 'Perception', 'Field Testing'],
    role: 'Undergraduate Intern',
    impact: 'Delivered ocean-collected datasets used for localization validation experiments.',
    summary:
      'Integrated side-scan sonar into an ASV stack and validated data quality during ocean deployments.'
  },
  {
    slug: 'ucrt-ros2-deployment',
    title: 'UCRT Distributed ROS 2 + Docker Architecture',
    category: 'ASDL',
    timeframe: 'Fall 2024 - Present',
    experience: 'Aerospace Systems Design Lab (ASDL)',
    tags: ['ROS 2', 'Docker', 'Distributed Systems'],
    role: 'PhD Researcher',
    impact: 'Standardized deployment across heterogeneous robotic platforms through containerized services.',
    summary:
      'Designed containerized navigation/perception stacks and repeatable environment provisioning for testbed teams.',
    paperUrls: [
      'https://ieeexplore.ieee.org/document/11245088',
      'https://ieeexplore.ieee.org/document/11244946'
    ]
  },
  {
    slug: 'stinger-tug-education-platform',
    title: 'Stinger Tug Educational ASV Platform',
    category: 'ASDL',
    timeframe: 'Fall 2024 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Marine Robotics', 'Integration', 'Education'],
    role: 'MRG President / Electrical Lead / Systems Lead',
    impact: 'Created a reliable platform for onboarding and field validation in student-led robotics teams.',
    summary:
      'Led integration and field testing of the Stinger Tug autonomous surface vehicle platform.',
    paperUrls: ['https://ieeexplore.ieee.org/document/11245086']
  },
  {
    slug: 'mrg-leadership-advising',
    title: 'MRG Leadership & Advising',
    category: 'Marine Robotics Group',
    timeframe: '2023 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Leadership', 'Advising', 'Systems Integration'],
    role: 'MRG President / Electrical Lead',
    impact: 'Scaled onboarding, advising, and integration support across student-led marine robotics teams.',
    summary:
      'Led technical advising and integration support for MRG teams to improve readiness and field-test execution.'
  },
  {
    slug: 'roboboat-platform',
    title: 'RoboBoat Platform',
    category: 'Marine Robotics Group',
    timeframe: '2023 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Marine Robotics', 'Competition', 'Systems Integration'],
    role: 'MRG President / Electrical Lead / Team Lead / Systems Integrator',
    impact: 'Delivered a reliable platform for field testing autonomy and sensor integration.',
    summary:
      'Built and maintained the RoboBoat competition platform to support iterative autonomy development.'
  },
  {
    slug: 'robosub-platform',
    title: 'RoboSub Platform',
    category: 'Marine Robotics Group',
    timeframe: '2023 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Marine Robotics', 'Competition', 'Systems Integration'],
    role: 'MRG President / Electrical Lead / Team Lead / Systems Integrator',
    impact: 'Improved underwater system readiness through repeatable integration and test workflows.',
    summary:
      'Supported RoboSub platform integration and validation for competition readiness.'
  },
  {
    slug: 'robotx-platform',
    title: 'RobotX Platform',
    category: 'Marine Robotics Group',
    timeframe: '2023 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Marine Robotics', 'Competition', 'Systems Integration'],
    role: 'MRG President / Electrical Lead / Team Lead / Systems Integrator',
    impact: 'Expanded surface-vehicle testing coverage for multi-mission autonomy development.',
    summary:
      'Maintained the RobotX platform to enable field testing across navigation and perception stacks.'
  }
]
