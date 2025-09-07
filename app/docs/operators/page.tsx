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

export default function OperatorsPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Operators</DocsHeading>

            <DocsParagraph>
                Operators in Rui allow you to perform calculations, comparisons, and logical operations. Rui supports arithmetic, comparison, and logical operators.
            </DocsParagraph>

            <DocsHeading level={2}>Arithmetic Operators</DocsHeading>

            <DocsParagraph>
                Use arithmetic operators to perform mathematical calculations:
            </DocsParagraph>

            <CodeBlock>
                {`suppose a = 10
suppose b = 3

// Addition
suppose sum = a + b        // 13

// Subtraction
suppose difference = a - b // 7

// Multiplication
suppose product = a * b    // 30

// Division
suppose quotient = a / b   // 3.333...

write("Sum: " + sum)
write("Difference: " + difference)
write("Product: " + product)
write("Quotient: " + quotient)`}
            </CodeBlock>

            <DocsHeading level={2}>Comparison Operators</DocsHeading>

            <DocsParagraph>
                Comparison operators return <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode> based on the comparison:
            </DocsParagraph>

            <CodeBlock>
                {`suppose x = 10
suppose y = 5

// Equal to
suppose isEqual = x == y        // false

// Not equal to
suppose notEqual = x != y       // true

// Greater than
suppose greater = x > y         // true

// Less than
suppose less = x < y            // false

// Greater than or equal to
suppose greaterEqual = x >= y   // true

// Less than or equal to
suppose lessEqual = x <= y      // false

write("x == y: " + isEqual)
write("x != y: " + notEqual)
write("x > y: " + greater)`}
            </CodeBlock>

            <DocsHeading level={2}>Logical Operators</DocsHeading>

            <DocsParagraph>
                Logical operators work with boolean values:
            </DocsParagraph>

            <CodeBlock>
                {`suppose a = true
suppose b = false

// AND operator
suppose andResult = a and b     // false

// OR operator
suppose orResult = a or b       // true

// NOT operator
suppose notResult = not a       // false

write("a and b: " + andResult)
write("a or b: " + orResult)
write("not a: " + notResult)`}
            </CodeBlock>

            <DocsHeading level={2}>Operator Precedence</DocsHeading>

            <DocsParagraph>
                Operators have different precedence levels. Operations with higher precedence are performed first:
            </DocsParagraph>

            <DocsList ordered>
                <DocsListItem><InlineCode>()</InlineCode> (parentheses)</DocsListItem>
                <DocsListItem><InlineCode>not</InlineCode></DocsListItem>
                <DocsListItem><InlineCode>*</InlineCode>, <InlineCode>/</InlineCode></DocsListItem>
                <DocsListItem><InlineCode>+</InlineCode>, <InlineCode>-</InlineCode></DocsListItem>
                <DocsListItem><InlineCode>==</InlineCode>, <InlineCode>!=</InlineCode>, <InlineCode>{'>'}</InlineCode>, <InlineCode>{'<'}</InlineCode>, <InlineCode>{'>='}</InlineCode>, <InlineCode>{'<='}</InlineCode></DocsListItem>
                <DocsListItem><InlineCode>and</InlineCode></DocsListItem>
                <DocsListItem><InlineCode>or</InlineCode></DocsListItem>
            </DocsList>

            <CodeBlock>
                {`suppose result = 2 + 3 * 4      // 14 (multiplication first)
suppose result2 = (2 + 3) * 4   // 20 (parentheses first)

write("2 + 3 * 4 = " + result)
write("(2 + 3) * 4 = " + result2)`}
            </CodeBlock>

            <DocsHeading level={2}>String Operations</DocsHeading>

            <DocsParagraph>
                You can use the <InlineCode>+</InlineCode> operator to concatenate strings:
            </DocsParagraph>

            <CodeBlock>
                {`suppose firstName = "John"
suppose lastName = "Doe"
suppose fullName = firstName + " " + lastName

write("Full name: " + fullName)`}
            </CodeBlock>

            <DocsHeading level={2}>Example: Calculator Program</DocsHeading>

            <DocsParagraph>
                Here&apos;s a simple calculator program that demonstrates operators:
            </DocsParagraph>

            <CodeBlock>
                {`// Get two numbers
suppose num1 = 15
suppose num2 = 3

// Perform calculations
suppose sum = num1 + num2
suppose difference = num1 - num2
suppose product = num1 * num2
suppose quotient = num1 / num2

// Display results
write("Calculator Results:")
write("Numbers: " + num1 + " and " + num2)
write("Sum: " + sum)
write("Difference: " + difference)
write("Product: " + product)
write("Quotient: " + quotient)

// Comparison
write("Is " + num1 + " greater than " + num2 + "? " + (num1 > num2))`}
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand operators, learn about <DocsLink href="/docs/conditionals">Conditionals</DocsLink> to make decisions in your programs.
            </DocsParagraph>
        </DocsContent>
    )
}