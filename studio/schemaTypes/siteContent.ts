import { defineField, defineType } from 'sanity';

const imageFields = [
  'hero',
  'grid1',
  'grid2',
  'grid3',
  'split1',
  'split2',
] as const;

export const siteContentType = defineType({
  name: 'siteContent',
  title: 'Site Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'string',
    }),
    defineField({
      name: 'introHeading',
      title: 'Intro Heading',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'realizacjeItems',
      title: 'Realizacje Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
            defineField({ name: 'category', title: 'Category', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'approachSection1Title',
      title: 'Approach Section 1 Title',
      type: 'string',
    }),
    defineField({
      name: 'approachSection1Text',
      title: 'Approach Section 1 Text',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'approachSection2Title',
      title: 'Approach Section 2 Title',
      type: 'string',
    }),
    defineField({
      name: 'approachSection2Text',
      title: 'Approach Section 2 Text',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Href', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'object',
      fields: imageFields.map((field) =>
        defineField({
          name: field,
          title: field,
          type: 'image',
          options: { hotspot: true },
        }),
      ),
    }),
  ],
  preview: {
    select: {
      title: 'heroHeadline',
      subtitle: 'heroSubtext',
    },
  },
});
