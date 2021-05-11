import React from 'react';
import ProjectOverview from '../components/ProjectOverview';

const Portfolio = () => {
    return (
        <section className=" bg-white text-gray-800 min-h-full w-full">
            <div className="col-span-full bg-gray-50 text-green-400 text-6xl text-center p-3 font-dancing font-extrabold prose">Portfolio Samples</div>
            <div className="pl-5 pr-5 grid gap-3 grid-cols-2 mt-5 mb-5">
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
                <ProjectOverview />
            </div>
        </section>
    )
}

export default Portfolio;