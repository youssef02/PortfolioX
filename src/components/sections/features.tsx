import React from "react";
import { Feature as CVFeature } from "../cv"; // Assuming Feature is exported as CVFeature

interface Props {
    Data: CVFeature[];
}

const FeatureSection: React.FC<Props> = ({ Data }) => {
    return (
        <section id="Feature" className="my-10">
            <h2 className="text-3xl font-bold py-2 mb-2">Features</h2>
            <FeatureGrid Data={Data} />
        </section>
    );
};

function FeatureGrid({ Data }: { Data: CVFeature[] }) {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4">
            {
                typeof Data[0].description === 'string' ? (
                    <div className="border border-gray-400 bg-white text-ellipsis overflow-hidden text-gray-400 p-4 transition-colors duration-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 flex items-center justify-center h-24 font-bold">
                        <p>{Data[0].description}</p>
                    </div>
                ) :
                (
                    Data[0].description.map((item, index) => (
                        <div key={index} className="border border-gray-400 bg-white text-ellipsis overflow-hidden text-gray-400 p-4 transition-colors duration-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 flex items-center justify-center h-24 font-bold">
                            <p>{item}</p>
                        </div>
                    ))

                )
            }

            
            
               
        </div>
    );
}

export default FeatureSection;