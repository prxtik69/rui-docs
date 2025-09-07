import React from "react"
import Link from "next/link"

interface DocsContentProps {
    children: React.ReactNode
}

export function DocsContent({ children }: DocsContentProps) {
    return (
        <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
        </div>
    )
}

// Custom components for consistent styling
export const CodeBlock = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <pre className={`bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4 overflow-x-auto text-sm font-mono ${className || ''}`}>
        <code className="text-slate-800 dark:text-slate-200">{children}</code>
    </pre>
)

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
    <code className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-sm font-mono">
        {children}
    </code>
)

export const DocsLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium transition-colors"
    >
        {children}
    </Link>
)

export const DocsHeading = ({ level, children }: { level: 1 | 2 | 3 | 4; children: React.ReactNode }) => {
    const baseClasses = "font-semibold text-slate-900 dark:text-slate-100 tracking-tight"
    const levelClasses = {
        1: "text-3xl mb-6 mt-8 border-b border-slate-200 dark:border-slate-700 pb-3",
        2: "text-2xl mb-4 mt-8",
        3: "text-xl mb-3 mt-6",
        4: "text-lg mb-2 mt-4"
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
    <p className="text-slate-700 dark:text-slate-300 leading-7 mb-4">
        {children}
    </p>
)

export const DocsList = ({ children, ordered = false }: { children: React.ReactNode; ordered?: boolean }) => {
    const Tag = ordered ? 'ol' : 'ul'
    const classes = ordered
        ? "list-decimal list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300"
        : "list-disc list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300"

    return (
        <Tag className={classes}>
            {children}
        </Tag>
    )
}

export const DocsListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="leading-7">
        {children}
    </li>
)

export const DocsStrong = ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-slate-900 dark:text-slate-100">
        {children}
    </strong>
)
