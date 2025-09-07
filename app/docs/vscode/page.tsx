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

export default function VSCodePage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>VS Code Integration</DocsHeading>

            <DocsParagraph>
                VS Code integration provides syntax highlighting, IntelliSense, and other development features for Rui. This guide will help you set up and use the Rui extension in VS Code.
            </DocsParagraph>

            <DocsHeading level={2}>Installing the Extension</DocsHeading>

            <DocsHeading level={3}>Method 1: Direct Installation (Recommended)</DocsHeading>

            <DocsParagraph>
                Click the link below to install the Rui extension directly from the VS Code Marketplace:
            </DocsParagraph>

            <DocsParagraph>
                <DocsStrong><a href="https://marketplace.visualstudio.com/items?itemName=PratikDeshpande.rui-support" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Install Rui Support Extension</a></DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}>Method 2: Through VS Code Extensions View</DocsHeading>

            <DocsList ordered>
                <DocsListItem>Open VS Code</DocsListItem>
                <DocsListItem>Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)</DocsListItem>
                <DocsListItem>Search for &quot;Rui Support&quot; or &quot;Rui Language&quot;</DocsListItem>
                <DocsListItem>Click &quot;Install&quot; on the Rui extension</DocsListItem>
            </DocsList>

            <DocsHeading level={3}>Method 3: Command Line Installation</DocsHeading>

            <CodeBlock>
                {`code --install-extension PratikDeshpande.rui-support`}
            </CodeBlock>

            <DocsHeading level={2}>Features</DocsHeading>

            <DocsParagraph>
                The Rui VS Code extension provides:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Syntax Highlighting</DocsStrong>: Color-coded syntax for better readability</DocsListItem>
                <DocsListItem><DocsStrong>Keyword Support</DocsStrong>: Full support for Rui keywords (<InlineCode>define</InlineCode>, <InlineCode>suppose</InlineCode>, <InlineCode>until</InlineCode>, <InlineCode>if</InlineCode>, <InlineCode>else</InlineCode>, <InlineCode>return</InlineCode>, <InlineCode>write</InlineCode>)</DocsListItem>
                <DocsListItem><DocsStrong>Boolean Support</DocsStrong>: Syntax highlighting for <InlineCode>true</InlineCode> and <InlineCode>false</InlineCode></DocsListItem>
                <DocsListItem><DocsStrong>Variable and Function Names</DocsStrong>: Proper highlighting for identifiers</DocsListItem>
                <DocsListItem><DocsStrong>String Support</DocsStrong>: Both single (<InlineCode>&apos;</InlineCode>) and double (<InlineCode>&quot;</InlineCode>) quote strings</DocsListItem>
                <DocsListItem><DocsStrong>Number Support</DocsStrong>: Syntax highlighting for numeric literals</DocsListItem>
                <DocsListItem><DocsStrong>Operator Support</DocsStrong>: Highlighting for operators and brackets</DocsListItem>
                <DocsListItem><DocsStrong>Function Arguments</DocsStrong>: Support for function parameters</DocsListItem>
                <DocsListItem><DocsStrong>Block and Loop Highlighting</DocsStrong>: Proper syntax highlighting for code blocks and loops</DocsListItem>
                <DocsListItem><DocsStrong>File Association</DocsStrong>: Works with <InlineCode>.rui</InlineCode> files</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Syntax Highlighting</DocsHeading>

            <DocsParagraph>
                Once installed, <InlineCode>.rui</InlineCode> files will have syntax highlighting:
            </DocsParagraph>

            <CodeBlock>
                {`// Comments are highlighted
define greet(name) {
    write("Hello, " + name + "!")
}

// Keywords like 'define', 'if', 'until' are highlighted
if (age >= 18) {
    write("Adult")
} else {
    write("Minor")
}`}
            </CodeBlock>

            <DocsHeading level={2}>IntelliSense</DocsHeading>

            <DocsParagraph>
                The extension provides auto-completion for:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Keywords</DocsStrong>: <InlineCode>define</InlineCode>, <InlineCode>suppose</InlineCode>, <InlineCode>until</InlineCode>, <InlineCode>if</InlineCode>, <InlineCode>else</InlineCode>, <InlineCode>return</InlineCode>, <InlineCode>write</InlineCode></DocsListItem>
                <DocsListItem><DocsStrong>Built-in functions</DocsStrong>: <InlineCode>write()</InlineCode></DocsListItem>
                <DocsListItem><DocsStrong>Booleans</DocsStrong>: <InlineCode>true</InlineCode>, <InlineCode>false</InlineCode></DocsListItem>
                <DocsListItem><DocsStrong>Operators</DocsStrong>: <InlineCode>+</InlineCode>, <InlineCode>-</InlineCode>, <InlineCode>*</InlineCode>, <InlineCode>/</InlineCode>, <InlineCode>==</InlineCode>, <InlineCode>!=</InlineCode>, <InlineCode>{'>'}</InlineCode>, <InlineCode>{'<'}</InlineCode></DocsListItem>
                <DocsListItem><DocsStrong>Logical operators</DocsStrong>: <InlineCode>and</InlineCode>, <InlineCode>or</InlineCode>, <InlineCode>not</InlineCode></DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Code Snippets</DocsHeading>

            <DocsParagraph>
                The extension includes helpful code snippets:
            </DocsParagraph>

            <DocsHeading level={3}>Function Snippet</DocsHeading>

            <DocsParagraph>
                Type <InlineCode>define</InlineCode> and press Tab:
            </DocsParagraph>

            <CodeBlock>
                {`define functionName(parameters) {
    // Function body
}`}
            </CodeBlock>

            <DocsHeading level={3}>If Statement Snippet</DocsHeading>

            <DocsParagraph>
                Type <InlineCode>if</InlineCode> and press Tab:
            </DocsParagraph>

            <CodeBlock>
                {`if (condition) {
    // Code block
}`}
            </CodeBlock>

            <DocsHeading level={3}>Until Loop Snippet</DocsHeading>

            <DocsParagraph>
                Type <InlineCode>until</InlineCode> and press Tab:
            </DocsParagraph>

            <CodeBlock>
                {`until (condition) {
    // Code block
}`}
            </CodeBlock>

            <DocsHeading level={2}>Error Detection</DocsHeading>

            <DocsParagraph>
                The extension highlights syntax errors in real-time:
            </DocsParagraph>

            <CodeBlock>
                {`define greet(name {
    write("Hello, " + name + "!")
}  // Error highlighted here`}
            </CodeBlock>

            <DocsHeading level={2}>Code Formatting</DocsHeading>

            <DocsParagraph>
                Format your Rui code automatically:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Right-click in the editor</DocsListItem>
                <DocsListItem>Select &quot;Format Document&quot; or use Shift+Alt+F (Windows/Linux) or Shift+Option+F (Mac)</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>File Associations</DocsHeading>

            <DocsParagraph>
                The extension automatically associates <InlineCode>.rui</InlineCode> files with the Rui language mode. You can also manually set the language mode:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Open a <InlineCode>.rui</InlineCode> file</DocsListItem>
                <DocsListItem>Click on the language mode in the status bar</DocsListItem>
                <DocsListItem>Select &quot;Rui&quot; from the list</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Settings</DocsHeading>

            <DocsParagraph>
                You can customize the extension behavior in VS Code settings:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Open Settings (Ctrl+, or Cmd+,)</DocsListItem>
                <DocsListItem>Search for &quot;Rui&quot;</DocsListItem>
                <DocsListItem>Adjust the following options:</DocsListItem>
            </DocsList>

            <DocsList>
                <DocsListItem><DocsStrong>Rui: Enable IntelliSense</DocsStrong>: Enable/disable auto-completion</DocsListItem>
                <DocsListItem><DocsStrong>Rui: Enable Error Detection</DocsStrong>: Enable/disable syntax error highlighting</DocsListItem>
                <DocsListItem><DocsStrong>Rui: Format On Save</DocsStrong>: Automatically format code when saving</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Keyboard Shortcuts</DocsHeading>

            <DocsParagraph>
                The extension provides these keyboard shortcuts:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Ctrl+Shift+P</DocsStrong> (Cmd+Shift+P): Open Command Palette</DocsListItem>
                <DocsListItem><DocsStrong>F1</DocsStrong>: Show all commands</DocsListItem>
                <DocsListItem><DocsStrong>Ctrl+Space</DocsStrong>: Trigger IntelliSense</DocsListItem>
                <DocsListItem><DocsStrong>Shift+Alt+F</DocsStrong> (Shift+Option+F): Format document</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Example: Setting Up a Project</DocsHeading>

            <DocsList ordered>
                <DocsListItem>Create a new folder for your Rui project</DocsListItem>
                <DocsListItem>Open the folder in VS Code</DocsListItem>
                <DocsListItem>Create a new file with <InlineCode>.rui</InlineCode> extension</DocsListItem>
                <DocsListItem>Start coding with full VS Code support</DocsListItem>
            </DocsList>

            <CodeBlock>
                {`my-rui-project/
├── hello.rui
├── calculator.rui
└── examples/
    └── demo.rui`}
            </CodeBlock>

            <DocsHeading level={2}>Running Rui Programs</DocsHeading>

            <DocsParagraph>
                You can run Rui programs directly from VS Code:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Open the Terminal (Ctrl+` or Cmd+`)</DocsListItem>
                <DocsListItem>Run your Rui program:</DocsListItem>
            </DocsList>

            <CodeBlock>
                {`rui hello.rui`}
            </CodeBlock>

            <DocsHeading level={2}>Debugging</DocsHeading>

            <DocsParagraph>
                While the Rui extension doesn&apos;t include a debugger yet, you can use VS Code&apos;s integrated terminal to run and test your programs:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Open the Terminal</DocsListItem>
                <DocsListItem>Run your program</DocsListItem>
                <DocsListItem>Check the output for errors</DocsListItem>
                <DocsListItem>Fix any issues and re-run</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Troubleshooting</DocsHeading>

            <DocsHeading level={3}>Extension Not Working</DocsHeading>

            <DocsParagraph>
                If the extension isn&apos;t working:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Restart VS Code</DocsListItem>
                <DocsListItem>Check if the extension is enabled</DocsListItem>
                <DocsListItem>Verify file associations</DocsListItem>
                <DocsListItem>Check the Output panel for error messages</DocsListItem>
            </DocsList>

            <DocsHeading level={3}>Syntax Highlighting Issues</DocsHeading>

            <DocsParagraph>
                If syntax highlighting isn&apos;t working:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Make sure the file has a <InlineCode>.rui</InlineCode> extension</DocsListItem>
                <DocsListItem>Check the language mode in the status bar</DocsListItem>
                <DocsListItem>Manually set the language mode to &quot;Rui&quot;</DocsListItem>
            </DocsList>

            <DocsHeading level={3}>IntelliSense Not Working</DocsHeading>

            <DocsParagraph>
                If auto-completion isn&apos;t working:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Check the extension settings</DocsListItem>
                <DocsListItem>Make sure IntelliSense is enabled</DocsListItem>
                <DocsListItem>Try pressing Ctrl+Space to trigger manually</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Contributing to the Extension</DocsHeading>

            <DocsParagraph>
                The Rui VS Code extension is open source. You can contribute by:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem>Reporting bugs</DocsListItem>
                <DocsListItem>Suggesting new features</DocsListItem>
                <DocsListItem>Contributing code</DocsListItem>
                <DocsListItem>Improving documentation</DocsListItem>
            </DocsList>

            <DocsParagraph>
                Visit the <DocsLink href="/docs/contributing">Contributing</DocsLink> guide for more information.
            </DocsParagraph>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you have VS Code set up for Rui development, you&apos;re ready to start building more complex programs. Check out the <DocsLink href="/docs/contributing">Contributing</DocsLink> guide to learn how you can help improve Rui.
            </DocsParagraph>
        </DocsContent>
    )
}