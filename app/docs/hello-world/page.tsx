import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    InlineCode,
    DocsList,
    DocsListItem,
    DocsLink
} from "@/components/docs-content"

export default function HelloWorldPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Hello World</DocsHeading>

            <DocsParagraph>
                Let&apos;s write your first Rui program! This is a tradition in programming - your first program should print &quot;Hello, World!&quot; to the console.
            </DocsParagraph>

            <DocsHeading level={2}>Creating Your First Program</DocsHeading>

            <DocsParagraph>
                Create a new file called <InlineCode>hello.rui</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                write(&quot;Hello, World!&quot;)
            </CodeBlock>

            <DocsParagraph>
                That&apos;s it! This simple program uses Rui&apos;s <InlineCode>write</InlineCode> function to print text to the console.
            </DocsParagraph>

            <DocsHeading level={2}>Running Your Program</DocsHeading>

            <DocsParagraph>
                To run your Rui program, use the <InlineCode>rui</InlineCode> command followed by the filename:
            </DocsParagraph>

            <CodeBlock>
                rui hello.rui
            </CodeBlock>

            <DocsParagraph>
                You should see the output:
            </DocsParagraph>

            <CodeBlock>
                Hello, World!
            </CodeBlock>

            <DocsHeading level={2}>Understanding the Code</DocsHeading>

            <DocsParagraph>
                Let&apos;s break down what happened:
            </DocsParagraph>

            <DocsList>
                <DocsListItem>
                    <InlineCode>write()</InlineCode> is a built-in function in Rui that prints text to the console
                </DocsListItem>
                <DocsListItem>
                    The text inside the parentheses <InlineCode>&quot;Hello, World!&quot;</InlineCode> is a string literal
                </DocsListItem>
                <DocsListItem>
                    The semicolon at the end is optional in Rui (but recommended for clarity)
                </DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Try It Yourself</DocsHeading>

            <DocsParagraph>
                Modify the program to print your name:
            </DocsParagraph>

            <CodeBlock>
                write(&quot;Hello, my name is [Your Name]!&quot;)
            </CodeBlock>

            <DocsParagraph>
                Run it again and see your personalized message!
            </DocsParagraph>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you&apos;ve written your first Rui program, you&apos;re ready to learn about <DocsLink href="/docs/variables">Variables</DocsLink> and how to store and manipulate data.
            </DocsParagraph>
        </DocsContent>
    )
}
