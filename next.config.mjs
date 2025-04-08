import { withPayload } from '@payloadcms/next/withPayload'

import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  // Your Next.js config here
}

export default withPayload(withPlaiceholder(nextConfig), {
  devBundleServerPackages: false,
})
