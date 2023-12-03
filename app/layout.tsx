import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next One',
  description: 'Generated by create next app',
}

export default function RootLayout({ 
    children, map, rules 
  }: {
  children: React.ReactNode,
  map: React.ReactNode,
  rules: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      
      </body>
    </html>
  )
}
