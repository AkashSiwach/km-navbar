export default {
    name: 'navbar',
    title: 'Navbar Configuration',
    type: 'document',
    fields: [
        // 1. Logo Configuration
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        },

        // 2. Styling Configuration
        {
            name: 'styling',
            title: 'Styling Options',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false,
            },
            fields: [
                {
                    name: 'fontSize',
                    title: 'Font Size',
                    type: 'string',
                    description: 'e.g., "16px", "1rem", or Tailwind class like "text-base"',
                    initialValue: 'text-base'
                },
                {
                    name: 'fontColor',
                    title: 'Font Color',
                    type: 'string',
                    description: 'Hex code (e.g., #000000) or Tailwind class',
                },
                {
                    name: 'linkHoverColor',
                    title: 'Link Hover Color',
                    type: 'string',
                    description: 'Hex code or Tailwind class for hover state',
                },
                {
                    name: 'subMenuFont',
                    title: 'Sub-menu Font Style',
                    type: 'string',
                    description: 'Font family or CSS class for sub-menu items',
                }
            ]
        },

        // 3. Menu Items & URLs
        {
            name: 'menuItems',
            title: 'Menu Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Menu Item',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'string', // Using string to allow relative paths like /about
                            initialValue: '#'
                        },
                        {
                            name: 'hasDropdown',
                            title: 'Has Dropdown?',
                            type: 'boolean',
                            initialValue: false
                        },
                        {
                            name: 'dropdownType',
                            title: 'Dropdown Type',
                            type: 'string',
                            hidden: ({ parent }) => !parent?.hasDropdown,
                            options: {
                                list: [
                                    { title: 'Motorbikes Grid', value: 'motorbikes' },
                                    { title: 'Scooters Grid', value: 'scooters' },
                                    { title: 'Simple List', value: 'simple' },
                                    { title: 'More Menu', value: 'more' }
                                ]
                            }
                        },
                        {
                            name: 'dropdownItems',
                            title: 'Dropdown Content',
                            type: 'array',
                            hidden: ({ parent }) => !parent?.hasDropdown,
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'label',
                                            title: 'Label',
                                            type: 'string'
                                        },
                                        {
                                            name: 'url',
                                            title: 'URL',
                                            type: 'string'
                                        },
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                            options: { hotspot: true },
                                            description: 'Image for vehicle models'
                                        },
                                        {
                                            name: 'type',
                                            title: 'Item Type',
                                            type: 'string',
                                            options: {
                                                list: [
                                                    { title: 'Vehicle Model', value: 'model' },
                                                    { title: 'Navigation Link', value: 'link' }
                                                ]
                                            },
                                            initialValue: 'link'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    preview: {
                        select: {
                            title: 'label',
                            subtitle: 'url'
                        }
                    }
                }
            ]
        }
    ]
}
