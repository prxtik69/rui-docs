import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    DocsLink,
    DocsList,
    DocsListItem,
    DocsStrong,
    CodeBlock,
} from "@/components/docs-content";

export default function ErrorHandlingPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Error Handling in Rui</DocsHeading>
            <DocsParagraph>
                Rui provides a straightforward way to handle common mistakes and errors
                in your code. Below are some examples of errors and how you might
                encounter them.
            </DocsParagraph>

            <DocsHeading level={2}>Variable Name Errors</DocsHeading>
            <DocsParagraph>
                Rui has specific rules for variable names. These errors occur when you violate naming conventions:
            </DocsParagraph>
            <CodeBlock>{`// These will cause clear error messages:

// suppose 123name = "invalid"     // Error: variable names cannot start with a number
// suppose first-name = "invalid"  // Error: variable names cannot contain hyphens
// suppose if = "invalid"         // Error: 'if' is a reserved word

// Valid variable names
suppose validName = "Hello"
suppose name123 = "World"
suppose _private = "Private"
suppose snake_case = "Snake"`}</CodeBlock>

            <DocsHeading level={2}>Type Errors</DocsHeading>
            <DocsParagraph>
                Type errors occur when you try to perform operations on incompatible data types:
            </DocsParagraph>
            <CodeBlock>{`suppose str = "hello"
suppose num = 42

// These will cause runtime errors:
// write(str + num)  // Works due to automatic conversion
// write(str - num)  // Error: cannot subtract number from string

// Valid operations
write(str + " " + num)  // "hello 42"
write(num + 10)         // 52`}</CodeBlock>

            <DocsHeading level={2}>Syntax Errors</DocsHeading>
            <DocsParagraph>
                Syntax errors occur when the code does not follow the correct structure
                of the language.
            </DocsParagraph>
            <CodeBlock>{`// Missing closing brace
  define greet(name) {
      write("Hello, " + name + "!")
  }  // Missing closing brace
  
  // Missing operator
  suppose result = 5 3  // Missing operator between 5 and 3
  
  // Unmatched quotes
  suppose text = "Hello World  // Missing closing quote
  `}</CodeBlock>

            <DocsHeading level={2}>Runtime Errors</DocsHeading>
            <DocsParagraph>
                These errors occur while the program is running.
            </DocsParagraph>
            <CodeBlock>{`// Division by zero
  suppose result = 10 / 0  // Error: Division by zero
  
  // Accessing undefined variable
  write(undefinedVar)  // Error: Variable not defined
  
  // Calling a non-function
  suppose notAFunction = 42
  notAFunction()  // Error: Trying to call a number
  `}</CodeBlock>

            <DocsHeading level={2}>Logical Errors</DocsHeading>
            <DocsParagraph>
                Logical errors are mistakes in the program&apos;s logic, often harder to
                detect.
            </DocsParagraph>
            <CodeBlock>{`// Incorrect loop condition
  suppose i = 0
  until (i < 5) {
      write("Count: " + i)
      // Missing: i = i + 1  // This creates an infinite loop
  }
  
  // Wrong comparison
  suppose age = 18
  if (age = 18) {
      write("You are 18")  // Should use == not =
  }
  
  // Off-by-one error
  suppose numbers = [1, 2, 3, 4, 5]
  suppose i = 0
  until (i <= length(numbers)) {
      write(numbers[i])  // Will try to access index 5 (out of bounds)
      i = i + 1
  }
  `}</CodeBlock>

            <DocsHeading level={2}>Type Errors</DocsHeading>
            <DocsParagraph>
                Type errors occur when an operation is performed on incompatible types.
            </DocsParagraph>
            <CodeBlock>{`// Adding number to string
  suppose result = "Hello" + 5  // Valid in Rui (concatenation), but might not be intended
  
  // Using string as number
  suppose num = "abc" * 2  // Error: Cannot multiply string with number
  
  // Accessing property of non-object
  suppose x = 42
  write(x.name)  // Error: Number has no property 'name'
  `}</CodeBlock>

            <DocsHeading level={2}>Best Practices</DocsHeading>
            <DocsList>
                <DocsListItem>Always check variable initialization.</DocsListItem>
                <DocsListItem>
                    Use meaningful variable and function names.
                </DocsListItem>
                <DocsListItem>Test your code frequently.</DocsListItem>
                <DocsListItem>
                    Avoid infinite loops by ensuring correct loop conditions.
                </DocsListItem>
            </DocsList>

            <DocsHeading level={2}>What&apos;s Next?</DocsHeading>
            <DocsParagraph>
                Learn how to debug Rui code efficiently using built-in tools and error
                messages.
            </DocsParagraph>

            <DocsHeading level={2}>Version Information</DocsHeading>
            <DocsParagraph>
                <DocsStrong>Current Version:</DocsStrong> 1.0.9
                <br />
                <DocsStrong>Author:</DocsStrong> Pratik Deshpande
            </DocsParagraph>

            <DocsHeading level={2}>Next Steps</DocsHeading>
            <DocsList>
                <DocsListItem>
                    <DocsLink href="/docs/debugging">Debugging in Rui</DocsLink>
                </DocsListItem>
                <DocsListItem>
                    <DocsLink href="/docs/performance">Performance Optimization</DocsLink>
                </DocsListItem>
            </DocsList>
        </DocsContent>
    );
}
