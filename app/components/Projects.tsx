import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [
    {
      name: "Fieldproxy - Full Stack",
      description: "No-code SaaS for FSM",
      images: ["/images/fp-1.svg", "/images/fp-2.svg", "/images/fp-3.svg"],
      features: [
        "Drag and Drop Dashboard, Application and Workflow builder",
        "Schema to UI generation",
        "Location Intelligence portal with Gmaps and OSM Maps",
        "Extensive state management for dynamic dashboards",
        "Component Library, Data Tables and Server connected charts",
        "Management Portal",
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Live Insights - Sales Finance portal with customisable filters",
      images: ["/images/live-1.svg", "/images/live-2.png"],
      technologies: ["React", "Recharts", "ApexCharts"],
    },
    {
      name: "Lootah Holdings - Enterprise Business Analytics Platform",
      images: [],
      technologies: ["React", "Recharts"],
    },
    {
      name: "Hygge - Dish Discovery Platform with multiple portals",
      images: [],
      technologies: ["React", "Redux", "Maps"],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="notion-block ">
      <h2 className="notion-h2">🚀 Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className=" bg-notion-white bg-opacity-20 p-4 rounded-lg shadow mb-4"
        >
          <h3 className="notion-h3 mb-2">{project.name}</h3>
          {project.description && (
            <p className="notion-text mb-3">{project.description}</p>
          )}
          {project.features && (
            <div className="mb-3">
              <h4 className="font-medium mb-2">Features:</h4>
              <ul className="list-disc list-inside">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="notion-text">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.images?.length > 0 && (
            <div className="my-4">
              <Slider {...sliderSettings}>
                {project.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative h-[300px]">
                    <Image
                      src={image}
                      alt={`${project.name} screenshot ${imageIndex + 1}`}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Technologies used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-notion-brown text-white m-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
