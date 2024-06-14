// components/Timeline.tsx

import React from 'react';

interface TimelineItem {
    date: string;
    label: string;
    title: string;
    description: string;
}

const timelineItems: TimelineItem[] = [
    {
        date: 'May, 2020',
        label: 'The origin',
        title: 'Acme was founded in Milan, Italy',
        description: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.',
    },
    {
        date: 'May, 2021',
        label: 'The milestone',
        title: 'Reached 5K customers',
        description: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.',
    },
    {
        date: 'May, 2022',
        label: 'The acquisitions',
        title: 'Acquired various companies, including Technology Inc.',
        description: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.',
    },
    {
        date: 'May, 2023',
        label: 'The IPO',
        title: 'Acme went public at the New York Stock Exchange',
        description: 'Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.',
    },
];

function Timeline () 
 {
    return (
        <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-6">
                <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                    <div className="w-full max-w-3xl mx-auto">
                        <div className="-my-6">
                            {timelineItems.map((item, index) => (
                                <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                                    <div className="font-medium text-indigo-500 mb-1 sm:mb-0">{item.label}</div>
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{item.date}</time>
                                        <div className="text-xl font-bold text-slate-900">{item.title}</div>
                                    </div>
                                    <div className="text-slate-500">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
