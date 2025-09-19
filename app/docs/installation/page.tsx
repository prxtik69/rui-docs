import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    DocsLink
} from "@/components/docs-content"

export default function InstallationPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Installation</DocsHeading>

            <DocsParagraph>
                Get Rui up and running on your system in just a few steps.
            </DocsParagraph>

            <DocsHeading level={2}>Prerequisites</DocsHeading>

            <DocsParagraph>
                Before installing Rui, make sure you have Node.js installed on your system. Rui requires Node.js version 16 or higher.
            </DocsParagraph>

            <DocsParagraph>
                You can check if Node.js is installed by running:
            </DocsParagraph>

            <CodeBlock>
                {`node --version
npm --version`}
            </CodeBlock>

            <DocsParagraph>
                If Node.js is not installed, download it from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">nodejs.org</a>.
            </DocsParagraph>

            <DocsHeading level={2}>Install Rui</DocsHeading>

            <DocsParagraph>
                Install Rui globally using npm:
            </DocsParagraph>

            <CodeBlock>
                npm install -g rui-lang
            </CodeBlock>

            <DocsParagraph>
                This will install the Rui CLI tool globally on your system, allowing you to run Rui programs from anywhere.
            </DocsParagraph>

            <DocsHeading level={2}>Verify Installation</DocsHeading>

            <DocsParagraph>
                To verify that Rui is installed correctly, run:
            </DocsParagraph>

            <CodeBlock>
                rui --version
            </CodeBlock>

            <DocsParagraph>
                You should see the current version of Rui printed to the console.
            </DocsParagraph>

            <DocsHeading level={2}>Get Help</DocsHeading>

            <DocsParagraph>
                To see all available commands and options:
            </DocsParagraph>

            <CodeBlock>
                rui --help
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you have Rui installed, you&apos;re ready to write your first program! Check out the <DocsLink href="/docs/hello-world">Hello World</DocsLink> guide to get started.
            </DocsParagraph>
        </DocsContent>
    )
}
