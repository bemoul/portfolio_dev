import { Badge } from "~/css/@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon";
import { AdonisIcon } from "./icons/AdonisIcon";
import { DockerIcon } from "./icons/DockerIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que je maîtrise
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
            <AdonisIcon size={42} />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">AdonisJS</h3>
          <p className="text-sm text-muted-foreground">Le framework que j'utilise principalement est AdonisJS. En résumé, il s'agit de la version NodeJS de Laravel.</p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
            <ReactIcon size={42} className="animate-spin" style={{animationDuration: "8s"}} />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">ReactJS</h3>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
        <div className="flex flex-col gap-2 flex-1">
            <DockerIcon size={42} />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Docker</h3>
          <p className="text-sm text-muted-foreground">Un incontournable. Je ne déploie aucune application en production sans lui.</p>
        </div>
        </div>

    </Section>
  );
};