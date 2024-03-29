import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(configuredSanityClient)

export const urlFor = (source) => builder.image(source)