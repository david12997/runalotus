/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler:{
    styledComponents:true
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname:'cms.aipus.co',
        port:'',
        pathname:'/uploads/**',
      }
    ],
  }
}

module.exports = nextConfig
