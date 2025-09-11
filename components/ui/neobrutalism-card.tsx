import * as React from "react"
import { cn } from "@/lib/utils"

const NeobrutalismCard = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]",
            className
        )}
        {...props}
    />
))
NeobrutalismCard.displayName = "NeobrutalismCard"

const NeobrutalismCardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 pb-4", className)}
        {...props}
    />
))
NeobrutalismCardHeader.displayName = "NeobrutalismCardHeader"

const NeobrutalismCardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-2xl font-bold leading-none tracking-tight", className)}
        {...props}
    />
))
NeobrutalismCardTitle.displayName = "NeobrutalismCardTitle"

const NeobrutalismCardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-gray-600 font-medium", className)}
        {...props}
    />
))
NeobrutalismCardDescription.displayName = "NeobrutalismCardDescription"

const NeobrutalismCardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("pt-0", className)} {...props} />
))
NeobrutalismCardContent.displayName = "NeobrutalismCardContent"

const NeobrutalismCardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center pt-4", className)}
        {...props}
    />
))
NeobrutalismCardFooter.displayName = "NeobrutalismCardFooter"

export {
    NeobrutalismCard,
    NeobrutalismCardHeader,
    NeobrutalismCardFooter,
    NeobrutalismCardTitle,
    NeobrutalismCardDescription,
    NeobrutalismCardContent,
}
