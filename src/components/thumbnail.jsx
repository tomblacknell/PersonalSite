import React from 'react';
import { Link } from 'gatsby';

const Thumbnail = ({
  slug,
  title,
  description,
  date,
}) => (
  <div className="thumbnail" key={slug}>
    <Link style={{ height: '100%' }} to={slug}>
      <div>
        <h3>
          {title}
        </h3>
        <small>{date}</small>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </Link>
  </div>
);

export default Thumbnail;
