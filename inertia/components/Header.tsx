import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { buttonVariants } from "~/css/@/components/ui/button"
import { cn } from "~/css/@/lib/utils"

export const Header = () => {

  return (
    <header className="sticky top-0 py-4 font-['Geist-Regular']">
      <Section className="flex items-baseline">
        <div className="flex-1" />
        <ul className="flex items-center gap-4">
          <li>
            <a href="/blog" className="size-6 p-0 mr-1">
              Blog
            </a>
          </li>
          <li>

            <a href="https://github.com/bemoul" target="blank" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
              <GithubIcon size={25} className="text-foreground" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/selim-ramdani/" target="blank" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
              <LinkedinIcon size={25} className="text-foreground" />
            </a>
          </li>
        </ul>
      </Section>
    </header>
  )
}