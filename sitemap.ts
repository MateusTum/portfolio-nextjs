import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mateustum.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://mateustum.com/en',
          pt: 'https://mateustum.com/pt',
        },
      },
    },
    {
      url: 'https://mateustum.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: 'https://mateustum.com/en/projects',
          pt: 'https://mateustum.com/pt/projetos',
        },
      },
    },
  ]
}