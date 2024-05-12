import { ComponentPropsWithoutRef } from "react"
import { cn } from "~/css/@/lib/utils"

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("bg-accent/30 border border-accent text-primary p-1 rounded-sm", className)} {...props} />
  )
}