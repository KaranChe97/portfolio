const Projects = () => {
  const projects = [
    {
      name: "Fieldproxy - Full Stack",
      description: "No-code SaaS for FSM",
      features: [
        "Drag and Drop Dashboard, Application and Workflow builder",
        "Schema to UI generation",
        "Location Intelligence portal with Gmaps and OSM Maps",
        "Extensive state management for dynamic dashboards",
        "Component Library, Data Tables and Server connected charts",
        "Management Portal"
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"]
    },
    {
      name: "Lootah Holdings - Enterprise Business Analytics Platform",
      technologies: ["React", "Recharts"]
    },
    {
      name: "Hygge - Dish Discovery Platform with multiple portals",
      technologies: ["React", "Redux", "Maps"]
    },
    {
      name: "Live Insights - Sales Finance portal with customisable filters",
      technologies: ["React", "Recharts", "ApexCharts"]
    }
  ]

  return (
    <section className="notion-block">
      <h2 className="notion-h2">🚀 Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6 bg-notion-white bg-opacity-20 p-4 rounded-lg">
          <h3 className="notion-h3 mb-2">{project.name}</h3>
          {project.description && <p className="notion-text mb-3">{project.description}</p>}
          {project.features && (
            <div className="mb-3">
              <h4 className="font-medium mb-2">Features:</h4>
              <ul className="list-disc list-inside">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="notion-text">{feature}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="font-medium mb-2">Technologies used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                
                <span key={techIndex} className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-notion-brown text-white m-1">
                   {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects

