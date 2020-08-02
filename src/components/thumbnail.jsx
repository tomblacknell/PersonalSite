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
    <h2>
      {title}
    </h2>
    <small>{date}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  </Link>
);

export default Thumbnail;
