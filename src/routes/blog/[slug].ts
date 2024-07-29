import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'i87qtavt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-03',
})

export const get = async () => {
  const post = await client.fetch(/* groq */ `*[_type=="post"]`)
  return {
    body: {
      post,
    },
  }
}
