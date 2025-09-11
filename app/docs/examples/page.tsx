import {
    DocsContent,
    DocsHeading,
    DocsParagraph,
    CodeBlock,
    DocsList,
    DocsListItem,
    DocsLink,
    DocsStrong
} from "@/components/docs-content"

export default function ExamplesPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Examples</DocsHeading>

            <DocsParagraph>
                This section contains complete, working examples that demonstrate Rui&apos;s capabilities. These examples range from simple beginner programs to more complex applications that showcase advanced features.
            </DocsParagraph>

            <DocsHeading level={2}>Complete Program Example</DocsHeading>

            <DocsParagraph>
                Here&apos;s a comprehensive example that demonstrates most of Rui&apos;s features:
            </DocsParagraph>

            <CodeBlock>
                {`// Simple variable declaration
suppose name = "Alice"
suppose age = 25

// Function definition
define greet(person) {
    write("Hello, " + person + "!")
}

// Conditional logic
if (age >= 18) {
    write("You are an adult")
} else {
    write("You are a minor")
}

// Call function
greet(name)

// Array operations
suppose numbers = [1, 2, 3, 4, 5]
numbers.push(6, 7)
write("Numbers: " + numbers)

// String manipulation
suppose text = "Hello World"
write("First 5 chars: " + text[:5])
write("Uppercase: " + text.upper())

// Object usage
suppose person = {
    name: "Bob",
    age: 30,
    hobbies: ["reading", "coding"]
}
write("Person: " + person.name + " has " + length(person.hobbies) + " hobbies")`}
            </CodeBlock>

            <DocsHeading level={2}>Advanced Example: Text Processing</DocsHeading>

            <DocsParagraph>
                This example demonstrates advanced string manipulation and array processing:
            </DocsParagraph>

            <CodeBlock>
                {`// Process a sentence
suppose sentence = "The quick brown fox jumps over the lazy dog"
write("Original: " + sentence)

// Split into words
suppose words = sentence.split(" ")
write("Words: " + words)
write("Word count: " + length(words))

// Find longest word
suppose longest = words[0]
suppose i = 1
until (i >= length(words)) {
    if (length(words[i]) > length(longest)) {
        longest = words[i]
    }
    i = i + 1
}
write("Longest word: " + longest)

// Join with different delimiter
write("Joined with dashes: " + join(words, "-"))

// Count word frequencies
define countWords(text) {
    suppose words = text.lower().split(" ")
    suppose counts = {}
    suppose i = 0

    until (i >= length(words)) {
        suppose word = words[i]
        if (word != "") {
            if (counts[word] == null) {
                counts[word] = 1
            } else {
                counts[word] = counts[word] + 1
            }
        }
        i = i + 1
    }

    return counts
}

suppose frequencies = countWords(sentence)
write("Word frequencies: " + frequencies)`}
            </CodeBlock>

            <DocsHeading level={2}>Calculator Example</DocsHeading>

            <DocsParagraph>
                A simple calculator that demonstrates functions, error handling, and user interaction:
            </DocsParagraph>

            <CodeBlock>
                {`// Calculator functions
define add(a, b) {
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
        return null
    }
}

// Calculator object
suppose calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}

// Test the calculator
suppose num1 = 10
suppose num2 = 3

write("Calculator Results:")
write(num1 + " + " + num2 + " = " + calculator.add(num1, num2))
write(num1 + " - " + num2 + " = " + calculator.subtract(num1, num2))
write(num1 + " * " + num2 + " = " + calculator.multiply(num1, num2))

suppose result = calculator.divide(num1, num2)
if (result != null) {
    write(num1 + " / " + num2 + " = " + result)
}

// Test division by zero
write("Testing division by zero:")
suppose zeroResult = calculator.divide(num1, 0)
if (zeroResult == null) {
    write("Division by zero handled gracefully")
}`}
            </CodeBlock>

            <DocsHeading level={2}>Student Grade Manager</DocsHeading>

            <DocsParagraph>
                A more complex example that manages student grades using arrays and objects:
            </DocsParagraph>

            <CodeBlock>
                {`// Student grade management system
define createStudent(name, grades) {
    return {
        name: name,
        grades: grades,
        average: 0
    }
}

define calculateAverage(grades) {
    if (length(grades) == 0) {
        return 0
    }

    suppose total = 0
    suppose i = 0
    until (i >= length(grades)) {
        total = total + grades[i]
        i = i + 1
    }

    return total / length(grades)
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
    createStudent("Alice", [85, 92, 78, 96]),
    createStudent("Bob", [78, 85, 82, 88]),
    createStudent("Charlie", [95, 98, 92, 94])
]

// Calculate averages and grades
suppose i = 0
until (i >= length(students)) {
    suppose student = students[i]
    student.average = calculateAverage(student.grades)
    suppose letterGrade = getLetterGrade(student.average)

    write("Student: " + student.name)
    write("  Grades: " + student.grades)
    write("  Average: " + student.average)
    write("  Letter Grade: " + letterGrade)
    write("")

    i = i + 1
}

// Find class average
suppose totalAverage = 0
suppose j = 0
until (j >= length(students)) {
    totalAverage = totalAverage + students[j].average
    j = j + 1
}

suppose classAverage = totalAverage / length(students)
write("Class Average: " + classAverage)`}
            </CodeBlock>

            <DocsHeading level={2}>Temperature Converter</DocsHeading>

            <DocsParagraph>
                A practical example that converts between different temperature scales:
            </DocsParagraph>

            <CodeBlock>
                {`// Temperature conversion functions
define celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

define fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

define celsiusToKelvin(celsius) {
    return celsius + 273.15
}

define kelvinToCelsius(kelvin) {
    return kelvin - 273.15
}

// Temperature conversion table
suppose temperatures = [0, 10, 20, 30, 40, 50, 100]

write("Temperature Conversion Table")
write("=============================")
write("Celsius | Fahrenheit | Kelvin")
write("--------|------------|-------")

suppose i = 0
until (i >= length(temperatures)) {
    suppose celsius = temperatures[i]
    suppose fahrenheit = celsiusToFahrenheit(celsius)
    suppose kelvin = celsiusToKelvin(celsius)

    // Format the output
    suppose celsiusStr = celsius + ""
    suppose fahrenheitStr = fahrenheit + ""
    suppose kelvinStr = kelvin + ""

    write(celsiusStr + "       | " + fahrenheitStr + "        | " + kelvinStr)

    i = i + 1
}

// Interactive conversion
suppose roomTemp = 22
write("\nRoom temperature conversions:")
write("Room temp: " + roomTemp + "°C")
write("In Fahrenheit: " + celsiusToFahrenheit(roomTemp) + "°F")
write("In Kelvin: " + celsiusToKelvin(roomTemp) + "K")`}
            </CodeBlock>

            <DocsHeading level={2}>Simple Game: Number Guessing</DocsHeading>

            <DocsParagraph>
                A fun example that creates a simple number guessing game:
            </DocsParagraph>

            <CodeBlock>
                {`// Number guessing game
define generateRandomNumber(min, max) {
    // Simple pseudo-random number generation
    suppose seed = 42  // In a real implementation, this would be more sophisticated
    return (seed * 7 + 13) % (max - min + 1) + min
}

define playGuessingGame() {
    suppose min = 1
    suppose max = 100
    suppose target = generateRandomNumber(min, max)
    suppose attempts = 0
    suppose maxAttempts = 7

    write("Welcome to the Number Guessing Game!")
    write("I'm thinking of a number between " + min + " and " + max)
    write("You have " + maxAttempts + " attempts to guess it.")
    write("")

    // For demonstration, we'll simulate guesses
    suppose guesses = [50, 25, 37, 31, 34, 32, 33]

    suppose i = 0
    until (i >= length(guesses) and attempts >= maxAttempts) {
        suppose guess = guesses[i]
        attempts = attempts + 1

        write("Attempt " + attempts + ": You guessed " + guess)

        if (guess == target) {
            write("Congratulations! You guessed it in " + attempts + " attempts!")
            return true
        } else if (guess < target) {
            write("Too low! Try a higher number.")
        } else {
            write("Too high! Try a lower number.")
        }

        i = i + 1
    }

    if (attempts >= maxAttempts) {
        write("Game over! The number was " + target)
        return false
    }
}

// Play the game
playGuessingGame()`}
            </CodeBlock>

            <DocsHeading level={2}>Data Analysis Example</DocsHeading>

            <DocsParagraph>
                An example that demonstrates data analysis using arrays and statistical calculations:
            </DocsParagraph>

            <CodeBlock>
                {`// Data analysis functions
define calculateMean(numbers) {
    if (length(numbers) == 0) {
        return 0
    }

    suppose sum = 0
    suppose i = 0
    until (i >= length(numbers)) {
        sum = sum + numbers[i]
        i = i + 1
    }

    return sum / length(numbers)
}

define findMin(numbers) {
    if (length(numbers) == 0) {
        return null
    }

    suppose min = numbers[0]
    suppose i = 1
    until (i >= length(numbers)) {
        if (numbers[i] < min) {
            min = numbers[i]
        }
        i = i + 1
    }

    return min
}

define findMax(numbers) {
    if (length(numbers) == 0) {
        return null
    }

    suppose max = numbers[0]
    suppose i = 1
    until (i >= length(numbers)) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
        i = i + 1
    }

    return max
}

// Sample data
suppose salesData = [120, 150, 180, 200, 160, 190, 210, 175, 185, 195]

write("Sales Data Analysis")
write("===================")
write("Data: " + salesData)
write("Count: " + length(salesData))
write("Mean: " + calculateMean(salesData))
write("Minimum: " + findMin(salesData))
write("Maximum: " + findMax(salesData))

// Calculate total sales
suppose total = 0
suppose j = 0
until (j >= length(salesData)) {
    total = total + salesData[j]
    j = j + 1
}
write("Total Sales: " + total)`}
            </CodeBlock>

            <DocsHeading level={2}>Best Practices Demonstrated</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Clear function names</DocsStrong>: All functions have descriptive names that explain their purpose</DocsListItem>
                <DocsListItem><DocsStrong>Error handling</DocsStrong>: Examples include checks for division by zero, empty arrays, and null values</DocsListItem>
                <DocsListItem><DocsStrong>Modular design</DocsStrong>: Complex programs are broken down into smaller, manageable functions</DocsListItem>
                <DocsListItem><DocsStrong>Input validation</DocsStrong>: Functions check for valid inputs before processing</DocsListItem>
                <DocsListItem><DocsStrong>Meaningful output</DocsStrong>: Programs provide clear, formatted output that&apos;s easy to understand</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you&apos;ve seen these examples, you&apos;re ready to start writing your own Rui programs! Check out the <DocsLink href="/docs/recent-additions">Recent Additions</DocsLink> to learn about the latest features.
            </DocsParagraph>
        </DocsContent>
    )
}