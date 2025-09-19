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

export default function CommentsPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Comments</DocsHeading>

            <DocsParagraph>
                Comments are essential for documenting your code and making it more readable. Rui supports both single-line and multiline comments to help you explain your code to others (and to yourself in the future).
            </DocsParagraph>

            <DocsHeading level={2}>Single-line Comments</DocsHeading>

            <DocsParagraph>
                Single-line comments start with <InlineCode>//</InlineCode> and continue until the end of the line:
            </DocsParagraph>

            <CodeBlock>
                {`// This is a single-line comment
suppose name = "Alice"  // Inline comment
write("Hello " + name)

// Comments can be on their own lines
// Or at the end of code lines
suppose age = 25  // Age of the person`}
            </CodeBlock>

            <DocsParagraph>
                Single-line comments are perfect for:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Quick explanations:</DocsStrong> Brief notes about what code does</DocsListItem>
                <DocsListItem><DocsStrong>Inline documentation:</DocsStrong> Comments on the same line as code</DocsListItem>
                <DocsListItem><DocsStrong>Temporary notes:</DocsStrong> Reminders or TODO items</DocsListItem>
                <DocsListItem><DocsStrong>Code disabling:</DocsStrong> Temporarily disable code without deleting it</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Multiline Comments</DocsHeading>

            <DocsParagraph>
                Multiline comments start with <InlineCode>/*</InlineCode> and end with <InlineCode>*/</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                {`/*
   This is a multiline comment
   that can span multiple lines
   and is completely ignored by Rui
*/

suppose age = 25

/* Another multiline comment */

write("Age: " + age)`}
            </CodeBlock>

            <DocsParagraph>
                Multiline comments are ideal for:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Detailed explanations:</DocsStrong> Comprehensive documentation of complex logic</DocsListItem>
                <DocsListItem><DocsStrong>Function documentation:</DocsStrong> Describe what functions do and their parameters</DocsListItem>
                <DocsListItem><DocsStrong>Code blocks:</DocsStrong> Comment out large sections of code</DocsListItem>
                <DocsListItem><DocsStrong>File headers:</DocsStrong> Document the purpose of entire files</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Comment Best Practices</DocsHeading>

            <DocsParagraph>
                Here are some guidelines for writing effective comments:
            </DocsParagraph>

            <DocsList>
                <DocsListItem><DocsStrong>Explain why, not what:</DocsStrong> Don&apos;t just repeat what the code does</DocsListItem>
                <DocsListItem><DocsStrong>Keep comments current:</DocsStrong> Update comments when you change code</DocsListItem>
                <DocsListItem><DocsStrong>Use clear language:</DocsStrong> Write comments that others can understand</DocsListItem>
                <DocsListItem><DocsStrong>Don&apos;t over-comment:</DocsStrong> Obvious code doesn&apos;t need comments</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Good Comment Examples</DocsHeading>

            <CodeBlock>
                {`// Calculate the area of a circle
define calculateArea(radius) {
    suppose pi = 3.14159
    return pi * radius * radius
}

/*
   This function processes student grades and determines
   their letter grade based on the following scale:
   A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
*/
define getLetterGrade(score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}

// TODO: Add support for weighted grades
// FIXME: Handle negative scores properly
suppose studentScore = 85
write("Grade: " + getLetterGrade(studentScore))`}
            </CodeBlock>

            <DocsHeading level={2}>Commenting Out Code</DocsHeading>

            <DocsParagraph>
                Comments are useful for temporarily disabling code without deleting it:
            </DocsParagraph>

            <CodeBlock>
                {`suppose name = "Alice"
suppose age = 25

// Temporarily disable this line
// write("Debug: name = " + name)

write("Hello, " + name)

/*
suppose debugMode = true
if (debugMode) {
    write("Debug information:")
    write("Name: " + name)
    write("Age: " + age)
}
*/`}
            </CodeBlock>

            <DocsHeading level={2}>Documentation Comments</DocsHeading>

            <DocsParagraph>
                Use comments to document functions and their parameters:
            </DocsParagraph>

            <CodeBlock>
                {`/*
   Function: calculateDistance
   Description: Calculates the distance between two points
   Parameters:
     - x1, y1: coordinates of first point
     - x2, y2: coordinates of second point
   Returns: distance as a number
*/
define calculateDistance(x1, y1, x2, y2) {
    suppose dx = x2 - x1
    suppose dy = y2 - y1
    return sqrt(dx * dx + dy * dy)
}

// Simple function with inline documentation
define greet(name) {  // name: person's name to greet
    return "Hello, " + name + "!"
}`}
            </CodeBlock>

            <DocsHeading level={2}>Common Comment Patterns</DocsHeading>

            <DocsParagraph>
                Here are some common patterns for using comments:
            </DocsParagraph>

            <CodeBlock>
                {`// ===========================================
// FILE: user_management.rui
// PURPOSE: Handle user registration and login
// AUTHOR: Your Name
// DATE: 2024-01-15
// ===========================================

// Configuration constants
suppose MAX_USERS = 100
suppose MIN_PASSWORD_LENGTH = 8

/*
   User registration function
   Validates input and creates new user account
*/
define registerUser(username, password, email) {
    // Validate username length
    if (length(username) < 3) {
        write("Error: Username too short")
        return false
    }
    
    // TODO: Add email validation
    // FIXME: Check for duplicate usernames
    
    // Create user object
    suppose user = {
        username: username,
        password: password,  // Note: In real app, hash this!
        email: email,
        createdAt: getCurrentTime()
    }
    
    return true
}

// Main program
write("User Management System")
// registerUser("alice", "password123", "alice@example.com")`}
            </CodeBlock>

            <DocsHeading level={2}>Comment Style Guidelines</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Be consistent:</DocsStrong> Use the same comment style throughout your code</DocsListItem>
                <DocsListItem><DocsStrong>Use proper capitalization:</DocsStrong> Start comments with capital letters</DocsListItem>
                <DocsListItem><DocsStrong>End with periods:</DocsStrong> Complete sentences should end with periods</DocsListItem>
                <DocsListItem><DocsStrong>Use TODO/FIXME:</DocsStrong> Mark temporary code and known issues</DocsListItem>
                <DocsListItem><DocsStrong>Group related comments:</DocsStrong> Use comment blocks for related sections</DocsListItem>
            </DocsList>

            <DocsParagraph>
                Comments are a crucial part of writing maintainable code. They help you and others understand your code better, making it easier to debug, modify, and extend your programs.
            </DocsParagraph>
        </DocsContent>
    )
}
