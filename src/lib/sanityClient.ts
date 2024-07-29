import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'i87qtavt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-03',
})

export default client
