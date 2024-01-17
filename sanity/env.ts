export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || 'v1'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'development',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'leljdndr',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
