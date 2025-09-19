"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocsContentProps {
    children: React.ReactNode
}

export function DocsContent({ children }: DocsContentProps) {
    return (
        <div className="w-full max-w-none space-y-6 sm:space-y-8">
            {children}
        </div>
    )
}

// Custom components for consistent styling
export const CodeBlock = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        let text = ''

        if (typeof children === 'string') {
            text = children
        } else if (React.isValidElement(children) && children.props) {
            const props = children.props as { children?: React.ReactNode }
            if (props.children) {
                text = String(props.children)
            } else {
                text = String(children)
            }
        } else {
            text = String(children)
        }

        // Clean up JSX artifacts and HTML entities
        text = text
            .replace(/\{\'\\n\'\}/g, '\n')
            .replace(/\{\"\\n\"\}/g, '\n')
            .replace(/\\n/g, '\n')
            .replace(/\{.*?\}/g, '')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .trim()

        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
            // Fallback for older browsers
            const textArea = document.createElement('textarea')
            textArea.value = text
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="relative group my-6">
            <div className="absolute top-2 right-2 z-10">
                <Button
                    onClick={handleCopy}
                    size="sm"
                    variant="ghost"
                    className={`h-7 w-7 p-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer ${copied ? "text-green-400" : ""
                        }`}
                    title={copied ? "Copied!" : "Copy code"}
                    type="button"
                    aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
                >
                    {copied ? (
                        <Check className="h-3.5 w-3.5" />
                    ) : (
                        <Copy className="h-3.5 w-3.5" />
                    )}
                </Button>
            </div>
            <pre className={`bg-gray-900 text-green-400 p-3 sm:p-4 md:p-6 overflow-x-auto text-xs sm:text-sm font-mono border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none w-full ${className || ''}`}>
                <code className="block w-full">{children}</code>
            </pre>
        </div>
    )
}

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
    <code className="bg-yellow-200 text-black px-2 py-1 text-sm font-mono border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-none">
        {children}
    </code>
)

export const DocsLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-blue-600 hover:text-blue-800 hover:underline font-bold transition-colors border-b-2 border-transparent hover:border-blue-600"
    >
        {children}
    </Link>
)

export const DocsHeading = ({ level, children }: { level: 1 | 2 | 3 | 4; children: React.ReactNode }) => {
    const baseClasses = "font-black text-black tracking-tight"
    const levelClasses = {
        1: "text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 mt-8 sm:mt-12 border-b-2 sm:border-b-4 border-black pb-2 sm:pb-4",
        2: "text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 mt-6 sm:mt-10 border-b-2 border-black pb-2",
        3: "text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 mt-4 sm:mt-8",
        4: "text-base sm:text-lg md:text-xl mb-2 sm:mb-3 mt-3 sm:mt-6"
    }

    const className = `${baseClasses} ${levelClasses[level]}`

    switch (level) {
        case 1:
            return <h1 className={className}>{children}</h1>
        case 2:
            return <h2 className={className}>{children}</h2>
        case 3:
            return <h3 className={className}>{children}</h3>
        case 4:
            return <h4 className={className}>{children}</h4>
        default:
            return <h1 className={className}>{children}</h1>
    }
}

export const DocsParagraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-800 leading-6 sm:leading-7 mb-4 sm:mb-6 text-base sm:text-lg font-medium">
        {children}
    </p>
)

export const DocsList = ({ children, ordered = false }: { children: React.ReactNode; ordered?: boolean }) => {
    const Tag = ordered ? 'ol' : 'ul'
    const classes = ordered
        ? "list-decimal list-inside space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-gray-800 font-medium text-base sm:text-lg"
        : "list-disc list-inside space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-gray-800 font-medium text-base sm:text-lg"

    return (
        <Tag className={classes}>
            {children}
        </Tag>
    )
}

export const DocsListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="leading-6 sm:leading-7">
        {children}
    </li>
)

export const DocsStrong = ({ children }: { children: React.ReactNode }) => (
    <strong className="font-black text-black bg-yellow-200 px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        {children}
    </strong>
)
