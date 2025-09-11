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

export default function DataTypesPage() {
    return (
        <DocsContent>
            <DocsHeading level={1}>Data Types</DocsHeading>

            <DocsParagraph>
                Rui supports several data types, from simple primitives to complex structures. The language uses implicit typing, so you don&rsquo;t need to declare types explicitly.
            </DocsParagraph>

            <DocsHeading level={2}>Primitive Types</DocsHeading>

            <DocsParagraph>
                These are the basic building blocks of Rui:
            </DocsParagraph>

            <DocsHeading level={3}>Numbers</DocsHeading>

            <DocsParagraph>
                Rui supports both integers and floating-point numbers:
            </DocsParagraph>

            <CodeBlock>
                suppose age = 25{'\n'}suppose price = 19.99{'\n'}suppose negative = -10{'\n'}suppose pi = 3.14159{'\n'}{'\n'}write(age){'\n'}write(price){'\n'}write(negative){'\n'}write(pi)
            </CodeBlock>

            <DocsHeading level={3}>Strings</DocsHeading>

            <DocsParagraph>
                Text data can be enclosed in single or double quotes:
            </DocsParagraph>

            <CodeBlock>
                suppose name = &quot;Alice&quot;{'\n'}suppose message = &apos;Hello World&apos;{'\n'}suppose empty = &quot;&quot;{'\n'}{'\n'}write(name){'\n'}write(message){'\n'}write(&quot;Empty string length: &quot; + length(empty))
            </CodeBlock>

            <DocsHeading level={3}>Booleans</DocsHeading>

            <DocsParagraph>
                Boolean values represent true or false:
            </DocsParagraph>

            <CodeBlock>
                suppose isStudent = true{'\n'}suppose isWorking = false{'\n'}suppose isAdult = age &gt;= 18{'\n'}{'\n'}write(&quot;Is student: &quot; + isStudent){'\n'}write(&quot;Is working: &quot; + isWorking){'\n'}write(&quot;Is adult: &quot; + isAdult)
            </CodeBlock>

            <DocsHeading level={3}>Null</DocsHeading>

            <DocsParagraph>
                The null value represents the absence of a value:
            </DocsParagraph>

            <CodeBlock>
                suppose data = null{'\n'}suppose result = null{'\n'}{'\n'}if (data == null) {'{'}{'\n'}    write(&quot;No data available&quot;){'\n'}{'}'} else {'{'}{'\n'}    write(&quot;Data: &quot; + data){'\n'}{'}'}
            </CodeBlock>

            <DocsHeading level={2}>Complex Types</DocsHeading>

            <DocsParagraph>
                These types can hold multiple values or structured data:
            </DocsParagraph>

            <DocsHeading level={3}>Arrays</DocsHeading>

            <DocsParagraph>
                Arrays are ordered collections of values:
            </DocsParagraph>

            <CodeBlock>
                suppose numbers = [1, 2, 3, 4, 5]{'\n'}suppose fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]{'\n'}suppose mixed = [1, &quot;hello&quot;, true, 3.14]{'\n'}suppose empty = []{'\n'}{'\n'}write(&quot;Numbers: &quot; + numbers){'\n'}write(&quot;Fruits: &quot; + fruits){'\n'}write(&quot;Mixed: &quot; + mixed){'\n'}write(&quot;Empty array length: &quot; + length(empty))
            </CodeBlock>

            <DocsHeading level={3}>Objects</DocsHeading>

            <DocsParagraph>
                Objects store key-value pairs for structured data:
            </DocsParagraph>

            <CodeBlock>
                suppose person = {'{'}{'\n'}    name: &quot;Alice&quot;,{'\n'}    age: 25,{'\n'}    city: &quot;New York&quot;,{'\n'}    isStudent: true{'\n'}{'}'}{'\n'}{'\n'}write(&quot;Name: &quot; + person.name){'\n'}write(&quot;Age: &quot; + person.age){'\n'}write(&quot;City: &quot; + person.city){'\n'}write(&quot;Is student: &quot; + person.isStudent)
            </CodeBlock>

            <DocsHeading level={3}>Functions</DocsHeading>

            <DocsParagraph>
                Functions are first-class citizens in Rui, meaning they can be assigned to variables:
            </DocsParagraph>

            <CodeBlock>
                define add(a, b) {'{'}{'\n'}    return a + b{'\n'}{'}'}{'\n'}{'\n'}suppose operation = add{'\n'}suppose result = operation(5, 3){'\n'}write(&quot;Result: &quot; + result)
            </CodeBlock>

            <DocsHeading level={2}>Type Checking</DocsHeading>

            <DocsParagraph>
                While Rui uses implicit typing, you can check types at runtime:
            </DocsParagraph>

            <CodeBlock>
                suppose value = 42{'\n'}{'\n'}{/* Check if value is a number */}{'\n'}if (value is number) {'{'}{'\n'}    write(&quot;Value is a number&quot;){'\n'}{'}'}{'\n'}{'\n'}suppose text = &quot;Hello&quot;{'\n'}if (text is string) {'{'}{'\n'}    write(&quot;Text is a string&quot;){'\n'}{'}'}
            </CodeBlock>

            <DocsHeading level={2}>Type Conversion</DocsHeading>

            <DocsParagraph>
                Rui automatically converts types when possible:
            </DocsParagraph>

            <CodeBlock>
                suppose num = 42{'\n'}suppose str = &quot;Hello&quot;{'\n'}{'\n'}{/* Automatic string conversion */}{'\n'}write(&quot;Number: &quot; + num)  {/* &quot;Number: 42&quot; */}{'\n'}{'\n'}{/* Explicit conversion */}{'\n'}suppose numStr = &quot;123&quot;{'\n'}suppose converted = parseInt(numStr){'\n'}write(&quot;Converted: &quot; + converted)  {/* 123 */}
            </CodeBlock>

            <DocsHeading level={2}>Best Practices</DocsHeading>

            <DocsList>
                <DocsListItem><DocsStrong>Use descriptive variable names</DocsStrong>: Choose names that clearly indicate the data type and purpose</DocsListItem>
                <DocsListItem><DocsStrong>Initialize variables</DocsStrong>: Always give variables an initial value</DocsListItem>
                <DocsListItem><DocsStrong>Use appropriate data structures</DocsStrong>: Choose arrays for lists, objects for structured data</DocsListItem>
                <DocsListItem><DocsStrong>Handle null values</DocsStrong>: Always check for null before using values</DocsListItem>
                <DocsListItem><DocsStrong>Be consistent</DocsStrong>: Use the same quote style throughout your code</DocsListItem>
            </DocsList>

            <DocsHeading level={2}>Next Steps</DocsHeading>

            <DocsParagraph>
                Now that you understand data types, learn about <DocsLink href="/docs/variables">Variables</DocsLink> to store and manipulate this data.
            </DocsParagraph>
        </DocsContent>
    )
}
