import { guests } from '@/app/server/invites'

export interface Invite {
  id: number
  names: string[]
}
export type Guest = {
  id: string
  names: string[]
  link: string
}
