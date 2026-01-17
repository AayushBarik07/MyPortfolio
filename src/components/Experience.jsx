import React from "react";

const experiences = [
  {
    role: "SDE Intern",
    company: "Bluestock",
    duration: "1 Feb 2025 - 31 Mar 2025",
    location: "Remote, India",
    points: [
      "Worked on a fintech mobile application providing real-time stock analytics, IPO tracking, global indices, and a trader community.",
      "Implemented a Node.js REST API with PostgreSQL, processing over 750 IPO data points per minute.",
      "Enabled real-time stock and IPO tracking for 150+ users, significantly improving data accessibility.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Node.js", "PostgreSQL"],
  },
  {
    role: "President",
    company: "Techwiz (University Tech Club)",
    duration: "2023 – 2025",
    location: "SRM Institute of Science and Technology",
    points: [
      "Led a 30+ member technical team to organize hackathons and technical events.",
      "Increased student participation by 30% through workshops and coding contests.",
      "Collaborated with cross-functional teams, improving project success rates by 10%.",
      "Boosted member engagement and retention by 25% through structured initiatives.",
    ],
    tech: ["Leadership", "Event Management", "Team Collaboration"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="relative max-w-5xl mx-auto mb-16 text-center">
          
        <h2 className="text-4xl  md:text-5xl font-thin text-white mb-4">
          My <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>

      {/* Experience Cards */}
      <div className="relative max-w-5xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl
                       bg-gradient-to-br from-gray-900 via-black to-gray-900
                       border border-white/10
                       hover:border-amber-500/40
                       transition-all duration-500"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

            <div className="relative">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-light text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 mt-1">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              {/* Location */}
              <p className="text-sm text-gray-500 mb-5">
                📍 {exp.location}
              </p>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6 leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-1.5 rounded-full
                               border border-amber-500/30
                               text-amber-400
                               bg-amber-500/5
                               hover:bg-amber-500/10
                               transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <p className="text-gray-400 text-sm md:text-sm leading-relaxed font-light text-center">
          There more experiences to explore! Feel free to reach out for a detailed discussion on my professional journey and projects.
          <br />
          Stay tuned for more updates as I continue to grow and take on new challenges!
        </p>
      </div>
    </section>
  );
};

export default Experience;
