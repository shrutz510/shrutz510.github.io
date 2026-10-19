const Section = ({ id, label, title, tinted, children }) => (
  <section id={id} className={`section${tinted ? ' section--tinted' : ''}`}>
    <div className="container">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="divider" />
      {children}
    </div>
  </section>
);

export default Section;
