import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const nextConfig: NextConfig = {
  // Configure the `src` directory
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Remove webpack config since we're using Turbopack
  // Polling is handled by WATCHPACK_POLLING=true environment variable
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
