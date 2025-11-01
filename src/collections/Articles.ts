//@ts-nocheck
import { CollectionConfig } from 'payload'
import CustomMediaSelection from '@/components/CustomMediaSelection'

export const Articles: CollectionConfig = {
  slug: 'Articles',
  labels: {
    singular: 'Articles',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      label: 'Post Type In English',
      type: 'text',
      required: true,
    },
    {
      name: 'typeAr',
      label: 'Post Type In Arabic',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Post Title In English',
      type: 'text',
      required: true,
    },
    {
      name: 'titleAr',
      label: 'Post Title In Arabic',
      type: 'text',
      required: true,
    },
    {
      name: 'des',
      label: 'Post Description In English',
      type: 'text',
      required: true,
    },
    {
      name: 'desAr',
      label: 'Post Description In Arabic',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Post Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        components: {
          Field: CustomMediaSelection,
        },
      },
    },
  ],
}
