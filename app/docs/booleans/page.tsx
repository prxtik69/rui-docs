import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    InlineCode,
    DocsList,
    DocsListItem,
    DocsLink,

} from "@/components/docs-content"

export default function BooleansPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Booleans & Logic</DocsHeading>

            <DocsParagraph>
                Booleans are data types that can only have two values: <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>. They are essential for making decisions in your programs and controlling program flow.
            </DocsParagraph>

            <DocsHeading level={2}>Boolean Values</DocsHeading>

            <DocsParagraph>
                Rui has two boolean values:
            </DocsParagraph>

            <CodeBlock>
                {`suppose isTrue = true
suppose isFalse = false

write("True: " + isTrue)
write("False: " + isFalse)`}
            </CodeBlock>

            <DocsHeading level={2}>Boolean Expressions</DocsHeading>

            <DocsParagraph>
                Boolean expressions are expressions that evaluate to <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                {`suppose age = 18
suppose hasLicense = true

// Comparison expressions
suppose isAdult = age >= 18        // true
suppose canDrive = age >= 16 and hasLicense  // true
suppose isTeenager = age >= 13 and age < 20  // true`}
            </CodeBlock>

            <DocsHeading level={2}>Logical Operators</DocsHeading>

            <DocsParagraph>
                Rui supports three logical operators for working with booleans:
            </DocsParagraph>

            <DocsHeading level={3}>AND Operator (<InlineCode>and</InlineCode>)</DocsHeading>

            <DocsParagraph>
                The <InlineCode>and</InlineCode> operator returns <InlineCode>true</InlineCode> only if both operands are <InlineCode>true</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                {`suppose a = true
suppose b = false

suppose result1 = a and a    // true
suppose result2 = a and b    // false
suppose result3 = b and b    // false

write("true and true: " + result1)
write("true and false: " + result2)
write("false and false: " + result3)`}
            </CodeBlock>

            <DocsHeading level={3}>OR Operator (<InlineCode>or</InlineCode>)</DocsHeading>

            <DocsParagraph>
                The <InlineCode>or</InlineCode> operator returns <InlineCode>true</InlineCode> if at least one operand is <InlineCode>true</InlineCode>:
            </DocsParagraph>

            <CodeBlock>
                {`suppose a = true
suppose b = false

suppose result1 = a or a     // true
suppose result2 = a or b     // true
suppose result3 = b or b     // false

write("true or true: " + result1)
write("true or false: " + result2)
write("false or false: " + result3)`}
            </CodeBlock>

            <DocsHeading level={3}>NOT Operator (<InlineCode>not</InlineCode>)</DocsHeading>

            <DocsParagraph>
                The <InlineCode>not</InlineCode> operator reverses the boolean value:
            </DocsParagraph>

            <CodeBlock>
                {`suppose a = true
suppose b = false

suppose result1 = not a      // false
suppose result2 = not b      // true

write("not true: " + result1)
write("not false: " + result2)`}
            </CodeBlock>

            <DocsHeading level={2}>Truth Tables</DocsHeading>

            <DocsParagraph>
                Here are the truth tables for logical operators:
            </DocsParagraph>

            <DocsHeading level={3}>AND Truth Table</DocsHeading>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-slate-200 dark:border-slate-700 rounded-lg">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                        <tr>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">A</th>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">B</th>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">A and B</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocsHeading level={3}>OR Truth Table</DocsHeading>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-slate-200 dark:border-slate-700 rounded-lg">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                        <tr>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">A</th>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">B</th>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">A or B</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocsHeading level={3}>NOT Truth Table</DocsHeading>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-slate-200 dark:border-slate-700 rounded-lg">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                        <tr>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">A</th>
                            <th className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left">not A</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>false</InlineCode></td>
                            <td className="border border-slate-200 dark:border-slate-700 px-4 py-2"><InlineCode>true</InlineCode></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DocsHeading level={2}>Complex Boolean Expressions</DocsHeading>

            <DocsParagraph>
                You can combine multiple logical operators:
            </DocsParagraph>

            <CodeBlock>
                {`suppose age = 25
suppose hasLicense = true
suppose hasCar = false
suppose hasJob = true

// Complex conditions
suppose canDrive = age >= 18 and hasLicense
suppose canAffordCar = hasJob and (age >= 18 or hasLicense)
suppose needsTransportation = not hasCar and hasJob

write("Can drive: " + canDrive)
write("Can afford car: " + canAffordCar)
write("Needs transportation: " + needsTransportation)`}
            </CodeBlock>

            <DocsHeading level={2}>Boolean Functions</DocsHeading>

            <DocsParagraph>
                Functions can return boolean values:
            </DocsParagraph>

            <CodeBlock>
                {`define isEven(number) {
    return number % 2 == 0
}

define isPositive(number) {
    return number > 0
}

define isInRange(number, min, max) {
    return number >= min and number <= max
}

// Use the functions
write("Is 8 even? " + isEven(8))
write("Is 7 even? " + isEven(7))
write("Is 5 positive? " + isPositive(5))
write("Is -3 positive? " + isPositive(-3))
write("Is 15 in range 10-20? " + isInRange(15, 10, 20))`}
            </CodeBlock>

            <DocsHeading level={2}>Boolean in Conditionals</DocsHeading>

            <DocsParagraph>
                Booleans are commonly used in <InlineCode>if</InlineCode> statements and loops:
            </DocsParagraph>

            <CodeBlock>
                {`suppose isRaining = true
suppose hasUmbrella = false

if (isRaining and not hasUmbrella) {
    write("You'll get wet!")
} else if (isRaining and hasUmbrella) {
    write("You're prepared for the rain")
} else {
    write("No need for an umbrella")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Example: User Authentication</DocsHeading>

            <DocsParagraph>
                Here&apos;s an example of boolean logic for user authentication:
            </DocsParagraph>

            <CodeBlock>
                {`define checkLogin(username, password) {
    suppose correctUsername = "admin"
    suppose correctPassword = "password123"

    suppose usernameValid = username == correctUsername
    suppose passwordValid = password == correctPassword

    return usernameValid and passwordValid
}

// Test the login function
suppose username = "admin"
suppose password = "password123"

if (checkLogin(username, password)) {
    write("Login successful!")
} else {
    write("Invalid username or password")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Example: Grade Checker</DocsHeading>

            <DocsParagraph>
                Here&apos;s an example that uses boolean logic to check grades:
            </DocsParagraph>

            <CodeBlock>
                {`define isPassingGrade(score) {
    return score >= 60
}

define isHonorRoll(score) {
    return score >= 90
}

define canGraduate(score, attendance) {
    return isPassingGrade(score) and attendance >= 0.8
}

// Check student status
suppose studentScore = 85
suppose attendanceRate = 0.9

write("Student Results:")
write("Passing grade: " + isPassingGrade(studentScore))
write("Honor roll: " + isHonorRoll(studentScore))
write("Can graduate: " + canGraduate(studentScore, attendanceRate))`}
            </CodeBlock>

            <DocsHeading level={2}>Example: Weather App</DocsHeading>

            <DocsParagraph>
                Here&apos;s a weather app that uses boolean logic:
            </DocsParagraph>

            <CodeBlock>
                {`define shouldWearJacket(temperature, isRaining) {
    return temperature < 15 or isRaining
}

define shouldStayInside(temperature, isRaining, windSpeed) {
    return temperature < 0 or (isRaining and windSpeed > 30)
}

// Weather conditions
suppose temperature = 12
suppose isRaining = true
suppose windSpeed = 25

write("Weather Advisory:")
write("Wear jacket: " + shouldWearJacket(temperature, isRaining))
write("Stay inside: " + shouldStayInside(temperature, isRaining, windSpeed))`}
            </CodeBlock>

            <DocsHeading level={2}>Boolean Short-Circuiting</DocsHeading>

            <DocsParagraph>
                Rui uses short-circuit evaluation for logical operators:
            </DocsParagraph>

            <DocsList>
                <DocsListItem>For <InlineCode>and</InlineCode>: If the first operand is <InlineCode>false</InlineCode>, the second operand is not evaluated</DocsListItem>
                <DocsListItem>For <InlineCode>or</InlineCode>: If the first operand is <InlineCode>true</InlineCode>, the second operand is not evaluated</DocsListItem>
            </DocsList>

            <CodeBlock>
                {`define expensiveOperation() {
    write("This is expensive!")
    return true
}

// Short-circuiting example
suppose result1 = false and expensiveOperation()  // expensiveOperation() is not called
suppose result2 = true or expensiveOperation()    // expensiveOperation() is not called`}
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand booleans and logic, learn about <DocsLink href="/docs/cli">CLI Usage</DocsLink> to run Rui programs from the command line.
            </DocsParagraph>
        </DocsContent>
    )
}