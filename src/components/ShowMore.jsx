import { useState } from 'react';

// Renders the first `limit` items, with a button to reveal the rest.
const ShowMore = ({ items, limit, noun = 'items', className, children }) => {
  const [expanded, setExpanded] = useState(false);
  const hidden = items.length - limit;
  const visible = expanded || hidden <= 0 ? items : items.slice(0, limit);

  return (
    <>
      <div className={className}>{visible.map(children)}</div>
      {hidden > 0 && (
        <button className="show-more" onClick={() => setExpanded((open) => !open)} aria-expanded={expanded}>
          {expanded ? 'Show less ↑' : `Show ${hidden} more ${noun} ↓`}
        </button>
      )}
    </>
  );
};

export default ShowMore;
