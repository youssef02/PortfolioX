/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    output: "export",
    basePath: "/PorfolioX",
    assetPrefix: "/PorfolioX",
    distDir:"dist",

    images: {
        unoptimized: true,
    }
};

export default nextConfig;
