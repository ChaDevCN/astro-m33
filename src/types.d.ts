import type { HTMLAttributes } from 'astro/types'

export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  text?: string
  icon?: string
  classes?: Record<string, string>
  type?: 'button' | 'submit' | 'reset'
}
declare const __DOMAIN__: string
