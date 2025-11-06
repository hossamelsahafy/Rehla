//@ts-nocheck
import { CollectionConfig } from 'payload'
import CustomMediaSelection from '@/components/CustomMediaSelection'

export const Works: CollectionConfig = {
  slug: 'Works',
  labels: {
    singular: 'Works',
    plural: 'Works',
  },
  admin: {
    useAsTitle: 'Name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Name',
      label: 'Name (EN)',
      type: 'text',
      required: true,
    },
    {
      name: 'NameAr',
      label: 'Name (AR)',
      type: 'text',
    },
    {
      name: 'Subtitle',
      label: 'Subtitle (EN)',
      type: 'textarea',
    },
    {
      name: 'SubtitleAr',
      label: 'Subtitle (AR)',
      type: 'textarea',
    },
    {
      name: 'LongDes',
      label: 'Long Description (EN)',
      type: 'textarea',
    },
    {
      name: 'LongDesAr',
      label: 'Long Description (AR)',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        components: {
          Field: CustomMediaSelection,
        },
      },
      required: true,
    },
  ],
}
