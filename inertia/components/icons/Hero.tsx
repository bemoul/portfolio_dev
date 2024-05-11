import { ComponentPropsWithoutRef } from "react"
import { Section } from "../Section"
import { cn } from "~/css/@/lib/utils"

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("bg-accent/30 border border-accent text-primary p-1 rounded-sm", className)} {...props} />
  )

}
export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Selim Ramdani</h2>
        <h3 className="text-3xl items-start gap-4">Développeur Web</h3>
        <p>Salut tout le monde ! Moi, c'est Selim, le Django Reinhardt du développement web, âgé de 26 ans, avec un sens de l'humour aussi affûté qu'un code bien écrit. Prêt à rendre vos projets aussi plaisants que cette blague !</p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://i.ibb.co/WfgzyT6/hero.jpg"
          className="w-full h-auto max-w-xs border border-accent rounded-full shadow-lg max-md:w-40 object-cover"
          alt="selim's picture"
        />
      </div>
    </Section>
  )
}