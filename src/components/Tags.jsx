const Tags = ({ items }) => (
  <div className="tags">
    {items.map((item) => (
      <span key={item} className="tag">
        {item}
      </span>
    ))}
  </div>
);

export default Tags;
