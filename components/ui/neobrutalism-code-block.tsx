import * as React from "react"
import { cn } from "@/lib/utils"

interface NeobrutalismCodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    children: React.ReactNode
    title?: string
}

const NeobrutalismCodeBlock = React.forwardRef<HTMLPreElement, NeobrutalismCodeBlockProps>(
    ({ className, children, title, ...props }, ref) => {
        return (
            <div className="my-6">
                {title && (
                    <div className="bg-gray-800 text-white px-4 py-2 text-sm font-bold border-2 border-black">
                        {title}
                    </div>
                )}
                <pre
                    ref={ref}
                    className={cn(
                        "bg-gray-900 text-green-400 p-6 overflow-x-auto text-sm font-mono border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
                        className
                    )}
                    {...props}
                >
                    <code>{children}</code>
                </pre>
            </div>
        )
    }
)
NeobrutalismCodeBlock.displayName = "NeobrutalismCodeBlock"

interface NeobrutalismInlineCodeProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const NeobrutalismInlineCode = React.forwardRef<HTMLElement, NeobrutalismInlineCodeProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <code
                ref={ref}
                className={cn(
                    "bg-yellow-200 text-black px-2 py-1 text-sm font-mono border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-none",
                    className
                )}
                {...props}
            >
                {children}
            </code>
        )
    }
)
NeobrutalismInlineCode.displayName = "NeobrutalismInlineCode"

export { NeobrutalismCodeBlock, NeobrutalismInlineCode }
