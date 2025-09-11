import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    InlineCode,
    DocsList,
    DocsListItem,
    DocsStrong,
} from "@/components/docs-content"

export default function StringsPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>String Manipulation in Rui</DocsHeading>

            <DocsParagraph>
                Strings are sequences of characters used to represent text in Rui. They support indexing, slicing, and various built-in methods for powerful text manipulation.
            </DocsParagraph>

            <DocsHeading level={2}>Creating Strings</DocsHeading>

            <DocsParagraph>
                In Rui, strings are created by enclosing text in double quotes. Use <InlineCode>suppose</InlineCode> to declare string variables:
            </DocsParagraph>

            <CodeBlock>
                {`// Creating strings
suppose name = "Alice"
suppose message = "Hello, World!"
suppose empty = ""

// Displaying strings
write(name)        // Output: Alice
write(message)     // Output: Hello, World!
write(empty)       // Output: (empty line)`}
            </CodeBlock>

            <DocsHeading level={2}>String Indexing</DocsHeading>

            <DocsParagraph>
                Access individual characters in a string using square brackets. Rui supports both positive and negative indexing:
            </DocsParagraph>

            <CodeBlock>
                {`suppose text = "Hello World"

write("First character: ", text[0])    // H
write("Last character: ", text[-1])    // d
write("Character at index 6: ", text[6])  // W`}
            </CodeBlock>

            <DocsHeading level={2}>String Slicing</DocsHeading>

            <DocsParagraph>
                Extract parts of a string using slicing with start and end indices:
            </DocsParagraph>

            <CodeBlock>
                {`suppose text = "Hello World"

write("First 5: ", text[:5])      // Hello
write("Last 5: ", text[-5:])      // World
write("Middle: ", text[2:8])      // llo Wo
write("From index 6: ", text[6:]) // World`}
            </CodeBlock>

            <DocsHeading level={2}>String Methods</DocsHeading>

            <DocsParagraph>
                Rui provides several built-in methods for string manipulation:
            </DocsParagraph>

            <CodeBlock>
                {`suppose text = "  Hello World  "

// Case conversion
write("Upper: ", text.upper())    //   HELLO WORLD
write("Lower: ", text.lower())    //   hello world

// Whitespace
write("Trimmed: ", text.trim())   // Hello World

// Splitting
suppose words = text.split(" ")   // ["", "", "Hello", "World", "", ""]

// Replacement
write("Replaced: ", text.replace("World", "Rui"))  //   Hello Rui

// Checking
write("Starts with 'Hello': ", text.startsWith("Hello"))  // false (due to spaces)
write("Ends with 'World': ", text.endsWith("World"))      // false (due to spaces)
write("Contains 'World': ", text.indexOf("World") >= 0)   // true`}
            </CodeBlock>

            <DocsHeading level={2}>String Operations</DocsHeading>

            <DocsParagraph>
                Strings support various operations including concatenation and repetition:
            </DocsParagraph>

            <CodeBlock>
                {`// Concatenation
suppose result = "Hello" + " " + "World"  // Hello World

// Repetition
suppose repeated = "Hello" * 3            // HelloHelloHello

// Mixed types
suppose formatted = "Age: " + 25          // Age: 25`}
            </CodeBlock>

            <DocsHeading level={2}>Built-in String Functions</DocsHeading>

            <DocsParagraph>
                Rui provides several built-in functions for string manipulation:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>length(value):</DocsStrong> Get length of strings or arrays</DocsListItem>
                <DocsListItem><DocsStrong>join(array, delimiter):</DocsStrong> Join array elements with delimiter</DocsListItem>
                <DocsListItem><DocsStrong>parseInt(string):</DocsStrong> Convert string to integer</DocsListItem>
                <DocsListItem><DocsStrong>parseFloat(string):</DocsStrong> Convert string to float</DocsListItem>
            </DocsList>

            <CodeBlock>
                {`suppose arr = ["a", "b", "c"]
write("Joined: ", join(arr, "-"))        // a-b-c

suppose numStr = "123"
write("Parsed: ", parseInt(numStr))      // 123

suppose text = "Hello"
write("Length: ", length(text))          // 5`}
            </CodeBlock>

            <DocsHeading level={2}>Advanced String Processing</DocsHeading>

            <DocsParagraph>
                Here&apos;s a practical example of text processing using string methods:
            </DocsParagraph>

            <CodeBlock>
                {`// Process a sentence
suppose sentence = "The quick brown fox jumps over the lazy dog"
write("Original: ", sentence)

// Split into words
suppose words = sentence.split(" ")
write("Words: ", words)
write("Word count: ", length(words))

// Find longest word
suppose longest = words[0]
suppose i = 1
until (i >= length(words)) {
    if (length(words[i]) > length(longest)) {
        longest = words[i]
    }
    i = i + 1
}
write("Longest word: ", longest)

// Join with different delimiter
write("Joined with dashes: ", join(words, "-"))`}
            </CodeBlock>

            <DocsHeading level={2}>String Comparison</DocsHeading>

            <DocsParagraph>
                Compare strings using comparison operators:
            </DocsParagraph>

            <CodeBlock>
                {`suppose name1 = "Alice"
suppose name2 = "Bob"
suppose name3 = "Alice"

// Equality
write(name1 == name2)  // false
write(name1 == name3)  // true

// Lexicographic comparison
write(name1 < name2)   // true (Alice comes before Bob)
write(name1 > name2)   // false`}
            </CodeBlock>

            <DocsHeading level={2}>Method Chaining</DocsHeading>

            <DocsParagraph>
                Rui supports method chaining for more concise code:
            </DocsParagraph>

            <CodeBlock>
                {`suppose text = "  Hello World  "

// Chain multiple methods
suppose result = text.trim().lower().replace("world", "rui")
write(result)  // hello rui

// More complex chaining
suppose processed = "  THE QUICK BROWN FOX  "
suppose final = processed.trim().lower().replace(" ", "-")
write(final)   // the-quick-brown-fox`}
            </CodeBlock>

            <DocsHeading level={2}>Best Practices</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Use suppose for declarations:</DocsStrong> Always use <InlineCode>suppose</InlineCode> when declaring new string variables</DocsListItem>
                <DocsListItem><DocsStrong>Handle whitespace:</DocsStrong> Use <InlineCode>trim()</InlineCode> to clean user input</DocsListItem>
                <DocsListItem><DocsStrong>Check bounds:</DocsStrong> Be careful with indexing to avoid out-of-bounds errors</DocsListItem>
                <DocsListItem><DocsStrong>Use method chaining:</DocsStrong> Chain methods for cleaner, more readable code</DocsListItem>
            </DocsList>

            <DocsParagraph>
                String manipulation is a core feature of Rui, providing powerful tools for text processing and data handling. Practice these concepts to master string operations in Rui!
            </DocsParagraph>
        </DocsContent>
    )
}
