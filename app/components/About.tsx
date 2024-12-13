const About = () => {
  return (
    <section className="notion-block">
      <h1 className="notion-h1">Hi👋, I'm Karan M</h1>
      <h2 className="notion-h2 text-notion-gray-dark">Lead Software Developer Frontend</h2>
      <p className="notion-text mt-4">
        I began my career developing multiple service-based products using React.js and
        later pivoted to bootstrap the product Fieldproxy. Currently, I lead the front-end
        product team, where I play an active role in user research, building and testing MVPs,
        developing and maintaining core products, and ensuring quanpm lity through design and
        code reviews. I also monitor application performance and experiment with feature
        flags to drive adoption. With a focus on agility, I excel at rapidly delivering solutions
        and workarounds for immediate requirements while exploring innovative tools and
        integrations.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="mailto:karanche97@gmail.com" className="text-notion-blue hover:underline"> 📬 Email</a>
        <a href="https://github.com/KaranChe97" target="_blank" rel="noopener noreferrer" className="text-notion-blue hover:underline">🤯 GitHub</a>
        <a href="https://www.linkedin.com/in/karanche" target="_blank" rel="noopener noreferrer" className="text-notion-blue hover:underline">🌝 LinkedIn</a>
        <a href="https://dev.to/karanche97" target="_blank" rel="noopener noreferrer" className="text-notion-blue hover:underline">🤓 Blogs</a>
      </div>
    </section>
  )
}

export default About

