import React, { useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "@/Components/Reveal";

interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    url: string;
    github_url: string;
}

// Define a mapping from categories to background colors
const categoryColors: Record<string, string> = {
    Vue: "bg-green-600",
    React: "bg-blue-600",
    Java: "bg-orange-600",
    Angular: "bg-red-600",
};

const Portfolio: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/projects")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load projects.");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
                Portfolio
            </h2>
            {projects.map((project, index) => {
                const categoryColor = categoryColors[project.category] || "bg-gray-700"; // Default color if category not found
                return (
                    <Reveal key={project.id}>
                        <div
                            className={`flex flex-col md:flex-row ${
                                index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            } mb-12`}
                        >
                            <div className="w-full md:w-1/2 p-4 flex-shrink-0 flex">
                                <div className="w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
                                <div className="flex-grow flex flex-col">
                                    <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-300 text-base mb-4">
                                        {project.description}
                                    </p>
                                    <p className="text-gray-400 mb-4">
                                        <span
                                            className={`px-3 py-1 rounded ${categoryColor} text-white`}
                                        >
                                            {project.category}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex space-x-2 mt-2">
                                    <a
                                        href={project.url}
                                        className="px-3 py-2 text-sm bg-gray-500 text-gray-200 rounded-lg hover:bg-gray-600 transition duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Site
                                    </a>
                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            className="px-3 py-2 text-sm flex items-center bg-slate-500 text-gray-200 rounded-lg hover:bg-slate-600 transition duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <AiOutlineGithub className="text-lg mr-1" />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                );
            })}
        </div>
    );
};

export default Portfolio;
