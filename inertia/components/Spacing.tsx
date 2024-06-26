import { cn } from "~/css/@/lib/utils";

export type SpacingProps = {
  size?: "sm" | "md" | "lg";
}

  export const Spacing = ({size = "md"}: SpacingProps) => {
    return <div className={cn({
      "h-8 lg:h-16": size === "sm",
      "h-16 lg:h-24": size === "md",
    })} />
  };