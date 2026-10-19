const Section = ({ id, label, title, children }) => (
  <section id={id} className="section">
    <div className="container">
      <a className="back-link" href="#/">
        ← Home
      </a>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="divider" />
      {children}
    </div>
  </section>
);

export default Section;
