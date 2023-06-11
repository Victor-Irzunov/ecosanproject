import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Разработка документации и проектов в сфере промышленной экологии и санитарии',
  description: 'Получение разрешений: атмосфера, отходы, вода. Сопровождение проекта санитарно-защитной зоны, оценка риска здоровью, паспортизация вентиляции и газоочистки.',
}

export default function RootLayout({ children }) {


  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="android-chrome-192x192" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
