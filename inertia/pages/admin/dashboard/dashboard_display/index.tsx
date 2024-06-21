import { Head } from "@inertiajs/react";
import DashboardLayout from "./dashboard_layout";
export default function Dashboard() {

  return (
    <>
      <Head title="Admin : Tableau de bord" />
      <DashboardLayout children />
    </>
  )
}