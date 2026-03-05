import Image from 'next/image'

export default function AboutHeader() {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
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
        <div style={{ maxWidth: '42rem' }}>
          <h1 style={{ margin: 0, lineHeight: 1.2 }}>Aaron E. Wu</h1>
          <div style={{ marginTop: '0.35rem', fontSize: '1rem', lineHeight: '1.75', color: '#475569' }}>
            M.S. student in Robotics at <strong>Georgia Institute of Technology</strong>, focused on
            deep reinforcement learning, Sim2Real transfer, and state estimation for autonomous
            systems.
          </div>
        </div>
      </div>

      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem' }}>
        <a href="/resume/Aaron_Wu_Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume (PDF)
        </a>
        {' · '}
        <a href="https://www.linkedin.com/in/aewu/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {' · '}
        <a href="mailto:aewu@gatech.edu">aewu@gatech.edu</a>
      </div>
    </div>
  )
}
