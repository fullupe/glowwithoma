/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["cdn.sanity.io","res.cloudinary.com"]
    },
    images: {
        unoptimized: true,
      },
}

module.exports = nextConfig
