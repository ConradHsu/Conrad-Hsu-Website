import { PROJECTS } from "../constants";

const Publication = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Publications Title with left alignment, gradient, and larger font */}
      <h2 className="my-20 text-left text-7xl font-bold tracking-tight text-white">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Publications
        </span>
      </h2>
      <div className="ml-24">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col">
            <div className="w-full max-w-xl text-left">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 
                    py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publication;

