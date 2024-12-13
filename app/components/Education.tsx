const Education = () => {
  const education = [
    {
      degree: "MBA in Technology Management",
      institution: "Anna University",
      location: "Chennai - Tamil Nadu - India",
      period: "JULY 2022 - APRIL 2024"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Hindusthan College of Engineering and Technology",
      location: "Coimbatore - Tamil Nadu - India",
      period: "JULY 2015 - APRIL 2019"
    }
  ]

  const certifications = [
    {
      name: "Introduction to Modern Applications Development",
      issuer: "NPTEL",
      period: "Jan 2017 - Mar 2017"
    },
    {
      name: "Java Fundamentals Award of achievement",
      issuer: "Oracle"
    }
  ]

  const contributions = [
    {
      name: "Hindusthan Developers Club",
      role: "Founder & Organizer",
      period: "MAR 2017 - JULY 2018",
      description: "Founded a student club focused on inter-departmental knowledge sharing in computer science. Organised and delivered 10+ workshops, tech talks, and bootcamps to foster learning and collaboration."
    }
  ]

  return (
    <section className="notion-block">
      <h2 className="notion-h2">🎓 Education & Certifications</h2>
      
      <div className="mb-6">
        <h3 className="notion-h3">📚 Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-medium">{edu.degree}</h4>
            <p className="notion-text">{edu.institution}</p>
            <p className="notion-text text-notion-gray-dark">{edu.location}</p>
            <p className="text-sm text-notion-gray-dark">{edu.period}</p>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <h3 className="notion-h3">🏆 Certifications</h3>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-2">
            <h4 className="font-medium">{cert.name}</h4>
            <p className="notion-text">{cert.issuer}</p>
            {cert.period && <p className="text-sm text-notion-gray-dark">{cert.period}</p>}
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="notion-h3">🤝 Contributions</h3>
        {contributions.map((contribution, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-medium">{contribution.name}</h4>
            <p className="notion-text">{contribution.role}</p>
            <p className="text-sm text-notion-gray-dark">{contribution.period}</p>
            <p className="notion-text">{contribution.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

