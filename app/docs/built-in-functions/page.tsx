import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    DocsList,
    DocsListItem,
    DocsLink,
    DocsStrong,
    InlineCode,
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

            <DocsHeading level={2}>Output Functions</DocsHeading>

            <DocsParagraph>
                The <InlineCode>write()</InlineCode> function is the primary way to display output in Rui:
            </DocsParagraph>

            <CodeBlock>
                {`write("Hello, World!")
write("Multiple", "arguments", "supported")
write("Name: " + name)
write("Age: " + age)`}
            </CodeBlock>

            <DocsHeading level={2}>Type Checking</DocsHeading>

            <DocsParagraph>
                Use the <InlineCode>type()</InlineCode> function to check the type of any value:
            </DocsParagraph>

            <CodeBlock>
                {`suppose str = "Hello"
suppose num = 42
suppose arr = [1, 2, 3]
suppose obj = {name: "Alice"}

write("String type: " + type(str))  // string
write("Number type: " + type(num))  // number
write("Array type: " + type(arr))   // array
write("Object type: " + type(obj))  // object`}
            </CodeBlock>

            <DocsHeading level={2}>String Functions</DocsHeading>

            <DocsParagraph>
                Rui provides several built-in string manipulation functions:
            </DocsParagraph>

            <CodeBlock>
                {`suppose text = "Hello World"

write("Original: " + text)
write("Upper: " + text.upper())     // HELLO WORLD
write("Lower: " + text.lower())     // hello world
write("Split: " + text.split(" "))  // ["Hello", "World"]`}
            </CodeBlock>

            <DocsHeading level={2}>Array Functions</DocsHeading>

            <DocsParagraph>
                Arrays come with built-in methods for manipulation:
            </DocsParagraph>

            <CodeBlock>
                {`suppose arr = [1, 2, 3]

// Add elements
arr.push(4)
write("After push: " + arr)  // [1, 2, 3, 4]

// Remove last element
write("Pop result: " + arr.pop())  // 4
write("After pop: " + arr)        // [1, 2, 3]

// Add to beginning
arr.unshift(0)
write("After unshift: " + arr)    // [0, 1, 2, 3]

// Remove from beginning
write("Shift result: " + arr.shift()) // 0
write("After shift: " + arr)          // [1, 2, 3]`}
            </CodeBlock>

            <DocsHeading level={2}>Utility Functions</DocsHeading>

            <DocsParagraph>
                Rui provides utility functions for common operations:
            </DocsParagraph>

            <CodeBlock>
                {`suppose str = "123"
suppose arr = ["a", "b", "c"]

write("Parse int: " + parseInt(str))        // 123
write("Parse float: " + parseFloat("3.14")) // 3.14
write("Join array: " + join(arr, "-"))      // a-b-c
write("Length: " + length(arr))             // 3`}
            </CodeBlock>

            <DocsHeading level={2}>Array Indexing and Slicing</DocsHeading>

            <DocsParagraph>
                Access and manipulate array elements with indexing and slicing:
            </DocsParagraph>

            <CodeBlock>
                {`suppose arr = [10, 20, 30, 40, 50]

write("First element: " + arr[0])    // 10
write("Last element: " + arr[-1])    // 50
write("Middle element: " + arr[2])  // 30

// Slicing
write("Slice [1:4]: " + arr[1:4])   // [20, 30, 40]
write("Slice [:3]: " + arr[:3])     // [10, 20, 30]
write("Slice [2:]: " + arr[2:])     // [30, 40, 50]`}
            </CodeBlock>

            <DocsHeading level={2}>Object Property Access</DocsHeading>

            <DocsParagraph>
                Access object properties using dot notation:
            </DocsParagraph>

            <CodeBlock>
                {`suppose person = {
    name: "Alice",
    age: 25,
    city: "New York"
}

write("Person: " + person)
write("Name: " + person.name)
write("Age: " + person.age)
write("City: " + person.city)`}
            </CodeBlock>

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
