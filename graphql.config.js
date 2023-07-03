// libs
// eslint-disable-next-line unicorn/prefer-module
require('dotenv').config()

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  projects: {
    default: {
      overwrite: true,
      ignoreNoDocuments: true,
      watch: true,
      schema: [
        {
          [process.env.SHOPIFY_STORE_DOMAIN]: {
            headers: {
              'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
            },
          },
        },
      ],
      documents: 'src/graphql/**/*.{graphql,gql,js,ts,jsx,tsx}',
      extensions: {
        codegen: {
          generates: {
            'src/shopify/shopify.ts': {
              plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
            },
          },
        },

        endpoints: {
          default: {
            url: process.env.SHOPIFY_STORE_DOMAIN,
            headers: {
              'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
            },
          },
        },
      },
    },

    app: {
      url: process.env.TINA_LOCAL_GRAPHQL_SERVER,
      schema: ['tina/__generated__/schema.gql'],
      documents: [
        'tina/__generated__/queries.gql',
        'tina/__generated__/frags.gql',
        'tina/queries/*.gql',
      ],
    },
  },
}
