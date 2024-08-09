import { PageProps } from "@/types";
import React, { useEffect, useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/react";
import AddForm from "@/Components/AddForm";
import { AiOutlineGithub } from 'react-icons/ai';

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
    Vue: 'bg-green-600',
    React: 'bg-blue-600',
    Java: 'bg-orange-600',
    Angular: 'bg-red-600',
};

export default function DashboardProjects({ auth }: PageProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load projects.');
                setLoading(false);
            });
    }, []);

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
            fetch(route('dashboard.destroy', id), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
            })
                .then(response => {
                    if (response.ok) {
                        setProjects(projects.filter(project => project.id !== id));
                    } else {
                        return response.json().then(errorData => {
                            setError(errorData.message || 'Failed to delete project.');
                        });
                    }
                })
                .catch(err => {
                    setError('Failed to delete project.');
                });
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Projects</h2>}
        >
            <Head title="Dashboard Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <article className="container p-10 w-full">
                            <h2 className="ms-4 font-bold text-lg">Add new plugin!</h2>
                            <AddForm />

                            <div className='py-8'>
                                <h2 className='text-2xl font-bold text-gray-800 mb-6'>All Projects</h2>
                                {projects.map((project) => {
                                    const categoryColor = categoryColors[project.category] || 'bg-gray-700'; // Default color if category not found
                                    return (
                                        <div key={project.id} className='mb-6 p-6 bg-white shadow-md rounded-lg'>
                                            <div className='flex'>
                                                <div className='w-1/2 pr-4'>
                                                    <img
                                                        src={project.image}
                                                        alt={project.name}
                                                        className='w-full h-48 object-cover rounded-lg'
                                                    />
                                                </div>
                                                <div className='w-1/2 flex flex-col justify-between'>
                                                    <div>
                                                        <h3 className='text-xl font-semibold text-gray-800'>{project.name}</h3>
                                                        <p className='text-gray-600 mt-2'>{project.description}</p>
                                                        <p className='text-gray-500 mt-2'>
                                                            <span className={`px-3 py-1 rounded ${categoryColor} text-white`}>
                                                                {project.category}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className='flex mt-4 space-x-4'>
                                                        <a
                                                            href={project.url}
                                                            className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700'
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            View Site
                                                        </a>
                                                        {project.github_url && (
                                                            <a
                                                                href={project.github_url}
                                                                className='px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700'
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <AiOutlineGithub className='inline mr-2' />
                                                                View on GitHub
                                                            </a>
                                                        )}
                                                        <button
                                                            onClick={() => handleDelete(project.id)}
                                                            className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
