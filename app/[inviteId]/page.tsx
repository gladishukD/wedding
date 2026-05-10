import { notFound } from 'next/navigation'
import { getInviteById } from '@/app/server/invites'
import Image from 'next/image'
import { Typography } from '@/app/components/Typography'
import { Fragment } from 'react'
import { NotFound } from '@/app/components/NotFound'
import { MainComponent } from '@/app/components/MainComponent'

type Props = {
  params: Promise<{ inviteId: string }>
}

export default async function Page({ params }: Props) {
  const { inviteId } = await params

  const invite = getInviteById(inviteId)

  if (!invite) {
    return <NotFound />
  }

  return <MainComponent invite={invite} />
}
