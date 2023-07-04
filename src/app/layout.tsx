import './globals.css'
import '@fontsource/public-sans';

export const metadata = {
  title: 'My Wall',
  description: 'A place to share my thoughts and ideas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
