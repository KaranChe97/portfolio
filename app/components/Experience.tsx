const Experience = () => {
  const experiences = [
    {
      company: "Fieldproxy Private Ltd - Chennai",
      positions: [
        {
          title: "Lead Software Developer",
          period: "JULY 2022 - PRESENT",
          responsibilities: [
            "Leading AI-driven no-code SaaS development for FSM (Field Service Management) solutions.",
            "Spearheading the research and integration of AI-first tools into the platform.",
            "Responsible for setting up the product from scratch, including ideation, development, and codebase management.",
            "Collaborate closely with the business team to strategize, design, and deliver features on schedule while ensuring alignment with business objectives."
          ]
        },
        {
          title: "Senior Developer",
          period: "JUNE 2021 - JUNE 2022",
          responsibilities: [
            "Architected the product and developed a comprehensive design system.",
            "Implemented application health monitoring, usage tracking, and thorough documentation.",
            "Upgraded the codebase to TypeScript and Next.js, ensuring modern development practices.",
            "Established code review processes and setup CI/CD pipelines to streamline deployments and maintain code quality."
          ]
        },
        {
          title: "Front End Web Developer",
          period: "JUNE 2019 - JUNE 2021",
          responsibilities: [
            "Contributed to over 3+ service-based projects and successfully bootstrapped product development using React."
          ]
        }
      ]
    },
    {
      company: "Hasura - Remote",
      positions: [
        {
          title: "Product Development Intern",
          period: "DEC 2017 - FEB 2018",
          responsibilities: [
            "Developed Twitter clone, and TMDB Movie catalogue apps with React Native."
          ]
        }
      ]
    }
  ]

  return (
    <section className="notion-block">
      <h2 className="notion-h2">💼 Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="notion-h3">{exp.company}</h3>
          {exp.positions.map((pos, posIndex) => (
            <div key={posIndex} className={`mb-4 ${posIndex === exp.positions.length - 1 ? '' : 'border-b border-notion-gray'}`}>
              <h4 className="font-medium">{pos.title}</h4>
              <p className="text-sm text-notion-gray-dark mb-2">{pos.period}</p>
              <ul className="list-disc list-inside">
                {pos.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="notion-text">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Experience

