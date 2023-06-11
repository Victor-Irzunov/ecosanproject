const nextConfig = {
	reactStrictMode: true,
	images: {
	  domains: ['ecosan.by'],
	  unoptimized: true,
	},
	async rewrites() {
	  return [
		 {
			source: '/api/:path*',
			destination: '/api/:path*',
		 },
	  ];
	},
	async headers() {
	  return [
		 {
			source: '/(.*)',
			headers: [
			  {
				 key: 'Cache-Control',
				 value: 'public, s-maxage=60, stale-while-revalidate=86400',
			  },
			],
		 },
	  ];
	},
 };
 module.exports = nextConfig;
 