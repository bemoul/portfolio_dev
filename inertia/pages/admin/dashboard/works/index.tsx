import { Head } from "@inertiajs/react";
import DashboardLayout from "../dashboard_display/dashboard_layout";
import { InferPageProps } from "@adonisjs/inertia/types";
import WorksController from "#controllers/works_controller";

export default function WorksIndex(props: InferPageProps<WorksController, 'index'>) {

  return (
    <DashboardLayout>
      <Head title={"Admin : Expériences pro"} />
      <h1>Mes expériences professionnelles :</h1>
    </DashboardLayout>
  );
};