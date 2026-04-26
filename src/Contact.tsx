import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    // Connect to your preferred email service (EmailJS, Formspree, etc.)
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <section id="contact" className='contact-section' style={{ padding: '80px 60px', minHeight: '80vh' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        <span style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#888'
        }}>
          Get In Touch
        </span>
        <h2 style={{ fontSize: 42, fontWeight: 700, margin: '0.75rem 0 0.5rem' }}>
          Let's Connect
        </h2>
        <div style={{ width: 48, height: 3, background: '#111', marginBottom: '3rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left: Contact info */}
          <div>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm open to internships, collaborations, research opportunities, and professional
              conversations. Feel free to reach out!
            </p>

            {[
              { label: 'Email', value: 'deborah.chikoko@email.com', href: 'mailto:deborah.chikoko@email.com' },
              { label: 'Phone', value: '+265 999 000 000', href: 'tel:+265999000000' },
              { label: 'LinkedIn', value: 'linkedin.com/in/deborahchikoko', href: 'https://linkedin.com/in/deborahchikoko' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#aaa', margin: 0 }}>
                  {item.label}
                </p>
                <a href={item.href} style={{ fontSize: 15, color: '#111', textDecoration: 'none', fontWeight: 500 }}>
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Right: Contact form */}
          <div>
            {sent ? (
              <div style={{ background: '#f0f0f0', borderRadius: 6, padding: '2rem', textAlign: 'center' }}>
                <h5 style={{ fontWeight: 700 }}>Message Sent!</h5>
                <p style={{ color: '#666', fontSize: 14 }}>Thank you for reaching out. Deborah will get back to you shortly.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    border: '1px solid #ddd', borderRadius: 3,
                    padding: '12px 16px', fontSize: 14, outline: 'none', width: '100%'
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    border: '1px solid #ddd', borderRadius: 3,
                    padding: '12px 16px', fontSize: 14, outline: 'none', width: '100%'
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    border: '1px solid #ddd', borderRadius: 3,
                    padding: '12px 16px', fontSize: 14, outline: 'none',
                    width: '100%', resize: 'vertical'
                  }}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    background: '#111', color: '#fff', border: 'none',
                    borderRadius: 3, padding: '14px', fontSize: 14,
                    fontWeight: 600, cursor: 'pointer', width: '100%'
                  }}
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact