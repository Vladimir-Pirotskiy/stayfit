import Logo from '@/components/Logo'
import {
  IconAlertCircle,
  IconAlignBoxBottomCenter,
  IconBriefcase,
  IconCash,
  IconLayoutDashboard,
  IconSettings,
  IconUsers,
  IconWallet,
} from '@tabler/icons-react'
import { ReactNode } from 'react'

interface SidebarLayoutProps {
  children: ReactNode
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64  bg-background text-white border-r-2 border-neutralGray">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-start px-10">
            <Logo />
          </div>
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-0">
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconLayoutDashboard />
                  Dashboard
                </div>
              </li>
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconAlignBoxBottomCenter />
                  Analytics
                </div>
              </li>
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconBriefcase />
                  Business
                </div>
              </li>
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconCash />
                  Refunds
                </div>
              </li>
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconAlertCircle />
                  Reports
                </div>
              </li>
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconWallet />
                  Payments
                </div>
              </li>
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconUsers />
                  Users
                </div>
              </li>
              <li>
                <div className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark">
                  <IconSettings />
                  Settings
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex-1 bg-gray-100">
        <main className="container mx-auto px-4 py-4 bg-background min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}

export default SidebarLayout
