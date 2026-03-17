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
    id: 'bs-electrical-engineering',
    period: 'Fall 2021 - Spring 2024',
    title: 'B.S. in Electrical Engineering',
    summary:
      'Completed the Georgia Tech degree in three years while pursuing undergraduate research, a semester in France, a summer internship at UC San Diego Scripps, and award-winning conference work in RF and robotics.',
  },
  {
    id: 'mmwave-radiation-measurement',
    period: 'Fall 2022 - Spring 2023',
    title: '6-110 GHz Robotic Radiation Measurement Infrastructure',
    summary:
      'Designed, fabricated, and validated durable measurement hardware for repeatable robotic radiation-pattern experiments.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/mmwave-radiation-measurement',
  },
  {
    id: 'underwater-rf-modulation',
    period: 'Spring 2023 - Fall 2023',
    title: 'Perfect-Pulse Underwater RF Modulation Study',
    summary:
      'Modeled underwater antenna transfer functions, proposed a more power-efficient communication scheme, and presented the work at IEEE DTPI 2023.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/underwater-rf-modulation',
  },
  {
    id: 'scripps-sonar-navigation',
    period: 'Summer 2023',
    title: 'ASV Side-Scan Sonar Navigation Integration',
    summary:
      'Completed a summer internship at UC San Diego Scripps, integrating side-scan sonar into an autonomous surface vehicle stack and producing field datasets for localization validation.',
    tag: 'Undergraduate Research',
    projectPath: '/projects/scripps-sonar-navigation',
  },
  {
    id: 'mrg-president',
    period: 'Fall 2023 - Present',
    title: 'Marine Robotics Group Leadership & Advising',
    summary:
      'Served in leadership roles including President and Electrical Lead, scaling onboarding, mentoring, systems integration, and field-test readiness across student marine robotics teams.',
    tag: 'Marine Robotics Group',
    projectPath: '/projects/mrg-leadership-advising',
  },
  {
    id: 'spacex-array-calibration',
    period: 'Spring 2024 - Fall 2024',
    title: 'SpaceX Phased-Array Calibration Automation',
    summary:
      'Built cross-functional automation that reduced phased-array calibration runtime from hours to seconds for production-scale workflows.',
    projectPath: '/projects/spacex-array-calibration',
  },
  {
    id: 'ms-robotics',
    period: 'Fall 2024 - Present',
    title: 'M.S. in Robotics',
    summary:
      'Pursuing graduate work in robotics with emphasis on autonomous systems, sim-to-real transfer, and state estimation.',
  },
  {
    id: 'mrg-join',
    period: 'Fall 2024 - Present',
    title: 'Stinger Tug Educational ASV Platform',
    summary:
      'Led subsystem integration, field testing, and mentoring for an educational autonomous surface vehicle platform used for onboarding and validation.',
    tag: 'Marine Robotics Group',
    projectPath: '/projects/stinger-tug-education-platform',
  },
  {
    id: 'ucrt-ros2-deployment',
    period: 'Fall 2024 - Present',
    title: 'Distributed ROS 2 + Docker Architecture for Multi-Domain Testbeds',
    summary:
      'Designed containerized navigation, sensor-fusion, and hardware-in-the-loop validation workflows for multi-domain robotic testbed development.',
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
      'Built Python automation for phased-array calibration and validation under strict production timelines, coordinating across RF, software, and test workflows.'
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
      'Valedictorian and served as president of Science Olympiad and Science National Honor Society.',
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
      'Designed, fabricated, and validated fixture hardware for repeatable robotic radiation-pattern measurement across a demanding 6-110 GHz research workflow.',
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
      'Modeled underwater antenna transfer functions in HFSS and proposed a novel modulation strategy for more power-efficient underwater RF communication.',
    paperUrls: ['https://ieeexplore.ieee.org/document/10161793']
  },
  {
    slug: 'scripps-sonar-navigation',
    title: 'ASV Side-Scan Sonar Navigation Integration',
    category: 'Undergraduate Research',
    timeframe: 'Summer 2023',
    experience: 'University of California San Diego, Scripps Institution of Oceanography (MPL REU)',
    tags: ['Marine Robotics', 'Perception', 'Field Testing'],
    role: 'Undergraduate Intern',
    impact: 'Delivered ocean-collected datasets used for localization validation experiments.',
    summary:
      'Integrated side-scan sonar into an autonomous surface vehicle stack, supported ocean deployments, and organized field datasets for localization validation.'
  },
  {
    slug: 'ucrt-ros2-deployment',
    title: 'Distributed ROS 2 + Docker Architecture for Multi-Domain Testbeds',
    category: 'ASDL',
    timeframe: 'Fall 2024 - Present',
    experience: 'Aerospace Systems Design Lab (ASDL)',
    tags: ['ROS 2', 'Docker', 'Distributed Systems'],
    role: 'Graduate Researcher',
    impact: 'Standardized deployment across heterogeneous robotic platforms through containerized services.',
    summary:
      'Designed containerized navigation and perception stacks, reproducible environment provisioning, and hardware-in-the-loop workflows for multi-platform research teams.',
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
      'Led subsystem integration, deployment readiness, field testing, and student mentoring for the Stinger Tug autonomous surface vehicle platform.',
    paperUrls: ['https://ieeexplore.ieee.org/document/11245086']
  },
  {
    slug: 'mrg-leadership-advising',
    title: 'Marine Robotics Group Leadership & Advising',
    category: 'Marine Robotics Group',
    timeframe: '2023 - Present',
    experience: 'Marine Robotics Group (MRG)',
    tags: ['Leadership', 'Advising', 'Systems Integration'],
    role: 'MRG President / Electrical Lead',
    impact: 'Scaled onboarding, advising, and integration support across student-led marine robotics teams.',
    summary:
      'Led technical advising, integration planning, readiness reviews, and hands-on mentoring to improve execution across multiple marine robotics teams.'
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
      'Led power, networking, and systems integration work for the RoboBoat competition platform while advising teammates on deployment and autonomy testing.'
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
      'Owned integration and validation support for the RoboSub competition platform, including power, networking, and readiness testing workflows.'
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
      'Supported the RobotX platform through electrical, networking, and autonomy integration work that expanded field-testing coverage for multi-mission development.'
  }
]
