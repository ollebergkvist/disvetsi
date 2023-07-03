import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: {
    'https://[your_store_name].swell.store/graphql': {
      headers: {
        Authorization: '[your_public_key]',
      },
    },
  },
  documents: ['src/**/*.gql'],
  generates: {
    './src/__generated__/sdk.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true, // includes data and errors
        preResolveTypes: false, // don't preresolve types so descriptions are loaded
      },
    },
  },
}

export default config
