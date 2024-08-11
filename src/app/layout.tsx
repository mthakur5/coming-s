import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

import Head from 'next/head'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Haroth Group - Under Maintenance",
  description: ' HCS - Haroth cloud services, We are Introduce our New Frontier "coming soon" ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <body className={ `${inter.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      // {/* <body className={`${inter.className} bg-gray-100 min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100`} */}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>          
          <main className='main'>{children}</main>
        </ThemeProvider>         
      </body>
    </html>
  )
}
