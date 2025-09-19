import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    InlineCode,
    DocsList,
    DocsListItem,
    DocsStrong,
} from "@/components/docs-content"

export default function LanguageBasicsPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Language Basics</DocsHeading>

            <DocsParagraph>
                Rui is designed with a clean, readable syntax that minimizes punctuation requirements while maintaining clarity and expressiveness.
            </DocsParagraph>

            <DocsHeading level={2}>Syntax Overview</DocsHeading>

            <DocsParagraph>
                Rui uses a simple, intuitive syntax that focuses on readability. Here&apos;s a basic example:
            </DocsParagraph>

            <CodeBlock>
                {`// Simple program
write("Hello, World!")
suppose name = "Alice"
write("Hello " + name)`}
            </CodeBlock>

            <DocsParagraph>
                Key characteristics of Rui syntax:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Minimal punctuation:</DocsStrong> No semicolons required, clean and readable</DocsListItem>
                <DocsListItem><DocsStrong>Descriptive keywords:</DocsStrong> Use <InlineCode>suppose</InlineCode> for variables, <InlineCode>define</InlineCode> for functions</DocsListItem>
                <DocsListItem><DocsStrong>Flexible formatting:</DocsStrong> Statements can be terminated with newlines or semicolons</DocsListItem>
                <DocsListItem><DocsStrong>Clear structure:</DocsStrong> Code blocks use curly braces for organization</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Statement Termination</DocsHeading>

            <DocsParagraph>
                Rui provides flexibility in how you terminate statements. Both newlines and semicolons are supported:
            </DocsParagraph>

            <CodeBlock>
                {`suppose x = 10
suppose y = 20;
write(x + y)`}
            </CodeBlock>

            <DocsParagraph>
                This flexibility allows you to write code in a style that feels natural to you:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Newline termination:</DocsStrong> Most common approach, keeps code clean</DocsListItem>
                <DocsListItem><DocsStrong>Semicolon termination:</DocsStrong> Useful for multiple statements on one line</DocsListItem>
                <DocsListItem><DocsStrong>Mixed usage:</DocsStrong> You can mix both styles in the same file</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Code Organization</DocsHeading>

            <DocsParagraph>
                Rui uses curly braces to organize code into blocks:
            </DocsParagraph>

            <CodeBlock>
                {`// Function definition
define greet(name) {
    write("Hello, " + name + "!")
}

// Conditional statement
if (age >= 18) {
    write("You are an adult")
} else {
    write("You are a minor")
}

// Loop structure
until (count < 5) {
    write("Count: " + count)
    suppose count = count + 1
}`}
            </CodeBlock>

            <DocsHeading level={2}>Comments</DocsHeading>

            <DocsParagraph>
                Rui supports both single-line and multiline comments:
            </DocsParagraph>

            <CodeBlock>
                {`// This is a single-line comment
suppose name = "Alice"  // Inline comment

/*
   This is a multiline comment
   that can span multiple lines
   and is completely ignored
*/

suppose age = 25`}
            </CodeBlock>

            <DocsHeading level={2}>Best Practices</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Use descriptive variable names:</DocsStrong> Choose names that clearly indicate purpose</DocsListItem>
                <DocsListItem><DocsStrong>Consistent formatting:</DocsStrong> Pick a style and stick with it throughout your code</DocsListItem>
                <DocsListItem><DocsStrong>Add comments for complex logic:</DocsStrong> Explain what your code does, especially for non-obvious operations</DocsListItem>
                <DocsListItem><DocsStrong>Organize code logically:</DocsStrong> Group related statements together</DocsListItem>
            </DocsList>

            <DocsParagraph>
                Understanding these basics will help you write clean, readable Rui code. The language is designed to be intuitive, so you can focus on solving problems rather than fighting syntax.
            </DocsParagraph>
        </DocsContent>
    )
}
