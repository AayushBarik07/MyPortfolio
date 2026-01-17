import React from 'react'

const skillsData = {
  "Programming & Frameworks": [
    "C++",
    "React.js",
    "Python",
    "Node.js",
    "JavaScript",
    "Express.js"
  ],
  "Frontend Technologies": [
    "HTML",
    "CSS",
    "Tailwind CSS"
  ],
  "Core Computer Science": [
    "Data Structures & Algorithms",
    "DBMS/SQL",
    "Web Development"
  ],
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl text-center md:text-5xl font-thin text-white mb-5">
          My <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-5"></div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
            <div
              key={category}
              className="
                group relative rounded-2xl p-6
                bg-white/5 backdrop-blur-md
                border border-white/10
                hover:border-amber-500/40
                transition-all duration-300
              "
            >
              {/* Glow on hover */}
              <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-amber-500/10 to-orange-600/10
                opacity-0 group-hover:opacity-100
                blur-xl transition-opacity duration-500
              " />

              <div className="relative">
                <h3
                  className="text-xl font-light mb-5
                  bg-gradient-to-r from-amber-500 to-orange-600
                  bg-clip-text text-transparent"
                >
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4 py-1.5 text-sm rounded-full
                        bg-white/5 text-gray-300
                        border border-white/10
                        hover:border-amber-500/40
                        hover:text-amber-400
                        hover:bg-amber-500/10
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
