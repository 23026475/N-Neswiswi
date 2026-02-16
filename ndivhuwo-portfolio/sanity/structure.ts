import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Only include project once
      S.documentTypeListItem('project').title('Projects'),
      S.divider(),
      // Filter out all document types to avoid duplicates
      // This ensures we don't include any automatic list items
    ])