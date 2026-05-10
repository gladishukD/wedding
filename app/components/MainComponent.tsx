import { cn, Typography } from '@/app/components/Typography'
import { FC } from 'react'
import { Guest, Invite } from '@/app/types/invite'

interface Props {
  invite?: Guest
}
export const MainComponent: FC<Props> = ({ invite }) => {
  const formatGuestNames = (names: string[]) => {
    if (names.length === 1) {
      return names[0]
    }

    if (names.length === 2) {
      return names.join(' та ')
    }

    if (names.length === 3) {
      return `${names[0]}, ${names[1]} та ${names[2]}`
    }

    return names.join(', ')
  }

  return (
    <main className="flex flex-col items-center lg:pt-[69px] text-center pt-18 lg:pb-[140px] pb-[97px] px-4 lg:px-6 overflow-x-hidden">
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Typography variant="primary">Любов -</Typography>

          <Typography variant="secondary" className="mt-4 lg:mt-3">
            це коли ми разом створюємо щось <br /> більше, ніж просто «я» і
            «ти».
          </Typography>
        </div>

        <img
          src="/photo.webp"
          alt="Фото"
          className="w-[309px] h-[451px] lg:w-[429px] lg:h-[612px] mt-7 lg:mt-2.5 object-contain"
        />
      </section>

      {invite && (
        <section className="flex flex-col w-full items-center mt-[42px] lg:mt-1.5 relative">
          <img
            src="/flowers1.png"
            alt="Фото"
            className="absolute top-[164px] lg:top-[92px] -right-4 lg:-right-6 w-[213px] h-[246px] lg:w-[371px] lg:h-[447px]  xl:w-[471px] xl:h-[547px]"
          />
          <img
            src="/flowers2.png"
            alt="Фото"
            className="absolute -bottom-[127px] lg:-bottom-[320px] -left-4 lg:-left-6 w-[244px] h-[322px] lg:w-[446px] lg:h-[611px] xl:w-[546px] xl:h-[711px]"
          />
          <div className="flex flex-col items-center">
            <Typography variant="primary" className="my-2">
              Впізнали?
            </Typography>
            <Typography variant="secondary" className="mt-1 lg:mt-0">
              Час минув непомітно <br /> і у цих двох милих діток скоро весілля!
              <br /> Так-так, ми самі в шоці!
            </Typography>
          </div>

          <div className="mt-[155px] lg:mt-[92px] border lg:border-2 text-center border-solid border-tertiary bg-quaternary px-4 lg:px-6 w-full py-[140px] lg:py-[120px] max-w-[396px] lg:max-w-[600px]">
            <Typography variant="secondary">Запрошуємо Вас</Typography>
            <Typography
              variant="primary"
              className="text-2xl lg:text-[64px] my-2"
            >
              {formatGuestNames(invite.names)}
            </Typography>
            <Typography variant="secondary">
              розділити з нами радість <br /> цієї неповторної події
            </Typography>

            <div className="mt-[60px] mb-[52px] lg:my-[98px]">
              <Typography variant="secondary">Чекаємо Вас</Typography>
              <Typography variant="primary" className="text-2xl lg:text-[64px]">
                11.07.2026 о 13:30
              </Typography>
            </div>

            <Typography
              variant="secondary"
              className="max-w-[401px] whitespace-pre-line lg:whitespace-normal mx-auto"
            >
              {`Ми сподіваємося, що Ви 
            розділите з нами цей
             чудовий день і зробите його 
             ще особливішим.`}
            </Typography>
          </div>
        </section>
      )}

      <section
        className={cn(
          'flex flex-col text-center items-center relative w-full max-w-[1160px]',
          invite ? 'mt-[296px] lg:mt-[128px]' : 'mt-[150px]',
        )}
      >
        <Typography variant="primary">Локація:</Typography>

        <Typography variant="secondary" className="mt-2">
          “ROYAL REST” <br /> Хмельницька обл, <br /> с. Судилків, <br /> вул.
          Білокриницька 4-к
        </Typography>

        <img
          src="/restoran.webp"
          alt="Фото"
          className="w-[366px] h-[287px] lg:w-[572px] lg:h-[446px] mt-[50px] lg:mt-[72px] z-[2] object-contain"
        />

        <a
          href="https://www.google.com/maps/place/Royal+Rest/@50.1463208,27.1332408,17z/data=!3m1!4b1!4m9!3m8!1s0x472e89e77d3a107d:0x8fa21c3eda19ea39!5m2!4m1!1i2!8m2!3d50.1463208!4d27.1332408!16s%2Fg%2F11h88147mq!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#322922] z-[2] text-xs transition-all duration-300 ease-in-out hover:opacity-80 mt-[47px] lg:mt-[60px] w-[190px] lg:w-[350px] underline hover:no-underline lg:text-[24px] font-normal text-quaternary h-[30px] lg:h-[50px] flex items-center justify-center"
        >
          Відкрити карту
        </a>

        <img
          src="/leaf.png"
          alt="Фото"
          className="absolute lg:top-0 -rotate-[18deg] lg:rotate-0 -top-[160px] -right-[58px] lg:right-[94px] w-[428px] h-[472px] lg:w-[334px] lg:h-[491px]"
        />
        <img
          src="/leaf2.png"
          alt="Фото"
          className="absolute hidden lg:block top-[120px] -left-[56px] w-[738px] h-[864px]"
        />
        <img
          src="/leaf2-mobile.png"
          alt="Фото"
          className="absolute block lg:hidden -top-[126px] -left-4 w-[360px] h-[781px]"
        />
      </section>

      <section className="mt-[151px] lg:mt-[200px] relative flex flex-col items-center w-full">
        <img
          src="/flowers1.png"
          alt="Фото"
          className="absolute -top-[74px] -right-[132px] lg:-top-[122px] lg:-right-6 z-[2] w-[213px] h-[252px] lg:w-[371px] lg:h-[447px] "
        />
        <div className="flex flex-col items-center max-w-[1156px] w-full relative">
          <div className="flex flex-col items-center border lg:border-2 text-center border-solid border-tertiary bg-quaternary px-4 lg:px-6 w-full py-[88px] lg:py-[114px] max-w-[396px] lg:max-w-[600px]">
            <Typography variant="primary">Деталі:</Typography>

            <div className="flex flex-col items-center mt-2.5 lg:mt-[30px]">
              <img
                src="/file.png"
                className="w-[29px] h-[44px] lg:w-[39px] lg:h-[58px] object-contain"
                alt="Файл"
              />
              <Typography variant="secondary" className=" mt-2.5 lg:mt-[30px]">
                Будь ласка, підтвердіть Вашу <br /> присутність на нашому святі{' '}
                <br /> до 1 червня.
              </Typography>
            </div>

            <div className="flex flex-col items-center mt-[30px] lg:mt-[60px] w-full max-w-[450px]">
              <img
                src="/eat.png"
                className=" h-[43px] w-[150px] lg:h-[61px] object-contain"
                alt="Їжа"
              />

              <Typography
                variant="secondary"
                className="mt-2.5 lg:mt-[30px] whitespace-pre-line lg:whitespace-normal"
              >
                {`Приємним компліментом для нас 
                буде, якщо замість квітів Ви
                вирішите подарувати нам 
                пляшечку алкоголю для нашого 
                сімейного бару чи корм для тваринок.`}
              </Typography>
            </div>
          </div>

          <img
            src="/leaf3.png"
            alt="Фото"
            className="absolute -bottom-[58px] lg:-bottom-[140px] -left-[190px] lg:left-0 w-[262px] h-[324px] lg:w-[313px] lg:h-[501px]"
          />
        </div>
      </section>
    </main>
  )
}
