import React from 'react';
import { Skill } from '../cv';

interface Props {
    Data: Skill[];
}

const SkillsSection: React.FC<Props> = ({ Data }) => {
    return (
        <section id="Project" className="my-10">
            <h2 className="text-3xl font-bold py-2 mb-2">Skills</h2>
            <SkillsGrid Data={Data} />
        </section>
    );
};

function SkillsGrid({ Data }: { Data: Skill[] }) {
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {Data.map((item, index) => (
                <div 
                    key={index} 
                    className="border border-gray-400 bg-white text-clip overflow-hidden text-gray-400 p-4 transition-colors duration-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 flex items-center justify-center h-24 font-bold"
                >
                    <p>
                    {item.description}
                    </p>
                   
                </div>
            ))}
        </div>
    );
}

export default SkillsSection;
