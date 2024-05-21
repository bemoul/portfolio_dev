import { Header } from "~/components/Header"
import { DashboardSidebar } from "~/components/dashboard_sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      {/* Dashboard Sidebar */}
      <DashboardSidebar />
      {/* Dashboard Nav */}
      <div className="flex-1 p-4 overflow-auto">
        <Header />
        {children}
      </div>

    </div>
  )
}