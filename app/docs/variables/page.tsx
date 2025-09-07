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

export default function VariablesPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Variables</DocsHeading>

            <DocsParagraph>
                Variables in Rui allow you to store and manipulate data. Rui uses implicit typing, which means you don&apos;t need to declare the type of a variable - Rui figures it out automatically.
            </DocsParagraph>

            <DocsHeading level={2}>Creating Variables</DocsHeading>

            <DocsParagraph>
                To create a variable in Rui, use the <InlineCode>suppose</InlineCode> keyword followed by the variable name and value:
            </DocsParagraph>

            <CodeBlock>
                suppose name = &quot;Alice&quot;{'\n'}suppose age = 25{'\n'}suppose isStudent = true
            </CodeBlock>

            <DocsParagraph>
                Rui automatically determines that:
            </DocsParagraph>

            <DocsList>
                <DocsListItem>
                    <InlineCode>name</InlineCode> is a string
                </DocsListItem>
                <DocsListItem>
                    <InlineCode>age</InlineCode> is a number
                </DocsListItem>
                <DocsListItem>
                    <InlineCode>isStudent</InlineCode> is a boolean
                </DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Variable Naming Rules</DocsHeading>

            <DocsParagraph>
                Variable names in Rui must follow these rules:
            </DocsParagraph>

            <DocsList>
                <DocsListItem>Start with a letter or underscore</DocsListItem>
                <DocsListItem>Can contain letters, numbers, and underscores</DocsListItem>
                <DocsListItem>Are case-sensitive</DocsListItem>
                <DocsListItem>Cannot be reserved words</DocsListItem>
            </DocsList>

            <DocsParagraph>
                <DocsStrong>Good variable names:</DocsStrong>
            </DocsParagraph>

            <CodeBlock>
                suppose firstName = &quot;John&quot;{'\n'}suppose user_age = 30{'\n'}suppose totalCount = 100
            </CodeBlock>

            <DocsParagraph>
                <DocsStrong>Invalid variable names:</DocsStrong>
            </DocsParagraph>

            <CodeBlock>
                suppose 123name = &quot;invalid&quot;  {`{/* Cannot start with a number */}`}{'\n'}suppose first-name = &quot;invalid&quot;  {`{/* Cannot contain hyphens */}`}{'\n'}suppose if = &quot;invalid&quot;  {`{/* Cannot use reserved words */}`}
            </CodeBlock>

            <DocsHeading level={2}>Using Variables</DocsHeading>

            <DocsParagraph>
                You can use variables in expressions and pass them to functions:
            </DocsParagraph>

            <CodeBlock>
                suppose name = &quot;Bob&quot;{'\n'}suppose age = 30{'\n'}{'\n'}write(&quot;Hello, &quot; + name){'\n'}write(&quot;You are &quot; + age + &quot; years old&quot;)
            </CodeBlock>

            <DocsHeading level={2}>Reassigning Variables</DocsHeading>

            <DocsParagraph>
                You can change the value of a variable by assigning a new value:
            </DocsParagraph>

            <CodeBlock>
                suppose count = 5{'\n'}write(count)  // Prints: 5{'\n'}{'\n'}suppose count = 10{'\n'}write(count)  // Prints: 10
            </CodeBlock>

            <DocsHeading level={2}>Variable Types</DocsHeading>

            <DocsParagraph>
                Rui supports several data types:
            </DocsParagraph>

            <DocsHeading level={3}>Numbers</DocsHeading>

            <CodeBlock>
                suppose integer = 42{'\n'}suppose decimal = 3.14{'\n'}suppose negative = -10
            </CodeBlock>

            <DocsHeading level={3}>Strings</DocsHeading>

            <CodeBlock>
                suppose greeting = &quot;Hello&quot;{'\n'}suppose name = &apos;World&apos;{'\n'}suppose multiline = &quot;This is a{'\n'}multiline string&quot;
            </CodeBlock>

            <DocsHeading level={3}>Booleans</DocsHeading>

            <CodeBlock>
                suppose isTrue = true{'\n'}suppose isFalse = false
            </CodeBlock>

            <DocsHeading level={2}>String Concatenation</DocsHeading>

            <DocsParagraph>
                You can combine strings using the <InlineCode>+</InlineCode> operator:
            </DocsParagraph>

            <CodeBlock>
                suppose firstName = &quot;John&quot;{'\n'}suppose lastName = &quot;Doe&quot;{'\n'}suppose fullName = firstName + &quot; &quot; + lastName{'\n'}write(fullName)  // Prints: John Doe
            </CodeBlock>

            <DocsHeading level={2}>Example Program</DocsHeading>

            <DocsParagraph>
                Here&apos;s a complete example that demonstrates variables:
            </DocsParagraph>

            <CodeBlock>
                {`{/* Store user information */}`}{'\n'}suppose name = &quot;Alice&quot;{'\n'}suppose age = 25{'\n'}suppose city = &quot;New York&quot;{'\n'}{'\n'}{`{/* Display the information */}`}{'\n'}write(&quot;Name: &quot; + name){'\n'}write(&quot;Age: &quot; + age){'\n'}write(&quot;City: &quot; + city){'\n'}{'\n'}{`{/* Calculate and display age next year */}`}{'\n'}suppose nextYearAge = age + 1{'\n'}write(&quot;Next year, &quot; + name + &quot; will be &quot; + nextYearAge + &quot; years old&quot;)
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand variables, learn about <DocsLink href="/docs/operators">Operators</DocsLink> to perform calculations and comparisons.
            </DocsParagraph>
        </DocsContent>
    )
}
