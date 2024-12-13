const Skills = () => {
  const skillCategories = [
    {
      category: "Web",
      skills: ["React.js", "Redux", "TypeScript", "Next.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Supabase"]
    },
    {
      category: "Styling",
      skills: ["Tailwind CSS", "MUI", "Styled Components", "SCSS"]
    },
    {
      category: "Mobile",
      skills: ["React Native", "Flutter"]
    },
    {
      category: "DevOps",
      skills: ["Git", "AWS"]
    },
    {
      category: "Testing",
      skills: ["Vitest", "Jest"]
    }
  ]

  return (
    <section className="notion-block">
      <h2 className="notion-h2">🛠️ Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="notion-h3 mb-2">{category.category}</h3>
            <div className="flex flex-wrap -m-1">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-gray-200 text-gray-700 m-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

