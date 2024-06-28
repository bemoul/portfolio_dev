import { Section } from "./Section";
import { Card } from "~/css/@/components/ui/card";
import { ArrowUpRight, Clapperboard, Code, LucideIcon, Workflow } from "lucide-react";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 font-['Geist-Regular']">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projets</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECT.map((project, index) => (
              <SideProject
                key={index}
                {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Travail</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contactez-moi</p>
          <ContactCard name="@selimdev" image="https://avatars.githubusercontent.com/u/92147829?v=4" mediumImage="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png" description="N'hésitez pas..." linkedInUrl="https://www.linkedin.com/in/selim-ramdani/" />
        </Card>
      </div>
    </Section>
  )
}

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  linkedInUrl: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
        <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
      </div>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.name}</p>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <a href={props.linkedInUrl} target="blank">
        <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
      </a>
    </Card>
  )
};

const SIDE_PROJECT: SideProjectProps[] = [
  {
    Logo: Workflow,
    title: "Immo-Tube",
    description: "Logiciel conçu pour les agences immobilières afin d'améliorer leur visibilité sur les réseaux sociaux.",
    url: "https://immo-vitrine.com/passerelle-youtube.html",
    image: "https://i.ibb.co/g91Kn48/tube.webpg"
  },
  {
    Logo: Code,
    title: "selim-ramdani.com",
    description: "Projet final - Openclassrooms : Portfolio",
    url: "/"
  },
  {
    Logo: Clapperboard,
    title: "Pimp My Movie",
    description: "Projet final - The Hacking Project : Le repère des cinéphiles.",
    url: "https://github.com/bemoul/Pimp-My-Movie"
  }

]
type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  image?: string;
};
const SideProject = (props: { Logo: LucideIcon, title: string, description: string, url: string, image?: string }) => {
  return (
    <a href={props.url} target="blank" className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      {props.image ? (
        <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />
      ) : (
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <props.Logo size={16} />
        </span>
      )}
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </a>
  )
};

const WORKS: WorkProps[] = [
  {
    image: "https://i.ibb.co/hK2dbBm/mediapole-logo.png",
    title: "Mediapole",
    role: "Développeur Web",
    date: "2023 - maintenant",
    url: "https://immo-vitrine.com/"
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean
};
const Work = (props: { image: string, title: string, role: string, date: string, url: string }) => {
  return (
    <a href={props.url} target="blank" className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </a>
  )
};
