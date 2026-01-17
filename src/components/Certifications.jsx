import React from "react";

const certifications = [
  {
    title: "AWS Solution Architecture Simulation",
    issuer: "Amazon Web Services",
    description:
      "Hands-on simulation covering cloud architecture design, scalability, reliability, and cost optimization using AWS best practices.",
  },
  {
    title: "McKinsey.org Forward Certificate",
    issuer: "McKinsey & Company",
    description:
      "Completed a professional skills program focused on problem-solving, adaptability, effective communication, and digital collaboration.",
  },
  {
    title: "Hack2Skill Certificate",
    issuer: "Hack2Skill",
    description:
      "Participated in competitive hackathons and technical challenges, demonstrating problem-solving, teamwork, and practical development skills.",
  },
];

const Certification = () => {
  return (
    <section
      id="certifications"
      className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="relative max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-thin text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>

      {/* Certification Cards */}
      <div className="relative max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        {certifications.map((cert, index) => (
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
              <h3 className="text-2xl font-light text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-sm text-amber-400 mb-4">
                {cert.issuer}
              </p>

              <p className="text-gray-400 leading-relaxed font-light">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="relative max-w-3xl mx-auto mt-16 text-center text-gray-400 text-sm font-light">
        These certifications reflect my continuous learning mindset and
        commitment to strengthening both technical and professional skills.
      </p>
    </section>
  );
};

export default Certification;
