import '../globals.css'

export const metadata = {
    title: 'Login',
    description: 'Login page',
  }
  
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang='en'>
          <body className='w-[100%] min-h-[100vh]'>
          {children}</body>
        </html>
      
    )
  }
  