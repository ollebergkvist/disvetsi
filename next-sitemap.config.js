/** @type {import('next-sitemap').IConfig} */
// libs
require('dotenv').config()

module.exports = {
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_LOCAL_SERVER
      : process.env.NEXT_PUBLIC_REMOTE_URL,
  generateIndexSitemap: false,
}
