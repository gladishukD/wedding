import { Invite } from '@/app/types/invite'
import crypto from 'crypto'

const rawGuests: Invite[] = [
  { id: 1, names: ['Яна'] },
  { id: 2, names: ['Олена', 'Михайло'] },
  { id: 3, names: ['Світлана'] },
  { id: 4, names: ['Тарас', 'Марія', 'Марина', 'Данило'] },
  { id: 5, names: ['Коля', 'Аліна'] },
  { id: 6, names: ['Олександр', 'Іванна'] },
  { id: 7, names: ['Олександр'] },
  { id: 8, names: ['Віталій', 'Марія'] },
  { id: 9, names: ['Олександр'] },
  { id: 10, names: ['Іван', 'Євгенія'] },
  { id: 11, names: ['Владислав', 'Тетяна'] },
  { id: 12, names: ['Олександр', 'Ірина'] },
  { id: 13, names: ['Дмитро', 'Анна'] },
  { id: 14, names: ['Олександр', 'Наталія'] },
  { id: 15, names: ['Андрій', 'Альона'] },
  { id: 16, names: ['Андрій', 'Пальміра'] },
  { id: 17, names: ['Володимир', 'Людмила', 'Єлизавета'] },
  { id: 18, names: ['Андрій', 'Наталія'] },
  { id: 19, names: ['Іван', 'Наталія'] },
  { id: 20, names: ['Майя'] },
  { id: 21, names: ['Сергій', 'Олена'] },
  { id: 22, names: ['Іван', 'Дарія'] },
  { id: 23, names: ['Віталій', 'Аліна'] },
  { id: 24, names: ['Дмитро'] },
  { id: 25, names: ['Людмила', 'Володимир'] },
  { id: 26, names: ['Юлія'] },
  { id: 27, names: ['Михайло', 'Діана'] },
  { id: 28, names: ['Дмитро', 'Карина'] },
  { id: 29, names: ['Вероніка'] },
  { id: 30, names: ['Петро', "Мар'яна"] },
  { id: 31, names: ['Василь'] },
  { id: 32, names: ['Денис', 'Ірина'] },
  { id: 33, names: ['Катерина', 'Віталій'] },
  { id: 34, names: ['Томаш', 'Карина'] },
]

const generateInviteId = (id: number) => {
  return crypto
    .createHash('sha256')
    .update(id.toString())
    .digest('hex')
    .slice(0, 10)
}

export const guests = rawGuests.map(({ id, names }) => ({
  id: generateInviteId(id),
  names,
  link: `https://oleg-ta-olena.info/${generateInviteId(id)}`,
}))

export const getInviteById = (id: string) => {
  return guests.find((i) => i.id === id) || null
}
