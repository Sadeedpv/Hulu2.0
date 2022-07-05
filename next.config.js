/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["assets.stickpng.com", "ott-details.p.rapidapi.com", "m.media-amazon.com", "encrypted-tbn0.gstatic.com"]
  },
  env: {
    NEXT_API_KEY: process.env.NEXT_API_KEY
}
}

module.exports = nextConfig
