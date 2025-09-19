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

export default function GettingStartedPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Getting Started</DocsHeading>

            <DocsParagraph>
                Welcome to Rui! This guide will help you write your first programs and get familiar with the language. We&apos;ll start with simple examples and gradually build up to more complex programs.
            </DocsParagraph>

            <DocsHeading level={2}>Your First Program</DocsHeading>

            <DocsParagraph>
                Let&apos;s start with the classic &quot;Hello, World!&quot; program. Create a file called <InlineCode>hello.rui</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                {`write("Hello, World!")`}
            </CodeBlock>

            <DocsParagraph>
                Run it with:
            </DocsParagraph>

            <CodeBlock>
                {`rui hello.rui`}
            </CodeBlock>

            <DocsParagraph>
                You should see:
            </DocsParagraph>

            <CodeBlock>
                {`Hello, World!`}
            </CodeBlock>

            <DocsHeading level={2}>Basic Calculator</DocsHeading>

            <DocsParagraph>
                Let&apos;s build a simple calculator that demonstrates variables, functions, and basic operations:
            </DocsParagraph>

            <CodeBlock>
                {`define add(a, b) {
    return a + b
}

define subtract(a, b) {
    return a - b
}

define multiply(a, b) {
    return a * b
}

define divide(a, b) {
    if (b != 0) {
        return a / b
    } else {
        write("Error: Cannot divide by zero!")
        return 0
    }
}

write("Calculator Demo:")
write("5 + 3 = " + add(5, 3))
write("10 - 4 = " + subtract(10, 4))
write("6 * 7 = " + multiply(6, 7))
write("15 / 3 = " + divide(15, 3))`}
            </CodeBlock>

            <DocsHeading level={2}>Array Operations</DocsHeading>

            <DocsParagraph>
                Here&apos;s an example that demonstrates array creation, manipulation, and iteration:
            </DocsParagraph>

            <CodeBlock>
                {`suppose numbers = [1, 2, 3, 4, 5]

write("Original: " + numbers)

// Add elements
numbers.push(6, 7)
write("After push: " + numbers)

// Remove elements
write("Popped: " + numbers.pop())
write("Final: " + numbers)

// Find sum
suppose sum = 0
suppose i = 0
until (i < length(numbers)) {
    sum = sum + numbers[i]
    i = i + 1
}
write("Sum: " + sum)

// Find average
suppose average = sum / length(numbers)
write("Average: " + average)`}
            </CodeBlock>

            <DocsHeading level={2}>String Manipulation</DocsHeading>

            <DocsParagraph>
                This example shows various string operations and methods:
            </DocsParagraph>

            <CodeBlock>
                {`suppose text = "Hello World"

write("Original: " + text)
write("Upper: " + text.upper())
write("Lower: " + text.lower())
write("Split: " + text.split(" "))

// Process a sentence
suppose sentence = "The quick brown fox jumps over the lazy dog"
write("Original: " + sentence)

// Split into words
suppose words = sentence.split(" ")
write("Words: " + words)
write("Word count: " + length(words))

// Find longest word
suppose longest = words[0]
suppose i = 1
until (i < length(words)) {
    if (length(words[i]) > length(longest)) {
        longest = words[i]
    }
    i = i + 1
}
write("Longest word: " + longest)`}
            </CodeBlock>

            <DocsHeading level={2}>Control Flow Example</DocsHeading>

            <DocsParagraph>
                This example demonstrates conditionals and loops with a grade calculator:
            </DocsParagraph>

            <CodeBlock>
                {`suppose scores = [85, 92, 78, 96, 88]

write("Student Grade Report:")
write("====================")

suppose i = 0
until (i < length(scores)) {
    suppose score = scores[i]
    suppose grade = ""
    
    if (score >= 90) {
        grade = "A"
    } else if (score >= 80) {
        grade = "B"
    } else if (score >= 70) {
        grade = "C"
    } else if (score >= 60) {
        grade = "D"
    } else {
        grade = "F"
    }
    
    write("Score " + score + ": " + grade)
    i = i + 1
}

// Calculate class average
suppose total = 0
suppose j = 0
until (j < length(scores)) {
    total = total + scores[j]
    j = j + 1
}
suppose average = total / length(scores)
write("Class Average: " + average)`}
            </CodeBlock>

            <DocsHeading level={2}>Object-Oriented Example</DocsHeading>

            <DocsParagraph>
                This example shows how to work with objects and their properties:
            </DocsParagraph>

            <CodeBlock>
                {`suppose person = {
    name: "Alice",
    age: 25,
    city: "New York",
    hobbies: ["reading", "coding", "hiking"]
}

write("Person Information:")
write("Name: " + person.name)
write("Age: " + person.age)
write("City: " + person.city)
write("Hobbies: " + person.hobbies)

// Update information
person.age = 26
person.city = "Boston"
person.hobbies.push("photography")

write("Updated Information:")
write("Age: " + person.age)
write("City: " + person.city)
write("Hobbies: " + person.hobbies)

// Display hobbies
write("Hobby List:")
suppose k = 0
until (k < length(person.hobbies)) {
    write("- " + person.hobbies[k])
    k = k + 1
}`}
            </CodeBlock>

            <DocsHeading level={2}>Recursive Function Example</DocsHeading>

            <DocsParagraph>
                This example demonstrates recursion with a factorial function:
            </DocsParagraph>

            <CodeBlock>
                {`define factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

write("Factorial Calculator:")
suppose num = 5
write("Factorial of " + num + ": " + factorial(num))

// Calculate factorials for multiple numbers
suppose numbers = [1, 2, 3, 4, 5, 6]
write("Factorial Table:")
suppose i = 0
until (i < length(numbers)) {
    suppose n = numbers[i]
    write(n + "! = " + factorial(n))
    i = i + 1
}`}
            </CodeBlock>

            <DocsHeading level={2}>Complete Program Example</DocsHeading>

            <DocsParagraph>
                Here&apos;s a complete program that combines many Rui features - a simple student management system:
            </DocsParagraph>

            <CodeBlock>
                {`// Student Management System
write("=== Student Management System ===")

// Define functions
define createStudent(name, age, major) {
    return {
        name: name,
        age: age,
        major: major,
        grades: []
    }
}

define addGrade(student, grade) {
    student.grades.push(grade)
}

define calculateAverage(student) {
    if (length(student.grades) == 0) {
        return 0
    }
    
    suppose sum = 0
    suppose i = 0
    until (i < length(student.grades)) {
        sum = sum + student.grades[i]
        i = i + 1
    }
    
    return sum / length(student.grades)
}

define getLetterGrade(average) {
    if (average >= 90) {
        return "A"
    } else if (average >= 80) {
        return "B"
    } else if (average >= 70) {
        return "C"
    } else if (average >= 60) {
        return "D"
    } else {
        return "F"
    }
}

// Create students
suppose students = [
    createStudent("Alice", 20, "Computer Science"),
    createStudent("Bob", 19, "Mathematics"),
    createStudent("Charlie", 21, "Physics")
]

// Add grades
addGrade(students[0], 85)
addGrade(students[0], 92)
addGrade(students[0], 78)

addGrade(students[1], 90)
addGrade(students[1], 88)
addGrade(students[1], 95)

addGrade(students[2], 75)
addGrade(students[2], 82)
addGrade(students[2], 79)

// Display student information
suppose i = 0
until (i < length(students)) {
    suppose student = students[i]
    suppose average = calculateAverage(student)
    suppose letterGrade = getLetterGrade(average)
    
    write("Student: " + student.name)
    write("Major: " + student.major)
    write("Grades: " + student.grades)
    write("Average: " + average)
    write("Letter Grade: " + letterGrade)
    write("---")
    
    i = i + 1
}

write("Program completed!")`}
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Congratulations! You&apos;ve learned the basics of Rui programming. Here&apos;s what to explore next:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Language Basics:</DocsStrong> Learn about syntax and statement termination</DocsListItem>
                <DocsListItem><DocsStrong>Data Types:</DocsStrong> Understand numbers, strings, booleans, and null</DocsListItem>
                <DocsListItem><DocsStrong>Variables:</DocsStrong> Master variable declaration and naming rules</DocsListItem>
                <DocsListItem><DocsStrong>Operators:</DocsStrong> Explore arithmetic, comparison, and logical operators</DocsListItem>
                <DocsListItem><DocsStrong>Functions:</DocsStrong> Learn to create reusable code blocks</DocsListItem>
                <DocsListItem><DocsStrong>Data Structures:</DocsStrong> Work with arrays and objects</DocsListItem>
                <DocsListItem><DocsStrong>Built-in Functions:</DocsStrong> Discover Rui&apos;s built-in capabilities</DocsListItem>
            </DocsList>

            <DocsParagraph>
                Start with the <InlineCode>Language Basics</InlineCode> section to build a solid foundation, then explore the other topics based on your interests and needs.
            </DocsParagraph>
        </DocsContent>
    )
}
