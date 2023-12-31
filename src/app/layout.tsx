import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import getCurrentUser from './actions/getCurrentUser'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '중고장수 맘대로',
  description: '엿으로 바꿔 먹지 말고 돈으로 바꿔요',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar currentUser={currentUser} />
        {children}
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4c7e00829cfaf799b6199b24d27d4802&libraries=services,clusterer&autoload=false"
        />
      </body>
    </html>
  )
}
