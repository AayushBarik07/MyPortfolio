// frontend/api/pinned.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (!process.env.GITHUB_ACCESS_TOKEN) {
    return res.status(500).json({ repos: [], error: "Missing GitHub token" });
  }

  const query = `
    {
      user(login: "AayushBarik07") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
              updatedAt
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "MyPortfolioApp",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (!response.ok || data.errors) {
      console.error("GitHub API Error:", data);
      return res.status(500).json({ repos: [] });
    }

    return res.status(200).json({ repos: data.data.user.pinnedItems.nodes });
  } catch (error) {
    console.error("Error fetching pinned repos:", error);
    return res.status(500).json({ repos: [] });
  }
}
