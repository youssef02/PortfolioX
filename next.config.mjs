/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    output: "export",
    basePath: "/PortfolioX",
    


    images: {
        unoptimized: true,
    }
    
};

export default nextConfig;
