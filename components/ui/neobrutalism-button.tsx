import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"

const neobrutalismButtonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-bold transition-all duration-150 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95",
    {
        variants: {
            variant: {
                default:
                    "text-black bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]",
                destructive:
                    "text-white bg-red-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]",
                outline:
                    "text-black bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]",
                secondary:
                    "text-black bg-green-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]",
                ghost:
                    "text-black bg-transparent border-4 border-transparent hover:bg-gray-100",
                link:
                    "text-black bg-transparent border-4 border-transparent underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-6 py-3",
                sm: "h-10 px-4 py-2 text-xs",
                lg: "h-14 px-8 py-4 text-base",
                icon: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

export interface NeobrutalismButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neobrutalismButtonVariants> {
    asChild?: boolean
}

const NeobrutalismButton = React.forwardRef<HTMLButtonElement, NeobrutalismButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(neobrutalismButtonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
NeobrutalismButton.displayName = "NeobrutalismButton"

export { NeobrutalismButton, neobrutalismButtonVariants }
