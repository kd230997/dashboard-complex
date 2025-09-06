import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	async rewrites() {
		return [
			{
				source: "/api/:path*", // anything that hits /api/*
				destination: "http://localhost:3000/:path*", // proxy to NestJS
			},
		];
	},
};

export default nextConfig;
