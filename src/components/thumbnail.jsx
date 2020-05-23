import React from 'react';
import { Link } from 'gatsby';

const Thumbnail = ({
  slug,
  title,
  description,
  date,
}) => (
  <article className="thumbnail" key={slug}>
    <div>
      <h3>
        <Link style={{ boxShadow: 'none' }} to={slug}>
          {title}
        </Link>
      </h3>
      <small>{date}</small>
    </div>
    <section>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </section>
  </article>
);

export default Thumbnail;
