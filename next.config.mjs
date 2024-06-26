import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
		appDir: true,
	},
	swcMinify: true,
	reactStrictMode: true,

};

export default withContentlayer(nextConfig);
