import { PropsWithChildren } from "react"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { buttonVariants } from "~/css/@/components/ui/button"
import { cn } from "~/css/@/lib/utils"

export const Header = (props: PropsWithChildren) => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-4xl font-bold">Selim Ramdani</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-4">
          <a href="https://github.com/bemoul" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
            <GithubIcon size={25} className="text-foreground" />
          </a>
          <a href="https://www.linkedin.com/in/selim-ramdani/" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
            <LinkedinIcon size={25} className="text-foreground" />
          </a>
        </ul>
      </Section>
    </header>
  )
}