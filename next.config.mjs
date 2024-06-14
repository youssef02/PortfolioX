/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    output: "export",
    basePath: "/PorfolioX",

    images: {
        unoptimized: true,
    }
};

export default nextConfig;
