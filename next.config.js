/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'https://main.dhzz9tafaw6fx.amplifyapp.com',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'main.d45dn2ti2s07n.amplifyapp.com'],
  },
};

if(process.env.NO_ASSET_PREFIX) {
  delete nextConfig.assetPrefix;
}

module.exports = nextConfig
