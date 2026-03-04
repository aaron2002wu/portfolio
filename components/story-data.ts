export const timelineMilestones = [
  {
    period: '2017 - 2021',
    title: 'High School Foundation (Placeholder)',
    organization: '[Add school name]',
    summary:
      'Built the early foundation in engineering, programming, and competitive projects that led into robotics.',
    projectSlug: 'early-foundation'
  },
  {
    period: 'Fall 2021',
    title: 'Started EE at Georgia Tech',
    organization: 'Georgia Institute of Technology',
    summary:
      'Entered electrical engineering and robotics-focused coursework including controls, vision, and mobile robotics.',
    projectSlug: 'academic-foundation'
  },
  {
    period: 'Fall 2022 - Spring 2023',
    title: 'mmWave Measurement System',
    organization: 'mmWave Antennas & Arrays Lab',
    summary:
      'Designed and fabricated custom antenna mounts for a 6-110 GHz robotic radiation-pattern measurement platform.',
    projectSlug: 'mmwave-measurement'
  },
  {
    period: 'Spring 2023 - Fall 2023',
    title: 'Underwater RF Research',
    organization: 'Propagation Group',
    summary:
      'Developed a novel modulation concept for underwater RF communication and won best poster at IEEE DTPI 2023.',
    projectSlug: 'underwater-rf'
  },
  {
    period: 'Summer 2023',
    title: 'ASV Sonar Integration',
    organization: 'Scripps MPL REU',
    summary:
      'Integrated side-scan sonar navigation on an autonomous surface vehicle and produced field-test datasets.',
    projectSlug: 'scripps-asv'
  },
  {
    period: 'Spring 2024 - Fall 2024',
    title: 'RF Engineering Intern',
    organization: 'SpaceX',
    summary:
      'Built automation for phased-array calibration and reduced test time from 3 hours to 30 seconds.',
    projectSlug: 'spacex-calibration'
  },
  {
    period: 'Fall 2024 - Present',
    title: 'PhD + UCRT Testbed Leadership',
    organization: 'Aerospace Systems Design Lab, Georgia Tech',
    summary:
      'Building ONR-funded multi-domain robotic testbeds with ROS 2, Gazebo, Docker, and HITL validation workflows.',
    projectSlug: 'ucrt-testbed'
  }
]

export const projectEntries = [
  {
    slug: 'early-foundation',
    title: 'Early Engineering Foundation (Placeholder)',
    timeframe: '2017 - 2021',
    tags: ['Foundations'],
    role: 'Student Builder',
    impact: '[Placeholder] Add one measurable outcome from high-school projects.',
    summary:
      'Placeholder slot for formative high-school work that connects your origin story to later robotics projects.'
  },
  {
    slug: 'academic-foundation',
    title: 'Georgia Tech Academic Foundation',
    timeframe: 'Fall 2021 - 2024',
    tags: ['Coursework', 'Robotics'],
    role: 'B.S. Electrical Engineering',
    impact: 'Maintained 4.00 GPA while completing core robotics and systems coursework.',
    summary:
      'Built fundamentals in deep RL, computer vision, networked control, and mobile robotics used across later projects.'
  },
  {
    slug: 'mmwave-measurement',
    title: '6-110 GHz Robotic Radiation Measurement',
    timeframe: 'Fall 2022 - Spring 2023',
    tags: ['RF', 'Robotics', 'Hardware'],
    role: 'Undergraduate Researcher',
    impact: 'Designed custom mounts still used as core lab infrastructure.',
    summary:
      'Supported a robotic measurement pipeline for antenna characterization and near-to-far-field transformation studies.'
  },
  {
    slug: 'underwater-rf',
    title: 'Underwater RF Modulation Research',
    timeframe: 'Spring 2023 - Fall 2023',
    tags: ['RF', 'Modeling', 'Research'],
    role: 'Undergraduate Researcher',
    impact: "Won President's Undergraduate Research Award and best poster at IEEE DTPI 2023.",
    summary:
      'Analyzed underwater antenna transfer behavior in HFSS and proposed an energy-efficient modulation concept.'
  },
  {
    slug: 'scripps-asv',
    title: 'Scripps REU ASV Sonar Navigation',
    timeframe: 'Summer 2023',
    tags: ['Marine Robotics', 'Perception'],
    role: 'Undergraduate Intern',
    impact: 'Delivered ocean-test datasets for localization algorithm validation.',
    summary:
      'Integrated side-scan sonar navigation on an ASV and validated data quality through field tests.'
  },
  {
    slug: 'spacex-calibration',
    title: 'SpaceX Phased-Array Calibration Automation',
    timeframe: 'Spring 2024 - Fall 2024',
    tags: ['RF Systems', 'Automation', 'Python'],
    role: 'RF Engineering Intern',
    impact: 'Reduced calibration runtime from 3 hours to 30 seconds.',
    summary:
      'Built production-focused automation for phased-array measurement/calibration pipelines under launch deadlines.'
  },
  {
    slug: 'ucrt-testbed',
    title: 'UCRT Multi-Domain Robotic Testbed',
    timeframe: 'Fall 2024 - Present',
    tags: ['ROS 2', 'Simulation', 'HITL', 'Marine Robotics'],
    role: 'PhD Researcher',
    impact: 'Generated 100k+ simulation trajectories and built reusable deployment/testing infrastructure.',
    summary:
      'Developing a multi-domain ONR-funded research testbed using Gazebo, ROS 2 sensor fusion, and Dockerized systems.'
  }
]
