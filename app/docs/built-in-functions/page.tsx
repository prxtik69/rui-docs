import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    DocsList,
    DocsListItem,
    DocsLink,
    DocsStrong,
} from "@/components/docs-content"

export default function BuiltInFunctionsPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Built-in Functions</DocsHeading>

            <DocsParagraph>
                Rui comes with a comprehensive set of built-in functions that make
                common programming tasks easy and efficient. These functions are always
                available without needing to import anything.
            </DocsParagraph>

            <DocsHeading level={2}>General Functions</DocsHeading>

            <DocsParagraph>
                These functions work with any data type and provide fundamental
                operations:
            </DocsParagraph>

            <DocsHeading level={3}>write(...args)</DocsHeading>

            <DocsParagraph>
                The most important function in Rui — prints multiple values to the
                console:
            </DocsParagraph>

            <CodeBlock>{`// Print single values
  write("Hello World")
  write(42)
  write(true)
  
  // Print multiple values
  write("Name:", "Alice", "Age:", 25)
  write("Numbers:", 1, 2, 3, 4, 5)
  
  // Print variables
  suppose name = "Bob"
  suppose age = 30
  write("Hello", name, "you are", age, "years old")
  
  // Print arrays and objects
  suppose numbers = [1, 2, 3]
  suppose person = { name: "Charlie", age: 35 }
  write("Array:", numbers)
  write("Object:", person)`}</CodeBlock>

            <DocsHeading level={3}>length(value)</DocsHeading>

            <DocsParagraph>
                Returns the length of strings, arrays, or other collections:
            </DocsParagraph>

            <CodeBlock>{`// String length
  suppose text = "Hello World"
  write("String length:", length(text))  // 11
  
  // Array length
  suppose numbers = [1, 2, 3, 4, 5]
  write("Array length:", length(numbers))  // 5
  
  // Empty collections
  suppose empty = ""
  suppose emptyArray = []
  write("Empty string length:", length(empty))  // 0
  write("Empty array length:", length(emptyArray))  // 0
  
  // Practical use
  suppose fruits = ["apple", "banana", "orange"]
  write("You have", length(fruits), "fruits")`}</CodeBlock>

            {/* …repeat this cleaned format for the rest of your sections … */}

            <DocsHeading level={2}>Best Practices</DocsHeading>

            <DocsList>
                <DocsListItem>
                    <DocsStrong>Use the right function</DocsStrong>: Choose the most
                    appropriate built-in function for your task
                </DocsListItem>
                <DocsListItem>
                    <DocsStrong>Handle errors gracefully</DocsStrong>: Check for valid
                    input before using parse functions
                </DocsListItem>
                <DocsListItem>
                    <DocsStrong>Combine functions effectively</DocsStrong>: Chain
                    operations for complex transformations
                </DocsListItem>
                <DocsListItem>
                    <DocsStrong>Use write() for debugging</DocsStrong>: Print intermediate
                    values to understand your data flow
                </DocsListItem>
                <DocsListItem>
                    <DocsStrong>Leverage length() for validation</DocsStrong>: Check
                    array/string sizes before processing
                </DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand built-in functions, learn about{" "}
                <DocsLink href="/docs/operators">Operators</DocsLink> to perform
                calculations and comparisons.
            </DocsParagraph>
        </DocsContent>
    )
}
