import React from 'react';
import { Link } from 'gatsby';

const Thumbnail = ({
  slug,
  title,
  description,
  date,
  image,
}) => (
  <Link className="thumbnail" to={slug}>
    <img className="thumbmail-image" width="350" height="200" src={image} alt={title} />
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
