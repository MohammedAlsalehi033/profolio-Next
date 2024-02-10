// ProjectCard.jsx
import React from 'react';
import { FiGithub, FiDownload } from 'react-icons/fi'; // Assuming you have installed the react-icons library

const ProjectCard = ({ title, description, githubRepo, downloadLink, imageUrl }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md text-white transition transform hover:scale-105 hover:bg-blue-800 mb-8">
      {/* Project Photo */}
      {imageUrl && (
        <div className="mb-4">
          <img src={imageUrl} alt={title} className="w-full h-full rounded-lg object-cover" />
        </div>
      )}

      <h3 className="text-2xl lg:text-3xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>

      <div className="flex flex-col items-center space-y-4 mb-4">
  {/* GitHub Repo Button */}
  {githubRepo && (
    <a
      href={githubRepo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center btn-primary bg-blue-200 hover:bg-blue-300 text-blue-800 hover:text-white font-bold text-lg lg:text-xl p-2 rounded-full transition duration-300"
    >
      <FiGithub className="mr-2" />
      GitHub
    </a>
  )}

  {/* Download Link Button */}
  {downloadLink && (
    <a
      href={downloadLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center btn-secondary bg-blue-200 hover:bg-blue-300 text-blue-800 hover:text-white font-bold text-lg lg:text-xl p-2 rounded-full transition duration-300"
    >
      <FiDownload className="mr-2" />
      Try
    </a>
  )}
</div>
    </div>
  );
};

export default ProjectCard;
