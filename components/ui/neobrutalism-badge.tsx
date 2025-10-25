import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neobrutalismBadgeVariants = cva(
    "inline-flex items-center rounded-md border-2 border-black px-3 py-1 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "bg-yellow-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                secondary:
                    "bg-green-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                destructive:
                    "bg-red-500 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                outline:
                    "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                purple:
                    "bg-purple-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                blue:
                    "bg-blue-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface NeobrutalismBadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neobrutalismBadgeVariants> { }

function NeobrutalismBadge({ className, variant, ...props }: NeobrutalismBadgeProps) {
    return (
        <div className={cn(neobrutalismBadgeVariants({ variant }), className)} {...props} />
    )
}

export { NeobrutalismBadge, neobrutalismBadgeVariants }
