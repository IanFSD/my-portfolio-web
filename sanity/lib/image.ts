import imageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const builder = imageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
})

export function urlFor(source: any) {
  return builder.image(source)
}
