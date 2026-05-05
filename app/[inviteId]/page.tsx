import { notFound } from 'next/navigation'
import { getInviteById } from '@/app/server/invites'
import Image from 'next/image'
import { Typography } from '@/app/components/Typography'
import { Fragment } from 'react'

type Props = {
  params: Promise<{ inviteId: string }>
}

export default async function Page({ params }: Props) {
  const { inviteId } = await params

  const invite = getInviteById(inviteId)

  if (!invite) {
    notFound()
  }

  return (
    <main className="flex flex-col items-center sm:pt-[69px] text-center pt-6 sm:pb-[140px] pb-[97px] px-6">
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Typography variant="primary">Любов -</Typography>
          <Typography variant="secondary" className="mt-3">
            це коли ми разом створюємо щось <br /> більше, ніж просто «я» і
            «ти».
          </Typography>
        </div>

        <img
          src="/photo.webp"
          alt="Фото"
          className="w-[429px] h-[612px] mt-2.5"
        />
      </section>

      <section className="flex flex-col w-full items-center mt-1.5 relative">
        <img
          src="/flowers1.png"
          alt="Фото"
          className="absolute top-[92px] -right-6 w-[471px] h-[547px]"
        />
        <img
          src="/flowers2.png"
          alt="Фото"
          className="absolute -bottom-[320px] -left-6 w-[546px] h-[711px]"
        />
        <div className="flex flex-col items-center">
          <Typography variant="primary" className="my-2">
            Впізнали?
          </Typography>
          <Typography variant="secondary">
            Час минув непомітно <br /> і у цих двох милих діток скоро весілля!
            <br /> Так-так, ми самі в шоці!
          </Typography>
        </div>

        <div className="mt-[92px] border-2 text-center border-solid border-tertiary bg-quaternary px-6 w-full py-[120px] max-w-[600px]">
          <Typography variant="secondary">Запрошуємо Вас</Typography>
          <Typography variant="primary" className="break-all my-2">
            {invite.guests.map((guest: string, index: number) => (
              <Fragment key={guest}>
                {index > 0 && ' та '}
                {guest}
              </Fragment>
            ))}
          </Typography>
          <Typography variant="secondary">
            розділити з нами радість <br /> цієї неповторної події
          </Typography>

          <div className="my-[98px]">
            <Typography variant="secondary">Запрошуємо Вас</Typography>
            <Typography variant="primary">11.07.2026 о 13:30</Typography>
          </div>

          <Typography variant="secondary">
            Ми сподіваємося, що Ви розділите <br /> з нами цей чудовий день{' '}
            <br /> і зробите його ще особливішим.
          </Typography>
        </div>
      </section>

      <section className="flex flex-col text-center items-center mt-[128px] relative w-full max-w-[1160px]">
        <Typography variant="primary">Локація:</Typography>

        <Typography variant="secondary" className="mt-2">
          “ROYAL REST” <br /> Хмельницька обл, <br /> с. Судилків, <br /> вул.
          Білокриницька 4-к
        </Typography>

        <img
          src="/restoran.webp"
          alt="Фото"
          className="w-[572px] h-[446px] mt-[72px] z-[2]"
        />

        <a
          href="https://www.google.com/maps/place/Royal+Rest/@50.1463208,27.1332408,17z/data=!3m1!4b1!4m9!3m8!1s0x472e89e77d3a107d:0x8fa21c3eda19ea39!5m2!4m1!1i2!8m2!3d50.1463208!4d27.1332408!16s%2Fg%2F11h88147mq!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#322922] z-[2] text-xs transition-all duration-300 ease-in-out hover:opacity-80 mt-[60px] w-[190px] sm:w-[350px] underline hover:no-underline sm:text-[24px] font-normal text-quaternary h-[30px] sm:h-[50px] flex items-center justify-center"
        >
          Відкрити карту
        </a>

        <img
          src="/leaf.png"
          alt="Фото"
          className="absolute top-0 right-[94px] w-[334px] h-[491px]"
        />
        <img
          src="/leaf2.png"
          alt="Фото"
          className="absolute top-[120px] -left-[56px] w-[738px] h-[864px]"
        />
      </section>

      <section className="mt-[200px] relative flex flex-col items-center w-full">
        <img
          src="/flowers1.png"
          alt="Фото"
          className="absolute -top-[122px] -right-6 z-[2] w-[471px] h-[547px]"
        />
        <div className="flex flex-col items-center max-w-[1156px] w-full relative">
          <div className="flex flex-col items-center  border-2 text-center border-solid border-tertiary bg-quaternary px-6 w-full py-[114px] max-w-[600px]">
            <Typography variant="primary">Деталі:</Typography>

            <div className="flex flex-col items-center mt-[30px]">
              <Image src="/file.png" width={39} height={58} alt="Файл" />
              <Typography variant="secondary" className="mt-[30px]">
                Будь ласка, підтвердіть Вашу <br /> присутність на нашому святі{' '}
                <br /> до 1 червня.
              </Typography>
            </div>

            <div className="flex flex-col items-center mt-[60px] w-full max-w-[450px]">
              <Image src="/eat.png" width={150} height={61} alt="Їжа" />

              <Typography variant="secondary" className="mt-[30px]">
                Приємним компліментом для нас буде, якщо замість квітів Ви
                вирішите подарувати нам пляшечку алкоголю для нашого сімейного
                бару чи корм для тваринок.
              </Typography>
            </div>
          </div>

          <img
            src="/leaf3.png"
            alt="Фото"
            className="absolute -bottom-[140px] left-0 w-[313px] h-[501px]"
          />
        </div>
      </section>
    </main>
  )
}
