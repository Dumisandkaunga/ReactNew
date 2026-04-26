function About() {
  return (
    <section id="about" className="px-5 py-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="row w-100 align-items-center g-5">

        {/* Left: Image placeholder */}
        <div className="col-md-5 d-flex justify-content-center">
          <div style={{
            width: 320, height: 400, background: '#f0f0f0',
            borderRadius: 6, display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#aaa', fontSize: 14, flexShrink: 0
          }}>
            {/* Replace with <img src={photo} ... /> */}
            Photo coming soon
          </div>
        </div>

        {/* Right: Text */}
        <div className="col-md-7">
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#888'
          }}>
            About Me
          </span>
         <h2 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.15, margin: '0.75rem 0 0' }}>
  Driven by Strategy,<br />Guided by Purpose
</h2>
<div style={{ width: 48, height: 3, background: '#111', marginTop: '0.5rem', marginBottom: '1.5rem' }} />

          <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.9, marginBottom: '1rem' }}>
            I am Deborah Chikoko, a passionate business professional with a Bachelor of Business
            Administration and currently pursuing a Masters in Strategic Management. My academic
            journey has equipped me with a strong foundation in business strategy, organizational
            behavior, and analytical thinking.
          </p>
          <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.9, marginBottom: '2rem' }}>
            I am deeply interested in helping organizations navigate complex challenges through
            data-driven strategies and innovative thinking. I thrive in dynamic environments
            where I can contribute to meaningful growth and long-term impact.
          </p>

          {/* Quick facts */}
          <div className="d-flex gap-4 flex-wrap">
            {[
              { label: 'Degree', value: 'BBA' },
              { label: 'Current Study', value: 'MSc Strategic Mgmt' },
              { label: 'Focus', value: 'Strategy & Growth' },
            ].map((item) => (
              <div key={item.label} style={{
                background: '#f8f8f8', borderRadius: 4,
                padding: '14px 20px', minWidth: 130
              }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{item.value}</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About