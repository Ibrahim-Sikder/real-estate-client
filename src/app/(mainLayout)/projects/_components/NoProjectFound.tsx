/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './ProjectAnimation.css'
interface ProjectLoadingAnimationProps {
    isLoading: boolean;
}


const NoProjectFound: React.FC<ProjectLoadingAnimationProps> = ({ isLoading }) => {
    const [showNoProjects, setShowNoProjects] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShowNoProjects(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <div className="flex flex-col items-center justify-center ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 100 100"
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}
            >
                <g className="house-group">
                    <path
                        d="M20,80 L20,50 L50,20 L80,50 L80,80 Z"
                        fill="none"
                        stroke="#135F4A"
                        strokeWidth="4"
                        className="house"
                    />
                    <rect x="40" y="60" width="20" height="20" fill="#135F4A" className="door" />
                    <rect x="30" y="40" width="15" height="15" fill="#135F4A" className="window" />
                    <rect x="55" y="40" width="15" height="15" fill="#135F4A" className="window" />
                </g>
                <circle cx="50" cy="50" r="45" fill="none" stroke="#135F4A" strokeWidth="8" className="circle" />
            </svg>

            {!isLoading && showNoProjects && (
                <div className="text-center mt-8 transition-opacity duration-500 opacity-100">
                    <h2 className="text-2xl font-bold mb-2">No Projects Found</h2>
                    <p className="text-gray-600 mb-6">We couldn't find any projects matching your search criteria.</p>
                    <Link href="/projects" className="bg-[#135F4A] text-white px-6 py-2 rounded-md hover:bg-[#0D4D3B] transition duration-300">
                        View All Projects
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NoProjectFound;

