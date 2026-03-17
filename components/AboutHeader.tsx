import Image from 'next/image'

export default function AboutHeader() {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="about-header-row">
        <Image
          src="/images/profile/profile.jpeg"
          alt="Aaron Wu"
          width={120}
          height={120}
          sizes="120px"
          quality={100}
          unoptimized
          priority
          style={{
            borderRadius: '9999px',
            border: '1px solid #e2e8f0',
            objectFit: 'cover',
            flexShrink: 0,
            width: '120px',
            height: '120px'
          }}
        />
        <div className="about-header-text">
          <h1 style={{ margin: 0, lineHeight: 1.2 }}>Aaron E. Wu</h1>
          <div style={{ marginTop: '0.35rem', fontSize: '1rem', lineHeight: '1.75', color: '#475569' }}>
            Master of Science student in Robotics at <strong>Georgia Institute of Technology</strong>,
            with interests in deep reinforcement learning, sim-to-real transfer, and state
            estimation for autonomous systems.
          </div>
        </div>
      </div>

      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem' }}>
        <a href="/resume/Aaron_Wu_MS.pdf" target="_blank" rel="noopener noreferrer">
          Resume (PDF)
        </a>
        {' · '}
        <a href="https://www.linkedin.com/in/aewu/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {' · '}
        <a href="mailto:aewu@gatech.edu">aewu@gatech.edu</a>
        {' · '}
        <a href="https://github.com/aaron2002wu" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' · '}
        <a href="https://hub.docker.com/repositories/aaron2002wu" target="_blank" rel="noopener noreferrer">
          Docker Hub
        </a>
      </div>
      <div style={{ marginTop: '0.4rem', fontSize: '0.8rem', color: '#64748b' }}>
        Enterprise GitHub (Georgia Tech):{' '}
        <a href="https://github.gatech.edu/awu335" target="_blank" rel="noopener noreferrer">
          github.gatech.edu/awu335
        </a>
      </div>
    </div>
  )
}
