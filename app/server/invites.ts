import { Invite } from '@/app/types/invite'

export const invites: Invite[] = [
  {
    id: 'asdasd123as',
    guests: ['Дмитро', 'Ольга'],
  },
  {
    id: 'asdasd123as1',
    guests: ['Ol'],
  },
]

export const getInviteById = (id: string) => {
  return invites.find((i) => i.id === id) || null
}
