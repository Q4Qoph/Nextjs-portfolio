import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

import Sidenav from '@/components/sidenav'
import { Providers } from './provider'

export const metadata: Metadata = {
  title: 'Fredie Nyandiek | Portfolio',
  description: 'Personal portfolio of Fredie Nyandiek - Software Developer and Creative Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <Providers>
          <div className="min-h-screen">
            <Sidenav />
            <main className="relative">
              {children}
            </main>
          </div>
        </Providers>
      </body> 
    </html>
  )
}
