import Header from './Header'
import Sidebar from './sidebar'

export interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className='flex h-screen w-full'>
      <Sidebar />
      <div className='grow'>
        <Header />
        {children}
      </div>
    </main>
  )
}
