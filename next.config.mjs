/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async redirects() {
        return [
            {
                source: '/blogs/ping-pong-ball-tracking-system',
                destination: '/blogs/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
