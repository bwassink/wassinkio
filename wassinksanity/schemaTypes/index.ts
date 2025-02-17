import sanity from '@sanity/client'
import sanityConfig from './wassinksanity/sanity.config'

const client = sanity(sanityConfig)

// Use the client to fetch data from Sanity
client.fetch('*[_type == "post"]').then((posts) => {
  console.log(posts)
})
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

export const schemaTypes = [post, author, category, blockContent]
