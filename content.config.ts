import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        nav: z.object({
          phone: z.string(),
          ctaText: z.string(),
          links: z.array(z.object({
            label: z.string(),
            href: z.string()
          }))
        }),
        contact: z.object({
          phone: z.string(),
          email: z.string(),
          hours: z.string(),
          ctaText: z.string()
        })
      })
    })
  }
})
