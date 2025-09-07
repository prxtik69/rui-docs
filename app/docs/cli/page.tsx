import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    InlineCode,
    DocsList,
    DocsListItem,
    DocsLink,
    DocsStrong
} from "@/components/docs-content"

export default function CLIPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>CLI Usage</DocsHeading>

            <DocsParagraph>
                The Rui command-line interface (CLI) allows you to run Rui programs and access various tools. This guide covers all the available commands and options.
            </DocsParagraph>

            <DocsHeading level={2}>Basic Usage</DocsHeading>

            <DocsParagraph>
                The basic syntax for running Rui programs is:
            </DocsParagraph>

            <CodeBlock>
                rui &lt;filename&gt;
            </CodeBlock>



            <DocsHeading level={2}>Command Line Options</DocsHeading>

            <DocsHeading level={3}>Version Information</DocsHeading>

            <DocsParagraph>
                Check the current version of Rui:
            </DocsParagraph>

            <CodeBlock>
                rui --version\nrui -v
            </CodeBlock>


            <DocsHeading level={2}>File Extensions</DocsHeading>

            <DocsParagraph>
                Rui programs should use the <InlineCode>.rui</InlineCode> file extension:
            </DocsParagraph>

            <CodeBlock>
                # Good {"\n"} rui program.rui {"\n"} rui hello.rui {"\n"} rui calculator.rui{"\n"}{"\n"}# Also works (but not recommended) {"\n"} rui program {"\n"} rui hello
            </CodeBlock>


            <DocsHeading level={2}>Error Handling</DocsHeading>

            <DocsParagraph>
                When Rui encounters an error, it will display helpful error messages:
            </DocsParagraph>

            <CodeBlock>
                rui nonexistent.rui\n# Error: File &apos;nonexistent.rui&apos; not found\n\nrui syntax_error.rui\n# Error: Syntax error on line 3: unexpected token
            </CodeBlock>

            <DocsHeading level={2}>Example: Hello World</DocsHeading>

            <DocsParagraph>
                Create a file called <InlineCode>hello.rui</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                write(&quot;Hello, World!&quot;)
            </CodeBlock>

            <DocsParagraph>
                Run it:
            </DocsParagraph>

            <CodeBlock>
                rui hello.rui
            </CodeBlock>

            <DocsParagraph>
                Output:
            </DocsParagraph>

            <CodeBlock>
                Hello, World!
            </CodeBlock>

            <DocsHeading level={2}>Example: Interactive Program</DocsHeading>

            <DocsParagraph>
                Create a file called <InlineCode>interactive.rui</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                suppose name = &quot;Alice&quot;{"\n"}suppose age = 25{"\n"}{"\n"}write(&quot;Name: &quot; + name){"\n"}write(&quot;Age: &quot; + age){"\n"}write(&quot;Next year: &quot; + (age + 1))
            </CodeBlock>

            <DocsParagraph>
                Run it:
            </DocsParagraph>

            <CodeBlock>
                rui interactive.rui
            </CodeBlock>

            <DocsParagraph>
                Output:
            </DocsParagraph>

            <CodeBlock>
                Name: Alice{"\n"}Age: 25{"\n"}Next year: 26
            </CodeBlock>

            <DocsHeading level={2}>Example: Calculator</DocsHeading>

            <DocsParagraph>
                Create a file called <InlineCode>calculator.rui</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                define add(a, b) {'{'}{'\n'}    return a + b{'\n'}{'}'}{'\n'}{'\n'}define multiply(a, b) {'{'}{'\n'}    return a * b{'\n'}{'}'}{'\n'}{'\n'}suppose result1 = add(5, 3){'\n'}suppose result2 = multiply(4, 7){'\n'}{'\n'}write(&quot;5 + 3 = &quot; + result1){'\n'}write(&quot;4 * 7 = &quot; + result2)
            </CodeBlock>

            <DocsParagraph>
                Run it:
            </DocsParagraph>

            <CodeBlock>
                rui calculator.rui
            </CodeBlock>

            <DocsParagraph>
                Output:
            </DocsParagraph>

            <CodeBlock>
                5 + 3 = 8{"\n"}4 * 7 = 28
            </CodeBlock>



            <DocsHeading level={3}>Getting Help</DocsHeading>

            <DocsParagraph>
                If you encounter issues:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Check the <DocsLink href="/docs/installation">Installation</DocsLink> guide</DocsListItem>
                <DocsListItem>Update Rui to latest version <InlineCode>npm install -g rui-lang</InlineCode></DocsListItem>
                <DocsListItem>Verify your Rui syntax</DocsListItem>
                <DocsListItem>Use <InlineCode>rui --help</InlineCode> for command options</DocsListItem>
                <DocsListItem>Check the <DocsLink href="/docs/vscode">VS Code Integration</DocsLink> for development tools</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand the CLI, learn about <DocsLink href="/docs/vscode">VS Code Integration</DocsLink> to enhance your development experience.
            </DocsParagraph>
        </DocsContent>
    )
}
