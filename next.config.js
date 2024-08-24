/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'path',
            value: '(?!es|en).*'
          },
        ],
        destination: '/en',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
