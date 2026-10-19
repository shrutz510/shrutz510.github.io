// Shared card for experience, education, publications and volunteering entries.
const TimelineCard = ({ logo, icon, title, link, date, subtitle, bullets, children }) => (
  <div className="card timeline-card">
    <div className="card-logo">{logo ? <img src={logo} alt="" /> : icon}</div>
    <div>
      <div className="card-header">
        {link ? (
          <a className="card-title" href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <span className="card-title">{title}</span>
        )}
        <span className="card-date">{date}</span>
      </div>
      <div className="card-subtitle">{subtitle}</div>
      {bullets && (
        <ul className="bullets">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {children}
    </div>
  </div>
);

export default TimelineCard;
