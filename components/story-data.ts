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
}

export type ProjectCategory =
  | 'Undergraduate Research'
  | 'Marine Robotics Group'
  | 'ASDL'
  | 'Other'

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'mrg-join',
    period: 'Fall 2021',
    title: 'Joined Marine Robotics Group',
    summary:
      'Joined MRG in freshman year and started building the marine systems context that shaped later research choices.',
    tag: 'Marine Robotics Group',
    projectPath: '/projects/stinger-tug-education-platform',
  },
  {
    id: 'mmwave-radiation-measurement',
    period: 'Fall 2022 - Spring 2023',
    title: 'mmWave Lab Infrastructure',
    summary:
      'Designed durable hardware infrastructure for robotic radiation-pattern measurement workflows.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/mmwave-radiation-measurement',
  },
  {
    id: 'scripps-sonar-navigation',
    period: 'Summer 2023',
    title: 'ASV Sonar Navigation',
    summary:
      'Integrated side-scan sonar navigation and produced field datasets for localization validation.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/scripps-sonar-navigation',
  },
  {
    id: 'underwater-rf-modulation',
    period: 'Spring 2023 - Fall 2023',
    title: 'Underwater RF Modulation Research',
    summary:
      'Modeled underwater antenna transfer functions and proposed a more power-efficient communication scheme.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/underwater-rf-modulation',
  },
  {
    id: 'mrg-president',
    period: 'Fall 2023 - Present',
    title: 'Became President, Marine Robotics Group',
    summary:
      'Stepped into MRG leadership in 2023 and scaled project onboarding, systems integration, and field-test execution.',
    tag: 'Marine Robotics Group',
    projectPath: '/projects/ae-x355-marine-robotics-course',
  },
  {
    id: 'spacex-array-calibration',
    period: 'Spring 2024 - Fall 2024',
    title: 'Phased-Array Calibration Automation',
    summary:
      'Built automation that reduced calibration runtime from hours to seconds for production-scale workflows.',
    projectPath: '/projects/spacex-array-calibration',
  },
  {
    id: 'bs-graduation',
    period: 'May 2024',
    title: 'Graduated B.S. in Electrical Engineering',
    summary:
      'Completed the B.S. at Georgia Tech and transitioned into full-time graduate robotics research.',
  },
  {
    id: 'phd-transition',
    period: 'Fall 2024 - Present',
    title: 'Started PhD in Robotics',
    summary:
      'Transitioned from undergraduate research and industry execution into graduate systems research.',
  },
  {
    id: 'ucrt-ros2-deployment',
    period: 'Fall 2024 - Present',
    title: 'UCRT Marine Autonomy Stack (Sim + ROS 2 + HITL)',
    summary:
      'Built containerized navigation, sensor-fusion, and HITL validation workflows for multi-domain marine testbed development.',
    projectPath: '/projects/ucrt-ros2-deployment',
  }
]

export const projectEntries: ProjectEntry[] = [
  {
    slug: 'high-school-foundation',
    title: 'High School Foundation (Placeholder)',
    category: 'Other',
    timeframe: '2017 - 2021',
    experience: 'Pre-Georgia Tech',
    tags: ['Foundations'],
    role: 'Student Builder',
    impact: '[Placeholder] Add one measurable outcome from high-school engineering work.',
    summary:
      'Placeholder slot to connect early projects to your later robotics and systems engineering trajectory.'
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
      'Designed and fabricated fixture hardware for repeatable robotic radiation-pattern measurement.'
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
      'Modeled underwater transfer functions and proposed a novel modulation strategy for efficient propagation.'
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
    slug: 'ucrt-sim-stack',
    title: 'UCRT Gazebo Simulation and Trajectory Generation',
    category: 'ASDL',
    timeframe: 'Fall 2024 - Present',
    experience: 'Aerospace Systems Design Lab (ASDL)',
    tags: ['Gazebo', 'Modeling', 'Marine Dynamics'],
    role: 'PhD Researcher',
    impact: 'Generated 100k+ trajectories to support residual dynamics model training.',
    summary:
      'Built a scalable simulator workflow to produce trajectory data for marine autonomy research.'
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
      'Designed containerized navigation/perception stacks and repeatable environment provisioning for testbed teams.'
  },
  {
    slug: 'ucrt-hitl-validation',
    title: 'UCRT Hardware-in-the-Loop Validation Framework',
    category: 'ASDL',
    timeframe: 'Fall 2024 - Present',
    experience: 'Aerospace Systems Design Lab (ASDL)',
    tags: ['HITL', 'Validation', 'Embedded'],
    role: 'PhD Researcher',
    impact: 'Enabled rapid pre-water validation of localization and state-estimation updates.',
    summary:
      'Implemented repeatable HITL testing workflows for autonomy stack regression checks.'
  },
  {
    slug: 'stinger-tug-education-platform',
    title: 'Stinger Tug Educational ASV Platform',
    category: 'Marine Robotics Group',
    timeframe: 'Fall 2024 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Marine Robotics', 'Integration', 'Education'],
    role: 'MRG President / Systems Lead',
    impact: 'Created a reliable platform for onboarding and field validation in student-led robotics teams.',
    summary:
      'Led integration and field testing of the Stinger Tug autonomous surface vehicle platform.'
  },
  {
    slug: 'ae-x355-marine-robotics-course',
    title: 'AE x355 Marine Robotics Course Buildout',
    category: 'Marine Robotics Group',
    timeframe: 'Fall 2024 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Teaching', 'Curriculum', 'Systems Engineering'],
    role: 'Course Founder / Instructor',
    impact: 'Established a hands-on pipeline for onboarding new marine robotics contributors.',
    summary:
      'Designed and taught a practical course that takes members from fundamentals to field test readiness.'
  }
]
