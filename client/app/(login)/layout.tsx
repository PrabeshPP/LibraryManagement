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
        <body className='bg-white w-[100%] min-h-[100vh]'>
          {children}</body>
      
    )
  }
  