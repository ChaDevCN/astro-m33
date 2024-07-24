import type { OpenGraphMedia } from '@astrolib/seo'
export interface MeteDataProps {
  metadata: {
    title: string
    description: string
    keywords?: string
    images?: OpenGraphMedia[] | undefined
  }
}
