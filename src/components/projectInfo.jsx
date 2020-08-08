import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectInfo = ({
  post: {
    frontmatter: {
      title,
      url,
    },
  },
}) => (
  <div className="project-info">
    <h2>
      {title}
    </h2>
    {url && (
      <a className="cta" rel="noreferrer noopener" target="_blank" href={url}>
        <FontAwesomeIcon className="icon-btn " icon={faPlayCircle} size="3x" />
      </a>
    )}
  </div>
);

export default ProjectInfo;
