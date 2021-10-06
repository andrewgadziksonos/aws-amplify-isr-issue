/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en-us',
    locales: [
      'en-us',
      'fr-fr'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/products/bar',
        destination: '/foo/bar',
      },
    ]
  },
}
