import React, { useEffect } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'atropos/css';
import Atropos from 'atropos/react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../Redux/Slicers/projectSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import rehypeRaw from 'rehype-raw';

const Projects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projects, isLoading, hasError } = useSelector((state) => state.Project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="md:m-8">
      <title>Projects</title>

      <div className="md:flex md:justify-center flex justify-center select-none">
        <header className="md:text-4xl md:font-semibold text-3xl tracking-tighter">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            PROJECTS
          </span>
        </header>
      </div>

      <div className="md:h-[100vh] overflow-x-hidden will-change-scroll" style={{ scrollBehavior: "smooth", scrollbarWidth: "revert" }}>
        <div className="ProjectsList md:m-10 md:mt-8 flex justify-center items-center flex-col gap-5 overflow-x-hidden will-change-scroll" style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}>
          
          {/* Loading State */}
          {isLoading && (
            <p className="text-2xl md:text-3xl font-semibold mt-20 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Loading Projects...
            </p>
          )}

          {/* Error State */}
          {hasError && (
            <p className="text-2xl md:text-3xl font-semibold mt-20 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Failed to load projects. Please try again later.
            </p>
          )}

          {/* Projects Display */}
          {!isLoading && !hasError && projects.length > 0 && 
  [...projects]
    .sort((a, b) => new Date(b.projectDate) - new Date(a.projectDate)) // Sort by date (newest first)
    .map((project, index) => (
      <Atropos
        key={project._id}
        shadow={false}
        style={{ background: "transparent", marginTop: "20px" }}
        rotateXMax={1}
        rotateYMax={1}
        activeOffset={2}
        duration={400}
      >
        <div
          onClick={async () => {
            try {
              await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/projects/views/${project._id}`);
              navigate(`/projects/${project._id}`);
            } catch (error) {
              console.error("Failed to update views", error);
            }
          }}
          className="relative w-[60vw] bg-gradient-to-t from-[#121212] to-[#1B1B1B] md:rounded-lgl rounded-lg p-5 cursor-pointer transition-transform hover:scale-[1.01] hover:shadow-lg hover:shadow-purple-500/20"
        >
          {/* "LATEST" badge */}
          {index === 0 && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
              LATEST
            </div>
          )}

          {/* Title and Date */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white truncate">
              {project.projectTitle}
            </h2>
            <span className="text-sm text-[#F87171] whitespace-nowrap">
              {new Date(project.projectDate).toLocaleDateString()}
            </span>
          </div>

          {/* Description */}
          <div className="line-clamp-3 text-sm text-gray-300 mb-6">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: () => null,
                h2: () => null,
                h3: () => null,
                h4: () => null,
                h5: () => null,
                h6: () => null,
                ol: (props) => <ol className="list-decimal ml-6 text-[#ffffff]" {...props} />,
                p: (props) => <p className="text-sm text-gray-300" {...props} />,
              }}
            >
              {project.projectDescription}
            </Markdown>
          </div>

          {/* Views */}
          <div className="absolute bottom-2 right-4 text-sm text-[#9CA3AF]">
            👁️ {project.projectViews} views
          </div>
        </div>
      </Atropos>
    ))}


          {/* No Projects */}
          {!isLoading && !hasError && projects.length === 0 && (
            <p className="text-lg text-gray-400 mt-10">No projects available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
