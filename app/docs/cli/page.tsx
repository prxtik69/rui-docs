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

            <DocsHeading level={2}>Running Programs</DocsHeading>

            <DocsParagraph>
                To run a Rui program, use the <InlineCode>rui</InlineCode> command followed by the filename:
            </DocsParagraph>

            <CodeBlock>
                rui hello.rui\nrui myprogram.rui\nrui examples/calculator.rui
            </CodeBlock>

            <DocsHeading level={2}>Command Line Options</DocsHeading>

            <DocsHeading level={3}>Version Information</DocsHeading>

            <DocsParagraph>
                Check the current version of Rui:
            </DocsParagraph>

            <CodeBlock>
                rui --version\nrui -v
            </CodeBlock>

            <DocsHeading level={3}>Help</DocsHeading>

            <DocsParagraph>
                Display help information and available options:
            </DocsParagraph>

            <CodeBlock>
                rui --help\nrui -h
            </CodeBlock>

            <DocsHeading level={2}>File Extensions</DocsHeading>

            <DocsParagraph>
                Rui programs should use the <InlineCode>.rui</InlineCode> file extension:
            </DocsParagraph>

            <CodeBlock>
                # Good\nrui program.rui\nrui hello.rui\nrui calculator.rui\n\n# Also works (but not recommended)\nrui program\nrui hello
            </CodeBlock>

            <DocsHeading level={2}>Running Multiple Files</DocsHeading>

            <DocsParagraph>
                You can run multiple Rui files in sequence:
            </DocsParagraph>

            <CodeBlock>
                rui file1.rui file2.rui file3.rui
            </CodeBlock>

            <DocsParagraph>
                Each file will be executed in order.
            </DocsParagraph>

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
                suppose name = &quot;Alice&quot;\nsuppose age = 25\n\nwrite(&quot;Name: &quot; + name)\nwrite(&quot;Age: &quot; + age)\nwrite(&quot;Next year: &quot; + (age + 1))
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
                Name: Alice\nAge: 25\nNext year: 26
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
                5 + 3 = 8\n4 * 7 = 28
            </CodeBlock>

            <DocsHeading level={2}>Working with Directories</DocsHeading>

            <DocsParagraph>
                You can run Rui programs from any directory:
            </DocsParagraph>

            <CodeBlock>
                # From the current directory\nrui hello.rui\n\n# From a subdirectory\nrui examples/hello.rui\n\n# From an absolute path\nrui /home/user/projects/hello.rui
            </CodeBlock>

            <DocsHeading level={2}>Batch Processing</DocsHeading>

            <DocsParagraph>
                You can create a script to run multiple Rui programs:
            </DocsParagraph>

            <DocsParagraph>
                <DocsStrong>run_all.sh</DocsStrong> (Linux/Mac):
            </DocsParagraph>

            <CodeBlock>
                #!/bin/bash\nrui hello.rui\nrui calculator.rui\nrui examples/demo.rui
            </CodeBlock>

            <DocsParagraph>
                <DocsStrong>run_all.bat</DocsStrong> (Windows):
            </DocsParagraph>

            <CodeBlock>
                rui hello.rui\nrui calculator.rui\nrui examples/demo.rui
            </CodeBlock>

            <DocsHeading level={2}>Environment Variables</DocsHeading>

            <DocsParagraph>
                Rui can access environment variables (if supported by your system):
            </DocsParagraph>

            <CodeBlock>
                {`// This would work if environment variable access is implemented
// suppose user = getenv("USER")
// write("Current user: " + user)`}
            </CodeBlock>

            <DocsHeading level={2}>Performance Tips</DocsHeading>

            <DocsList ordered>
                <DocsListItem><DocsStrong>Use meaningful filenames</DocsStrong>: Choose descriptive names for your Rui files</DocsListItem>
                <DocsListItem><DocsStrong>Organize your code</DocsStrong>: Keep related programs in the same directory</DocsListItem>
                <DocsListItem><DocsStrong>Test frequently</DocsStrong>: Run your programs often to catch errors early</DocsListItem>
                <DocsListItem><DocsStrong>Use comments</DocsStrong>: Add comments to explain complex logic</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Troubleshooting</DocsHeading>

            <DocsHeading level={3}>Common Issues</DocsHeading>

            <DocsParagraph>
                <DocsStrong>File not found:</DocsStrong>
            </DocsParagraph>

            <CodeBlock>
                rui nonexistent.rui\n# Error: File &apos;nonexistent.rui&apos; not found
            </CodeBlock>

            <DocsParagraph>
                Solution: Check the filename and path.
            </DocsParagraph>

            <DocsParagraph>
                <DocsStrong>Permission denied:</DocsStrong>
            </DocsParagraph>

            <CodeBlock>
                rui protected.rui\n# Error: Permission denied
            </CodeBlock>

            <DocsParagraph>
                Solution: Check file permissions or run with appropriate privileges.
            </DocsParagraph>

            <DocsParagraph>
                <DocsStrong>Syntax errors:</DocsStrong>
            </DocsParagraph>

            <CodeBlock>
                rui syntax_error.rui\n# Error: Syntax error on line 5
            </CodeBlock>

            <DocsParagraph>
                Solution: Check your Rui syntax and fix the error.
            </DocsParagraph>

            <DocsHeading level={3}>Getting Help</DocsHeading>

            <DocsParagraph>
                If you encounter issues:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Check the <DocsLink href="/docs/installation">Installation</DocsLink> guide</DocsListItem>
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
