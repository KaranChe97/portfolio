import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karan M - Lead Software Developer Frontend',
  description: 'Personal portfolio of Karan M, a Lead Software Developer specializing in Frontend development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-notion-bg text-notion-text`}>{children}</body>
    </html>
  )
}

