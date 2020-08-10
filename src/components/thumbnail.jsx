import React from 'react';
import { Link } from 'gatsby';

const Thumbnail = ({
  slug,
  title,
  description,
  date,
}) => (
  <Link className="thumbnail" style={{ height: '100%' }} to={slug}>
    <div className="thumbnail-image" />
    <div className="thumbnail-details">
      <h2>
        {title}
      </h2>
      <small>{date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  </Link>
);

export default Thumbnail;
