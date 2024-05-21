import { Head } from "@inertiajs/react";
import DashboardLayout from "../dashboard_display/dashboard_layout";

const ProjectsIndex = () => {
  return (
    <DashboardLayout>
      <Head title={"Admin : Gestion des projets"} />
      <h1>Liste de mes projets :</h1>
    </DashboardLayout>
  );
};

export default ProjectsIndex;
