export const apiVersion = '2025-10-28'

export const dataset = 'growthblog'

export const projectId = 'rwizuy4v'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
