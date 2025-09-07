import type { MDXComponents } from 'mdx/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Override the default <a> element
        a: ({ children, href, ...props }) => (
            <a
                href={href}
                className="text-primary hover:underline underline-offset-4"
                {...props}
            >
                {children}
            </a>
        ),
        // Override the default <h1> element
        h1: ({ children, ...props }) => (
            <h1
                className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6"
                {...props}
            >
                {children}
            </h1>
        ),
        // Override the default <h2> element
        h2: ({ children, ...props }) => (
            <h2
                className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-8 mb-4"
                {...props}
            >
                {children}
            </h2>
        ),
        // Override the default <h3> element
        h3: ({ children, ...props }) => (
            <h3
                className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-3"
                {...props}
            >
                {children}
            </h3>
        ),
        // Override the default <h4> element
        h4: ({ children, ...props }) => (
            <h4
                className="scroll-m-20 text-xl font-semibold tracking-tight mt-4 mb-2"
                {...props}
            >
                {children}
            </h4>
        ),
        // Override the default <p> element
        p: ({ children, ...props }) => (
            <p
                className="leading-7 [&:not(:first-child)]:mt-6"
                {...props}
            >
                {children}
            </p>
        ),
        // Override the default <ul> element
        ul: ({ children, ...props }) => (
            <ul
                className="my-6 ml-6 list-disc [&>li]:mt-2"
                {...props}
            >
                {children}
            </ul>
        ),
        // Override the default <ol> element
        ol: ({ children, ...props }) => (
            <ol
                className="my-6 ml-6 list-decimal [&>li]:mt-2"
                {...props}
            >
                {children}
            </ol>
        ),
        // Override the default <li> element
        li: ({ children, ...props }) => (
            <li className="mt-2" {...props}>
                {children}
            </li>
        ),
        // Override the default <blockquote> element
        blockquote: ({ children, ...props }) => (
            <blockquote
                className="mt-6 border-l-2 pl-6 italic"
                {...props}
            >
                {children}
            </blockquote>
        ),
        // Override the default <code> element
        code: ({ children, ...props }) => (
            <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
                {...props}
            >
                {children}
            </code>
        ),
        // Override the default <pre> element
        pre: ({ children, ...props }) => (
            <pre
                className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4"
                {...props}
            >
                {children}
            </pre>
        ),
        // Custom components
        Button,
        Card,
        CardContent,
        CardDescription,
        CardHeader,
        CardTitle,
        Badge,
        ...components,
    }
}
