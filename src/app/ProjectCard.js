// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, githubRepo, downloadLink, imageUrl }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md text-white">
      {/* Project Photo */}
      {imageUrl && (
        <div className="mb-4">
          <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>

      {/* GitHub Repo Button */}
      {githubRepo && (
        <a
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary bg-blue-200 text-blue-800 font-bold text-lg p-4 rounded-full mr-4"
        >
          GitHub Repo
        </a>
      )}

      {/* Download Link Button */}
      {downloadLink && (
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary bg-blue-200 text-blue-800 font-bold text-lg p-4 rounded-full"
        >
          Try!!
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
