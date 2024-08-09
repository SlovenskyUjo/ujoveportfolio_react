import React from "react"
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiGithubBadge, DiJava, DiMysql,
} from "react-icons/di"
import {FaVuejs} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import Reveal from "@/Components/Reveal";

const skills = [
    {
        category: 'Frontend',
        technologies: [
            { name: 'HTML', icon: <DiHtml5 className='text-orange-600' />},
            { name: 'CSS', icon: <DiHtml5 className='text-blue-600' />},
            { name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-600' />},
            { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' />},
            { name: 'Vue', icon: <FaVuejs className='text-green-600' />},
            { name: 'React', icon: <DiReact className='text-blue-600' />},
        ],
    },
    {
        category: 'Fullstack',
        technologies: [
            { name: 'MySQL', icon: <DiMysql className="text-orange-600" /> },
            { name: 'React', icon: <DiReact className='text-blue-600' />},
            { name: 'GitHub', icon: <DiReact className='text-gray-600' />}
        ]
    }
]

const Skills = () => {
    return (
        <div className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
            <Reveal>
            <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>

            <p className="text-center mb-8">I worked on various frontend and fullstack projects.</p>

            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1000px] mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-34 mb-4 text-center">{skill.category}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skill.technologies.map((tech, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <span className="text-2xl">{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </Reveal>
        </div>
    )
}

export default Skills;
