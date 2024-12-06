import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

export async function load() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt
  }`)

  return {
    posts,
  }
}
