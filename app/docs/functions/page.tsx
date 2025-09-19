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

export default function FunctionsPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Functions</DocsHeading>

            <DocsParagraph>
                Functions allow you to organize your code into reusable blocks. In Rui, you define functions using the <InlineCode>define</InlineCode> keyword.
            </DocsParagraph>

            <DocsHeading level={2}>Defining Functions</DocsHeading>

            <DocsParagraph>
                Create a function using the <InlineCode>define</InlineCode> keyword followed by the function name and parameters:
            </DocsParagraph>

            <CodeBlock>
                {`define greet(name) {
    write("Hello, " + name + "!")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Calling Functions</DocsHeading>

            <DocsParagraph>
                To use a function, call it by name and provide any required arguments:
            </DocsParagraph>

            <CodeBlock>
                define greet(name) {'{'}{'\n'}    write(&quot;Hello, &quot; + name + &quot;!&quot;){'\n'}{'}'}{'\n'}{'\n'}{`{/* Call the function */}`}{'\n'}greet(&quot;Alice&quot;){'\n'}greet(&quot;Bob&quot;)
            </CodeBlock>

            <DocsHeading level={2}>Functions with Multiple Parameters</DocsHeading>

            <DocsParagraph>
                Functions can accept multiple parameters:
            </DocsParagraph>

            <CodeBlock>
                define add(a, b) {'{'}{'\n'}    suppose result = a + b{'\n'}    write(a + &quot; + &quot; + b + &quot; = &quot; + result){'\n'}{'}'}{'\n'}{'\n'}add(5, 3){'\n'}add(10, 7)
            </CodeBlock>

            <DocsHeading level={2}>Functions with Return Values</DocsHeading>

            <DocsParagraph>
                Functions can return values using the <InlineCode>return</InlineCode> keyword:
            </DocsParagraph>

            <CodeBlock>
                define multiply(a, b) {'{'}{'\n'}    return a * b{'\n'}{'}'}{'\n'}{'\n'}suppose result = multiply(4, 5){'\n'}write(&quot;4 * 5 = &quot; + result)
            </CodeBlock>

            <DocsHeading level={2}>Functions without Parameters</DocsHeading>

            <DocsParagraph>
                Functions don&apos;t need to have parameters:
            </DocsParagraph>

            <CodeBlock>
                define sayHello() {'{'}{'\n'}    write(&quot;Hello, World!&quot;){'\n'}{'}'}{'\n'}{'\n'}sayHello()
            </CodeBlock>

            <DocsHeading level={2}>Local Variables</DocsHeading>

            <DocsParagraph>
                Variables defined inside functions are local to that function:
            </DocsParagraph>

            <CodeBlock>
                define calculateArea(length, width) {'{'}{'\n'}    suppose area = length * width  {`{/* This variable is local to the function */}`}{'\n'}    return area{'\n'}{'}'}{'\n'}{'\n'}suppose result = calculateArea(5, 3){'\n'}write(&quot;Area: &quot; + result){'\n'}{`{/* write(area)  // This would cause an error - area is not defined here */}`}
            </CodeBlock>

            <DocsHeading level={2}>Example: Math Functions</DocsHeading>

            <DocsParagraph>
                Here are some useful math functions:
            </DocsParagraph>

            <CodeBlock>
                define square(number) {'{'}{'\n'}    return number * number{'\n'}{'}'}{'\n'}{'\n'}define cube(number) {'{'}{'\n'}    return number * number * number{'\n'}{'}'}{'\n'}{'\n'}define isEven(number) {'{'}{'\n'}    return number % 2 == 0{'\n'}{'}'}{'\n'}{'\n'}{`{/* Use the functions */}`}{'\n'}write(&quot;Square of 5: &quot; + square(5)){'\n'}write(&quot;Cube of 3: &quot; + cube(3)){'\n'}write(&quot;Is 8 even? &quot; + isEven(8)){'\n'}write(&quot;Is 7 even? &quot; + isEven(7))
            </CodeBlock>

            <DocsHeading level={2}>Example: String Functions</DocsHeading>

            <DocsParagraph>
                Here are some string manipulation functions:
            </DocsParagraph>

            <CodeBlock>
                define createGreeting(name, age) {'{'}{'\n'}    suppose greeting = &quot;Hello, &quot; + name + &quot;! You are &quot; + age + &quot; years old.&quot;{'\n'}    return greeting{'\n'}{'}'}{'\n'}{'\n'}define formatName(firstName, lastName) {'{'}{'\n'}    return firstName + &quot; &quot; + lastName{'\n'}{'}'}{'\n'}{'\n'}{`{/* Use the functions */}`}{'\n'}suppose message = createGreeting(&quot;Alice&quot;, 25){'\n'}write(message){'\n'}{'\n'}suppose fullName = formatName(&quot;John&quot;, &quot;Doe&quot;){'\n'}write(&quot;Full name: &quot; + fullName)
            </CodeBlock>

            <DocsHeading level={2}>Example: Calculator Functions</DocsHeading>

            <DocsParagraph>
                Here&apos;s a simple calculator with functions:
            </DocsParagraph>

            <CodeBlock>
                define add(a, b) {'{'}{'\n'}    return a + b{'\n'}{'}'}{'\n'}{'\n'}define subtract(a, b) {'{'}{'\n'}    return a - b{'\n'}{'}'}{'\n'}{'\n'}define multiply(a, b) {'{'}{'\n'}    return a * b{'\n'}{'}'}{'\n'}{'\n'}define divide(a, b) {'{'}{'\n'}    if (b != 0) {'{'}{'\n'}        return a / b{'\n'}    {'}'} else {'{'}{'\n'}        write(&quot;Error: Cannot divide by zero!&quot;){'\n'}        return 0{'\n'}    {'}'}{'\n'}{'}'}{'\n'}{'\n'}{`{/* Use the calculator */}`}{'\n'}suppose num1 = 10{'\n'}suppose num2 = 3{'\n'}{'\n'}write(&quot;Calculator Results:&quot;){'\n'}write(num1 + &quot; + &quot; + num2 + &quot; = &quot; + add(num1, num2)){'\n'}write(num1 + &quot; - &quot; + num2 + &quot; = &quot; + subtract(num1, num2)){'\n'}write(num1 + &quot; * &quot; + num2 + &quot; = &quot; + multiply(num1, num2)){'\n'}write(num1 + &quot; / &quot; + num2 + &quot; = &quot; + divide(num1, num2))
            </CodeBlock>

            <DocsHeading level={2}>Example: Temperature Converter</DocsHeading>

            <DocsParagraph>
                Here&apos;s a function to convert between Celsius and Fahrenheit:
            </DocsParagraph>

            <CodeBlock>
                define celsiusToFahrenheit(celsius) {'{'}{'\n'}    suppose fahrenheit = (celsius * 9 / 5) + 32{'\n'}    return fahrenheit{'\n'}{'}'}{'\n'}{'\n'}define fahrenheitToCelsius(fahrenheit) {'{'}{'\n'}    suppose celsius = (fahrenheit - 32) * 5 / 9{'\n'}    return celsius{'\n'}{'}'}{'\n'}{'\n'}{`{/* Convert temperatures */}`}{'\n'}suppose celsius = 25{'\n'}suppose fahrenheit = celsiusToFahrenheit(celsius){'\n'}write(celsius + &quot;°C = &quot; + fahrenheit + &quot;°F&quot;){'\n'}{'\n'}suppose fahrenheit = 77{'\n'}suppose celsius = fahrenheitToCelsius(fahrenheit){'\n'}write(fahrenheit + &quot;°F = &quot; + celsius + &quot;°C&quot;)
            </CodeBlock>

            <DocsHeading level={2}>Recursive Functions</DocsHeading>

            <DocsParagraph>
                Functions can call themselves, which is called recursion. This is useful for solving problems that can be broken down into smaller, similar problems:
            </DocsParagraph>

            <CodeBlock>
                {`define factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

write("Factorial of 5: " + factorial(5))  // 120`}
            </CodeBlock>

            <DocsParagraph>
                Here&apos;s another recursive example - calculating Fibonacci numbers:
            </DocsParagraph>

            <CodeBlock>
                {`define fibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

write("Fibonacci sequence:")
suppose i = 0
until (i < 10) {
    write("F(" + i + ") = " + fibonacci(i))
    suppose i = i + 1
}`}
            </CodeBlock>

            <DocsParagraph>
                <DocsStrong>Important:</DocsStrong> Recursive functions need a base case (stopping condition) to prevent infinite recursion.
            </DocsParagraph>

            <DocsHeading level={2}>Function Best Practices</DocsHeading>

            <DocsList ordered>
                <DocsListItem><DocsStrong>Use descriptive names</DocsStrong>: Function names should clearly describe what they do</DocsListItem>
                <DocsListItem><DocsStrong>Keep functions small</DocsStrong>: Each function should do one thing well</DocsListItem>
                <DocsListItem><DocsStrong>Use parameters</DocsStrong>: Make functions flexible by accepting parameters</DocsListItem>
                <DocsListItem><DocsStrong>Return values</DocsStrong>: Use return values to provide results</DocsListItem>
                <DocsListItem><DocsStrong>Document your functions</DocsStrong>: Add comments to explain what functions do</DocsListItem>
                <DocsListItem><DocsStrong>Handle recursion carefully</DocsStrong>: Always include a base case to prevent infinite recursion</DocsListItem>
            </DocsList>

            <CodeBlock>
                {`{/* Good function example */}`}{'\n'}define calculateCircleArea(radius) {'{'}{'\n'}    {`{/* Calculate the area of a circle given its radius */}`}{'\n'}    suppose pi = 3.14159{'\n'}    suppose area = pi * radius * radius{'\n'}    return area{'\n'}{'}'}{'\n'}{'\n'}{`{/* Use the function */}`}{'\n'}suppose radius = 5{'\n'}suppose area = calculateCircleArea(radius){'\n'}write(&quot;Area of circle with radius &quot; + radius + &quot;: &quot; + area)
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand functions, learn about <DocsLink href="/docs/booleans">Booleans & Logic</DocsLink> to work with true/false values and logical operations.
            </DocsParagraph>
        </DocsContent>
    )
}
