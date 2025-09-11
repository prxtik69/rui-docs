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

export default function DataStructuresPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Data Structures</DocsHeading>

            <DocsParagraph>
                Rui provides powerful data structures for organizing and manipulating data. Arrays and objects are the primary complex data types that help you build sophisticated programs.
            </DocsParagraph>

            <DocsHeading level={2}>Arrays</DocsHeading>

            <DocsParagraph>
                Arrays are ordered collections that can hold multiple values. They are perfect for storing lists of related data.
            </DocsParagraph>

            <DocsHeading level={3}>Creation and Access</DocsHeading>

            <DocsParagraph>
                Create arrays using square brackets and access elements by index:
            </DocsParagraph>

            <CodeBlock>
                suppose numbers = [1, 2, 3, 4, 5]{'\n'}suppose fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]{'\n'}suppose mixed = [1, &quot;hello&quot;, true, 3.14]{'\n'}{'\n'}{/* Access elements by index */}{'\n'}write(&quot;First number: &quot; + numbers[0])  {/* 1 */}{'\n'}write(&quot;Second fruit: &quot; + fruits[1])  {/* banana */}{'\n'}write(&quot;Last number: &quot; + numbers[-1])  {/* 5 (negative indexing) */}{'\n'}write(&quot;Array length: &quot; + length(numbers))  {/* 5 */}
            </CodeBlock>

            <DocsHeading level={3}>Array Methods</DocsHeading>

            <DocsParagraph>
                Arrays come with built-in methods for manipulation:
            </DocsParagraph>

            <CodeBlock>
                suppose arr = [1, 2, 3]{'\n'}write(&quot;Original: &quot; + arr)  {/* [1, 2, 3] */}{'\n'}{'\n'}{/* Add elements to the end */}{'\n'}arr.push(4, 5){'\n'}write(&quot;After push: &quot; + arr)  {/* [1, 2, 3, 4, 5] */}{'\n'}{'\n'}{/* Remove and return last element */}{'\n'}suppose last = arr.pop(){'\n'}write(&quot;Popped: &quot; + last)  {/* 5{'\n'}write(&quot;After pop: &quot; + arr)  {/* [1, 2, 3, 4]{'\n'}{'\n'}{/* Remove and return first element */}{'\n'}suppose first = arr.shift(){'\n'}write(&quot;Shifted: &quot; + first)  {/* 1 */}{'\n'}write(&quot;After shift: &quot; + arr)  {/* [2, 3, 4] */}{'\n'}{'\n'}{/* Add elements to the beginning */}{'\n'}arr.unshift(0){'\n'}write(&quot;After unshift: &quot; + arr)  {/* [0, 2, 3, 4] */}
            </CodeBlock>

            <DocsHeading level={3}>Array Slicing</DocsHeading>

            <DocsParagraph>
                Extract portions of arrays using slice notation:
            </DocsParagraph>

            <CodeBlock>
                suppose arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]{'\n'}{'\n'}write(&quot;First 3: &quot; + arr[:3])      {/* [1, 2, 3] */}{'\n'}write(&quot;Last 2: &quot; + arr[-2:])      {/* [9, 10]{'\n'}write(&quot;Middle: &quot; + arr[2:6])      {/* [3, 4, 5, 6]{'\n'}write(&quot;From index 5: &quot; + arr[5:]) {/* [6, 7, 8, 9, 10]{'\n'}write(&quot;Every other: &quot; + arr[::2])  {/* [1, 3, 5, 7, 9]
            </CodeBlock>

            <DocsHeading level={3}>Array Iteration</DocsHeading>

            <DocsParagraph>
                Loop through arrays to process each element:
            </DocsParagraph>

            <CodeBlock>
                suppose fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]{'\n'}suppose i = 0{'\n'}{'\n'}until (i &lt; length(fruits)) {'{'}{'\n'}    write(&quot;Fruit &quot; + (i + 1) + &quot;: &quot; + fruits[i]){'\n'}    i = i + 1{'\n'}{'}'}{'\n'}{'\n'}{/* Alternative: using forEach-like approach */}{'\n'}suppose j = 0{'\n'}until (j &lt; length(fruits)) {'{'}{'\n'}    write(&quot;I like &quot; + fruits[j]){'\n'}    j = j + 1{'\n'}{'}'}
            </CodeBlock>

            <DocsHeading level={2}>Objects</DocsHeading>

            <DocsParagraph>
                Objects store data as key-value pairs, perfect for representing real-world entities.
            </DocsParagraph>

            <DocsHeading level={3}>Creation and Access</DocsHeading>

            <DocsParagraph>
                Create objects using curly braces and access properties with dot notation:
            </DocsParagraph>

            <CodeBlock>
                suppose person = {'{'}{'\n'}    name: &quot;Alice&quot;,{'\n'}    age: 25,{'\n'}    city: &quot;New York&quot;,{'\n'}    isStudent: true{'\n'}{'}'}{'\n'}{'\n'}{/* Access properties */}{'\n'}write(&quot;Name: &quot; + person.name){'\n'}write(&quot;Age: &quot; + person.age){'\n'}write(&quot;City: &quot; + person.city){'\n'}write(&quot;Is student: &quot; + person.isStudent){'\n'}{'\n'}{/* Modify properties */}{'\n'}person.age = 26{'\n'}person.city = &quot;Boston&quot;{'\n'}write(&quot;Updated age: &quot; + person.age)
            </CodeBlock>

            <DocsHeading level={3}>Nested Objects</DocsHeading>

            <DocsParagraph>
                Objects can contain other objects and arrays:
            </DocsParagraph>

            <CodeBlock>
                suppose company = {'{'}{'\n'}    name: &quot;TechCorp&quot;,{'\n'}    founded: 2020,{'\n'}    employees: [{'\n'}        {'{'}{'\n'}            name: &quot;Alice&quot;,{'\n'}            role: &quot;Developer&quot;,{'\n'}            salary: 75000{'\n'}        {'}'},{'\n'}        {'{'}{'\n'}            name: &quot;Bob&quot;,{'\n'}            role: &quot;Designer&quot;,{'\n'}            salary: 65000{'\n'}        {'}'}{'\n'}    ],{'\n'}    location: {'{'}{'\n'}        city: &quot;San Francisco&quot;,{'\n'}        country: &quot;USA&quot;{'\n'}    {'}'}{'\n'}{'}'}{'\n'}{'\n'}write(&quot;Company: &quot; + company.name){'\n'}write(&quot;First employee: &quot; + company.employees[0].name){'\n'}write(&quot;Location: &quot; + company.location.city + &quot;, &quot; + company.location.country)
            </CodeBlock>

            <DocsHeading level={3}>Object Methods</DocsHeading>

            <DocsParagraph>
                Objects can contain functions as properties:
            </DocsParagraph>

            <CodeBlock>
                suppose calculator = {'{'}{'\n'}    add: define(a, b) {'{'}{'\n'}        return a + b{'\n'}    {'}'},{'\n'}    multiply: define(a, b) {'{'}{'\n'}        return a * b{'\n'}    {'}'},{'\n'}    subtract: define(a, b) {'{'}{'\n'}        return a - b{'\n'}    {'}'}{'\n'}{'}'}{'\n'}{'\n'}write(&quot;5 + 3 = &quot; + calculator.add(5, 3)){'\n'}write(&quot;4 * 7 = &quot; + calculator.multiply(4, 7)){'\n'}write(&quot;10 - 2 = &quot; + calculator.subtract(10, 2))
            </CodeBlock>

            <DocsHeading level={2}>Combining Arrays and Objects</DocsHeading>

            <DocsParagraph>
                Arrays and objects work together to create complex data structures:
            </DocsParagraph>

            <CodeBlock>
                suppose students = [{'\n'}    {'{'}{'\n'}        name: &quot;Alice&quot;,{'\n'}        grades: [85, 92, 78, 96],{'\n'}        major: &quot;Computer Science&quot;{'\n'}    {'}'},{'\n'}    {'{'}{'\n'}        name: &quot;Bob&quot;,{'\n'}        grades: [78, 85, 82, 88],{'\n'}        major: &quot;Mathematics&quot;{'\n'}    {'}'}{'\n'}]{'\n'}{'\n'}{/* Calculate average grade for each student */}{'\n'}suppose i = 0{'\n'}until (i &lt; length(students)) {'{'}{'\n'}    suppose student = students[i]{'\n'}    suppose total = 0{'\n'}    suppose j = 0{'\n'}{'\n'}    until (j &lt; length(student.grades)) {'{'}{'\n'}        total = total + student.grades[j]{'\n'}        j = j + 1{'\n'}    {'}'}{'\n'}{'\n'}    suppose average = total / length(student.grades){'\n'}    write(student.name + &quot; (&quot; + student.major + &quot;): &quot; + average){'\n'}    i = i + 1{'\n'}{'}'}
            </CodeBlock>

            <DocsHeading level={2}>Best Practices</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Choose the right structure</DocsStrong>: Use arrays for ordered lists, objects for named properties</DocsListItem>
                <DocsListItem><DocsStrong>Keep structures simple</DocsStrong>: Avoid overly nested structures when possible</DocsListItem>
                <DocsListItem><DocsStrong>Use descriptive keys</DocsStrong>: Object property names should be clear and meaningful</DocsListItem>
                <DocsListItem><DocsStrong>Initialize properly</DocsStrong>: Always provide initial values for arrays and objects</DocsListItem>
                <DocsListItem><DocsStrong>Handle empty structures</DocsStrong>: Check for empty arrays and objects before processing</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Common Patterns</DocsHeading>

            <DocsParagraph>
                Here are some common patterns for working with data structures:
            </DocsParagraph>

            <CodeBlock>
                {/* Pattern 1: Filtering arrays */}{'\n'}suppose numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]{'\n'}suppose evens = []{'\n'}suppose i = 0{'\n'}{'\n'}until (i &lt; length(numbers)) {'{'}{'\n'}    if (numbers[i] % 2 == 0) {'{'}{'\n'}        evens.push(numbers[i]){'\n'}    {'}'}{'\n'}    i = i + 1{'\n'}{'}'}{'\n'}write(&quot;Even numbers: &quot; + evens){'\n'}{'\n'}{/* Pattern 2: Finding maximum value */}{'\n'}suppose scores = [85, 92, 78, 96, 88]{'\n'}suppose max = scores[0]{'\n'}suppose j = 1{'\n'}{'\n'}until (j &lt; length(scores)) {'{'}{'\n'}    if (scores[j] &gt; max) {'{'}{'\n'}        max = scores[j]{'\n'}    {'}'}{'\n'}    j = j + 1{'\n'}{'}'}{'\n'}write(&quot;Highest score: &quot; + max)
            </CodeBlock>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand data structures, learn about <DocsLink href="/docs/string-manipulation">String Manipulation</DocsLink> to work with text data effectively.
            </DocsParagraph>
        </DocsContent>
    )
}
