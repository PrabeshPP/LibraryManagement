'use client'

import '../globals.css'
import NavBar from '@/Components/NavBar/NavBar'
import Head from 'next/head'

export const metadata = {
  icons:{
    icon:'/favicon.ico'
  },
  title: 'My Library',
  description: 'My Libray is library where you can find any book.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>My Library</title>
      </head>
      <body className='bg-[#fff0e5] font-serif   w-[100%] min-h-[100vh]'>
        <NavBar/>
        {children}</body>
    </html>
  )
}
