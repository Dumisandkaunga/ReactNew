function Footer() {
  return (
    <footer style={{ background: '#111', color: '#fff', padding: '60px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Top row */}
        <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>

          {/* Left: Branding */}
          <div>
            <h3 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 0.5rem' }}>Deborah Chikoko</h3>
            <p style={{ fontSize: 14, color: '#aaa', maxWidth: 280, lineHeight: 1.8, margin: 0 }}>
              Business strategist passionate about driving organizational growth through data-driven thinking.
            </p>
          </div>

          {/* Right: Nav links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
              Quick Links
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} style={{ fontSize: 14, color: '#aaa', textDecoration: 'none' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                    onMouseOut={e => (e.currentTarget.style.color = '#aaa')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact info */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="mailto:deborah.chikoko@email.com" style={{ fontSize: 14, color: '#aaa', textDecoration: 'none' }}>deborah.chikoko@email.com</a>
              <a href="tel:+265999000000" style={{ fontSize: 14, color: '#aaa', textDecoration: 'none' }}>+265 999 000 000</a>
              <a href="https://linkedin.com/in/deborahchikoko" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: '#aaa', textDecoration: 'none' }}>
                linkedin.com/in/deborahchikoko
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: 13, color: '#555', margin: 0 }}>
            © {new Date().getFullYear()} Deborah Chikoko. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://linkedin.com/in/deborahchikoko" target="_blank" rel="noreferrer"
              style={{ fontSize: 13, color: '#555', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e => (e.currentTarget.style.color = '#555')}
            >
              LinkedIn
            </a>
            <a href="mailto:deborah.chikoko@email.com"
              style={{ fontSize: 13, color: '#555', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e => (e.currentTarget.style.color = '#555')}
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer