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
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </Link>
  </div>
);

export default Thumbnail;
