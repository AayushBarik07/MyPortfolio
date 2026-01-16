import React, { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/pinned") // ✅ works in dev (proxy) and prod (Vercel)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.repos || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pinned repos:", err);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative" id="projects">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            Featured{" "}
            <span className="font-light bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        </div>

        {loading && <p className="text-gray-400 text-center">Loading projects...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, idx) => (
              <div key={idx} className="group relative bg-gradient-to-b from-gray-900/50 to-black/50 border border-white/5 p-6">
                <h3 className="text-2xl text-white">{repo.name}</h3>
                <p className="text-gray-400 text-sm">{repo.description || "No description"}</p>
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-amber-500 mt-4 inline-block">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
