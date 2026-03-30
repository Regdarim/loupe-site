import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'LØUPE CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '7phh38h0',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Content')
              .id('site-content-main')
              .child(
                S.document()
                  .schemaType('siteContent')
                  .documentId('site-content-main')
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
