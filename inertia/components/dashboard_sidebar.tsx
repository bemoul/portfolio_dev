import { Link, router } from "@inertiajs/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { HomeIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { Folder, FolderCog, LogOutIcon, SettingsIcon } from "lucide-react";
import { Button } from "~/css/@/components/ui/button";

export const DashboardSidebar = () => {
  const logout = async () => {
    router.post('/logout')
  }
  return (
    <div className="lg:block hidden border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={clsx("text-lg flex items-center gap-2 rounded-lg px-3 py-2 transition-all delay-100 hover:bg-neutral-800", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 transition-all hover:text-gray-50 dark:bg-gray-100 text-gray-50 dark:hover:text-gray-50": ""
              })}
              href="/dashboard"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1">
                <SettingsIcon className="h-4 w-4" />
              </div>
              Tableau de bord
            </Link>
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-3 transition-all delay-100 hover:bg-neutral-800", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": ""
              })}
              href="/dashboard/projects"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1">
                <FolderCog className="h-3 w-3" />
              </div>
              Projets
            </Link>
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-3 transition-all delay-100 hover:bg-neutral-800", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": ""
              })}
              href="/dashboard/articles"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1">
                <Folder className="h-3 w-3" />
              </div>
              Articles
            </Link>
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-3 transition-all delay-100 hover:bg-neutral-800", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": ""
              })}
              href="/dashboard/works"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1">
                <Folder className="h-3 w-3" />
              </div>
              Expériences professionnelles
            </Link>
            <Separator className="my-3" />
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 transition-all delay-100 hover:bg-neutral-800", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": ""
              })}
              href="/"
              id="onboarding"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1">
                <HomeIcon className="h-3 w-3" />
              </div>
              Retour au portfolio
            </Link>
            <Button
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 bg-red-700", {
                "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-white  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": ""
              })}
              id="onboarding"
              onClick={logout}
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <LogOutIcon className="h-3 w-3" />
              </div>
              Log out
            </Button>
          </nav>
        </div>
      </div>
    </div>

  )
}