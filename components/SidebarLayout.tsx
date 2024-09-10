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
import Link from 'next/link'
import { ReactNode } from 'react'

interface SidebarLayoutProps {
  children: ReactNode
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64  bg-background text-white border-r-2 border-neutralGray">
        <div className="flex h-full flex-col">
          <Link
            href="/"
            className="flex h-20 items-center justify-start px-10 !no-underline"
          >
            <Logo />
          </Link>
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-0">
              <li>
                <Link
                  href="/dashboard"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconLayoutDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/analytics"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconAlignBoxBottomCenter />
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconBriefcase />
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconCash />
                  Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconAlertCircle />
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/payments"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconWallet />
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconUsers />
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="flex w-full justify-start gap-2 text-white btn btn-ghost-dark"
                >
                  <IconSettings />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex-1 bg-background">
        <main className="container mx-auto px-4 py-4 bg-background min-h-screen ">
          {children}
        </main>
      </div>
    </div>
  )
}

export default SidebarLayout
