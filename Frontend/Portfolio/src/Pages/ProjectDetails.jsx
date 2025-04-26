import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../Redux/Slicers/projectSlice";
import github from "../assets/github.png"
const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { projects, isLoading } = useSelector((state) => state.Project);

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects.length]);

  const project = projects.find((p) => p._id === id);

  if (isLoading || !project) {
    return (
      <div className="p-8 md:w-4/5 mx-auto text-white">
        <p className="text-xl">Loading project details...</p>
      </div>
    );
  }

  return (
    <div className="p-8 md:w-4/5 mx-auto text-white">
      <Link
        to="/Projects"
        className="text-blue-400 underline hover:text-purple-600 transition-all duration-200"
      >
        ← Back to Projects
      </Link>
      <div className="mt-4 p-6 bg-[#121820] rounded-lg shadow-lg">
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: (props) => <h1 className="text-3xl font-bold p-10 text-[#E5E7EB]" {...props} />,
            h2: (props) => <h2 className="text-2xl font-semibold text-[#9CA3AF] hover:text-[#60A5FA]" {...props} />,
            h3: (props) => <h3 className="text-xl font-medium text-[#60A5FA]" {...props} />,
            h4: (props) => <h4 className="text-lg font-medium text-[#8B5CF6]" {...props} />,
            h5: (props) => <h5 className="text-base font-medium text-[#F59E0B]" {...props} />,
            h6: (props) => <h6 className="text-sm font-medium text-[#F87171]" {...props} />,
            p: (props) => <p className="text-2xl p-4 leading-relaxed text-[#ffffff]" {...props} />,
            ol: (props) => <ol className="list-decimal ml-6 text-[#ffffff]" {...props} />,
            li: (props) => <li className="text-lg text-[#ffffff]" {...props} />,
            a: (props) => (
              <a
                className="text-blue-400 hover:text-purple-600 transition-all duration-200"
                style={{ wordBreak: 'break-word' }}
                {...props}
              />
            ),
          }}
        >
{`# ${project.projectTitle}\n\n Github: ${project.projectGithubLink}${project.projectDescription}
`}
        </Markdown>
      </div>
    </div>
  );
};

export default ProjectDetails;
