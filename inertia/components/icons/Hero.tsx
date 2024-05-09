import { ComponentPropsWithoutRef } from "react"
import { Section } from "../Section"
import { cn } from "~/css/@/lib/utils"

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("bg-accent/30 border border-accent text-primary p-1 rounded-sm", className)} {...props} />
  )

}
export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Selim Ramdani</h2>
        <h3 className="text-3xl items-start gap-4">Développeur Web</h3>
        <p>I love created projects with <Code className="inline-flex items-center gap-1">AdonisJS</Code></p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/92147829?v=4"
          className="w-full h-auto max-w-xs border border-accent rounded-full shadow-lg max-md:w-40 object-cover"
          alt="selim's picture"
        />
      </div>
    </Section>
  )
}