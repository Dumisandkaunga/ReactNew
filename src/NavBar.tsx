import Deborah_Chikoko from './assets/Images/Deborah_Chikoko.jpeg';
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 fixed-top">
        <span className="navbar-brand fw-500">DC</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero-section d-flex align-items-center justify-content-between px-5 py-5 " style={{ minHeight: '85vh', marginTop: '3.5rem' }}>
        <div>
            <div className="text-start me-auto">
          <span className="badge bg-dark text-white mb-3">Open to Opportunities</span>
          <h1 className="display-3 fw-bold">Deborah<br />Chikoko</h1>
          <hr style={{ width: 48, borderWidth: 3, borderColor: '#000', opacity: 1 }} />
          <p className="text-muted" style={{ maxWidth: 620 }}>
            Business strategist with a BBA and a passion for driving organizational growth.
            Currently pursuing a Masters in Strategic Management.
          </p>
          </div>
          <div className="d-flex gap-3 mt-4">
            <a href="#projects" className="btn btn-outline-dark px-4 py-2">View My Work</a>
            <a href="/DEBORAHCHIKOKOCV.pdf" download="Deborah_Chikoko_CV.pdf" className="btn btn-outline-dark px-4 py-2">Download CV</a>
          </div>
          <div className="d-flex gap-5 mt-5 pt-4 border-top">
            <div><h5 className="mb-0">BBA</h5><small className="text-muted">Business Administration</small></div>
            <div><h5 className="mb-0">MSc</h5><small className="text-muted">Strategic Management</small></div>
            <div><h5 className="mb-0">2028</h5><small className="text-muted">Expected Graduation</small></div>
          </div>
        </div>
       <div
  className="border rounded-circle"
  style={{
    width: 280,
    height: 280, // make width and height equal for a perfect circle
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden' // ensures the image stays inside the circle
  }}
>
  <img
    src={Deborah_Chikoko}
    alt="Deborah Chikoko"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover', 
      objectPosition: 'center top' // fills the circle neatly
    }}
  />
</div>

      </section>
    </>
  )
}


export default NavBar