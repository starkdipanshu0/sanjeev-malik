import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * One button system for the whole site.
 *
 * Shape is a pill (`rounded-full`) everywhere — before this the site used six
 * different radii on buttons. Admin tooling opts out with an explicit
 * `rounded-md` override.
 *
 * Note on `default`: primary-foreground (near-white) on primary (orange) is
 * only 2.73:1, which fails AA for text. Primary buttons therefore use
 * `text-on-primary-strong` (6.1:1), matching the ::selection rule in
 * globals.css. Orange stays a fill colour, never a text colour on light.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-[background-color,border-color,color,box-shadow,transform] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 aria-invalid:border-destructive motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary-strong shadow-key hover:bg-primary/90 active:translate-y-px active:shadow-key-pressed motion-reduce:active:translate-y-0",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-emphasis",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        contrast:
          "bg-foreground text-background hover:bg-foreground/85",
        ghost: "text-foreground hover:bg-primary/5 hover:text-emphasis",
        link: "text-emphasis underline-offset-4 hover:underline px-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20",
        onDark:
          "bg-background text-foreground hover:bg-background/90",
      },
      size: {
        sm: "h-9 px-5 has-[>svg]:px-4",
        default: "h-11 px-6 has-[>svg]:px-5",
        lg: "h-12 px-8 text-base has-[>svg]:px-6",
        xl: "h-14 px-10 text-base has-[>svg]:px-8",
        icon: "size-10",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
