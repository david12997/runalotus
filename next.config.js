/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler:{
    styledComponents:true
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
