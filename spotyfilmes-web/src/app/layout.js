import { AuthProvider } from '@/context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'SpotyFilmes',
    description: 'App de gestão de filmes',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    {children}
                    <Toaster position="bottom-right" />
                </AuthProvider>
            </body>
        </html>
    )
}
