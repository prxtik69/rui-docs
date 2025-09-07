import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    InlineCode,
    DocsLink
} from "@/components/docs-content"

export default function ConditionalsPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Conditionals</DocsHeading>

            <DocsParagraph>
                Conditionals allow your program to make decisions and execute different code based on conditions. Rui supports <InlineCode>if</InlineCode>, <InlineCode>else</InlineCode>, and <InlineCode>until</InlineCode> statements.
            </DocsParagraph>

            <DocsHeading level={2}>If Statements</DocsHeading>

            <DocsParagraph>
                Use <InlineCode>if</InlineCode> statements to execute code only when a condition is true:
            </DocsParagraph>

            <CodeBlock>
                {`suppose age = 18

if (age >= 18) {
    write("You are an adult")
}`}
            </CodeBlock>

            <DocsHeading level={2}>If-Else Statements</DocsHeading>

            <DocsParagraph>
                Use <InlineCode>else</InlineCode> to provide an alternative when the condition is false:
            </DocsParagraph>

            <CodeBlock>
                {`suppose age = 16

if (age >= 18) {
    write("You are an adult")
} else {
    write("You are a minor")
}`}
            </CodeBlock>

            <DocsHeading level={2}>If-Else If-Else Statements</DocsHeading>

            <DocsParagraph>
                Chain multiple conditions using <InlineCode>else if</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                {`suppose score = 85

if (score >= 90) {
    write("Grade: A")
} else if (score >= 80) {
    write("Grade: B")
} else if (score >= 70) {
    write("Grade: C")
} else if (score >= 60) {
    write("Grade: D")
} else {
    write("Grade: F")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Until Loops</DocsHeading>

            <DocsParagraph>
                Use <InlineCode>until</InlineCode> loops to repeat code until a condition becomes true:
            </DocsParagraph>

            <CodeBlock>
                {`suppose count = 0

until (count >= 5) {
    write(count)
    suppose count = count + 1
}`}
            </CodeBlock>

            <DocsHeading level={2}>Comparison in Conditions</DocsHeading>

            <DocsParagraph>
                You can use all comparison operators in conditions:
            </DocsParagraph>

            <CodeBlock>
                {`suppose temperature = 25

if (temperature > 30) {
    write("It's hot outside")
} else if (temperature > 20) {
    write("It's warm outside")
} else if (temperature > 10) {
    write("It's cool outside")
} else {
    write("It's cold outside")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Logical Operators in Conditions</DocsHeading>

            <DocsParagraph>
                Combine conditions using logical operators:
            </DocsParagraph>

            <CodeBlock>
                {`suppose age = 25
suppose hasLicense = true

if (age >= 18 and hasLicense) {
    write("You can drive")
} else {
    write("You cannot drive")
}`}
            </CodeBlock>

            <CodeBlock>
                {`suppose weather = "sunny"
suppose temperature = 28

if (weather == "sunny" or temperature > 25) {
    write("Great day for the beach")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Nested Conditions</DocsHeading>

            <DocsParagraph>
                You can nest conditions inside other conditions:
            </DocsParagraph>

            <CodeBlock>
                {`suppose age = 20
suppose hasJob = true
suppose hasCar = false

if (age >= 18) {
    if (hasJob) {
        if (hasCar) {
            write("You can drive to work")
        } else {
            write("You need to find transportation")
        }
    } else {
        write("You should look for a job")
    }
} else {
    write("You're too young to work")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Example: Number Guessing Game</DocsHeading>

            <DocsParagraph>
                Here&apos;s a simple number guessing game:
            </DocsParagraph>

            <CodeBlock>
                {`suppose secretNumber = 7
suppose guess = 5

if (guess == secretNumber) {
    write("Congratulations! You guessed correctly!")
} else if (guess < secretNumber) {
    write("Too low! Try a higher number.")
} else {
    write("Too high! Try a lower number.")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Example: Countdown Timer</DocsHeading>

            <DocsParagraph>
                Here&apos;s a countdown using an until loop:
            </DocsParagraph>

            <CodeBlock>
                {`suppose countdown = 5

write("Starting countdown...")
until (countdown <= 0) {
    write(countdown)
    suppose countdown = countdown - 1
}
write("Blast off!")`}
            </CodeBlock>

            <DocsHeading level={2}>Example: Grade Calculator</DocsHeading>

            <DocsParagraph>
                Here&apos;s a more complex example that calculates grades:
            </DocsParagraph>

            <CodeBlock>
                {`// Student information
suppose studentName = "Alice"
suppose mathScore = 85
suppose scienceScore = 92
suppose englishScore = 78

// Calculate average
suppose average = (mathScore + scienceScore + englishScore) / 3

// Determine grade
if (average >= 90) {
    suppose grade = "A"
} else if (average >= 80) {
    suppose grade = "B"
} else if (average >= 70) {
    suppose grade = "C"
} else if (average >= 60) {
    suppose grade = "D"
} else {
    suppose grade = "F"
}

// Display results
write("Student: " + studentName)
write("Math: " + mathScore)
write("Science: " + scienceScore)
write("English: " + englishScore)
write("Average: " + average)
write("Grade: " + grade)`}
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand conditionals, learn about <DocsLink href="/docs/functions">Functions</DocsLink> to organize and reuse your code.
            </DocsParagraph>
        </DocsContent>
    )
}