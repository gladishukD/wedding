import { Typography } from '@/app/components/Typography'

export const NotFound = () => {
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

      <section>
        <Typography
          variant="secondary"
          className="mt-10 lg:mt-20 text-2xl lg:text-[64px]"
        >
          Запрошення не знайдено. Звяжіться з нами
        </Typography>
      </section>
    </main>
  )
}
