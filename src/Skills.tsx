const skills = [
  { name: 'Strategic Planning', level: 90, desc: 'Developing long-term goals and actionable roadmaps' },
  { name: 'Business Analysis', level: 88, desc: 'Identifying business needs and data-driven solutions' },
  { name: 'Market Research', level: 85, desc: 'Analyzing market trends, competition, and opportunities' },
  { name: 'Project Management', level: 82, desc: 'Leading projects from initiation to successful delivery' },
  { name: 'Financial Management', level: 80, desc: 'Budgeting, forecasting, and financial decision-making' },
  { name: 'Data Analysis', level: 78, desc: 'Interpreting data to guide strategic decisions' },
  { name: 'Organizational Development', level: 85, desc: 'Improving structures, culture, and team effectiveness' },
]

function Skills() {
  return (
    <section id="skills" className="skills-section" style={{ background: '#f9f9f9', padding: '80px 60px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        <span style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#888'
        }}>
          What I Bring
        </span>
        <h2 style={{ fontSize: 42, fontWeight: 700, margin: '0.75rem 0 0.5rem' }}>
          Skills & Competencies
        </h2>
        <div style={{ width: 48, height: 3, background: '#111', marginBottom: '3rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{skill.name}</span>
                <span style={{ fontSize: 13, color: '#888' }}>{skill.level}%</span>
              </div>
              {/* Progress bar */}
              <div style={{ background: '#e0e0e0', borderRadius: 2, height: 5, marginBottom: 8 }}>
                <div style={{
                  width: `${skill.level}%`, height: '100%',
                  background: '#111', borderRadius: 2,
                  transition: 'width 1s ease'
                }} />
              </div>
              <p style={{ fontSize: 12, color: '#999', margin: 0 }}>{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
          <p style={{ fontSize: 13, fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888' }}>Tools & Software</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['Microsoft Excel', 'PowerPoint', 'Google Workspace', 'Tableau', 'SAP Basics', 'Canva'].map(tool => (
              <span key={tool} style={{
                border: '1px solid #ddd', borderRadius: 3,
                padding: '6px 16px', fontSize: 13, background: '#fff'
              }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills