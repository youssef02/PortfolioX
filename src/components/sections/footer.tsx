import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-4 text-center">
            <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Youssef Arrassen
            </p>
            <p className="text-xs text-gray-500">
                Made with Love using Tailwind CSS
            </p>
        </footer>
    );
};

export default Footer;