import type { Metadata } from 'next'
import './globals.css'
import { ManropeRegular } from '@/fonts/Fonts'
import Providers from '@/utils/Providers'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

export const metadata: Metadata = {
  title: 'Nusa Market Coming Soon',
  description: 'Your Marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <Providers>
      <body className={ManropeRegular.className}>{children}</body>
    </Providers>
    </html>
  )
}
