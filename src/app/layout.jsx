import './globals.css'
import { CustomCursor } from '../components/CustomCursor'
import { Navbar } from '../components/Navbar'

export const metadata = {
  title: 'Karthikeya Portfolio',
  description: 'Cybernetic Spider Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-spider-black)] min-h-screen cursor-none">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
