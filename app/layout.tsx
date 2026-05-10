import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const allegretto = localFont({
  src: [
    {
      path: '../public/fonts/Allegretto_Script_Two_Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Allegretto_Script_Two_Regular.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-allegretto',
  display: 'swap',
})

const avenirNext = localFont({
  src: [
    {
      path: '../public/fonts/AvenirNextCyr-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextCyr-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-avenirNext',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Запрошення на наше свято',
  description:
    'Приєднуйтесь до нашого свята! Усі деталі події, локація та програма — на цій сторінці.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ua"
      className={`${allegretto.variable} ${avenirNext.variable} h-full font-avenirNext antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
