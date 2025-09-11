import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    InlineCode,
    DocsList,
    DocsListItem,
    DocsStrong,
    DocsLink
} from "@/components/docs-content"
import { Bug, Sparkles, Zap } from "lucide-react"

export default function ReleasesPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Releases & Changelog</DocsHeading>

            <DocsParagraph>
                Track the evolution of Rui! This page contains detailed information about all releases,
                new features, bug fixes, and improvements made to the language.
            </DocsParagraph>

            <DocsHeading level={2}>Latest Release: v1.0.7</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date: 11 September 2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />New Features</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Enhanced Array Support:</DocsStrong> Improved array literal syntax and better performance</DocsListItem>
                <DocsListItem><DocsStrong>Object Property Access:</DocsStrong> Streamlined dot notation for object properties</DocsListItem>
                <DocsListItem><DocsStrong>Negative Array Indexing:</DocsStrong> Support for accessing array elements from the end using negative indices</DocsListItem>
                <DocsListItem><DocsStrong>Improved Error Messages:</DocsStrong> More descriptive and helpful error reporting</DocsListItem>
            </DocsList>

            <DocsHeading level={3}><Bug className="inline h-5 w-5 mr-2" />Bug Fixes</DocsHeading>

            <DocsList>
                <DocsListItem>Fixed memory leak in long-running programs</DocsListItem>
                <DocsListItem>Resolved issue with nested function calls</DocsListItem>
                <DocsListItem>Fixed string concatenation edge cases</DocsListItem>
                <DocsListItem>Improved handling of empty arrays and objects</DocsListItem>
            </DocsList>

            <DocsHeading level={3}><Zap className="inline h-5 w-5 mr-2" />Performance Improvements</DocsHeading>

            <DocsList>
                <DocsListItem>30% faster array operations</DocsListItem>
                <DocsListItem>Reduced memory usage by 15%</DocsListItem>
                <DocsListItem>Optimized string manipulation functions</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>v1.0.6</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date: September 2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />New Features</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>First Public Launch:</DocsStrong> Rui made available to the public for the first time</DocsListItem>
                <DocsListItem><DocsStrong>Community Access:</DocsStrong> Open source release with public documentation</DocsListItem>
                <DocsListItem><DocsStrong>Initial Documentation:</DocsStrong> Basic guides and examples for new users</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>v1.0.5</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date: September 2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />New Features</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>VS Code Integration:</DocsStrong> Official Rui extension for Visual Studio Code</DocsListItem>
                <DocsListItem><DocsStrong>Syntax Highlighting:</DocsStrong> Proper code highlighting for Rui files</DocsListItem>
                <DocsListItem><DocsStrong>IntelliSense:</DocsStrong> Code completion and error detection in VS Code</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>v1.0.4</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date:  September 2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />New Features</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>NPM Package:</DocsStrong> Rui available as <InlineCode>rui-lang</InlineCode> package on npm</DocsListItem>
                <DocsListItem><DocsStrong>Global Installation:</DocsStrong> Easy installation with <InlineCode>npm install -g rui-lang</InlineCode></DocsListItem>
                <DocsListItem><DocsStrong>Package Distribution:</DocsStrong> Standardized distribution through npm registry</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>v1.0.3</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date: August    2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />New Features</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Until Loop:</DocsStrong> Introduction of <InlineCode>until</InlineCode> loop for iteration</DocsListItem>
                <DocsListItem><DocsStrong>Function Definitions:</DocsStrong> Support for <InlineCode>define</InlineCode> keyword to create functions</DocsListItem>
                <DocsListItem><DocsStrong>Control Flow:</DocsStrong> Basic program flow control with loops and functions</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>v1.0.2</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date: August 2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />New Features</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Variable Declarations:</DocsStrong> Introduction of <InlineCode>suppose</InlineCode> keyword for variables</DocsListItem>
                <DocsListItem><DocsStrong>Data Storage:</DocsStrong> Ability to store and manipulate data in variables</DocsListItem>
                <DocsListItem><DocsStrong>Basic Memory Management:</DocsStrong> Core variable system implementation</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>v1.0.1</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date: August 2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />New Features</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Write Function:</DocsStrong> Introduction of <InlineCode>write()</InlineCode> for console output</DocsListItem>
                <DocsListItem><DocsStrong>Basic Output:</DocsStrong> First way to display text and values to users</DocsListItem>
                <DocsListItem><DocsStrong>Hello World:</DocsStrong> Made the classic &quot;Hello, World!&quot; program possible</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>v1.0.0</DocsHeading>

            <DocsParagraph>
                <DocsStrong>Release Date: June 2025</DocsStrong>
            </DocsParagraph>

            <DocsHeading level={3}><Sparkles className="inline h-5 w-5 mr-2" />Initial Release</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Project Launch:</DocsStrong> Rui programming language officially launched</DocsListItem>
                <DocsListItem><DocsStrong>Core Vision:</DocsStrong> Beginner-friendly programming language inspired by JavaScript</DocsListItem>
                <DocsListItem><DocsStrong>Community:</DocsStrong> Open source project with community contributions welcome</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Upcoming Features</DocsHeading>

            <DocsParagraph>
                We&apos;re constantly working on improving Rui. Here&apos;s what you can expect:
            </DocsParagraph>

            <DocsList>
                <DocsListItem> Advanced data structures and more built-in functions</DocsListItem>
                <DocsListItem> File I/O operations and module system</DocsListItem>
                <DocsListItem> Major language improvements and performance optimizations</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Contributing</DocsHeading>

            <DocsParagraph>
                Want to help shape the future of Rui? Check out our <DocsLink href="/docs/contributing">Contributing Guide</DocsLink>
                to learn how you can get involved in the development process.
            </DocsParagraph>

            <DocsParagraph>
                You can also report bugs, suggest features.
            </DocsParagraph>
        </DocsContent>
    )
}
