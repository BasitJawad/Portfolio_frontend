import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from 'react-redux';
import { sendProject } from '../Redux/Slicers/projectSlice';

const Editor = ({ placeholder }) => {
  const dispatch = useDispatch();
  const editor = useRef(null);

  const isLoading = useSelector((state) => state.Project.isLoading); // 👈 fetch loading status

  const [formData, setFormData] = useState({
    projectTitle: '',
    projectGithubLink: '',
    projectDescription: ''
  });

  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Write your project description...',
    height: '40vh',
  }), [placeholder]);

  const handleSubmit = async () => {
    const projectData = {
      title: formData.projectTitle,
      description: formData.projectDescription,
      link: formData.projectGithubLink,
    };

    console.log("Submitted Project:", projectData);

    try {
      const result = await dispatch(sendProject(projectData));
      console.log("Dispatch result:", result);
    } catch (error) {
      console.error("Dispatch failed:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      {/* Project Title */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Project Title</label>
        <input
  type="text"
  placeholder="Enter project title"
  value={formData.projectTitle}
  onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
  className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
/>
      </div>

      {/* GitHub Link */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">GitHub Repository Link</label>
        <input
  type="url"
  placeholder="https://github.com/your-repo"
  value={formData.projectGithubLink}
  onChange={(e) => setFormData({ ...formData, projectGithubLink: e.target.value })}
  className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
/>
      </div>

      {/* Jodit Rich Text Editor */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Project Description</label>
        <JoditEditor
          ref={editor}
          value={formData.projectDescription}
          config={config}
          tabIndex={1}
          onBlur={(newDescription) => setFormData({ ...formData, projectDescription: newDescription })}
          onChange={() => {}}
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading} // 👈 disables while loading
        className={`flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 self-start ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? (
          <>
            Sending...
          </>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};

export default Editor;
