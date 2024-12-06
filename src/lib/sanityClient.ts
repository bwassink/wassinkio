import {createClient} from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'i87qtavt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-03',
})

export default client
// const builder = imageUrlBuilder(client)

// export function urlFor(source) {
//   return builder.image(source)
// }
