/**
 * Java Full Stack Developer — Complete Course Data
 * 9 Weeks · Topics + Videos + Deep Content + Quizzes + Practice Tasks
 * Auto-generated & Enhanced for Comprehensive Student Internship Curriculum
 */
const JAVA_FULLSTACK = {
  "domain": "Java Full Stack Developer",
  "weeks": [
    {
      "id": 1,
      "title": "Core Java Foundations",
      "topics": [
        {
          "id": 1,
          "title": "Java Syntax, Data Types & Variables",
          "video": {
            "youtubeId": "eIrMbAQSU34",
            "title": "Java Tutorial for Beginners",
            "channel": "Programming with Mosh",
            "duration": "2 hr 30 min",
            "description": "Best beginner Java tutorial — covers setup, syntax, data types, variables step by step."
          },
          "content": {
            "sections": [
              {
                "heading": "Why Java?",
                "text": "Java is one of the most widely used languages — Android, banking, enterprise software. Write Once Run Anywhere (WORA) via JVM. Strongly typed, object-oriented, massive ecosystem. Java developer is one of the top-paying roles in India."
              },
              {
                "heading": "Setup — JDK + VS Code",
                "text": "Step 1: Download JDK 17 from https://adoptium.net\nStep 2: Install VS Code\nStep 3: Install Extension Pack for Java\nStep 4: Verify: java -version"
              },
              {
                "heading": "First Java Program",
                "code": "<span class=\"kw\">public class</span> <span class=\"cls\">HelloWorld</span> {\n    <span class=\"kw\">public static void</span> main(<span class=\"cls\">String</span>[] args) {\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Hello, World!\"</span>);\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Welcome to avRoN Tech!\"</span>);\n    }\n}\n<span class=\"cmt\">// javac HelloWorld.java  → compile\n// java HelloWorld        → run</span>"
              },
              {
                "heading": "The 8 Primitive Data Types",
                "text": "INTEGER: byte(8-bit,-128to127), short(16-bit), int(32-bit DEFAULT), long(64-bit,use L suffix)\nDECIMAL: float(32-bit,use f suffix), double(64-bit DEFAULT)\nOTHER: char(single character 'A'), boolean(true/false)\nMemory tip: \"by short int long, float double char bool\""
              },
              {
                "heading": "Variables Declaration",
                "code": "<span class=\"kw\">int</span> age = 21;\n<span class=\"kw\">long</span> population = 1_400_000_000L;\n<span class=\"kw\">double</span> gpa = 8.75;\n<span class=\"kw\">char</span> grade = <span class=\"str\">'A'</span>;\n<span class=\"kw\">boolean</span> isPlaced = <span class=\"kw\">true</span>;\n<span class=\"cls\">String</span> name = <span class=\"str\">\"Arjun Sharma\"</span>;\n<span class=\"kw\">final double</span> PI = 3.14159;  <span class=\"cmt\">// constant</span>\n<span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Name: %s, GPA: %.2f%n\"</span>, name, gpa);"
              },
              {
                "heading": "Type Casting",
                "code": "<span class=\"cmt\">// Widening (automatic, safe)</span>\n<span class=\"kw\">int</span> x = 100;\n<span class=\"kw\">double</span> d = x;           <span class=\"cmt\">// 100.0</span>\n\n<span class=\"cmt\">// Narrowing (explicit, may lose data)</span>\n<span class=\"kw\">double</span> pi = 3.99999;\n<span class=\"kw\">int</span> n = (<span class=\"kw\">int</span>) pi;       <span class=\"cmt\">// 3 — TRUNCATES, not rounds!</span>\n\n<span class=\"cmt\">// char to int (ASCII)</span>\n<span class=\"kw\">char</span> c = <span class=\"str\">'A'</span>;\n<span class=\"kw\">int</span> ascii = c;          <span class=\"cmt\">// 65</span>"
              },
              {
                "heading": "Interview Questions",
                "text": "Q: Difference between int and Integer?\nA: int is primitive. Integer is wrapper class (object), can be null, used in Collections.\n\nQ: Default values of instance variables?\nA: int=0, boolean=false, String/Object=null. Local variables have NO default.\n\nQ: What does final do?\nA: Makes variable constant — cannot be reassigned. Use ALL_CAPS by convention.\n\nQ: == vs .equals() for Strings?\nA: == compares references. .equals() compares content. Always use .equals() for Strings!"
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Student Profile",
              "instructions": "Write StudentProfile.java:\n1. Declare variables: name(String), age(int), gpa(double), grade(char), isPlaced(boolean), college(String)\n2. Assign your own values\n3. Print formatted profile card using System.out.println()\n4. BONUS: Use type casting to show gpa as int\n5. BONUS: Make college name final",
              "hint": "Use System.out.printf(\"Name: %s, GPA: %.2f%n\", name, gpa) for formatted output."
            },
            "resources": [
              {
                "label": "Oracle Java Docs",
                "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html"
              },
              {
                "label": "GeeksforGeeks Java Basics",
                "url": "https://www.geeksforgeeks.org/java-basics/"
              },
              {
                "label": "Telusko Java Course (Hindi)",
                "url": "https://www.youtube.com/watch?v=BGTx91t8q50"
              },
              {
                "label": "Apna College Java",
                "url": "https://www.youtube.com/watch?v=oEPOBe3CSKg"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the size of an int in Java?",
              "opts": [
                "8 bits",
                "16 bits",
                "32 bits",
                "64 bits"
              ],
              "ans": 2,
              "explanation": "int is 32-bit signed integer. Range: -2,147,483,648 to 2,147,483,647."
            },
            {
              "q": "Default type for decimal values in Java?",
              "opts": [
                "float",
                "double",
                "long",
                "decimal"
              ],
              "ans": 1,
              "explanation": "double is the default. float requires f suffix: 3.14f"
            },
            {
              "q": "Range of byte data type?",
              "opts": [
                "0 to 255",
                "-128 to 127",
                "-256 to 255",
                "0 to 127"
              ],
              "ans": 1,
              "explanation": "byte is 8-bit signed: -128 to 127. Total 256 values."
            },
            {
              "q": "What does final keyword do to a variable?",
              "opts": [
                "Makes it static",
                "Makes it constant — cannot be reassigned",
                "Makes it public",
                "Makes it global"
              ],
              "ans": 1,
              "explanation": "final = constant. Convention: ALL_CAPS. Example: final int MAX_SIZE = 100;"
            },
            {
              "q": "Result of: int x = (int) 9.99;",
              "opts": [
                "10",
                "9",
                "9.99",
                "Error"
              ],
              "ans": 1,
              "explanation": "Narrowing cast TRUNCATES — does not round. 9.99 becomes 9."
            },
            {
              "q": "Which is NOT a primitive data type?",
              "opts": [
                "int",
                "boolean",
                "String",
                "char"
              ],
              "ans": 2,
              "explanation": "String is a class/object. The 8 primitives: byte short int long float double char boolean."
            },
            {
              "q": "Suffix required for long literals?",
              "opts": [
                "s",
                "d",
                "f",
                "L"
              ],
              "ans": 3,
              "explanation": "long x = 9876543210L; — L tells Java this is a long, not int."
            }
          ]
        },
        {
          "id": 2,
          "title": "Operators, Expressions & Type Conversion",
          "video": {
            "youtubeId": "RKRSLDlxo-g",
            "title": "Java Operators Full Tutorial",
            "channel": "Apna College",
            "duration": "45 min",
            "description": "All Java operators — arithmetic, relational, logical, bitwise, ternary explained with examples."
          },
          "content": {
            "sections": [
              {
                "heading": "Arithmetic Operators",
                "code": "<span class=\"kw\">int</span> a = 17, b = 5;\n<span class=\"cls\">System</span>.out.println(a + b);   <span class=\"cmt\">// 22 — Addition</span>\n<span class=\"cls\">System</span>.out.println(a - b);   <span class=\"cmt\">// 12 — Subtraction</span>\n<span class=\"cls\">System</span>.out.println(a * b);   <span class=\"cmt\">// 85 — Multiplication</span>\n<span class=\"cls\">System</span>.out.println(a / b);   <span class=\"cmt\">// 3  — Integer division (drops decimal!)</span>\n<span class=\"cls\">System</span>.out.println(a % b);   <span class=\"cmt\">// 2  — Modulus (remainder)</span>\n<span class=\"kw\">int</span> x = 10;\n<span class=\"cls\">System</span>.out.println(x++);  <span class=\"cmt\">// 10 — post: use THEN increment</span>\n<span class=\"cls\">System</span>.out.println(x);    <span class=\"cmt\">// 11</span>\n<span class=\"cls\">System</span>.out.println(++x);  <span class=\"cmt\">// 12 — pre: increment THEN use</span>"
              },
              {
                "heading": "Relational & Logical Operators",
                "code": "<span class=\"kw\">int</span> marks = 75;\n<span class=\"cls\">System</span>.out.println(marks > 60);   <span class=\"cmt\">// true</span>\n<span class=\"cls\">System</span>.out.println(marks == 75);  <span class=\"cmt\">// true</span>\n<span class=\"cls\">System</span>.out.println(marks != 75);  <span class=\"cmt\">// false</span>\n\n<span class=\"cmt\">// Logical AND, OR, NOT</span>\n<span class=\"kw\">boolean</span> canVote = (marks >= 18) && (<span class=\"kw\">true</span>);  <span class=\"cmt\">// AND</span>\n<span class=\"kw\">boolean</span> pass = (marks >= 50) || (<span class=\"kw\">false</span>);     <span class=\"cmt\">// OR</span>\n<span class=\"kw\">boolean</span> fail = !(marks >= 50);               <span class=\"cmt\">// NOT</span>\n\n<span class=\"cmt\">// IMPORTANT: Always use .equals() for Strings!</span>\n<span class=\"cls\">String</span> s1 = <span class=\"kw\">new</span> <span class=\"cls\">String</span>(<span class=\"str\">\"hello\"</span>);\n<span class=\"cls\">System</span>.out.println(s1 == <span class=\"str\">\"hello\"</span>);        <span class=\"cmt\">// false (different objects)</span>\n<span class=\"cls\">System</span>.out.println(s1.equals(<span class=\"str\">\"hello\"</span>));    <span class=\"cmt\">// true  (same content)</span>"
              },
              {
                "heading": "Ternary & Assignment Operators",
                "code": "<span class=\"cmt\">// Ternary: condition ? valueIfTrue : valueIfFalse</span>\n<span class=\"kw\">int</span> score = 82;\n<span class=\"cls\">String</span> result = (score >= 50) ? <span class=\"str\">\"Pass\"</span> : <span class=\"str\">\"Fail\"</span>;\n<span class=\"cls\">System</span>.out.println(result); <span class=\"cmt\">// Pass</span>\n\n<span class=\"cls\">String</span> grade = score>=90 ? <span class=\"str\">\"A\"</span> : score>=80 ? <span class=\"str\">\"B\"</span> : score>=70 ? <span class=\"str\">\"C\"</span> : <span class=\"str\">\"F\"</span>;\n<span class=\"cls\">System</span>.out.println(grade);  <span class=\"cmt\">// B</span>\n\n<span class=\"cmt\">// Compound assignment</span>\n<span class=\"kw\">int</span> x = 10;\nx += 5;   <span class=\"cmt\">// x = 15</span>\nx -= 3;   <span class=\"cmt\">// x = 12</span>\nx *= 2;   <span class=\"cmt\">// x = 24</span>\nx /= 4;   <span class=\"cmt\">// x = 6</span>\nx %= 4;   <span class=\"cmt\">// x = 2</span>"
              },
              {
                "heading": "Interview Questions on Operators",
                "text": "Q: Difference between i++ and ++i?\nA: i++ returns current value THEN increments. ++i increments FIRST then returns. In a standalone statement both are same.\n\nQ: Result of 7/2 in Java?\nA: 3 (integer division). Use 7.0/2 or (double)7/2 to get 3.5.\n\nQ: What does short-circuit evaluation mean?\nA: In &&, if first condition is false, second is NOT evaluated. In ||, if first is true, second is NOT evaluated. Useful for null checks: if(obj != null && obj.getName() != null)"
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Grade Calculator",
              "instructions": "Write GradeCalculator.java:\n1. Store 5 subject marks as variables\n2. Calculate total and percentage using arithmetic operators\n3. Assign grade using ternary: A>=90, B>=80, C>=70, D>=60, F<60\n4. Check scholarship eligibility: cgpa>=8.0 AND attendance>=75 (use &&)\n5. Print complete result card",
              "hint": "Use arithmetic operators for total, ternary for grade, && for scholarship check."
            },
            "resources": [
              {
                "label": "GFG Java Operators",
                "url": "https://www.geeksforgeeks.org/operators-in-java/"
              },
              {
                "label": "W3Schools Java Operators",
                "url": "https://www.w3schools.com/java/java_operators.asp"
              },
              {
                "label": "CodeWithHarry Java (Hindi)",
                "url": "https://www.youtube.com/watch?v=Hl-zzrqQoSE"
              }
            ]
          },
          "quiz": [
            {
              "q": "What does 17 % 5 return?",
              "opts": [
                "3",
                "2",
                "3.4",
                "1"
              ],
              "ans": 1,
              "explanation": "17 / 5 = 3 remainder 2. % returns the remainder."
            },
            {
              "q": "Result of: int x = 5; System.out.println(x++);",
              "opts": [
                "6",
                "5",
                "4",
                "Error"
              ],
              "ans": 1,
              "explanation": "Post-increment: value is USED first (prints 5), THEN incremented to 6."
            },
            {
              "q": "Which operator compares String content?",
              "opts": [
                "==",
                "===",
                ".equals()",
                ".compare()"
              ],
              "ans": 2,
              "explanation": "Always use .equals() for String content. == compares memory addresses."
            },
            {
              "q": "What does && do?",
              "opts": [
                "OR logic",
                "AND — BOTH conditions must be true",
                "NOT logic",
                "Bitwise AND"
              ],
              "ans": 1,
              "explanation": "&& is logical AND. Both sides must be true for result to be true."
            },
            {
              "q": "Result of 7/2 in Java?",
              "opts": [
                "3.5",
                "3",
                "4",
                "3.0"
              ],
              "ans": 1,
              "explanation": "Integer division: both are int so result is int. 7/2 = 3. Use 7.0/2 for 3.5."
            },
            {
              "q": "x += 5 means?",
              "opts": [
                "x = 5",
                "x = x + 5",
                "x + 5",
                "x = x * 5"
              ],
              "ans": 1,
              "explanation": "Compound assignment: x += 5 is shorthand for x = x + 5."
            },
            {
              "q": "(10 > 5) ? \"Yes\" : \"No\" returns?",
              "opts": [
                "No",
                "Yes",
                "true",
                "Error"
              ],
              "ans": 1,
              "explanation": "10 > 5 is true, so ternary returns first value: \"Yes\"."
            }
          ]
        },
        {
          "id": 3,
          "title": "Control Flow — if/else, switch, Loops",
          "video": {
            "youtubeId": "ldYLYRXaucM",
            "title": "Java Control Flow Complete",
            "channel": "Telusko",
            "duration": "1 hr 10 min",
            "description": "Complete coverage of if-else, switch, for, while, do-while loops with pattern programs."
          },
          "content": {
            "sections": [
              {
                "heading": "if / else if / else",
                "code": "<span class=\"kw\">int</span> marks = 85;\n<span class=\"kw\">if</span> (marks >= 90) {\n    <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Grade: A\"</span>);\n} <span class=\"kw\">else if</span> (marks >= 80) {\n    <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Grade: B\"</span>);  <span class=\"cmt\">// runs</span>\n} <span class=\"kw\">else if</span> (marks >= 70) {\n    <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Grade: C\"</span>);\n} <span class=\"kw\">else</span> {\n    <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Grade: F\"</span>);\n}"
              },
              {
                "heading": "switch Statement",
                "code": "<span class=\"kw\">int</span> day = 3;\n<span class=\"kw\">switch</span> (day) {\n    <span class=\"kw\">case</span> 1: <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Monday\"</span>);    <span class=\"kw\">break</span>;\n    <span class=\"kw\">case</span> 2: <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Tuesday\"</span>);   <span class=\"kw\">break</span>;\n    <span class=\"kw\">case</span> 3: <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Wednesday\"</span>); <span class=\"kw\">break</span>; <span class=\"cmt\">// runs</span>\n    <span class=\"kw\">case</span> 6:\n    <span class=\"kw\">case</span> 7: <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Weekend!\"</span>);  <span class=\"kw\">break</span>;\n    <span class=\"kw\">default</span>: <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Invalid\"</span>);\n}\n<span class=\"cmt\">// Without break: FALL-THROUGH — next case runs too!</span>"
              },
              {
                "heading": "for, while, do-while",
                "code": "<span class=\"cmt\">// for — use when you know the count</span>\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i = 1; i <= 5; i++) <span class=\"cls\">System</span>.out.print(i + <span class=\"str\">\" \"</span>);\n<span class=\"cmt\">// 1 2 3 4 5</span>\n\n<span class=\"cmt\">// while — use when count is unknown</span>\n<span class=\"kw\">int</span> n = 12345;\n<span class=\"kw\">while</span> (n > 0) {\n    <span class=\"cls\">System</span>.out.print(n % 10 + <span class=\"str\">\" \"</span>);  <span class=\"cmt\">// digits: 5 4 3 2 1</span>\n    n /= 10;\n}\n\n<span class=\"cmt\">// do-while — runs at least ONCE</span>\n<span class=\"kw\">int</span> choice;\n<span class=\"kw\">do</span> {\n    <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"1.Add 2.Sub 3.Exit\"</span>);\n    choice = <span class=\"kw\">new</span> <span class=\"cls\">java.util.Scanner</span>(<span class=\"cls\">System</span>.in).nextInt();\n} <span class=\"kw\">while</span> (choice != 3);"
              },
              {
                "heading": "break, continue & Patterns",
                "code": "<span class=\"cmt\">// break — exit loop immediately</span>\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=1; i<=10; i++) {\n    <span class=\"kw\">if</span> (i==6) <span class=\"kw\">break</span>;\n    <span class=\"cls\">System</span>.out.print(i + <span class=\"str\">\" \"</span>);  <span class=\"cmt\">// 1 2 3 4 5</span>\n}\n\n<span class=\"cmt\">// continue — skip current iteration</span>\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=1; i<=10; i++) {\n    <span class=\"kw\">if</span> (i%2==0) <span class=\"kw\">continue</span>;  <span class=\"cmt\">// skip even</span>\n    <span class=\"cls\">System</span>.out.print(i + <span class=\"str\">\" \"</span>);  <span class=\"cmt\">// 1 3 5 7 9</span>\n}\n\n<span class=\"cmt\">// Classic: FizzBuzz (interview must-know)</span>\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=1; i<=20; i++) {\n    <span class=\"kw\">if</span> (i%15==0) <span class=\"cls\">System</span>.out.print(<span class=\"str\">\"FizzBuzz \"</span>);\n    <span class=\"kw\">else if</span> (i%3==0) <span class=\"cls\">System</span>.out.print(<span class=\"str\">\"Fizz \"</span>);\n    <span class=\"kw\">else if</span> (i%5==0) <span class=\"cls\">System</span>.out.print(<span class=\"str\">\"Buzz \"</span>);\n    <span class=\"kw\">else</span> <span class=\"cls\">System</span>.out.print(i + <span class=\"str\">\" \"</span>);\n}"
              },
              {
                "heading": "Nested Loops — Star Patterns",
                "code": "<span class=\"cmt\">// Right triangle</span>\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=1; i<=5; i++) {\n    <span class=\"kw\">for</span> (<span class=\"kw\">int</span> j=1; j<=i; j++) <span class=\"cls\">System</span>.out.print(<span class=\"str\">\"* \"</span>);\n    <span class=\"cls\">System</span>.out.println();\n}\n<span class=\"cmt\">// *\n// * *\n// * * *\n// * * * *\n// * * * * *</span>\n\n<span class=\"cmt\">// Prime number check</span>\n<span class=\"kw\">int</span> num = 29; <span class=\"kw\">boolean</span> isPrime = <span class=\"kw\">true</span>;\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=2; i<=<span class=\"cls\">Math</span>.sqrt(num); i++) {\n    <span class=\"kw\">if</span> (num%i==0) { isPrime=<span class=\"kw\">false</span>; <span class=\"kw\">break</span>; }\n}\n<span class=\"cls\">System</span>.out.println(num + (isPrime ? <span class=\"str\">\" is Prime\"</span> : <span class=\"str\">\" is not Prime\"</span>));"
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Number Games",
              "instructions": "Write NumberGames.java with 3 programs:\n1. FizzBuzz: Print 1-100. Divisible by 15=\"FizzBuzz\", by 3=\"Fizz\", by 5=\"Buzz\", else number.\n2. Reverse a number: 12345 -> 54321 using while loop and % operator\n3. Pascal Triangle: Print first 6 rows using nested loops",
              "hint": "FizzBuzz: check %15 FIRST, then %3, then %5. For reverse: digit = n%10 removes last digit each iteration."
            },
            "resources": [
              {
                "label": "GFG Java Loops",
                "url": "https://www.geeksforgeeks.org/loops-in-java/"
              },
              {
                "label": "GFG Pattern Programs",
                "url": "https://www.geeksforgeeks.org/java-pattern-programs/"
              },
              {
                "label": "Apna College Loops (Hindi)",
                "url": "https://www.youtube.com/watch?v=qGPYWwTvHxc"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which loop runs at least once?",
              "opts": [
                "for",
                "while",
                "do-while",
                "enhanced for"
              ],
              "ans": 2,
              "explanation": "do-while checks condition AFTER executing the body — runs at least once even if condition is false."
            },
            {
              "q": "What does break do?",
              "opts": [
                "Skips iteration",
                "Exits loop immediately",
                "Restarts loop",
                "Pauses execution"
              ],
              "ans": 1,
              "explanation": "break exits the current loop immediately."
            },
            {
              "q": "Output of: for(int i=0;i<5;i+=2) print(i);",
              "opts": [
                "0 1 2 3 4",
                "0 2 4",
                "2 4",
                "1 3"
              ],
              "ans": 1,
              "explanation": "i starts at 0, increments by 2: 0, 2, 4. Stops when i<5 fails (i=6)."
            },
            {
              "q": "What does continue do?",
              "opts": [
                "Exits loop",
                "Skips rest of current iteration, goes to next",
                "Restarts loop",
                "Returns value"
              ],
              "ans": 1,
              "explanation": "continue skips the remaining code in current iteration and moves to next."
            },
            {
              "q": "What happens without break in switch?",
              "opts": [
                "Compile error",
                "Fall-through — next case executes too",
                "Nothing",
                "default runs"
              ],
              "ans": 1,
              "explanation": "Fall-through: without break, execution continues into next case(s)."
            },
            {
              "q": "FizzBuzz: what to check FIRST for divisible by both 3 and 5?",
              "opts": [
                "Check 3 first",
                "Check 5 first",
                "Check 15 first",
                "Order does not matter"
              ],
              "ans": 2,
              "explanation": "Check %15 first. If you check %3 first, numbers like 15 will print \"Fizz\" instead of \"FizzBuzz\"."
            },
            {
              "q": "What is the output of nested loop 3x3 printing i*j?",
              "opts": [
                "1 2 3 2 4 6 3 6 9",
                "1 4 9",
                "123456789",
                "1 2 3"
              ],
              "ans": 0,
              "explanation": "i=1: 1,2,3. i=2: 2,4,6. i=3: 3,6,9. Total: 1 2 3 2 4 6 3 6 9"
            }
          ]
        },
        {
          "id": 4,
          "title": "Arrays & Strings — Deep Dive",
          "video": {
            "youtubeId": "n60Dn0UsbEk",
            "title": "Java Arrays Complete Tutorial",
            "channel": "Kunal Kushwaha",
            "duration": "1 hr 45 min",
            "description": "Complete arrays — 1D, 2D, String methods, StringBuilder, algorithms with full explanation."
          },
          "content": {
            "sections": [
              {
                "heading": "Arrays — Declaration & Iteration",
                "code": "<span class=\"cmt\">// Create arrays</span>\n<span class=\"kw\">int</span>[] marks = {85, 92, 78, 95, 88};\n<span class=\"cls\">String</span>[] names = <span class=\"kw\">new</span> <span class=\"cls\">String</span>[3];\nnames[0] = <span class=\"str\">\"Arjun\"</span>; names[1] = <span class=\"str\">\"Priya\"</span>; names[2] = <span class=\"str\">\"Ravi\"</span>;\n\n<span class=\"cls\">System</span>.out.println(marks[0]);           <span class=\"cmt\">// 85 — first</span>\n<span class=\"cls\">System</span>.out.println(marks[marks.length-1]); <span class=\"cmt\">// 88 — last</span>\n<span class=\"cls\">System</span>.out.println(marks.length);       <span class=\"cmt\">// 5</span>\n\n<span class=\"cmt\">// Enhanced for-each (cleanest)</span>\n<span class=\"kw\">int</span> total = 0;\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> m : marks) total += m;\n<span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Avg: \"</span> + total/marks.length);\n\n<span class=\"cmt\">// Arrays utility</span>\n<span class=\"kw\">import</span> java.util.Arrays;\n<span class=\"cls\">Arrays</span>.sort(marks);\n<span class=\"cls\">System</span>.out.println(<span class=\"cls\">Arrays</span>.toString(marks));"
              },
              {
                "heading": "2D Arrays",
                "code": "<span class=\"kw\">int</span>[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n<span class=\"cls\">System</span>.out.println(matrix[1][2]);  <span class=\"cmt\">// 6 (row 1, col 2)</span>\n\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=0; i<matrix.length; i++) {\n    <span class=\"kw\">for</span> (<span class=\"kw\">int</span> j=0; j<matrix[i].length; j++)\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"%3d\"</span>, matrix[i][j]);\n    <span class=\"cls\">System</span>.out.println();\n}"
              },
              {
                "heading": "String Methods",
                "code": "<span class=\"cls\">String</span> s = <span class=\"str\">\"  Hello, Java World!  \"</span>;\n<span class=\"cls\">System</span>.out.println(s.length());              <span class=\"cmt\">// 22</span>\n<span class=\"cls\">System</span>.out.println(s.trim());                <span class=\"cmt\">// \"Hello, Java World!\"</span>\n<span class=\"cls\">System</span>.out.println(s.toUpperCase());         <span class=\"cmt\">// \"  HELLO, JAVA WORLD!  \"</span>\n<span class=\"cls\">System</span>.out.println(s.contains(<span class=\"str\">\"Java\"</span>));      <span class=\"cmt\">// true</span>\n<span class=\"cls\">System</span>.out.println(s.indexOf(<span class=\"str\">\"Java\"</span>));       <span class=\"cmt\">// 9</span>\n<span class=\"cls\">System</span>.out.println(s.trim().substring(7));   <span class=\"cmt\">// \"Java World!\"</span>\n<span class=\"cls\">System</span>.out.println(s.replace(<span class=\"str\">\"Java\"</span>,<span class=\"str\">\"Python\"</span>));\n\n<span class=\"cls\">String</span> csv = <span class=\"str\">\"Arjun,21,CSE\"</span>;\n<span class=\"cls\">String</span>[] parts = csv.split(<span class=\"str\">\",\"</span>);\n<span class=\"cls\">System</span>.out.println(parts[0]);  <span class=\"cmt\">// Arjun</span>\n\n<span class=\"cls\">System</span>.out.println(<span class=\"str\">\"hello\"</span>.equals(<span class=\"str\">\"HELLO\"</span>));           <span class=\"cmt\">// false</span>\n<span class=\"cls\">System</span>.out.println(<span class=\"str\">\"hello\"</span>.equalsIgnoreCase(<span class=\"str\">\"HELLO\"</span>)); <span class=\"cmt\">// true</span>"
              },
              {
                "heading": "StringBuilder — Efficient String Building",
                "code": "<span class=\"cmt\">// String is immutable — each + creates new object</span>\n<span class=\"cmt\">// Bad in loops: uses a lot of memory</span>\n<span class=\"cls\">String</span> result = <span class=\"str\">\"\"</span>;\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=0; i<1000; i++) result += i;  <span class=\"cmt\">// slow!</span>\n\n<span class=\"cmt\">// StringBuilder modifies in place — FAST</span>\n<span class=\"cls\">StringBuilder</span> sb = <span class=\"kw\">new</span> <span class=\"cls\">StringBuilder</span>();\n<span class=\"kw\">for</span> (<span class=\"kw\">int</span> i=0; i<1000; i++) sb.append(i);\n<span class=\"cls\">System</span>.out.println(sb.toString());\n\n<span class=\"cmt\">// Useful StringBuilder methods</span>\n<span class=\"cls\">StringBuilder</span> s = <span class=\"kw\">new</span> <span class=\"cls\">StringBuilder</span>(<span class=\"str\">\"Hello\"</span>);\ns.append(<span class=\"str\">\" World\"</span>);    <span class=\"cmt\">// \"Hello World\"</span>\ns.insert(5, <span class=\"str\">\",\"</span>);      <span class=\"cmt\">// \"Hello, World\"</span>\ns.reverse();            <span class=\"cmt\">// \"dlroW ,olleH\"</span>\ns.delete(0, 5);         <span class=\"cmt\">// delete chars 0-4</span>"
              },
              {
                "heading": "Interview Questions on Arrays & Strings",
                "text": "Q: Array vs ArrayList?\nA: Array: fixed size, can hold primitives. ArrayList: dynamic size, only objects. Array is faster for fixed-size data.\n\nQ: Why is String immutable?\nA: Security (passwords), thread safety, caching (String pool), HashCode caching for HashMap keys.\n\nQ: Reverse a String without reverse()?\nA: Use loop from end to start: for(int i=s.length()-1; i>=0; i--) sb.append(s.charAt(i))\n\nQ: Check palindrome?\nA: Compare string with its reverse. Or compare charAt from both ends."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Array & String Operations",
              "instructions": "Write ArrayStringTasks.java with:\n1. Array stats: given int[] marks = {88,72,95,60,83,91,74} — find max, min, average, count above 80\n2. String reverse: \"Hello World\" -> \"dlroW olleH\" using charAt() loop\n3. Palindrome check: isPalindrome(\"racecar\") -> true, isPalindrome(\"hello\") -> false\n4. Vowel count in \"Hello World Java\" -> 5",
              "hint": "Palindrome: compare with StringBuilder.reverse(). For max/min: start with marks[0] as initial value."
            },
            "resources": [
              {
                "label": "GFG Arrays in Java",
                "url": "https://www.geeksforgeeks.org/arrays-in-java/"
              },
              {
                "label": "GFG String Methods",
                "url": "https://www.geeksforgeeks.org/string-class-in-java/"
              },
              {
                "label": "Apna College Arrays (Hindi)",
                "url": "https://www.youtube.com/watch?v=6HGqnN6iiyE"
              }
            ]
          },
          "quiz": [
            {
              "q": "Index of last element in array of size 10?",
              "opts": [
                "10",
                "9",
                "11",
                "-1"
              ],
              "ans": 1,
              "explanation": "Arrays are 0-indexed. Size 10 means indices 0-9. Last = arr[arr.length-1] = arr[9]."
            },
            {
              "q": "Default value of int[] arr = new int[5]?",
              "opts": [
                "null",
                "undefined",
                "0 for all elements",
                "Random values"
              ],
              "ans": 2,
              "explanation": "Java initializes int arrays with 0, boolean with false, String/Object with null."
            },
            {
              "q": "Why use StringBuilder over String in loops?",
              "opts": [
                "StringBuilder is newer",
                "String is immutable — creates new object each concatenation",
                "StringBuilder has more methods",
                "No difference"
              ],
              "ans": 1,
              "explanation": "String concatenation in a loop creates thousands of objects. StringBuilder modifies in-place — much faster."
            },
            {
              "q": "\"hello\".substring(2) returns?",
              "opts": [
                "he",
                "llo",
                "ello",
                "hell"
              ],
              "ans": 1,
              "explanation": "substring(startIndex) returns from index to end. Index 2 is \"l\", so \"llo\"."
            },
            {
              "q": "Arrays.sort() does what?",
              "opts": [
                "Returns sorted copy",
                "Sorts array IN PLACE — modifies original",
                "Returns sorted string",
                "Error"
              ],
              "ans": 1,
              "explanation": "Arrays.sort() sorts in place — it MODIFIES the original array directly."
            },
            {
              "q": "How to split \"a,b,c\" by comma?",
              "opts": [
                ".split(\",\")",
                "   .divide(\",\")",
                "   .parse(\",\")",
                "   .explode(\",\")"
              ],
              "ans": 0,
              "explanation": "\"a,b,c\".split(\",\") returns String[]{\"a\",\"b\",\"c\"}."
            },
            {
              "q": "equals() vs equalsIgnoreCase()?",
              "opts": [
                "No difference",
                "equals() is case-sensitive; equalsIgnoreCase() is not",
                "equalsIgnoreCase() is faster",
                "equals() works on int only"
              ],
              "ans": 1,
              "explanation": "\"hello\".equals(\"HELLO\") = false. \"hello\".equalsIgnoreCase(\"HELLO\") = true."
            }
          ]
        },
        {
          "id": 5,
          "title": "Methods, Recursion & Scope",
          "video": {
            "youtubeId": "xk4_1vDrzzo",
            "title": "Java Methods and Recursion",
            "channel": "Kunal Kushwaha",
            "duration": "1 hr 20 min",
            "description": "Methods — parameters, return types, overloading, recursion with stack trace, scope."
          },
          "content": {
            "sections": [
              {
                "heading": "Defining Methods",
                "code": "<span class=\"kw\">public class</span> <span class=\"cls\">MathHelper</span> {\n\n    <span class=\"cmt\">// no params, no return</span>\n    <span class=\"kw\">public static void</span> printLine() {\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"─────────────\"</span>);\n    }\n\n    <span class=\"cmt\">// params + return value</span>\n    <span class=\"kw\">public static int</span> add(<span class=\"kw\">int</span> a, <span class=\"kw\">int</span> b) { <span class=\"kw\">return</span> a + b; }\n\n    <span class=\"cmt\">// return boolean</span>\n    <span class=\"kw\">public static boolean</span> isEven(<span class=\"kw\">int</span> n) { <span class=\"kw\">return</span> n % 2 == 0; }\n\n    <span class=\"cmt\">// return String</span>\n    <span class=\"kw\">public static</span> <span class=\"cls\">String</span> getGrade(<span class=\"kw\">int</span> m) {\n        <span class=\"kw\">if</span> (m>=90) <span class=\"kw\">return</span> <span class=\"str\">\"A\"</span>;\n        <span class=\"kw\">if</span> (m>=80) <span class=\"kw\">return</span> <span class=\"str\">\"B\"</span>;\n        <span class=\"kw\">if</span> (m>=70) <span class=\"kw\">return</span> <span class=\"str\">\"C\"</span>;\n        <span class=\"kw\">return</span> <span class=\"str\">\"F\"</span>;\n    }\n\n    <span class=\"kw\">public static void</span> main(<span class=\"cls\">String</span>[] args) {\n        printLine();\n        <span class=\"cls\">System</span>.out.println(add(10, 20));     <span class=\"cmt\">// 30</span>\n        <span class=\"cls\">System</span>.out.println(isEven(7));        <span class=\"cmt\">// false</span>\n        <span class=\"cls\">System</span>.out.println(getGrade(85));     <span class=\"cmt\">// B</span>\n    }\n}"
              },
              {
                "heading": "Method Overloading",
                "code": "<span class=\"kw\">public class</span> <span class=\"cls\">Calculator</span> {\n    <span class=\"kw\">public static int</span> add(<span class=\"kw\">int</span> a, <span class=\"kw\">int</span> b) { <span class=\"kw\">return</span> a+b; }\n    <span class=\"kw\">public static double</span> add(<span class=\"kw\">double</span> a, <span class=\"kw\">double</span> b) { <span class=\"kw\">return</span> a+b; }\n    <span class=\"kw\">public static int</span> add(<span class=\"kw\">int</span> a, <span class=\"kw\">int</span> b, <span class=\"kw\">int</span> c) { <span class=\"kw\">return</span> a+b+c; }\n    <span class=\"cmt\">// Java picks correct one based on args at COMPILE time</span>\n    <span class=\"cmt\">// add(5,3) -> int version\n    // add(5.0,3.0) -> double version\n    // add(1,2,3) -> 3-arg version</span>\n}"
              },
              {
                "heading": "Recursion — Factorial & Fibonacci",
                "code": "<span class=\"cmt\">// Base case MUST exist or StackOverflowError!</span>\n<span class=\"kw\">public static int</span> factorial(<span class=\"kw\">int</span> n) {\n    <span class=\"kw\">if</span> (n<=1) <span class=\"kw\">return</span> 1;        <span class=\"cmt\">// base case</span>\n    <span class=\"kw\">return</span> n * factorial(n-1);   <span class=\"cmt\">// recursive case</span>\n}\n<span class=\"cmt\">// factorial(5) = 5*4*3*2*1 = 120</span>\n\n<span class=\"kw\">public static int</span> fibonacci(<span class=\"kw\">int</span> n) {\n    <span class=\"kw\">if</span> (n<=1) <span class=\"kw\">return</span> n;  <span class=\"cmt\">// fib(0)=0, fib(1)=1</span>\n    <span class=\"kw\">return</span> fibonacci(n-1) + fibonacci(n-2);\n}\n\n<span class=\"kw\">public static int</span> gcd(<span class=\"kw\">int</span> a, <span class=\"kw\">int</span> b) {\n    <span class=\"kw\">if</span> (b==0) <span class=\"kw\">return</span> a;     <span class=\"cmt\">// base case</span>\n    <span class=\"kw\">return</span> gcd(b, a % b);    <span class=\"cmt\">// Euclidean algorithm</span>\n}\n<span class=\"cmt\">// gcd(48,18) = gcd(18,12) = gcd(12,6) = gcd(6,0) = 6</span>"
              },
              {
                "heading": "Scope & Pass by Value",
                "text": "Local variable: declared in method — exists only in that method.\nInstance variable: declared in class — belongs to object.\nStatic variable: shared across all objects.\n\nIMPORTANT: Java ALWAYS passes primitives by value (copy). Changing parameter inside method does NOT affect original.\nArrays/Objects: the reference is copied — so arr[0]=999 DOES change original. But reassigning arr=new int[]{} does NOT."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Math Library",
              "instructions": "Create MathLibrary.java with these static methods (test with hardcoded values):\n1. isPrime(int n) -> boolean: test with 2,7,15,97\n2. reverseNumber(int n) -> int: reverseNumber(12345) -> 54321\n3. power(int base, int exp) -> long using RECURSION: power(2,10) -> 1024\n4. gcd(int a, int b) -> int using recursion: gcd(48,18) -> 6\n5. sumDigits(int n) -> int using recursion: sumDigits(123) -> 6\nPrint results in main().",
              "hint": "GCD: if b==0 return a, else return gcd(b, a%b). Power recursive: if exp==0 return 1, else return base * power(base, exp-1)."
            },
            "resources": [
              {
                "label": "GFG Methods in Java",
                "url": "https://www.geeksforgeeks.org/methods-in-java/"
              },
              {
                "label": "GFG Recursion",
                "url": "https://www.geeksforgeeks.org/recursion-in-java/"
              },
              {
                "label": "Kunal Kushwaha Recursion",
                "url": "https://www.youtube.com/watch?v=M2uO2nMT0Bk"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is required in every recursive method?",
              "opts": [
                "return statement",
                "Base case — the stopping condition",
                "static keyword",
                "loop inside"
              ],
              "ans": 1,
              "explanation": "Base case stops recursion. Without it: infinite recursion -> StackOverflowError."
            },
            {
              "q": "What is method overloading?",
              "opts": [
                "Calling method multiple times",
                "Same name, different parameters",
                "Method calling itself",
                "Inheriting methods"
              ],
              "ans": 1,
              "explanation": "Overloading: same name, different parameter list (type, count, or order). Resolved at compile time."
            },
            {
              "q": "Java passes primitives by?",
              "opts": [
                "Reference",
                "Value — a copy is made",
                "Pointer",
                "Address"
              ],
              "ans": 1,
              "explanation": "Java ALWAYS passes primitives by value. Copy is made. Changing param does NOT affect original variable."
            },
            {
              "q": "Return type of a void method?",
              "opts": [
                "null",
                "none",
                "void — returns nothing",
                "empty"
              ],
              "ans": 2,
              "explanation": "void means method returns nothing. You cannot assign a void method call to a variable."
            },
            {
              "q": "Error when recursion has no base case?",
              "opts": [
                "NullPointerException",
                "ArrayIndexOutOfBoundsException",
                "StackOverflowError",
                "ClassCastException"
              ],
              "ans": 2,
              "explanation": "No base case = infinite recursion = stack fills up = StackOverflowError."
            },
            {
              "q": "Local variable is accessible where?",
              "opts": [
                "Entire class",
                "Only inside the method/block it is declared in",
                "Entire package",
                "Subclasses"
              ],
              "ans": 1,
              "explanation": "Local variables live only in the method/block. Created on stack when method called, destroyed when it returns."
            },
            {
              "q": "factorial(0) returns?",
              "opts": [
                "0",
                "-1",
                "1 — base case",
                "Error"
              ],
              "ans": 2,
              "explanation": "Base case: factorial(0) = 1 and factorial(1) = 1 by mathematical definition."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "Which is NOT a primitive?",
          "opts": [
            "int",
            "boolean",
            "String",
            "char"
          ],
          "ans": 2,
          "explanation": "String is a class. 8 primitives: byte short int long float double char boolean."
        },
        {
          "q": "Output of System.out.println(5 % 2)?",
          "opts": [
            "2",
            "2.5",
            "1",
            "0"
          ],
          "ans": 2,
          "explanation": "5 / 2 = 2 remainder 1."
        },
        {
          "q": "Which loop runs at least once?",
          "opts": [
            "for",
            "while",
            "do-while",
            "enhanced for"
          ],
          "ans": 2,
          "explanation": "do-while checks condition AFTER execution."
        },
        {
          "q": "break inside loop does?",
          "opts": [
            "Skip iteration",
            "Exit loop immediately",
            "Pause execution",
            "Restart loop"
          ],
          "ans": 1,
          "explanation": "break exits the entire loop."
        },
        {
          "q": "String s length method?",
          "opts": [
            "s.size()",
            "s.len()",
            "s.count()",
            "s.length()"
          ],
          "ans": 3,
          "explanation": "String.length() returns character count."
        },
        {
          "q": "Default value of instance int?",
          "opts": [
            "null",
            "1",
            "0",
            "undefined"
          ],
          "ans": 2,
          "explanation": "int defaults to 0, boolean to false, Object to null."
        },
        {
          "q": "No break in switch?",
          "opts": [
            "Error",
            "Nothing",
            "Fall-through — next case runs too",
            "default runs"
          ],
          "ans": 2,
          "explanation": "Fall-through: without break, execution continues into next case."
        },
        {
          "q": "Arrays are fixed or dynamic?",
          "opts": [
            "Dynamic",
            "Fixed size at creation",
            "Always sorted",
            "Linked list"
          ],
          "ans": 1,
          "explanation": "Array size is fixed. Use ArrayList for dynamic sizing."
        },
        {
          "q": "StringBuilder.reverse() does?",
          "opts": [
            "Reverses each word",
            "Reverses entire content",
            "Reverses last character",
            "Error"
          ],
          "ans": 1,
          "explanation": "sb.reverse() reverses the entire sequence in place."
        },
        {
          "q": "Recursion means?",
          "opts": [
            "Loop inside method",
            "Method calling itself with smaller problem",
            "Nested loops",
            "Anonymous function"
          ],
          "ans": 1,
          "explanation": "Recursion: method calls itself until base case reached."
        }
      ],
      "miniProject": {
        "title": "Student Report Card System",
        "description": "Build console-based Report Card System using all Week 1 concepts.",
        "requirements": [
          "Store 5 students: name, roll, marks in 5 subjects (int array)",
          "Method calculateTotal(int[] marks) -> returns total",
          "Method calculatePercentage(int total) -> returns double",
          "Method getGrade(double pct) -> returns String",
          "Method isDistinction(double pct) -> returns boolean (>=75%)",
          "Print formatted report for each student",
          "Print topper (highest percentage student)",
          "BONUS: sort students by percentage descending"
        ]
      }
    },
    {
      "id": 2,
      "title": "Object-Oriented Programming",
      "topics": [
        {
          "id": 1,
          "title": "Classes, Objects & Constructors",
          "video": {
            "youtubeId": "IIAbOZy3x34",
            "title": "Classes, Objects & Constructors - Tutorial",
            "channel": "Telusko",
            "duration": "1 hr",
            "description": "Comprehensive guide to classes, object allocation in heap memory, default vs parameterized constructors, this keyword, and constructor chaining."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Classes & Objects",
                "text": "Object-Oriented Programming (OOP) models software around real-world entities that bundle state (attributes/fields) and behavior (methods). A class serves as a blueprint or user-defined data type, while an object is a live instance allocated in JVM heap memory.\n\nWhen you declare a variable of a class type (e.g., Student s), the variable resides on the stack and holds a memory reference (0x4A2F...) pointing to the actual object stored in heap memory. Multiple reference variables can point to the exact same heap object."
              },
              {
                "heading": "Constructors & Memory Allocation",
                "text": "A constructor is a special initializing subroutine called automatically when the 'new' keyword allocates heap memory. Key rules:\n1. Same exact name as the class.\n2. No return type (not even void).\n3. If you write NO constructor, the Java compiler automatically injects a default no-arg constructor.\n4. If you define ANY custom constructor, compiler does NOT provide the default constructor.\n5. Constructor Overloading: A class can have multiple constructors differing in parameter count or types.\n6. Constructor Chaining: Use this(...) on the FIRST line of a constructor to call another constructor within the same class."
              },
              {
                "heading": "Production Code — Class Architecture & Chaining",
                "code": "<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">Employee</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">int</span> empId;\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> name;\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> department;\n    <span class=\"kw\">private</span> <span class=\"kw\">double</span> salary;\n\n    <span class=\"cmt\">// No-arg constructor calling parameterized constructor</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">Employee</span>() {\n        this(0, <span class=\"str\">\"Unassigned\"</span>, <span class=\"str\">\"General\"</span>, 30000.0);\n    }\n\n    <span class=\"cmt\">// Two-argument constructor for quick onboarding</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">Employee</span>(<span class=\"kw\">int</span> empId, <span class=\"cls\">String</span> name) {\n        this(empId, name, <span class=\"str\">\"Engineering\"</span>, 50000.0);\n    }\n\n    <span class=\"cmt\">// Fully parameterized master constructor</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">Employee</span>(<span class=\"kw\">int</span> empId, <span class=\"cls\">String</span> name, <span class=\"cls\">String</span> department, <span class=\"kw\">double</span> salary) {\n        this.empId = empId;           <span class=\"cmt\">// 'this' distinguishes field from parameter</span>\n        this.name = name;\n        this.department = department;\n        this.salary = salary;\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> promote(<span class=\"kw\">double</span> percentageRaise) {\n        this.salary += this.salary * (percentageRaise / 100.0);\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Employee %s promoted. New Salary: %.2f%n\"</span>, this.name, this.salary);\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> displayProfile() {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"ID: %d | Name: %s | Dept: %s | Salary: Rs. %.2f%n\"</span>,\n                empId, name, department, salary);\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always initialize object fields in constructors rather than relying on default null or zero values to prevent NullPointerException.\n• Use 'this' consistently inside constructors and setters for clarity.\n• Avoid heavy computation or I/O operations inside constructors; constructors should only construct and initialize object state.\n• Keep helper construction logic inside static factory methods if complex object instantiation is required."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Can a constructor be private, final, or static in Java?\nA: A constructor CAN be private (widely used in Singleton pattern or utility classes with only static methods like java.lang.Math). However, constructors CANNOT be final, static, or abstract because they are not inherited by subclasses.\n\nQ: What happens if a constructor throws an exception?\nA: If a constructor throws an exception during execution, object instantiation fails and memory allocated on the heap is eventually reclaimed by the Garbage Collector. The reference is never assigned to the variable.\n\nQ: What is the difference between this() and super()?\nA: this() invokes another constructor in the SAME class (constructor chaining), while super() invokes a constructor in the DIRECT SUPERCLASS. Both must be the very first statement in a constructor, meaning you cannot use both in the same constructor block."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Enterprise Inventory System",
              "instructions": "Create Product.java with attributes: sku (String), name (String), price (double), stockQty (int), category (String).\n1. Implement 3 constructors: default (no-arg), 3-arg (sku, name, price), and 5-arg master constructor using constructor chaining via this().\n2. Add methods: purchaseStock(int qty), sellStock(int qty) which prevents negative stock, and applyDiscount(double pct).\n3. Create Main.java to instantiate 4 products using different constructors, simulate stock sales, and print formatted inventory reports.",
              "hint": "In sellStock(int qty), verify if stockQty >= qty before subtracting. If insufficient, print an error message or throw an IllegalArgumentException."
            },
            "resources": [
              {
                "label": "Oracle Docs — Classes and Objects",
                "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/"
              },
              {
                "label": "GeeksforGeeks — Constructors in Java",
                "url": "https://www.geeksforgeeks.org/constructors-in-java/"
              },
              {
                "label": "Baeldung — Constructor Chaining in Java",
                "url": "https://www.baeldung.com/java-constructor-chaining"
              }
            ]
          },
          "quiz": [
            {
              "q": "What resides in JVM heap memory when Student s = new Student() is executed?",
              "opts": [
                "Only the reference variable s",
                "The actual Student object containing instance variables",
                "Both the reference s and local method variables",
                "Compiled bytecode of Student class"
              ],
              "ans": 1,
              "explanation": "The actual object and its instance fields reside in the JVM Heap. The reference variable 's' resides on the thread stack."
            },
            {
              "q": "If a class has a custom constructor public Book(String title), what happens if you call new Book()?",
              "opts": [
                "It compiles and sets title to null",
                "Compile error: constructor Book() is undefined",
                "Runtime NullPointerException",
                "JVM creates a default constructor automatically"
              ],
              "ans": 1,
              "explanation": "Once you define any explicit constructor, Java removes the automatic default no-arg constructor."
            },
            {
              "q": "Which rule applies to using this() for constructor chaining?",
              "opts": [
                "It can be called anywhere inside a constructor",
                "It must be the very first executable statement in the constructor block",
                "It can be called inside regular instance methods",
                "It can be combined with super() on the same line"
              ],
              "ans": 1,
              "explanation": "In Java, explicit constructor invocation using this() or super() must always be the first statement."
            },
            {
              "q": "Why can't a constructor be marked as static?",
              "opts": [
                "Static methods return void",
                "Constructors are tied to specific object instance initialization, whereas static belongs to the class itself",
                "Static constructors are only allowed in interfaces",
                "Constructors must be final"
              ],
              "ans": 1,
              "explanation": "Constructors initialize specific instance state on the heap upon 'new'. Static belongs to the class level."
            },
            {
              "q": "What is the return type of a Java constructor?",
              "opts": [
                "void",
                "Object",
                "No return type allowed in method signature",
                "The class type itself"
              ],
              "ans": 2,
              "explanation": "Constructors have no return type in their signature. Writing void makes it a regular method, not a constructor."
            },
            {
              "q": "Can a class declare private constructors?",
              "opts": [
                "No, constructors must always be public",
                "Yes, commonly used in Singleton classes or Utility classes",
                "Yes, but only if the class is abstract",
                "No, private constructors cause compilation errors"
              ],
              "ans": 1,
              "explanation": "Private constructors prevent external instantiation, which is essential for Singletons and pure utility classes like java.lang.Math."
            },
            {
              "q": "When an object is created, in what order are fields initialized?",
              "opts": [
                "Constructors execute before default field values are assigned",
                "Fields get default zero/null values, then explicit field initializers run, then constructor executes",
                "Only constructor runs",
                "Static blocks run after constructor"
              ],
              "ans": 1,
              "explanation": "JVM zeroes memory (null/0/false), then executes inline field assignments and instance initializer blocks, then executes the constructor body."
            }
          ]
        },
        {
          "id": 2,
          "title": "Encapsulation & Access Modifiers",
          "video": {
            "youtubeId": "lCBue2ocy8A",
            "title": "Encapsulation & Access Modifiers - Tutorial",
            "channel": "Telusko",
            "duration": "35 min",
            "description": "Deep dive into data hiding, getters and setters with validation logic, Java Beans standards, and private/default/protected/public access levels."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Data Hiding & Encapsulation",
                "text": "Encapsulation is the OOP pillar that bundles data (fields) and the methods that operate on that data into a single cohesive unit while restricting unauthorized direct access to internal state (Data Hiding).\n\nBy declaring fields private and exposing controlled public getter and setter methods, you establish a protective boundary around your object. This guarantees internal invariants cannot be violated by external code (e.g., setting a negative bank balance or invalid email format)."
              },
              {
                "heading": "The 4 Java Access Modifiers",
                "text": "Java provides four distinct levels of access control:\n1. private: Accessible strictly within the declaring class body. Best practice for all instance fields.\n2. default (package-private): Accessible anywhere within the same package. Applied when no modifier keyword is specified.\n3. protected: Accessible within the same package AND by subclasses residing in any external package.\n4. public: Accessible universally from any class in any package across the JVM ecosystem."
              },
              {
                "heading": "Production Code — Secure Bank Account with Validation",
                "code": "<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">BankAccount</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">String</span> accountNumber;  <span class=\"cmt\">// Immutable once initialized</span>\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> accountHolderName;\n    <span class=\"kw\">private</span> <span class=\"kw\">double</span> balance;\n    <span class=\"kw\">private</span> <span class=\"kw\">boolean</span> isActive;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">BankAccount</span>(<span class=\"cls\">String</span> accountNumber, <span class=\"cls\">String</span> name, <span class=\"kw\">double</span> initialDeposit) {\n        this.accountNumber = accountNumber;\n        this.setAccountHolderName(name);\n        <span class=\"kw\">if</span> (initialDeposit < 0) {\n            <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">IllegalArgumentException</span>(<span class=\"str\">\"Initial deposit cannot be negative\"</span>);\n        }\n        this.balance = initialDeposit;\n        this.isActive = <span class=\"kw\">true</span>;\n    }\n\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> getAccountNumber() { <span class=\"kw\">return</span> accountNumber; }\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> getAccountHolderName() { <span class=\"kw\">return</span> accountHolderName; }\n    <span class=\"kw\">public</span> <span class=\"kw\">double</span> getBalance() { <span class=\"kw\">return</span> balance; }\n    <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> isActive() { <span class=\"kw\">return</span> isActive; }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> setAccountHolderName(<span class=\"cls\">String</span> name) {\n        <span class=\"kw\">if</span> (name == <span class=\"kw\">null</span> || name.trim().isEmpty()) {\n            <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">IllegalArgumentException</span>(<span class=\"str\">\"Account holder name cannot be blank\"</span>);\n        }\n        this.accountHolderName = name.trim();\n    }\n\n    <span class=\"kw\">public</span> synchronized <span class=\"kw\">void</span> deposit(<span class=\"kw\">double</span> amount) {\n        <span class=\"kw\">if</span> (!isActive) <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">IllegalStateException</span>(<span class=\"str\">\"Account is closed\"</span>);\n        <span class=\"kw\">if</span> (amount <= 0) <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">IllegalArgumentException</span>(<span class=\"str\">\"Deposit amount must be positive\"</span>);\n        this.balance += amount;\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Deposited: %.2f. New Balance: %.2f%n\"</span>, amount, this.balance);\n    }\n\n    <span class=\"kw\">public</span> synchronized <span class=\"kw\">boolean</span> withdraw(<span class=\"kw\">double</span> amount) {\n        <span class=\"kw\">if</span> (!isActive) <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">IllegalStateException</span>(<span class=\"str\">\"Account is closed\"</span>);\n        <span class=\"kw\">if</span> (amount <= 0) <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">IllegalArgumentException</span>(<span class=\"str\">\"Withdraw amount must be positive\"</span>);\n        <span class=\"kw\">if</span> (this.balance < amount) {\n            <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Insufficient funds for withdrawal.\"</span>);\n            <span class=\"kw\">return</span> <span class=\"kw\">false</span>;\n        }\n        this.balance -= amount;\n        <span class=\"kw\">return</span> <span class=\"kw\">true</span>;\n    }\n}"
              },
              {
                "heading": "JavaBean Standards & Industry Practices",
                "text": "• Standard JavaBean specifications mandate: public no-arg constructor, private fields, and standardized naming for getters/setters (getFieldName() or isFieldName() for booleans, setFieldName()).\n• Make fields 'final' if they should never change after construction (like IDs or account numbers).\n• Never return direct references to mutable internal objects (like Date or ArrayList or arrays) from getters; return defensive copies to preserve encapsulation."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why is encapsulation important if getters and setters allow changing values anyway?\nA: Getters and setters act as controlled gatekeepers. They allow you to add validation logic, logging, access control, or notification triggers whenever data changes. If fields were public, external code could assign illegal values directly without any audit trail or checks.\n\nQ: Can a top-level class be marked as private or protected?\nA: No. Top-level classes can only be marked public or package-private (default). Only inner/nested classes can be declared private or protected.\n\nQ: What is immutability and how does encapsulation relate to it?\nA: An immutable object (like java.lang.String or records) cannot change state after creation. You achieve immutability via encapsulation by making fields private final and omitting setter methods entirely."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Secure Employee HR Record",
              "instructions": "Write a class EmployeeRecord with private fields: empId (String), fullName (String), age (int), baseSalary (double), and performanceScore (int 1-10).\n1. Implement strict validation in setters: age must be 18-65, salary >= 20000, score between 1 and 10.\n2. Add method calculateBonus() that returns 15% of salary if score >= 8, 10% if score >= 5, and 0 otherwise.\n3. Test in Main.java by attempting to pass invalid ages or salaries inside a try-catch block and printing validation error messages.",
              "hint": "Throw new IllegalArgumentException(\"Invalid age\") in setAge() when validation fails."
            },
            "resources": [
              {
                "label": "Oracle Docs — Access Control",
                "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html"
              },
              {
                "label": "GeeksforGeeks — Encapsulation in Java",
                "url": "https://www.geeksforgeeks.org/encapsulation-in-java/"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which access modifier allows visibility to subclasses in a different package?",
              "opts": [
                "default (package-private)",
                "private",
                "protected",
                "public only"
              ],
              "ans": 2,
              "explanation": "protected allows access within the same package PLUS any child class residing in different packages."
            },
            {
              "q": "What is the naming convention for a getter method of a boolean field named 'verified'?",
              "opts": [
                "getVerified()",
                "isVerified()",
                "fetchVerified()",
                "hasVerified()"
              ],
              "ans": 1,
              "explanation": "For boolean primitives, standard JavaBean convention uses isFieldName() such as isVerified()."
            },
            {
              "q": "Why should mutable objects like Date or int[] returned by getters be defensively copied?",
              "opts": [
                "To save heap memory",
                "To prevent callers from modifying internal encapsulated state via the returned reference",
                "Because JVM forbids returning arrays",
                "To make compilation faster"
              ],
              "ans": 1,
              "explanation": "If you return internal mutable references directly, callers can mutate array elements or date fields, breaking encapsulation."
            },
            {
              "q": "Can top-level Java classes be declared protected?",
              "opts": [
                "Yes, for inheritance",
                "No, top-level classes can only be public or default",
                "Yes, if they are abstract",
                "Only inside interfaces"
              ],
              "ans": 1,
              "explanation": "Top-level classes cannot be protected or private. Nested inner classes can be."
            },
            {
              "q": "What happens if an instance field has no access modifier explicitly stated?",
              "opts": [
                "It becomes private",
                "It becomes public",
                "It gets default (package-private) access, visible only inside the same package",
                "It causes a syntax error"
              ],
              "ans": 2,
              "explanation": "Omitting the modifier results in package-private (default) access."
            },
            {
              "q": "Which technique creates a strictly immutable class in Java?",
              "opts": [
                "Make all fields public static",
                "Mark class final, make all fields private final, provide only getters (no setters)",
                "Use protected variables",
                "Add synchronized keyword to constructors"
              ],
              "ans": 1,
              "explanation": "Marking class final prevents subclass overriding, and private final fields without setters ensure state cannot change."
            },
            {
              "q": "What is the primary architectural benefit of Data Hiding?",
              "opts": [
                "Decreases bytecode size",
                "Decouples internal implementation details from external consumers, allowing safe refactoring",
                "Makes loops execute faster",
                "Eliminates garbage collection overhead"
              ],
              "ans": 1,
              "explanation": "Encapsulation hides implementation details, enabling developers to modify internal storage algorithms without breaking client code."
            }
          ]
        },
        {
          "id": 3,
          "title": "Inheritance & super Keyword",
          "video": {
            "youtubeId": "9JpNY-XAseg",
            "title": "Inheritance & super Keyword - Tutorial",
            "channel": "Apna College",
            "duration": "1 hr",
            "description": "Understanding IS-A relationships, single vs multi-level inheritance, method overriding rules, super constructor invocation, and final classes."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Inheritance & Hierarchy",
                "text": "Inheritance is an OOP mechanism where a new child class (subclass) derives structure and behavior from an existing parent class (superclass) using the 'extends' keyword. It models an 'IS-A' relationship (e.g., Manager IS-AN Employee).\n\nBenefits:\n1. Code Reusability: Subclasses inherit parent fields and methods without rewriting.\n2. Hierarchy Organization: Establishes logical classification.\n3. Foundation for Polymorphism: Enables dynamic runtime dispatch across class families."
              },
              {
                "heading": "The 'super' Keyword & Chaining Rules",
                "text": "The 'super' keyword serves two distinct purposes inside a subclass:\n1. super(...): Invokes a specific constructor of the immediate parent class. Must be the FIRST statement in a subclass constructor.\n2. super.methodName(): Calls an overridden parent method or accesses parent fields hidden by subclass shadowing.\n\nNote: Java strictly prohibits multiple inheritance of classes (a class cannot extend two classes) to prevent ambiguity (the Diamond Problem). Interfaces solve this limitation."
              },
              {
                "heading": "Production Code — Multi-Level Hierarchy with Overriding",
                "code": "<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">Employee</span> {\n    <span class=\"kw\">protected</span> <span class=\"kw\">int</span> empId;\n    <span class=\"kw\">protected</span> <span class=\"cls\">String</span> name;\n    <span class=\"kw\">protected</span> <span class=\"kw\">double</span> baseSalary;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">Employee</span>(<span class=\"kw\">int</span> empId, <span class=\"cls\">String</span> name, <span class=\"kw\">double</span> baseSalary) {\n        this.empId = empId;\n        this.name = name;\n        this.baseSalary = baseSalary;\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">double</span> calculateCompensation() {\n        <span class=\"kw\">return</span> baseSalary;\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> generatePaySlip() {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"[%s] ID: %d | Total Pay: Rs. %.2f%n\"</span>,\n                getClass().getSimpleName(), empId, calculateCompensation());\n    }\n}\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">SoftwareEngineer</span> <span class=\"kw\">extends</span> <span class=\"cls\">Employee</span> {\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> techStack;\n    <span class=\"kw\">private</span> <span class=\"kw\">double</span> techBonus;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">SoftwareEngineer</span>(<span class=\"kw\">int</span> id, <span class=\"cls\">String</span> name, <span class=\"kw\">double</span> salary, <span class=\"cls\">String</span> stack, <span class=\"kw\">double</span> bonus) {\n        super(id, name, salary);  <span class=\"cmt\">// Must be first line!</span>\n        this.techStack = stack;\n        this.techBonus = bonus;\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">double</span> calculateCompensation() {\n        <span class=\"cmt\">// reuse parent calculation and add specific bonus</span>\n        <span class=\"kw\">return</span> super.calculateCompensation() + techBonus;\n    }\n}\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">TechLead</span> <span class=\"kw\">extends</span> <span class=\"cls\">SoftwareEngineer</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">int</span> teamSize;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">TechLead</span>(<span class=\"kw\">int</span> id, <span class=\"cls\">String</span> name, <span class=\"kw\">double</span> salary, <span class=\"cls\">String</span> stack, <span class=\"kw\">double</span> bonus, <span class=\"kw\">int</span> teamSize) {\n        super(id, name, salary, stack, bonus);\n        this.teamSize = teamSize;\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">double</span> calculateCompensation() {\n        <span class=\"kw\">double</span> leadershipAllowance = teamSize * 5000.0;\n        <span class=\"kw\">return</span> super.calculateCompensation() + leadershipAllowance;\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Liskov Substitution",
                "text": "• Favor Composition over Inheritance when classes do not share a strict 'IS-A' relationship. If a class merely uses another, use fields (HAS-A) instead of extends.\n• Adhere to Liskov Substitution Principle (LSP): Subclasses must be completely substitutable for their parent class without altering program correctness.\n• Mark classes 'final' if they are not designed or documented for safe subclassing."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why does Java not support multiple inheritance with classes?\nA: To avoid ambiguity known as the Diamond Problem. If class C extends both A and B, and both define a method foo(), the compiler cannot determine which implementation C inherits. Interfaces avoid this because abstract interface methods have no implementation collision (or must be explicitly overridden for Java 8 default methods).\n\nQ: What happens if a subclass constructor does not call super() explicitly?\nA: The compiler automatically inserts an implicit call to super() (the no-arg constructor of the parent). If the parent class has no explicit no-arg constructor, a compilation error occurs.\n\nQ: Can private members of a parent class be inherited?\nA: Private fields and methods exist in the memory allocation of the child object, but they are NOT directly accessible by name in subclass code. Subclasses must interact with them via inherited public/protected methods."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Vehicle Management Fleet",
              "instructions": "Create base class Vehicle(brand, model, rentalRatePerDay) with virtual method calculateRentalCost(int days).\n1. Create subclass Car extends Vehicle adding boolean isLuxury. Override calculateRentalCost to add a 25% surcharge if isLuxury is true.\n2. Create subclass Truck extends Vehicle adding double cargoCapacityTons. Override calculateRentalCost adding Rs. 1000 per cargo ton per day.\n3. Write Main.java creating an array of Vehicle references containing both Cars and Trucks, calculate total 5-day revenue.",
              "hint": "Use super(brand, model, rate) inside Car and Truck constructors."
            },
            "resources": [
              {
                "label": "Oracle Docs — Inheritance",
                "url": "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html"
              },
              {
                "label": "Baeldung — Java Inheritance Guide",
                "url": "https://www.baeldung.com/java-inheritance"
              }
            ]
          },
          "quiz": [
            {
              "q": "What statement must execute first inside a child class constructor?",
              "opts": [
                "Field initialization",
                "super(...) or this(...) invocation",
                "System.out.println",
                "Garbage collection call"
              ],
              "ans": 1,
              "explanation": "Parent class constructors must run before child class state is built."
            },
            {
              "q": "What keyword prevents a class from being extended by subclasses?",
              "opts": [
                "static",
                "private",
                "final",
                "sealed only"
              ],
              "ans": 2,
              "explanation": "Applying the 'final' modifier to a class declaration (e.g., public final class String) forbids inheritance."
            },
            {
              "q": "If parent class A has only one constructor A(int x), what happens if subclass B has constructor B() without calling super(int)?",
              "opts": [
                "It compiles fine with default value 0",
                "Compile error: implicit super constructor A() is undefined",
                "Runtime exception",
                "B inherits A(int) automatically"
              ],
              "ans": 1,
              "explanation": "Since A lacks a no-arg constructor, subclass B cannot rely on implicit super(); it must explicitly call super(x)."
            },
            {
              "q": "Can a subclass override a parent method and reduce its visibility (e.g., from public to protected)?",
              "opts": [
                "Yes, anytime",
                "No, overriding methods cannot assign more restrictive access privileges",
                "Only if marked final",
                "Yes, if return type matches"
              ],
              "ans": 1,
              "explanation": "Subclass overrides can broaden access (protected -> public) but never narrow it (public -> protected/private)."
            },
            {
              "q": "What is the Diamond Problem in object-oriented programming?",
              "opts": [
                "Infinite loops in recursion",
                "Ambiguity arising when a class inherits from two parent classes defining the exact same method signature",
                "Memory leaks in heap allocation",
                "Circular dependencies in imports"
              ],
              "ans": 1,
              "explanation": "The Diamond Problem occurs in multiple inheritance when the compiler cannot resolve which parent method implementation to inherit."
            },
            {
              "q": "Does every class in Java inherit from java.lang.Object?",
              "opts": [
                "No, only primitive wrappers do",
                "Yes, implicitly or explicitly, Object is the root of all Java class hierarchies",
                "Only classes that implement Serializable",
                "Only classes declared public"
              ],
              "ans": 1,
              "explanation": "Every class in Java directly or indirectly extends java.lang.Object, inheriting methods like toString(), equals(), and hashCode()."
            },
            {
              "q": "What is the effect of shadowing a parent field in a subclass?",
              "opts": [
                "Parent field is deleted",
                "Subclass declares a field with the same name, hiding parent field; methods in subclass access child field unless super.field is used",
                "Causes a compiler error",
                "Overrides the parent field's data type"
              ],
              "ans": 1,
              "explanation": "Fields are not overridden dynamically like methods; they are shadowed based on reference type or super keyword."
            }
          ]
        },
        {
          "id": 4,
          "title": "Polymorphism & Method Overriding",
          "video": {
            "youtubeId": "qqYOAbx5CLRM",
            "title": "Polymorphism & Method Overriding - Tutorial",
            "channel": "Apna College",
            "duration": "55 min",
            "description": "Understanding compile-time vs runtime polymorphism, method overriding rules, covariant return types, dynamic method dispatch, and upcasting/downcasting."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Poly (Many) Morph (Forms)",
                "text": "Polymorphism enables a single interface or parent reference to represent multiple underlying concrete types and behave differently depending on the runtime instance.\n\nTwo Forms:\n1. Compile-Time Polymorphism (Static Binding / Overloading): Same method name with different parameter lists resolved by compiler.\n2. Runtime Polymorphism (Dynamic Binding / Overriding): Subclass provides specific implementation for a method defined in its parent class. JVM resolves method call dynamically based on actual object type in heap."
              },
              {
                "heading": "Upcasting, Downcasting & Dynamic Method Dispatch",
                "text": "Upcasting assigns a child object to a parent reference: Shape s = new Circle(); This is always safe and implicit.\n\nWhen s.draw() is invoked, JVM looks at the actual heap object (Circle) at runtime and invokes Circle's draw() method. This mechanism is known as Dynamic Method Dispatch.\nDowncasting (Circle c = (Circle) s) requires an explicit cast and should always be guarded with the 'instanceof' operator to avoid ClassCastException."
              },
              {
                "heading": "Production Code — Payment Gateway Polymorphism",
                "code": "<span class=\"kw\">public</span> <span class=\"kw\">abstract</span> <span class=\"kw\">class</span> <span class=\"cls\">PaymentProcessor</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">abstract</span> <span class=\"kw\">boolean</span> processTransaction(<span class=\"kw\">double</span> amount);\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> printReceipt(<span class=\"cls\">String</span> txnId, <span class=\"kw\">double</span> amount) {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"[%s] Txn: %s | Amount: Rs. %.2f%n\"</span>, \n                getClass().getSimpleName(), txnId, amount);\n    }\n}\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">UPIPaymentProcessor</span> <span class=\"kw\">extends</span> <span class=\"cls\">PaymentProcessor</span> {\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> vpa;\n    <span class=\"kw\">public</span> <span class=\"cls\">UPIPaymentProcessor</span>(<span class=\"cls\">String</span> vpa) { this.vpa = vpa; }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> processTransaction(<span class=\"kw\">double</span> amount) {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Connecting to NPCI server for UPI ID %s... Verified! Debited %.2f%n\"</span>, vpa, amount);\n        <span class=\"kw\">return</span> <span class=\"kw\">true</span>;\n    }\n}\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">CreditCardProcessor</span> <span class=\"kw\">extends</span> <span class=\"cls\">PaymentProcessor</span> {\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> cardNumber;\n    <span class=\"kw\">public</span> <span class=\"cls\">CreditCardProcessor</span>(<span class=\"cls\">String</span> card) { this.cardNumber = card; }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> processTransaction(<span class=\"kw\">double</span> amount) {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Validating Visa/MC ending in %s... Authorizing Rs. %.2f%n\"</span>, \n                cardNumber.substring(cardNumber.length() - 4), amount);\n        <span class=\"kw\">return</span> <span class=\"kw\">true</span>;\n    }\n}\n\n<span class=\"cmt\">// Enterprise Service using Polymorphism</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">CheckoutService</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> executeOrder(<span class=\"cls\">PaymentProcessor</span> processor, <span class=\"kw\">double</span> totalAmount) {\n        <span class=\"cmt\">// Polymorphic call: executes actual subclass implementation dynamically</span>\n        <span class=\"kw\">if</span> (processor.processTransaction(totalAmount)) {\n            processor.printReceipt(<span class=\"str\">\"TXN_\"</span> + <span class=\"cls\">System</span>.currentTimeMillis(), totalAmount);\n        }\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & @Override Annotation",
                "text": "• Always attach the @Override annotation when overriding parent methods. It instructs the compiler to verify that the method actually overrides a parent signature, catching silent bugs caused by typos.\n• Covariant Return Types: Overridden methods in subclasses can return a subtype of the parent method's return type.\n• Remember that private, static, and final methods CANNOT be overridden."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Can you override static methods in Java?\nA: No. Static methods belong to the class, not the object instance. If a subclass declares a static method with the same signature, it shadows (hides) the parent static method rather than overriding it. Calls are resolved at compile time based on reference type.\n\nQ: What is the difference between Method Overloading and Method Overriding?\nA: Overloading happens in the same class (or subclass) with same method name but DIFFERENT parameters (resolved at compile time). Overriding happens between subclass and superclass with EXACT SAME name and parameters (resolved at runtime).\n\nQ: What is pattern matching for instanceof in modern Java?\nA: Since Java 16, pattern matching simplifies downcasting: if (obj instanceof String s) { System.out.println(s.length()); } eliminates the need for explicit casting."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Notification System Dispatcher",
              "instructions": "Create base class NotificationSender with method send(String recipient, String message).\n1. Create subclasses EmailNotificationSender, SMSNotificationSender, and WhatsAppNotificationSender overriding send() with channel-specific simulation.\n2. Write AlertService class with method broadcastAlert(List<NotificationSender> channels, String alertMsg).\n3. In Main.java, pass a list containing all 3 senders to broadcastAlert and observe polymorphic runtime dispatch.",
              "hint": "Store all senders in List<NotificationSender> senders = new ArrayList<>();"
            },
            "resources": [
              {
                "label": "Oracle Docs — Polymorphism",
                "url": "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html"
              },
              {
                "label": "GeeksforGeeks — Polymorphism in Java",
                "url": "https://www.geeksforgeeks.org/polymorphism-in-java/"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which type of polymorphism is resolved at runtime by the JVM?",
              "opts": [
                "Method Overloading",
                "Method Overriding (Dynamic Method Dispatch)",
                "Operator Overloading",
                "Generic Type Erasure"
              ],
              "ans": 1,
              "explanation": "Overridden method calls are dynamically bound at runtime depending on the actual heap object instance."
            },
            {
              "q": "What happens if you attempt to override a final method in a subclass?",
              "opts": [
                "It runs normally",
                "Compile error: cannot override final method",
                "Runtime ClassCastException",
                "It shadows the method"
              ],
              "ans": 1,
              "explanation": "The 'final' modifier on a method explicitly forbids subclasses from overriding its behavior."
            },
            {
              "q": "Given Animal a = new Dog(); what happens when a.bark() is called if bark() exists only in Dog?",
              "opts": [
                "Compiles and runs fine",
                "Compile error: method bark() undefined for type Animal",
                "Runs if Dog has public access",
                "NullPointerException"
              ],
              "ans": 1,
              "explanation": "The compiler checks the reference type (Animal). Since Animal does not define bark(), compilation fails without downcasting ((Dog)a).bark()."
            },
            {
              "q": "What is a covariant return type?",
              "opts": [
                "Returning void instead of int",
                "An overridden method returning a subclass type of the return type declared in the superclass method",
                "Returning generic primitives",
                "Throwing broader checked exceptions"
              ],
              "ans": 1,
              "explanation": "Java allows overridden methods to return narrower subtype references (e.g., parent returns Animal, child override returns Dog)."
            },
            {
              "q": "Why should you always use the @Override annotation?",
              "opts": [
                "It speeds up execution",
                "It forces compiler verification that method signature perfectly matches superclass method",
                "It makes methods synchronized",
                "It automatically generates getter code"
              ],
              "ans": 1,
              "explanation": "@Override catches accidental typos in method names or parameter lists during compilation."
            },
            {
              "q": "Can constructors be overridden in Java subclasses?",
              "opts": [
                "Yes, always",
                "No, constructors are not inherited and therefore cannot be overridden",
                "Only if protected",
                "Yes, using super()"
              ],
              "ans": 1,
              "explanation": "Constructors are specific to object initialization of their defining class and are never inherited or overridden."
            },
            {
              "q": "What exception occurs when an illegal downcast is executed at runtime?",
              "opts": [
                "IllegalAccessException",
                "ClassCastException",
                "ArrayStoreException",
                "NullPointerException"
              ],
              "ans": 1,
              "explanation": "If you downcast an object to an incompatible type (e.g., casting a Circle object to Rectangle), JVM throws ClassCastException."
            }
          ]
        },
        {
          "id": 5,
          "title": "Abstract Classes & Interfaces",
          "video": {
            "youtubeId": "A7X4-sFDkqM",
            "title": "Abstract Classes & Interfaces - Tutorial",
            "channel": "Kunal Kushwaha",
            "duration": "1 hr 10 min",
            "description": "Comprehensive comparison of Abstract Classes vs Interfaces, Java 8 default/static interface methods, functional interfaces, and clean abstraction design."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Abstraction Contracts",
                "text": "Abstraction focuses on hiding complex implementation details while exposing a clean contract or API to the client.\n\nAbstract Class:\n• Declared with 'abstract' keyword. Cannot be directly instantiated with 'new'.\n• Can contain both abstract methods (no body) and concrete methods with state (instance fields and constructors).\n• Used when subclasses share common state and foundational behavior.\n\nInterface:\n• Pure contractual blueprint. Can be implemented by multiple classes (enabling multiple behavioral inheritance).\n• Before Java 8: Contained only public abstract methods and public static final constants.\n• Java 8+: Supports default methods (with implementation) and static methods."
              },
              {
                "heading": "When to Use Abstract Class vs Interface",
                "text": "Use Abstract Class when:\n1. Classes share a strong IS-A taxonomy with common state (instance variables).\n2. You need non-public access modifiers (protected/private helper methods).\n\nUse Interface when:\n1. Defining behavioral capabilities across unrelated classes (e.g., Comparable, Serializable, Printable).\n2. Designing decoupled plugin architectures or repositories where multiple inheritance of type is required."
              },
              {
                "heading": "Production Code — Decoupled Storage Engine API",
                "code": "<span class=\"cmt\">// Behavioral Interface contract</span>\n<span class=\"kw\">public</span> <span class=\"kw\">interface</span> <span class=\"cls\">StorageRepository</span><<span class=\"cls\">T</span>> {\n    <span class=\"kw\">void</span> save(<span class=\"cls\">T</span> entity);\n    <span class=\"cls\">T</span> findById(<span class=\"cls\">String</span> id);\n    \n    <span class=\"cmt\">// Java 8 default method providing fallback implementation</span>\n    <span class=\"kw\">default</span> <span class=\"kw\">boolean</span> validateConnection() {\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Executing standard health ping...\"</span>);\n        <span class=\"kw\">return</span> <span class=\"kw\">true</span>;\n    }\n}\n\n<span class=\"cmt\">// Abstract Base Class managing shared infrastructure state</span>\n<span class=\"kw\">public</span> <span class=\"kw\">abstract</span> <span class=\"kw\">class</span> <span class=\"cls\">BaseCloudRepository</span><<span class=\"cls\">T</span>> <span class=\"kw\">implements</span> <span class=\"cls\">StorageRepository</span><<span class=\"cls\">T</span>> {\n    <span class=\"kw\">protected</span> <span class=\"cls\">String</span> bucketName;\n    <span class=\"kw\">protected</span> <span class=\"kw\">int</span> timeoutSeconds;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">BaseCloudRepository</span>(<span class=\"cls\">String</span> bucket, <span class=\"kw\">int</span> timeout) {\n        this.bucketName = bucket;\n        this.timeoutSeconds = timeout;\n    }\n\n    <span class=\"cmt\">// Concrete shared utility</span>\n    <span class=\"kw\">protected</span> <span class=\"kw\">void</span> logTransaction(<span class=\"cls\">String</span> action, <span class=\"cls\">String</span> entityId) {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"[LOG - %s] Action: %s on Entity: %s%n\"</span>, bucketName, action, entityId);\n    }\n}\n\n<span class=\"cmt\">// Concrete AWS S3 Implementation</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">S3StorageRepository</span> <span class=\"kw\">extends</span> <span class=\"cls\">BaseCloudRepository</span><<span class=\"cls\">String</span>> {\n    <span class=\"kw\">public</span> <span class=\"cls\">S3StorageRepository</span>(<span class=\"cls\">String</span> bucket) {\n        super(bucket, 30);\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> save(<span class=\"cls\">String</span> payload) {\n        logTransaction(<span class=\"str\">\"PUT_OBJECT\"</span>, payload);\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Uploading payload bytes to AWS S3 bucket: \"</span> + bucketName);\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> findById(<span class=\"cls\">String</span> id) {\n        logTransaction(<span class=\"str\">\"GET_OBJECT\"</span>, id);\n        <span class=\"kw\">return</span> <span class=\"str\">\"S3_PAYLOAD_\"</span> + id;\n    }\n}"
              },
              {
                "heading": "Functional Interfaces & Java 8 Evolution",
                "text": "• A Functional Interface is an interface containing EXACTLY ONE abstract method (e.g., Runnable, Callable, Comparator). Annotate with @FunctionalInterface.\n• Functional interfaces unlock Lambda Expressions in modern Java.\n• Default interface methods allow API designers to add new methods to existing interfaces without breaking backwards compatibility for existing implementing classes."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Can an abstract class have constructors?\nA: Yes! Abstract classes have constructors which are invoked via super() when a concrete subclass is instantiated. This initializes fields defined inside the abstract class.\n\nQ: Can an interface declare instance variables?\nA: No. Any field declared in an interface is implicitly public static final (a constant). Interfaces cannot maintain per-object state.\n\nQ: What happens if a class implements two interfaces that define the same default method?\nA: The Java compiler enforces that the implementing class MUST explicitly override the conflicting default method to resolve the ambiguity (syntax: InterfaceName.super.methodName())."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Multi-Channel Export Engine",
              "instructions": "Create interface Exportable with abstract method exportData(String data) and default method compress(String data) returning compressed text.\n1. Create abstract class DocumentFormatter implementing Exportable with protected String formatType and abstract method formatHeader().\n2. Create concrete classes PDFExporter and CSVExporter extending DocumentFormatter.\n3. Test in Main.java: generate formatted headers, compress string data using default interface method, and export documents.",
              "hint": "In default compress(), you can simply return \"[COMPRESSED] \" + data;"
            },
            "resources": [
              {
                "label": "Oracle Docs — Abstract Classes",
                "url": "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"
              },
              {
                "label": "Oracle Docs — Interfaces",
                "url": "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html"
              }
            ]
          },
          "quiz": [
            {
              "q": "Can you instantiate an abstract class directly using new AbstractClass()?",
              "opts": [
                "Yes, if it has anonymous methods",
                "No, abstract classes cannot be directly instantiated",
                "Yes, if all methods are concrete",
                "Only inside static blocks"
              ],
              "ans": 1,
              "explanation": "Abstract classes represent incomplete templates and require concrete subclasses for instantiation."
            },
            {
              "q": "What are the implicit modifiers for variables declared inside a Java interface?",
              "opts": [
                "private instance",
                "public static final",
                "protected static",
                "default instance"
              ],
              "ans": 1,
              "explanation": "All interface fields are automatically public static final constants."
            },
            {
              "q": "Why were default methods introduced in Java 8 interfaces?",
              "opts": [
                "To replace abstract classes entirely",
                "To allow adding new methods to interfaces without breaking existing implementations",
                "To speed up JVM memory access",
                "To enable private constructors"
              ],
              "ans": 1,
              "explanation": "Default methods provided backwards compatibility for evolving collections APIs like Java 8 Streams."
            },
            {
              "q": "What defines a Functional Interface?",
              "opts": [
                "An interface with no methods (marker interface)",
                "An interface containing exactly one abstract method",
                "An interface with only static methods",
                "Any interface extending Serializable"
              ],
              "ans": 1,
              "explanation": "Functional interfaces (1 abstract method) act as target types for lambda expressions."
            },
            {
              "q": "If concrete class Dog extends abstract class Animal, what must Dog do if Animal has abstract void makeNoise()?",
              "opts": [
                "Nothing",
                "Implement makeNoise() OR declare Dog as abstract",
                "Mark makeNoise() as private",
                "Delete the method"
              ],
              "ans": 1,
              "explanation": "A concrete class must implement every inherited abstract method or become abstract itself."
            },
            {
              "q": "Can a class implement multiple interfaces while extending a superclass?",
              "opts": [
                "No, only one interface allowed",
                "Yes, syntax: class Child extends Parent implements IntA, IntB",
                "Only if Parent is abstract",
                "No, interfaces prohibit inheritance"
              ],
              "ans": 1,
              "explanation": "Java allows single class inheritance combined with multiple interface implementations."
            },
            {
              "q": "Can an abstract class exist without any abstract methods inside it?",
              "opts": [
                "No, compiler error",
                "Yes, marking class abstract simply prevents direct instantiation",
                "Only if it extends Object",
                "Only in Java 17+"
              ],
              "ans": 1,
              "explanation": "An abstract class can contain 100% concrete methods if the designer wants to prevent direct instantiation."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "What is the memory difference between primitive variables and object reference variables in local methods?",
          "opts": [
            "Primitives reside in heap; references reside in stack",
            "Both reside in heap",
            "Primitives and object references reside on the method stack; actual object data resides on the heap",
            "Both reside in static memory"
          ],
          "ans": 2,
          "explanation": "Local variables (both primitive values and object reference pointers) live on the stack frame. Objects created via 'new' live on the heap."
        },
        {
          "q": "Why is constructor chaining with this() or super() restricted to the very first line of a constructor?",
          "opts": [
            "To make code look cleaner",
            "Because an object's superclass state and own foundational state must be fully initialized before executing custom logic",
            "JVM parsing limitations",
            "To avoid compiler stack overflow"
          ],
          "ans": 1,
          "explanation": "Initialization order guarantees parent and base state are established before dependent logic executes."
        },
        {
          "q": "Which access level should be assigned to instance fields in an enterprise JavaBean?",
          "opts": [
            "public",
            "protected",
            "private with public getters/setters",
            "default"
          ],
          "ans": 2,
          "explanation": "Encapsulation requires private fields exposed only via controlled getter and setter methods."
        },
        {
          "q": "What happens when a subclass defines an instance field with the exact same name as a field in its superclass?",
          "opts": [
            "Superclass field is overwritten in memory",
            "Field shadowing occurs: both variables exist in the object instance, accessed based on reference type or super keyword",
            "Compiler syntax error",
            "JVM throws IllegalStateException"
          ],
          "ans": 1,
          "explanation": "Unlike methods which override dynamically, fields shadow statically based on reference type."
        },
        {
          "q": "In method overriding, what restriction applies to checked exceptions declared in the subclass method?",
          "opts": [
            "It can throw any new checked exception",
            "It cannot throw new or broader checked exceptions than the parent method signature",
            "It must throw exact same exception",
            "It cannot throw any exceptions at all"
          ],
          "ans": 1,
          "explanation": "Liskov Substitution mandates that overrides cannot throw broader checked exceptions that callers of the parent interface aren't expecting."
        },
        {
          "q": "What is the primary difference between compile-time overloading and runtime overriding?",
          "opts": [
            "Overloading requires inheritance; overriding happens in one class",
            "Overloading differs in parameter list (resolved at compile time); overriding matches exact signature across super/subclass (resolved dynamically at runtime)",
            "Overriding runs faster",
            "No distinction in bytecode"
          ],
          "ans": 1,
          "explanation": "Overloading depends on static arguments; overriding depends on actual runtime heap object type."
        },
        {
          "q": "When should an architect choose an Interface over an Abstract Class?",
          "opts": [
            "When sharing common constructor logic",
            "When defining multiple behavioral capabilities across unrelated classes where multiple inheritance is required",
            "When declaring private helper variables",
            "When building single inheritance trees"
          ],
          "ans": 1,
          "explanation": "Interfaces allow unrelated classes (like String and File) to share common contracts (Comparable) without forcing single inheritance hierarchies."
        },
        {
          "q": "What mechanism allows modern Java interfaces to evolve without breaking existing implementing classes?",
          "opts": [
            "Static blocks",
            "Default methods with concrete implementation bodies",
            "Private fields",
            "Package visibility"
          ],
          "ans": 1,
          "explanation": "Default methods let designers add API functionality without breaking classes that don't override them."
        },
        {
          "q": "If class C extends class B, and B extends class A, how many superclass objects are created when new C() runs?",
          "opts": [
            "Three distinct heap objects",
            "Exactly ONE heap object of type C containing merged memory slices for A, B, and C fields",
            "Two objects",
            "Depends on JVM flags"
          ],
          "ans": 1,
          "explanation": "A single contiguous heap object is allocated containing memory for all inherited instance fields across the chain."
        },
        {
          "q": "What is the rule regarding abstract methods inside concrete classes?",
          "opts": [
            "Allowed if marked public",
            "Compile error: a class containing any abstract method must be explicitly declared abstract",
            "Ignored at runtime",
            "Defaults to null implementation"
          ],
          "ans": 1,
          "explanation": "Any unimplemented abstract method makes the entire class abstract."
        }
      ],
      "miniProject": {
        "title": "Week 2 Capstone Project — Enterprise Library Management Architecture",
        "description": "Build a complete console-based Library Management System applying all Object-Oriented Programming principles: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
        "requirements": [
          "Create abstract base class LibraryItem with private encapsulated fields: itemId (String), title (String), author (String), and isCheckedOut (boolean).",
          "Implement abstract method calculateLateFee(int daysLate) inside LibraryItem.",
          "Create concrete subclasses Book (adds pageCount) and DVD (adds runtimeMinutes) extending LibraryItem with specific fee rules (e.g., Book fee Rs. 5/day, DVD fee Rs. 20/day).",
          "Create interface Reservable with methods reserveItem(String userId) and cancelReservation(). Implement it in DVD and high-demand Books.",
          "Create LibraryMember class with private fields memberId, name, and List<LibraryItem> borrowedItems with strict encapsulation and borrowing limits.",
          "Write LibraryCatalog class containing List<LibraryItem> demonstrating polymorphism: loop over all items to compute total late fees for overdue returns.",
          "Include custom constructor chaining via this() and super() across all classes.",
          "Test all borrowing, returning, and polymorphic late fee calculations inside Main.java with formatted console output."
        ]
      }
    },
    {
      "id": 3,
      "title": "Collections & Exception Handling",
      "topics": [
        {
          "id": 1,
          "title": "ArrayList & LinkedList",
          "video": {
            "youtubeId": "rzA7UJ-hQoI",
            "title": "ArrayList & LinkedList - Tutorial",
            "channel": "Apna College",
            "duration": "50 min",
            "description": "Internal architecture of dynamic arrays vs doubly linked lists, Big-O time complexity analysis, iterator mechanics, and sorting."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Dynamic Lists",
                "text": "The Java Collections Framework provides standardized interfaces and data structures. The List interface represents an ordered sequence allowing duplicate elements.\n\nArrayList is backed by a resizable object array. When full, it allocates a new contiguous array 1.5x the size and copies elements over. It provides O(1) random index access.\n\nLinkedList is backed by a doubly linked list of Node objects (containing data, next pointer, and previous pointer). It provides O(1) insertions and deletions at the head or tail, making it ideal for Queue or Deque operations, but requires O(n) traversal for index-based access."
              },
              {
                "heading": "Big-O Performance Comparison",
                "text": "Operation          | ArrayList           | LinkedList\n-------------------|---------------------|--------------------\nget(int index)     | O(1) Fast           | O(n) Slow\nadd(E element)     | O(1) Amortized      | O(1)\nadd(int idx, E e)  | O(n) Shifts array   | O(1) Node relink*\nremove(int index)  | O(n) Shifts array   | O(1) Node relink*\nMemory Overhead    | Low (contiguous)    | High (Node pointers)\n*Note: LinkedList node insertion/removal is O(1) only after traversing O(n) to find the location."
              },
              {
                "heading": "Production Code — Student Roster & Sorting",
                "code": "<span class=\"kw\">import</span> java.util.*;\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">StudentRosterManager</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">static</span> <span class=\"kw\">void</span> main(<span class=\"cls\">String</span>[] args) {\n        <span class=\"cmt\">// ArrayList for fast random index retrieval and iteration</span>\n        <span class=\"cls\">List</span><<span class=\"cls\">String</span>> scholars = <span class=\"kw\">new</span> <span class=\"cls\">ArrayList</span><>();\n        scholars.add(<span class=\"str\">\"Arjun Sharma\"</span>);\n        scholars.add(<span class=\"str\">\"Priya Patel\"</span>);\n        scholars.add(1, <span class=\"str\">\"Sneha Rao\"</span>);  <span class=\"cmt\">// O(n) shift</span>\n\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"First Scholar: \"</span> + scholars.get(0));  <span class=\"cmt\">// O(1)</span>\n\n        <span class=\"cmt\">// LinkedList used as a FIFO Queue</span>\n        <span class=\"cls\">Deque</span><<span class=\"cls\">String</span>> waitlist = <span class=\"kw\">new</span> <span class=\"cls\">LinkedList</span><>();\n        waitlist.offer(<span class=\"str\">\"Ravi Kumar\"</span>);    <span class=\"cmt\">// Enqueue tail</span>\n        waitlist.offer(<span class=\"str\">\"Ananya Iyer\"</span>);\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Next to enroll: \"</span> + waitlist.poll()); <span class=\"cmt\">// Dequeue head</span>\n\n        <span class=\"cmt\">// Custom Object Sorting with Comparator</span>\n        <span class=\"cls\">List</span><<span class=\"cls\">Student</span>> roster = <span class=\"kw\">new</span> <span class=\"cls\">ArrayList</span><>(<span class=\"cls\">List</span>.of(\n            <span class=\"kw\">new</span> <span class=\"cls\">Student</span>(101, <span class=\"str\">\"Arjun\"</span>, 8.85),\n            <span class=\"kw\">new</span> <span class=\"cls\">Student</span>(102, <span class=\"str\">\"Priya\"</span>, 9.40),\n            <span class=\"kw\">new</span> <span class=\"cls\">Student</span>(103, <span class=\"str\">\"Ravi\"</span>, 7.90)\n        ));\n\n        <span class=\"cmt\">// Sort descending by GPA using Java 8 Comparator</span>\n        roster.sort(<span class=\"cls\">Comparator</span>.comparingDouble(<span class=\"cls\">Student</span>::getGpa).reversed());\n        roster.forEach(s -> <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"%s | GPA: %.2f%n\"</span>, s.getName(), s.getGpa()));\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Default to ArrayList for 95% of use cases due to CPU cache locality and lower memory consumption.\n• Specify initial array capacity if the approximate item count is known: new ArrayList<>(10000) avoids costly array reallocations.\n• Never modify a collection inside a standard for-each loop; use Iterator.remove() or Collection.removeIf() to avoid ConcurrentModificationException."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between Array and ArrayList?\nA: Arrays have fixed size at allocation and can store both primitive types (int[]) and objects. ArrayList is dynamically resizable, can only store objects (autoboxing primitives), and provides rich collection methods.\n\nQ: Why does LinkedList implement both List and Deque?\nA: Because its internal doubly-linked node structure supports both index-based list operations and O(1) head/tail insertions and removals required by queues and stacks.\n\nQ: What causes ConcurrentModificationException?\nA: Iterators maintain a modCount variable. If the underlying structure is structurally modified (add/remove) while iterating without using the iterator's own remove() method, modCount mismatches and triggers the exception."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — University Waitlist Queue",
              "instructions": "Create a program CourseEnrollment with an ArrayList<Student> enrolled and a LinkedList<Student> waitlist (maximum class size = 3).\n1. Write method enrollStudent(Student s): if enrolled.size() < 3, add to enrolled; otherwise offer to waitlist.\n2. Write method dropStudent(int studentId): remove from enrolled and immediately poll the first waitlisted student into enrolled.\n3. Test by enrolling 5 students, dropping student #2, and printing the updated roster.",
              "hint": "Use waitlist.poll() to retrieve and remove the head of the waitlist when a seat opens."
            },
            "resources": [
              {
                "label": "Oracle Docs — List Interface",
                "url": "https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html"
              },
              {
                "label": "Baeldung — ArrayList vs LinkedList",
                "url": "https://www.baeldung.com/java-arraylist-linkedlist"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the time complexity of retrieving an element by index in an ArrayList?",
              "opts": [
                "O(n)",
                "O(log n)",
                "O(1) constant time",
                "O(n^2)"
              ],
              "ans": 2,
              "explanation": "Because ArrayList is backed by a contiguous memory array, index offset calculation is O(1)."
            },
            {
              "q": "By what growth factor does an ArrayList resize when its capacity is exceeded?",
              "opts": [
                "Doubles (2x)",
                "Grows by 50% (1.5x)",
                "Adds 10 slots",
                "Triples (3x)"
              ],
              "ans": 1,
              "explanation": "Standard Java ArrayList increases capacity by roughly 50% (oldCapacity + (oldCapacity >> 1))."
            },
            {
              "q": "Which interface makes LinkedList suitable for FIFO queue operations?",
              "opts": [
                "Set",
                "Map",
                "Deque / Queue",
                "Comparable"
              ],
              "ans": 2,
              "explanation": "LinkedList implements Deque (Double Ended Queue), providing offer(), poll(), and peek()."
            },
            {
              "q": "How do you safely remove elements matching a condition while iterating?",
              "opts": [
                "Standard for-each loop with list.remove()",
                "list.removeIf(predicate) or Iterator.remove()",
                "Indexed for loop removing from start",
                "Stream.filter() modifying original"
              ],
              "ans": 1,
              "explanation": "Collection.removeIf() or explicit Iterator.remove() prevents ConcurrentModificationException."
            },
            {
              "q": "Can ArrayList store primitive int values directly?",
              "opts": [
                "Yes, ArrayList<int>",
                "No, it stores Integer wrapper objects via autoboxing",
                "Only in Java 17+",
                "Only if initialized with capacity"
              ],
              "ans": 1,
              "explanation": "Generics only work with Object reference types. Primitive int values are autoboxed into java.lang.Integer."
            },
            {
              "q": "Why does LinkedList consume more memory per element than ArrayList?",
              "opts": [
                "It stores string copies",
                "Each element is wrapped in a Node object containing data, next pointer, and previous pointer",
                "It reserves buffer memory",
                "It duplicates objects"
              ],
              "ans": 1,
              "explanation": "Doubly linked list nodes require two additional 64-bit reference pointers (prev and next) per item."
            },
            {
              "q": "Which collection method sorts a List in place?",
              "opts": [
                "list.order()",
                "Collections.sort(list) or list.sort(comparator)",
                "Arrays.sort(list)",
                "list.toSorted()"
              ],
              "ans": 1,
              "explanation": "list.sort(Comparator) sorts the underlying list elements directly in place."
            }
          ]
        },
        {
          "id": 2,
          "title": "HashMap & HashSet",
          "video": {
            "youtubeId": "APOHuvJEsBs",
            "title": "HashMap & HashSet - Tutorial",
            "channel": "Kunal Kushwaha",
            "duration": "1 hr",
            "description": "Internal hashing mechanics, buckets, hash collisions, equals() and hashCode() contracts, Treeify threshold, and HashSet set operations."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Hashing & Map Architecture",
                "text": "Map<K, V> stores key-value associations where keys must be unique. HashMap provides O(1) average time complexity for put() and get().\n\nUnder the hood, HashMap maintains an array of Node<K,V> buckets. When put(k, v) executes:\n1. k.hashCode() is calculated and hashed to determine array bucket index.\n2. If empty, Node is inserted.\n3. If bucket occupied (collision), keys are compared via k.equals(). If true, value is updated; if false, appended to a linked list.\n4. Since Java 8: If a bucket's linked list exceeds 8 items (TREEIFY_THRESHOLD), it transforms into a Red-Black Tree, improving worst-case search from O(n) to O(log n)."
              },
              {
                "heading": "The equals() and hashCode() Contract",
                "text": "When using custom objects as HashMap keys or HashSet items, you MUST strictly follow the contract:\n1. If two objects are equal according to equals(Object), they MUST return the exact same hashCode() integer.\n2. If two objects have the same hashCode(), they are NOT required to be equal (this is a hash collision).\n3. If you override equals(), you must always override hashCode()."
              },
              {
                "heading": "Production Code — Analytics Frequency Counter",
                "code": "<span class=\"kw\">import</span> java.util.*;\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">AnalyticsEngine</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">static</span> <span class=\"kw\">void</span> main(<span class=\"cls\">String</span>[] args) {\n        <span class=\"cls\">String</span> logData = <span class=\"str\">\"ERROR WARN INFO ERROR DEBUG INFO ERROR WARN ERROR\"</span>;\n        <span class=\"cls\">String</span>[] tokens = logData.split(<span class=\"str\">\"\\s+\"</span>);\n\n        <span class=\"cmt\">// HashMap for frequency counting</span>\n        <span class=\"cls\">Map</span><<span class=\"cls\">String</span>, <span class=\"cls\">Integer</span>> severityCount = <span class=\"kw\">new</span> <span class=\"cls\">HashMap</span><>();\n        <span class=\"kw\">for</span> (<span class=\"cls\">String</span> token : tokens) {\n            <span class=\"cmt\">// getOrDefault avoids null checks</span>\n            severityCount.put(token, severityCount.getOrDefault(token, 0) + 1);\n        }\n\n        <span class=\"cmt\">// Iterating Map entries efficiently</span>\n        <span class=\"kw\">for</span> (<span class=\"cls\">Map</span>.<span class=\"cls\">Entry</span><<span class=\"cls\">String</span>, <span class=\"cls\">Integer</span>> entry : severityCount.entrySet()) {\n            <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Severity: %-6s | Count: %d%n\"</span>, entry.getKey(), entry.getValue());\n        }\n\n        <span class=\"cmt\">// HashSet for unique deduplication (backed by internal HashMap)</span>\n        <span class=\"cls\">Set</span><<span class=\"cls\">String</span>> uniqueSeverities = <span class=\"kw\">new</span> <span class=\"cls\">HashSet</span><>(<span class=\"cls\">Arrays</span>.asList(tokens));\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Distinct Log Severities: \"</span> + uniqueSeverities);\n\n        <span class=\"cmt\">// LinkedHashMap preserves insertion order; TreeMap sorts by key naturally</span>\n        <span class=\"cls\">Map</span><<span class=\"cls\">String</span>, <span class=\"cls\">String</span>> sortedConfig = <span class=\"kw\">new</span> <span class=\"cls\">TreeMap</span><>();\n        sortedConfig.put(<span class=\"str\">\"Z_PORT\"</span>, <span class=\"str\">\"8080\"</span>);\n        sortedConfig.put(<span class=\"str\">\"A_HOST\"</span>, <span class=\"str\">\"localhost\"</span>);\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Sorted TreeMap: \"</span> + sortedConfig); <span class=\"cmt\">// A_HOST appears first!</span>\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always use immutable objects (like String, Integer, UUID, or records) as HashMap keys. If a mutable object's state changes after being inserted as a key, its hashCode alters and it becomes permanently lost inside the map.\n• Set appropriate initial capacity and load factor (default 0.75) if data size is huge to avoid rehashing freezes.\n• Iterate maps via entrySet() rather than keySet() + map.get(key) to avoid duplicate bucket lookup overhead."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: How does HashSet internally store elements?\nA: HashSet uses an internal HashMap under the hood. The set items are stored as map keys, and a shared dummy constant (PRESENT = new Object()) is stored as the map value.\n\nQ: What is the difference between HashMap and ConcurrentHashMap?\nA: HashMap is not thread-safe and can corrupt during concurrent writes. ConcurrentHashMap divides the bucket array into segments (or uses fine-grained Node locking via CAS and synchronized in Java 8+), allowing multiple threads to read and write concurrently without locking the entire map.\n\nQ: What happens if two distinct keys produce the exact same hashCode()?\nA: Both keys land in the same bucket array index. HashMap links them together in a node chain or red-black tree. Retrieval uses equals() to locate the precise entry."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — E-Commerce Cart & Deduplication",
              "instructions": "Create class ProductKey(String sku, String batchCode) and override equals() and hashCode().\n1. Instantiate a HashMap<ProductKey, Integer> representing inventory stock.\n2. Add items and test retrieving quantities using new ProductKey objects with identical strings to verify your equals/hashCode implementation.\n3. Create a HashSet<String> to filter out duplicate discount promo codes applied by a user.",
              "hint": "In Objects.hash(sku, batchCode) and Objects.equals() ensure case sensitivity matches your requirements."
            },
            "resources": [
              {
                "label": "Oracle Docs — Map Interface",
                "url": "https://docs.oracle.com/javase/tutorial/collections/interfaces/map.html"
              },
              {
                "label": "Baeldung — HashMap Internals",
                "url": "https://www.baeldung.com/java-hashmap"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the average time complexity for put() and get() in a HashMap?",
              "opts": [
                "O(n)",
                "O(1) constant time",
                "O(log n)",
                "O(n log n)"
              ],
              "ans": 1,
              "explanation": "Direct hash calculation maps to bucket index in O(1) time."
            },
            {
              "q": "In Java 8+, what happens to a HashMap bucket when collisions exceed 8 items?",
              "opts": [
                "It throws a CollisionException",
                "It expands array size immediately",
                "The linked list transforms into a Red-Black Tree (O(log n) search)",
                "It deletes oldest items"
              ],
              "ans": 2,
              "explanation": "Treeification converts long O(n) linked lists into O(log n) balanced red-black trees when threshold >= 8."
            },
            {
              "q": "If you override equals(), what must you also override?",
              "opts": [
                "toString()",
                "hashCode()",
                "compareTo()",
                "clone()"
              ],
              "ans": 1,
              "explanation": "The Java Object contract strictly mandates that equal objects must produce identical hash codes."
            },
            {
              "q": "Which Map implementation preserves key insertion order?",
              "opts": [
                "HashMap",
                "TreeMap",
                "LinkedHashMap",
                "WeakHashMap"
              ],
              "ans": 2,
              "explanation": "LinkedHashMap maintains a doubly linked list running through all entries to preserve insertion sequence."
            },
            {
              "q": "What object does HashSet store as the value inside its backing HashMap?",
              "opts": [
                "null",
                "Boolean.TRUE",
                "A static dummy Object instance (PRESENT)",
                "The key itself"
              ],
              "ans": 2,
              "explanation": "HashSet stores elements as keys in an internal HashMap mapping to a shared static Object PRESENT."
            },
            {
              "q": "Why should mutable objects NOT be used as HashMap keys?",
              "opts": [
                "They take too much memory",
                "If mutated after insertion, their hash code changes, making retrieval impossible",
                "They cause compiler errors",
                "They slow down treeification"
              ],
              "ans": 1,
              "explanation": "Changing field values alters the hash code, looking up in the wrong bucket during get()."
            },
            {
              "q": "Which method cleanly updates a frequency map counter without null checks?",
              "opts": [
                "map.put(key, count)",
                "map.put(key, map.getOrDefault(key, 0) + 1)",
                "map.replace(key, 1)",
                "map.set(key, 1)"
              ],
              "ans": 1,
              "explanation": "getOrDefault(key, defaultValue) returns 0 if key is absent, allowing inline +1 addition."
            }
          ]
        },
        {
          "id": 3,
          "title": "Exception Handling — try/catch/finally",
          "video": {
            "youtubeId": "1XAfapkBQjk",
            "title": "Exception Handling — try/catch/finally - Tutorial",
            "channel": "Telusko",
            "duration": "55 min",
            "description": "Exception hierarchy (Throwable, Error, Exception), Checked vs Unchecked exceptions, try-with-resources auto-closing, and custom business exceptions."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Exception Hierarchy",
                "text": "An exception is an abnormal event during runtime that disrupts normal program execution. All exceptions extend java.lang.Throwable.\n\nTwo Main Hierarchy Branches:\n1. Error: Serious JVM system failures that applications should NOT try to catch (e.g., OutOfMemoryError, StackOverflowError).\n2. Exception: Application-level anomalies.\n   • Checked Exceptions: Compile-time enforced (extends Exception directly, e.g., IOException, SQLException). Must be wrapped in try-catch or declared with 'throws'.\n   • Unchecked Exceptions: Runtime exceptions (extends RuntimeException, e.g., NullPointerException, IllegalArgumentException). Indicates programming bugs."
              },
              {
                "heading": "try-catch-finally & try-with-resources",
                "text": "• try block wraps risky code.\n• catch blocks intercept specific exception types from most specific child to broadest superclass.\n• finally block executes ALWAYS (whether exception occurred or not, or even if return statement ran), used for cleanup.\n• try-with-resources (Java 7+): Automatically closes any resource implementing AutoCloseable when block exits, eliminating resource leak bugs."
              },
              {
                "heading": "Production Code — Custom Business Exception & AutoCloseable",
                "code": "<span class=\"kw\">import</span> java.io.*;\n\n<span class=\"cmt\">// Custom Checked Exception for Domain Logic</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">InsufficientFundsException</span> <span class=\"kw\">extends</span> <span class=\"cls\">Exception</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"kw\">double</span> deficit;\n    <span class=\"kw\">public</span> <span class=\"cls\">InsufficientFundsException</span>(<span class=\"kw\">double</span> deficit) {\n        super(<span class=\"cls\">String</span>.format(<span class=\"str\">\"Transaction declined. Deficit amount: Rs. %.2f\"</span>, deficit));\n        this.deficit = deficit;\n    }\n    <span class=\"kw\">public</span> <span class=\"kw\">double</span> getDeficit() { <span class=\"kw\">return</span> deficit; }\n}\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">BankingTransactionService</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> executeTransfer(<span class=\"kw\">double</span> balance, <span class=\"kw\">double</span> amount) <span class=\"kw\">throws</span> <span class=\"cls\">InsufficientFundsException</span> {\n        <span class=\"kw\">if</span> (amount > balance) {\n            <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">InsufficientFundsException</span>(amount - balance);\n        }\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Transfer authorized: Rs. \"</span> + amount);\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> auditLog(<span class=\"cls\">String</span> logMsg) {\n        <span class=\"cmt\">// try-with-resources automatically closes FileWriter and PrintWriter upon completion</span>\n        <span class=\"kw\">try</span> (<span class=\"cls\">FileWriter</span> fw = <span class=\"kw\">new</span> <span class=\"cls\">FileWriter</span>(<span class=\"str\">\"audit.log\"</span>, <span class=\"kw\">true</span>);\n             <span class=\"cls\">PrintWriter</span> pw = <span class=\"kw\">new</span> <span class=\"cls\">PrintWriter</span>(fw)) {\n            pw.println(logMsg);\n        } <span class=\"kw\">catch</span> (<span class=\"cls\">IOException</span> e) {\n            <span class=\"cls\">System</span>.err.println(<span class=\"str\">\"Critical failure writing audit log: \"</span> + e.getMessage());\n        } <span class=\"kw\">finally</span> {\n            <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Audit transaction cycle completed.\"</span>);\n        }\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Never catch generic Exception or Throwable unless at the absolute top-level controller boundary; catch specific exception classes.\n• Never swallow exceptions with empty catch blocks: catch(Exception e){} hides critical production failures.\n• Prefer Unchecked (RuntimeException) for custom business exceptions in modern frameworks (Spring Boot/Hibernate) to keep method signatures clean."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Does the finally block execute if System.exit(0) is called inside try or catch?\nA: No. System.exit(0) immediately terminates the entire JVM process running the application. The finally block will NOT execute.\n\nQ: What is the difference between throw and throws?\nA: 'throw' is an executable command inside a method body used to manually trigger an exception object (throw new IOException()). 'throws' is part of the method declaration signature indicating that the method might propagate that exception to the caller.\n\nQ: Can you have a try block without a catch block?\nA: Yes! A try block can be paired with only a finally block (try { ... } finally { ... }) or used as a standalone try-with-resources block."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Robust ATM Simulator",
              "instructions": "Create custom checked exception InvalidPinException and unchecked exception ExceededDailyLimitException.\n1. Write ATMService class with method withdraw(int pin, double amount).\n2. If pin != 1234, throw InvalidPinException. If amount > 50000, throw ExceededDailyLimitException.\n3. In Main.java, call withdraw inside a multi-catch block, print custom error details, and log transaction completion inside a finally block.",
              "hint": "Order catch blocks from child exception classes first, ending with general Exception last."
            },
            "resources": [
              {
                "label": "Oracle Docs — Exceptions",
                "url": "https://docs.oracle.com/javase/tutorial/essential/exceptions/"
              },
              {
                "label": "Baeldung — Java Exception Handling",
                "url": "https://www.baeldung.com/java-exceptions"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which class is the ultimate superclass of all errors and exceptions in Java?",
              "opts": [
                "Exception",
                "RuntimeException",
                "Throwable",
                "Error"
              ],
              "ans": 2,
              "explanation": "java.lang.Throwable is the root class inherited by Exception and Error."
            },
            {
              "q": "When does a finally block NOT execute?",
              "opts": [
                "When a return statement is executed inside try",
                "When an unchecked exception occurs",
                "When System.exit(0) terminates the JVM process inside try/catch",
                "When multiple catch blocks exist"
              ],
              "ans": 2,
              "explanation": "System.exit immediately aborts the JVM process, bypassing all remaining code including finally."
            },
            {
              "q": "What requirement must a resource satisfy to be used in try-with-resources?",
              "opts": [
                "Extend Exception",
                "Implement AutoCloseable or Closeable interface",
                "Be marked Serializable",
                "Be static final"
              ],
              "ans": 1,
              "explanation": "The compiler injects automatic close() calls for any object implementing AutoCloseable."
            },
            {
              "q": "Which keyword manually triggers an exception inside a method body?",
              "opts": [
                "throws",
                "throw",
                "catch",
                "raise"
              ],
              "ans": 1,
              "explanation": "The 'throw' keyword instantiates and throws an exception object (e.g., throw new RuntimeException())."
            },
            {
              "q": "Are subclasses of RuntimeException checked or unchecked by the compiler?",
              "opts": [
                "Checked — must use throws",
                "Unchecked — compiler does not force catching or declaring",
                "Fatal errors",
                "Compile warnings"
              ],
              "ans": 1,
              "explanation": "RuntimeException and its subclasses represent unchecked runtime bugs."
            },
            {
              "q": "What happens if you place catch(Exception e) BEFORE catch(IOException e)?",
              "opts": [
                "Compiles fine",
                "Compile error: Unreachable catch block for IOException",
                "Runs IOException block first",
                "Ignores IOException block"
              ],
              "ans": 1,
              "explanation": "Catching a broad superclass first intercepts all child exceptions, making subsequent child catch blocks unreachable."
            },
            {
              "q": "Why is catching Throwable considered an anti-pattern?",
              "opts": [
                "It slows execution",
                "It catches severe JVM Errors like OutOfMemoryError that the application cannot recover from",
                "It causes syntax errors",
                "It disables finally blocks"
              ],
              "ans": 1,
              "explanation": "Catching Throwable intercepts JVM Errors, masking fatal hardware/memory corruption."
            }
          ]
        },
        {
          "id": 4,
          "title": "Java 8 — Streams & Lambdas",
          "video": {
            "youtubeId": "VRpHdSFWGPs",
            "title": "Java 8 — Streams & Lambdas - Tutorial",
            "channel": "Telusko",
            "duration": "1 hr 20 min",
            "description": "Functional programming in Java 8, lambda syntax, method references, Stream API pipeline (filter, map, reduce, collect), and lazy evaluation."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Lambdas & Stream Pipelines",
                "text": "Java 8 introduced functional programming concepts. A Lambda Expression ((params) -> body) provides concise implementation for Functional Interfaces (interfaces with single abstract method).\n\nThe Stream API processes collections of data declaratively without mutating the underlying data source. A stream pipeline consists of:\n1. Source: Collection.stream() or Arrays.stream().\n2. Intermediate Operations: Lazy transformations returning a new stream (filter, map, sorted, distinct, limit).\n3. Terminal Operation: Trigger evaluation producing a final result or side effect (collect, forEach, reduce, count, anyMatch)."
              },
              {
                "heading": "Method References & Lazy Evaluation",
                "text": "• Method References (Class::methodName) provide even cleaner syntax when a lambda merely calls an existing method (e.g., String::toUpperCase replaces s -> s.toUpperCase()).\n• Lazy Evaluation: Intermediate operations do NOT execute when invoked. They fuse into an execution chain that executes only when a terminal operation is invoked."
              },
              {
                "heading": "Production Code — Employee Analytics Pipeline",
                "code": "<span class=\"kw\">import</span> java.util.*;\n<span class=\"kw\">import</span> java.util.stream.*;\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">StreamAnalytics</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">static</span> <span class=\"kw\">void</span> main(<span class=\"cls\">String</span>[] args) {\n        <span class=\"cls\">List</span><<span class=\"cls\">Employee</span>> team = <span class=\"cls\">List</span>.of(\n            <span class=\"kw\">new</span> <span class=\"cls\">Employee</span>(1, <span class=\"str\">\"Arjun\"</span>, <span class=\"str\">\"CSE\"</span>, 85000),\n            <span class=\"kw\">new</span> <span class=\"cls\">Employee</span>(2, <span class=\"str\">\"Priya\"</span>, <span class=\"str\">\"ECE\"</span>, 95000),\n            <span class=\"kw\">new</span> <span class=\"cls\">Employee</span>(3, <span class=\"str\">\"Ravi\"</span>, <span class=\"str\">\"CSE\"</span>, 72000),\n            <span class=\"kw\">new</span> <span class=\"cls\">Employee</span>(4, <span class=\"str\">\"Sneha\"</span>, <span class=\"str\">\"MECH\"</span>, 60000)\n        );\n\n        <span class=\"cmt\">// Filter high earners in CSE and extract uppercase names sorted alphabetically</span>\n        <span class=\"cls\">List</span><<span class=\"cls\">String</span>> topCseNames = team.stream()\n            .filter(e -> e.getDepartment().equals(<span class=\"str\">\"CSE\"</span>))\n            .filter(e -> e.getSalary() >= 75000)\n            .map(<span class=\"cls\">Employee</span>::getName)          <span class=\"cmt\">// Method reference</span>\n            .map(<span class=\"cls\">String</span>::toUpperCase)\n            .sorted()\n            .collect(<span class=\"cls\">Collectors</span>.toList());\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Top CSE Engineers: \"</span> + topCseNames);\n\n        <span class=\"cmt\">// Grouping employees by Department and computing average salary per department</span>\n        <span class=\"cls\">Map</span><<span class=\"cls\">String</span>, <span class=\"cls\">Double</span>> avgSalaryByDept = team.stream()\n            .collect(<span class=\"cls\">Collectors</span>.groupingBy(\n                <span class=\"cls\">Employee</span>::getDepartment,\n                <span class=\"cls\">Collectors</span>.averagingDouble(<span class=\"cls\">Employee</span>::getSalary)\n            ));\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Average Salary by Dept: \"</span> + avgSalaryByDept);\n\n        <span class=\"cmt\">// Reduce total salary payroll</span>\n        <span class=\"kw\">double</span> totalPayroll = team.stream()\n            .mapToDouble(<span class=\"cls\">Employee</span>::getSalary)\n            .sum();\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Total Payroll: Rs. %.2f%n\"</span>, totalPayroll);\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Streams can only be consumed ONCE. Attempting to run a second terminal operation on an already closed stream throws IllegalStateException.\n• Avoid parallelStream() unless processing tens of thousands of complex CPU-heavy elements; parallel overhead often slows down simple list operations.\n• Keep lambda expressions short (1-3 lines). If logic is complex, extract it into a named helper method and reference it."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between intermediate and terminal operations?\nA: Intermediate operations (filter, map) return a Stream and are lazy (never execute without a terminal operation). Terminal operations (collect, reduce, count) return non-stream results and trigger execution of the entire pipeline.\n\nQ: What is map() vs flatMap() in Java Streams?\nA: map() transforms each input element into exactly one output element (1-to-1). flatMap() transforms each input element into a stream of elements and flattens them into a single continuous stream (1-to-Many).\n\nQ: What is Optional<T> in Java 8?\nA: Optional is a container object that may or may not contain a non-null value. It prevents NullPointerException by forcing developers to handle absence via methods like orElse(), orElseThrow(), and ifPresent()."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — E-Commerce Order Analytics",
              "instructions": "Create Order class with orderId, customerName, category, price, and status (\"DELIVERED\" or \"PENDING\"). Create a List of 8 orders.\n1. Use streams to find the total revenue generated from all \"DELIVERED\" Electronics orders.\n2. Use Collectors.groupingBy() to count total orders per customerName.\n3. Find the single most expensive order using stream().max(Comparator.comparingDouble(Order::getPrice)).",
              "hint": "Use .filter(o -> \"DELIVERED\".equals(o.getStatus())) before aggregating revenue."
            },
            "resources": [
              {
                "label": "Oracle Docs — Aggregate Operations",
                "url": "https://docs.oracle.com/javase/tutorial/collections/streams/"
              },
              {
                "label": "Baeldung — Java 8 Stream Tutorial",
                "url": "https://www.baeldung.com/java-8-streams"
              }
            ]
          },
          "quiz": [
            {
              "q": "Why are stream intermediate operations described as 'lazy'?",
              "opts": [
                "They run slowly in background threads",
                "They do not execute any processing until a terminal operation is invoked on the stream",
                "They cache results to disk",
                "They skip every second element"
              ],
              "ans": 1,
              "explanation": "Intermediate operations build a processing blueprint; execution happens only when terminal evaluation starts."
            },
            {
              "q": "Which stream method transforms a Stream<List<String>> into a flat Stream<String>?",
              "opts": [
                "map()",
                "reduce()",
                "flatMap()",
                "flatten()"
              ],
              "ans": 2,
              "explanation": "flatMap() flattens nested streams or collections into a single top-level stream."
            },
            {
              "q": "What happens if you invoke count() and then collect() on the exact same Stream instance?",
              "opts": [
                "Both return results",
                "IllegalStateException: stream has already been operated upon or closed",
                "Second operation returns null",
                "Stream resets automatically"
              ],
              "ans": 1,
              "explanation": "Java Streams are single-use disposable pipelines. A terminal operation permanently consumes the stream."
            },
            {
              "q": "Which terminal collector groups elements into a Map based on a classification function?",
              "opts": [
                "Collectors.toList()",
                "Collectors.groupingBy()",
                "Collectors.joining()",
                "Collectors.partitioningBy()"
              ],
              "ans": 1,
              "explanation": "Collectors.groupingBy(classifier) categorizes elements into map buckets."
            },
            {
              "q": "What does the method reference String::toUpperCase represent as a lambda?",
              "opts": [
                "() -> \"TO_UPPER\"",
                "s -> s.toUpperCase()",
                "(s1, s2) -> s1 + s2",
                "s -> new String(s)"
              ],
              "ans": 1,
              "explanation": "Class::instanceMethod shorthand maps an input parameter directly to invoking that instance method."
            },
            {
              "q": "Which stream operation is terminal?",
              "opts": [
                "filter()",
                "sorted()",
                "anyMatch()",
                "map()"
              ],
              "ans": 2,
              "explanation": "anyMatch() evaluates the stream and returns a boolean primitive, making it a terminal operation."
            },
            {
              "q": "What is the main benefit of java.util.Optional?",
              "opts": [
                "Encrypts string variables",
                "Explicitly models optional absence of value, reducing unexpected NullPointerExceptions",
                "Increases garbage collection speed",
                "Stores primitive arrays"
              ],
              "ans": 1,
              "explanation": "Optional encourages defensive programming by requiring developers to handle empty cases gracefully."
            }
          ]
        },
        {
          "id": 5,
          "title": "Generics & Collections Deep Dive",
          "video": {
            "youtubeId": "K1iu1kXkVoA",
            "title": "Generics & Collections Deep Dive - Tutorial",
            "channel": "Kunal Kushwaha",
            "duration": "1 hr",
            "description": "Generics compile-time type safety, bounded type parameters, wildcards (? extends vs ? super), PriorityQueue min/max heap, and Collections utilities."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Compile-Time Type Safety",
                "text": "Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods (e.g., List<T>). This enforces compile-time type checking and removes explicit casting.\n\nType Erasure: Generics exist purely at compile time for safety verification. During bytecode compilation, the compiler erases generic type parameters (replacing T with Object or bounded types), ensuring backward compatibility with legacy pre-Java 5 JVM bytecode."
              },
              {
                "heading": "Bounded Parameters & Wildcard PECS Rule",
                "text": "• Upper Bounded: <T extends Comparable<T>> restricts T to subclasses of Comparable.\n• Wildcards (?): Represents an unknown type.\n• PECS Rule (Producer Extends, Consumer Super):\n  - Use <? extends T> when reading/consuming items out of a collection (Producer).\n  - Use <? super T> when writing/inserting items into a collection (Consumer)."
              },
              {
                "heading": "Production Code — Generic Cache & PriorityQueue Heap",
                "code": "<span class=\"kw\">import</span> java.util.*;\n\n<span class=\"cmt\">// Generic Class with Upper Bounded Type Parameter</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">InMemoryCache</span><<span class=\"cls\">K</span>, <span class=\"cls\">V</span> <span class=\"kw\">extends</span> <span class=\"cls\">Number</span>> {\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">Map</span><<span class=\"cls\">K</span>, <span class=\"cls\">V</span>> cacheMap = <span class=\"kw\">new</span> <span class=\"cls\">HashMap</span><>();\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> store(<span class=\"cls\">K</span> key, <span class=\"cls\">V</span> value) {\n        cacheMap.put(key, value);\n    }\n\n    <span class=\"kw\">public</span> <span class=\"cls\">V</span> fetch(<span class=\"cls\">K</span> key) {\n        <span class=\"kw\">return</span> cacheMap.get(key);\n    }\n\n    <span class=\"cmt\">// Generic Utility Method demonstrating Wildcard PECS reading</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">static</span> <span class=\"kw\">double</span> sumCacheValues(<span class=\"cls\">Collection</span><? <span class=\"kw\">extends</span> <span class=\"cls\">Number</span>> numbers) {\n        <span class=\"kw\">return</span> numbers.stream().mapToDouble(<span class=\"cls\">Number</span>::doubleValue).sum();\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">static</span> <span class=\"kw\">void</span> main(<span class=\"cls\">String</span>[] args) {\n        <span class=\"cls\">InMemoryCache</span><<span class=\"cls\">String</span>, <span class=\"cls\">Double</span>> priceCache = <span class=\"kw\">new</span> <span class=\"cls\">InMemoryCache</span><>();\n        priceCache.store(<span class=\"str\">\"APPLE\"</span>, 145.50);\n        priceCache.store(<span class=\"str\">\"BANANA\"</span>, 40.00);\n\n        <span class=\"cmt\">// PriorityQueue acts as a Min-Heap by default (smallest element at head)</span>\n        <span class=\"cls\">PriorityQueue</span><<span class=\"cls\">Integer</span>> minHeap = <span class=\"kw\">new</span> <span class=\"cls\">PriorityQueue</span><>();\n        minHeap.offer(85);\n        minHeap.offer(20);\n        minHeap.offer(50);\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Min-Heap Head (Smallest): \"</span> + minHeap.poll()); <span class=\"cmt\">// 20!</span>\n\n        <span class=\"cmt\">// Collections utility operations</span>\n        <span class=\"cls\">List</span><<span class=\"cls\">String</span>> deck = <span class=\"kw\">new</span> <span class=\"cls\">ArrayList</span><>(<span class=\"cls\">List</span>.of(<span class=\"str\">\"ACE\"</span>, <span class=\"str\">\"KING\"</span>, <span class=\"str\">\"QUEEN\"</span>, <span class=\"str\">\"JACK\"</span>));\n        <span class=\"cls\">Collections</span>.shuffle(deck);\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Shuffled Deck: \"</span> + deck);\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Never use Raw Types in modern Java (e.g., List list = new ArrayList()). Always use generic diamond syntax List<String> list = new ArrayList<>() to prevent runtime ClassCastException.\n• PriorityQueue iterator does NOT guarantee sorted traversal order; use poll() repeatedly if you need elements extracted in strict priority order."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why can't you instantiate a generic array like new T[10]?\nA: Because of Type Erasure. At runtime, JVM does not know what type T represents, making it impossible to allocate a type-safe array. Use List<T> instead.\n\nQ: What is the difference between Comparable and Comparator?\nA: Comparable is implemented by the object class itself (compareTo(T o)) defining natural ordering (e.g., String alphabetical). Comparator is an external functional interface (compare(T o1, T o2)) allowing multiple custom sorting rules without modifying the domain class.\n\nQ: How does PriorityQueue implement a heap?\nA: PriorityQueue uses a balanced binary heap data structure stored inside an array, ensuring O(log n) insertions and O(1) retrieval of the smallest/largest element."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Generic Task Scheduler Heap",
              "instructions": "Create generic class PriorityTask<T> implementing Comparable<PriorityTask<T>> with priorityLevel (int 1=High to 5=Low) and payload (T).\n1. Implement compareTo so lower priority numbers sort first.\n2. Add 5 tasks with various priorities and payload strings into a PriorityQueue<PriorityTask<String>>.\n3. Loop while queue is not empty, polling and printing tasks in exact priority order.",
              "hint": "In compareTo, return Integer.compare(this.priorityLevel, other.priorityLevel);"
            },
            "resources": [
              {
                "label": "Oracle Docs — Generics",
                "url": "https://docs.oracle.com/javase/tutorial/java/generics/"
              },
              {
                "label": "GeeksforGeeks — Generics in Java",
                "url": "https://www.geeksforgeeks.org/generics-in-java/"
              }
            ]
          },
          "quiz": [
            {
              "q": "What happens to generic type parameters during JVM compilation?",
              "opts": [
                "They get compiled into specialized bytecode classes",
                "Type Erasure removes them, replacing T with Object or bounds",
                "They are stored in OS variables",
                "They prevent garbage collection"
              ],
              "ans": 1,
              "explanation": "Type erasure strips generic type metadata during compilation to maintain legacy JVM compatibility."
            },
            {
              "q": "According to the PECS rule, what wildcard should be used for a method parameter that only READS items?",
              "opts": [
                "<? super T>",
                "<? extends T>",
                "<T super Object>",
                "<! T>"
              ],
              "ans": 1,
              "explanation": "Producer Extends (<? extends T>): safe to read elements as type T."
            },
            {
              "q": "What is the default behavior of java.util.PriorityQueue?",
              "opts": [
                "FIFO queue",
                "LIFO stack",
                "Min-Heap (smallest element polled first)",
                "Max-Heap (largest first)"
              ],
              "ans": 2,
              "explanation": "PriorityQueue naturally orders elements as a Min-Heap based on Comparable."
            },
            {
              "q": "Why does List<Object> list = new ArrayList<String>() fail to compile?",
              "opts": [
                "String is not an Object",
                "Java generics are invariant; List<String> is not a subtype of List<Object>",
                "Syntax error on diamond operator",
                "Requires casting"
              ],
              "ans": 1,
              "explanation": "Generics are invariant to prevent heap pollution and type safety violations."
            },
            {
              "q": "Which utility class method reverses the elements of a List?",
              "opts": [
                "List.reverse()",
                "Collections.reverse(list)",
                "Arrays.reverse()",
                "Collection.flip()"
              ],
              "ans": 1,
              "explanation": "java.util.Collections provides static utility methods like reverse(), sort(), and shuffle()."
            },
            {
              "q": "Can you create an instance of a generic type parameter directly inside a generic class: T item = new T();?",
              "opts": [
                "Yes, anytime",
                "No, compile error due to type erasure at runtime",
                "Only if T extends Object",
                "Only in constructors"
              ],
              "ans": 1,
              "explanation": "Since T is erased at runtime, JVM cannot execute new T(). Factory or reflection methods must be passed instead."
            },
            {
              "q": "What functional method does interface Comparator declare?",
              "opts": [
                "compareTo(T o)",
                "compare(T o1, T o2)",
                "sort(T o1, T o2)",
                "equals(T o)"
              ],
              "ans": 1,
              "explanation": "Comparator uses int compare(T o1, T o2) for external sorting rules."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "Why is retrieving an element by index O(1) in ArrayList but O(n) in LinkedList?",
          "opts": [
            "LinkedList encrypts indices",
            "ArrayList calculates index offset on contiguous memory array; LinkedList must traverse node pointers sequentially from head/tail",
            "ArrayList caches results",
            "LinkedList uses strings"
          ],
          "ans": 1,
          "explanation": "Contiguous array memory allows instant address calculation. Linked nodes require sequential pointer hopping."
        },
        {
          "q": "When should you prefer LinkedList over ArrayList?",
          "opts": [
            "When searching randomly by index",
            "When frequently adding and removing elements at the head or tail (FIFO Queue / Deque)",
            "When sorting objects",
            "When storing primitives"
          ],
          "ans": 1,
          "explanation": "LinkedList excels at O(1) head/tail insertions and deletions without array shifting."
        },
        {
          "q": "What rule governs the relationship between equals() and hashCode() in HashMap keys?",
          "opts": [
            "If hashCodes are equal, objects must be equal",
            "If two objects are equal via equals(), they must produce identical hashCode() integers",
            "No relationship needed",
            "hashCodes must be prime numbers"
          ],
          "ans": 1,
          "explanation": "Violating this rule causes HashMap lookup failures because keys hash to different buckets."
        },
        {
          "q": "In Java 8+, what threshold triggers a HashMap bucket's linked list to transform into a Red-Black Tree?",
          "opts": [
            "4 elements",
            "8 elements (TREEIFY_THRESHOLD)",
            "16 elements",
            "100 elements"
          ],
          "ans": 1,
          "explanation": "When bucket collisions reach 8, list converts to red-black tree, optimizing search from O(n) to O(log n)."
        },
        {
          "q": "What distinguishes a Checked Exception from an Unchecked Exception?",
          "opts": [
            "Checked inherit RuntimeException",
            "Checked exceptions must be explicitly caught or declared with throws at compile time; Unchecked extend RuntimeException and indicate programming bugs",
            "Unchecked crash OS",
            "No difference"
          ],
          "ans": 1,
          "explanation": "The compiler enforces error handling for checked exceptions (like file IO or database errors)."
        },
        {
          "q": "How does try-with-resources prevent resource memory leaks?",
          "opts": [
            "It runs garbage collector",
            "It automatically invokes close() on any AutoCloseable resource when exiting the block",
            "It increases heap size",
            "It disables exceptions"
          ],
          "ans": 1,
          "explanation": "AutoCloseable resources declared in try(...) are automatically closed cleanly."
        },
        {
          "q": "What distinguishes stream intermediate operations from terminal operations?",
          "opts": [
            "Intermediate return boolean",
            "Intermediate operations return a Stream and are lazy; Terminal operations trigger evaluation and return non-stream results",
            "Terminal run on UI",
            "No distinction"
          ],
          "ans": 1,
          "explanation": "Intermediate pipelines do not execute until a terminal operator initiates processing."
        },
        {
          "q": "Which Java 8 stream operation flattens a Stream of Lists into a single continuous Stream of items?",
          "opts": [
            "map()",
            "reduce()",
            "flatMap()",
            "flattenList()"
          ],
          "ans": 2,
          "explanation": "flatMap() merges multiple nested sub-streams into a single unified stream."
        },
        {
          "q": "What is the primary architectural purpose of Java Generics?",
          "opts": [
            "Speed up loops",
            "Provide compile-time type safety and eliminate explicit casting",
            "Encrypt bytecode",
            "Compress arrays"
          ],
          "ans": 1,
          "explanation": "Generics detect type mismatch bugs during compilation rather than crashing at runtime."
        },
        {
          "q": "According to the PECS rule, when should you use bounded wildcard <? super T>?",
          "opts": [
            "When reading elements from a producer",
            "When writing or adding items into a consumer collection",
            "In interface definitions",
            "When sorting"
          ],
          "ans": 1,
          "explanation": "Consumer Super (<? super T>): safe to insert elements into the collection."
        }
      ],
      "miniProject": {
        "title": "Week 3 Capstone Project — Enterprise Student Roster & Stream Analytics Portal",
        "description": "Build a comprehensive console application combining advanced Collections data structures, custom exception handling, generics, and Java 8 Stream pipelines.",
        "requirements": [
          "Create custom checked exception DuplicateEnrollmentException and unchecked exception CourseFullException.",
          "Design generic class EnrollmentQueue<T> backed by LinkedList/Deque managing FIFO student seat allocation.",
          "Create Student model with rollNo, name, department, gpa, and Set<String> registeredCourses.",
          "Implement UniversityRegistrar class utilizing HashMap<String, Student> mapped by unique rollNo for O(1) lookups.",
          "Implement registration method with try-with-resources writing registration events to an external log file, throwing DuplicateEnrollmentException if rollNo exists.",
          "Use Java 8 Streams to generate departmental analytics: group students by department using Collectors.groupingBy(), compute average GPA per department.",
          "Use Stream filter and sorted to extract top 3 scholarship candidates (GPA >= 8.5) formatted nicely.",
          "Test all scenarios in Main.java including handling exceptions gracefully without crashing."
        ]
      }
    },
    {
      "id": 4,
      "title": "JDBC & Databases",
      "topics": [
        {
          "id": 1,
          "title": "SQL Fundamentals — DDL, DML, Joins",
          "video": {
            "youtubeId": "HXV3zeQKqGY",
            "title": "SQL Fundamentals — DDL, DML, Joins - Tutorial",
            "channel": "freeCodeCamp",
            "duration": "4 hr",
            "description": "Master relational database concepts, Data Definition Language (CREATE, ALTER, DROP), Data Manipulation Language (INSERT, SELECT, UPDATE, DELETE), INNER/LEFT/RIGHT JOINs, and indexes."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Relational Databases & SQL Commands",
                "text": "Relational Database Management Systems (RDBMS like MySQL or PostgreSQL) organize data into structured tables composed of rows (tuples) and columns (attributes).\n\nSQL Categories:\n1. DDL (Data Definition Language): Defines schema structure.\n   • CREATE TABLE, ALTER TABLE, DROP TABLE, TRUNCATE TABLE.\n2. DML (Data Manipulation Language): Modifies table records.\n   • INSERT INTO, UPDATE, DELETE FROM.\n3. DQL (Data Query Language): Retrieves records.\n   • SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY.\n4. DCL / TCL: Permissions (GRANT/REVOKE) and Transaction Control (COMMIT/ROLLBACK)."
              },
              {
                "heading": "Constraints & Table Joins",
                "text": "• Primary Key: Unique identifier for each row (NOT NULL + UNIQUE).\n• Foreign Key: Enforces referential integrity pointing to a primary key in another table.\n• Table JOINs combine columns from multiple tables:\n  - INNER JOIN: Returns only rows where matching keys exist in both tables.\n  - LEFT JOIN: Returns ALL rows from left table, plus matched rows from right (null if no match).\n  - RIGHT JOIN: Returns ALL rows from right table, plus matched from left."
              },
              {
                "heading": "Production Code — College Database Schema & Joins",
                "code": "-- <span class=\"cls\">DDL</span>: <span class=\"cls\">Create</span> schema with strict integrity constraints\n<span class=\"cls\">CREATE</span> <span class=\"cls\">TABLE</span> departments (\n    dept_id <span class=\"cls\">INT</span> <span class=\"cls\">PRIMARY</span> <span class=\"cls\">KEY</span> AUTO_INCREMENT,\n    dept_name <span class=\"cls\">VARCHAR</span>(100) <span class=\"cls\">NOT</span> <span class=\"cls\">NULL</span> <span class=\"cls\">UNIQUE</span>,\n    head_of_dept <span class=\"cls\">VARCHAR</span>(100)\n);\n\n<span class=\"cls\">CREATE</span> <span class=\"cls\">TABLE</span> students (\n    student_id <span class=\"cls\">INT</span> <span class=\"cls\">PRIMARY</span> <span class=\"cls\">KEY</span> AUTO_INCREMENT,\n    full_name <span class=\"cls\">VARCHAR</span>(150) <span class=\"cls\">NOT</span> <span class=\"cls\">NULL</span>,\n    email <span class=\"cls\">VARCHAR</span>(150) <span class=\"cls\">UNIQUE</span> <span class=\"cls\">NOT</span> <span class=\"cls\">NULL</span>,\n    gpa <span class=\"cls\">DECIMAL</span>(3,2) <span class=\"cls\">CHECK</span> (gpa >= 0.0 <span class=\"cls\">AND</span> gpa <= 10.0),\n    dept_id <span class=\"cls\">INT</span>,\n    created_at <span class=\"cls\">TIMESTAMP</span> <span class=\"cls\">DEFAULT</span> CURRENT_TIMESTAMP,\n    <span class=\"cls\">CONSTRAINT</span> fk_student_dept <span class=\"cls\">FOREIGN</span> <span class=\"cls\">KEY</span> (dept_id) <span class=\"cls\">REFERENCES</span> departments(dept_id) <span class=\"cls\">ON</span> <span class=\"cls\">DELETE</span> <span class=\"cls\">SET</span> <span class=\"cls\">NULL</span>\n);\n\n-- <span class=\"cls\">DML</span>: <span class=\"cls\">Sample</span> insertions\n<span class=\"cls\">INSERT</span> <span class=\"cls\">INTO</span> departments (dept_name, head_of_dept) <span class=\"cls\">VALUES</span> \n(<span class=\"str\">'Computer Science'</span>, <span class=\"str\">'Dr. Alan Turing'</span>),\n(<span class=\"str\">'Electronics'</span>, <span class=\"str\">'Dr. Claude Shannon'</span>);\n\n<span class=\"cls\">INSERT</span> <span class=\"cls\">INTO</span> students (full_name, email, gpa, dept_id) <span class=\"cls\">VALUES</span> \n(<span class=\"str\">'Arjun Sharma'</span>, <span class=\"str\">'arjun@tech.edu'</span>, 8.85, 1),\n(<span class=\"str\">'Priya Patel'</span>, <span class=\"str\">'priya@tech.edu'</span>, 9.20, 1),\n(<span class=\"str\">'Ravi Kumar'</span>, <span class=\"str\">'ravi@tech.edu'</span>, 7.50, 2);\n\n-- <span class=\"cls\">DQL</span>: <span class=\"cls\">INNER</span> <span class=\"cls\">JOIN</span> reporting students with their department head\n<span class=\"cls\">SELECT</span> s.student_id, s.full_name, s.gpa, d.dept_name, d.head_of_dept\n<span class=\"cls\">FROM</span> students s\n<span class=\"cls\">INNER</span> <span class=\"cls\">JOIN</span> departments d <span class=\"cls\">ON</span> s.dept_id = d.dept_id\n<span class=\"cls\">WHERE</span> s.gpa >= 8.0\n<span class=\"cls\">ORDER</span> <span class=\"cls\">BY</span> s.gpa <span class=\"cls\">DESC</span>;\n\n-- <span class=\"cls\">DQL</span>: <span class=\"cls\">Aggregation</span> finding department <span class=\"cls\">GPA</span> statistics\n<span class=\"cls\">SELECT</span> d.dept_name, <span class=\"cls\">COUNT</span>(s.student_id) <span class=\"cls\">AS</span> total_students, <span class=\"cls\">AVG</span>(s.gpa) <span class=\"cls\">AS</span> avg_gpa\n<span class=\"cls\">FROM</span> departments d\n<span class=\"cls\">LEFT</span> <span class=\"cls\">JOIN</span> students s <span class=\"cls\">ON</span> d.dept_id = s.dept_id\n<span class=\"cls\">GROUP</span> <span class=\"cls\">BY</span> d.dept_name\n<span class=\"cls\">HAVING</span> avg_gpa > 7.0;"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always specify explicit column names in INSERT queries (INSERT INTO table(col1, col2)) rather than relying on positional ordering.\n• Create Index on frequently queried columns in WHERE clauses or JOIN keys to speed up searches from O(n) table scans to O(log n) B-Tree lookups.\n• Use TRUNCATE table instead of DELETE FROM table without WHERE clause when clearing logs; TRUNCATE resets auto-increment counters and does not generate per-row transaction logs."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between WHERE and HAVING clauses?\nA: WHERE filters individual rows BEFORE aggregate operations (GROUP BY) take place. HAVING filters grouped aggregate results AFTER GROUP BY has executed.\n\nQ: What is the difference between TRUNCATE, DELETE, and DROP?\nA: DELETE is a DML command that removes rows one by one (can be rolled back). TRUNCATE is a DDL command that quickly empties the table by deallocating pages (cannot be rolled back in MySQL). DROP completely deletes the entire table structure and data from the database.\n\nQ: What is a database index and what is its trade-off?\nA: An index is a B-Tree data structure that accelerates read queries. The trade-off is that every INSERT, UPDATE, or DELETE operation becomes slightly slower because the index tree must also be reorganized."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — E-Commerce Order Relational Schema",
              "instructions": "Write SQL scripts to create an E-Commerce database.\n1. Create customers(cust_id, name, email) and orders(order_id, cust_id, order_date, total_amt).\n2. Add a FOREIGN KEY from orders.cust_id to customers.cust_id.\n3. Insert 3 customers and 5 orders.\n4. Write a LEFT JOIN query showing all customers alongside their total order expenditure (using SUM(total_amt) and GROUP BY).",
              "hint": "In your LEFT JOIN query, use IFNULL(SUM(o.total_amt), 0) so customers without orders show 0 instead of NULL."
            },
            "resources": [
              {
                "label": "MySQL Official Reference — SQL Syntax",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html"
              },
              {
                "label": "W3Schools — SQL Joins Tutorial",
                "url": "https://www.w3schools.com/sql/sql_join.asp"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which SQL command belongs to Data Definition Language (DDL)?",
              "opts": [
                "INSERT INTO",
                "SELECT",
                "CREATE TABLE",
                "UPDATE"
              ],
              "ans": 2,
              "explanation": "CREATE, ALTER, DROP, and TRUNCATE define database structures (DDL)."
            },
            {
              "q": "What does an INNER JOIN return between Table A and Table B?",
              "opts": [
                "All rows from both tables combined",
                "Only rows where matching keys exist in BOTH tables",
                "All rows from Table A with nulls for B",
                "Only rows that do not match"
              ],
              "ans": 1,
              "explanation": "INNER JOIN produces the intersection of rows matching the join condition."
            },
            {
              "q": "Which clause filters groups AFTER a GROUP BY operation?",
              "opts": [
                "WHERE",
                "ORDER BY",
                "HAVING",
                "LIMIT"
              ],
              "ans": 2,
              "explanation": "HAVING filters aggregate group results, while WHERE filters individual rows prior to grouping."
            },
            {
              "q": "What is the primary function of a FOREIGN KEY constraint?",
              "opts": [
                "Encrypt values",
                "Enforce referential integrity by linking a column to a primary key in another table",
                "Speed up table scans",
                "Auto-increment IDs"
              ],
              "ans": 1,
              "explanation": "Foreign keys prevent orphaned child records by ensuring referenced parent keys exist."
            },
            {
              "q": "What is the trade-off of adding indexes to database columns?",
              "opts": [
                "Slows down SELECT queries",
                "Speeds up SELECT queries but slows down INSERT/UPDATE/DELETE due to index maintenance",
                "Takes no storage",
                "Locks the database"
              ],
              "ans": 1,
              "explanation": "Indexes speed up reads via B-Trees but require structural overhead on every write operation."
            },
            {
              "q": "Which SQL operation resets the auto-increment counter while emptying table data?",
              "opts": [
                "DELETE FROM table",
                "REMOVE table",
                "TRUNCATE TABLE",
                "CLEAR table"
              ],
              "ans": 2,
              "explanation": "TRUNCATE deallocates data pages directly and resets auto-increment counters."
            },
            {
              "q": "What does LEFT JOIN return when no match exists in the right table?",
              "opts": [
                "Omits the left row",
                "Returns left row with NULL values for right table columns",
                "Throws SQL syntax error",
                "Returns zero"
              ],
              "ans": 1,
              "explanation": "LEFT JOIN guarantees all left table records appear in the result set."
            }
          ]
        },
        {
          "id": 2,
          "title": "JDBC — Java Database Connectivity",
          "video": {
            "youtubeId": "7v2OnUti2eM",
            "title": "JDBC — Java Database Connectivity - Tutorial",
            "channel": "Telusko",
            "duration": "1 hr",
            "description": "Establish JDBC database connections using DriverManager, PreparedStatement vs Statement, ResultSet navigation, and SQL injection prevention."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — JDBC Pipeline",
                "text": "JDBC (Java Database Connectivity) is the standard Java API for connecting to relational databases. The execution workflow consists of:\n1. Register/Load Driver: Class.forName(\"com.mysql.cj.jdbc.Driver\") (optional in JDBC 4.0+ SPI).\n2. Establish Connection: DriverManager.getConnection(url, username, password).\n3. Create Statement: Use PreparedStatement for parameterized queries.\n4. Execute Query: executeQuery() for SELECT (returns ResultSet) or executeUpdate() for DML (returns rows modified int).\n5. Process ResultSet: Iterate over query results.\n6. Close Resources: Automatically handled via try-with-resources."
              },
              {
                "heading": "PreparedStatement vs Statement & SQL Injection",
                "text": "Never use plain Statement with concatenated strings (sql = \"SELECT * FROM users WHERE name = '\" + input + \"'\"). Attackers can input ' OR '1'='1 to bypass authentication (SQL Injection).\n\nAlways use PreparedStatement with ? placeholders. PreparedStatement pre-compiles the SQL template in the database engine and safely escapes parameters."
              },
              {
                "heading": "Production Code — Secure JDBC CRUD Operations",
                "code": "<span class=\"kw\">import</span> java.sql.*;\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">StudentJdbcRepository</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">static</span> <span class=\"kw\">final</span> <span class=\"cls\">String</span> DB_URL = <span class=\"str\">\"jdbc:mysql://localhost:3306/college_db\"</span>;\n    <span class=\"kw\">private</span> <span class=\"kw\">static</span> <span class=\"kw\">final</span> <span class=\"cls\">String</span> <span class=\"cls\">USER</span> = <span class=\"str\">\"root\"</span>;\n    <span class=\"kw\">private</span> <span class=\"kw\">static</span> <span class=\"kw\">final</span> <span class=\"cls\">String</span> <span class=\"cls\">PASS</span> = <span class=\"str\">\"password\"</span>;\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> insertStudent(<span class=\"cls\">String</span> name, <span class=\"cls\">String</span> email, <span class=\"kw\">double</span> gpa) {\n        <span class=\"cls\">String</span> sql = <span class=\"str\">\"INSERT INTO students (full_name, email, gpa) VALUES (?, ?, ?)\"</span>;\n        \n        <span class=\"cmt\">// try-with-resources closes Connection and PreparedStatement cleanly</span>\n        <span class=\"kw\">try</span> (<span class=\"cls\">Connection</span> conn = <span class=\"cls\">DriverManager</span>.getConnection(DB_URL, <span class=\"cls\">USER</span>, <span class=\"cls\">PASS</span>);\n             <span class=\"cls\">PreparedStatement</span> pstmt = conn.prepareStatement(sql, <span class=\"cls\">Statement</span>.RETURN_GENERATED_KEYS)) {\n            \n            pstmt.setString(1, name);\n            pstmt.setString(2, email);\n            pstmt.setDouble(3, gpa);\n            \n            <span class=\"kw\">int</span> rowsAffected = pstmt.executeUpdate();\n            <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Records inserted: \"</span> + rowsAffected);\n\n            <span class=\"cmt\">// Retrieve auto-generated primary key</span>\n            <span class=\"kw\">try</span> (<span class=\"cls\">ResultSet</span> keys = pstmt.getGeneratedKeys()) {\n                <span class=\"kw\">if</span> (keys.next()) {\n                    <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Assigned Student ID: \"</span> + keys.getInt(1));\n                }\n            }\n        } <span class=\"kw\">catch</span> (<span class=\"cls\">SQLException</span> e) {\n            <span class=\"cls\">System</span>.err.println(<span class=\"str\">\"Database execution error: \"</span> + e.getMessage());\n        }\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> findStudentsByMinGpa(<span class=\"kw\">double</span> minGpa) {\n        <span class=\"cls\">String</span> query = <span class=\"str\">\"SELECT student_id, full_name, gpa FROM students WHERE gpa >= ? ORDER BY gpa DESC\"</span>;\n        \n        <span class=\"kw\">try</span> (<span class=\"cls\">Connection</span> conn = <span class=\"cls\">DriverManager</span>.getConnection(DB_URL, <span class=\"cls\">USER</span>, <span class=\"cls\">PASS</span>);\n             <span class=\"cls\">PreparedStatement</span> pstmt = conn.prepareStatement(query)) {\n            \n            pstmt.setDouble(1, minGpa);\n            <span class=\"kw\">try</span> (<span class=\"cls\">ResultSet</span> rs = pstmt.executeQuery()) {\n                <span class=\"kw\">while</span> (rs.next()) {\n                    <span class=\"kw\">int</span> id = rs.getInt(<span class=\"str\">\"student_id\"</span>);\n                    <span class=\"cls\">String</span> name = rs.getString(<span class=\"str\">\"full_name\"</span>);\n                    <span class=\"kw\">double</span> gpa = rs.getDouble(<span class=\"str\">\"gpa\"</span>);\n                    <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"ID: %d | Name: %s | GPA: %.2f%n\"</span>, id, name, gpa);\n                }\n            }\n        } <span class=\"kw\">catch</span> (<span class=\"cls\">SQLException</span> e) {\n            e.printStackTrace();\n        }\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always wrap JDBC objects (Connection, PreparedStatement, ResultSet) in try-with-resources blocks. Unclosed connections exhaust database connection limits quickly.\n• Set appropriate query timeouts via pstmt.setQueryTimeout(10) to prevent hanging threads if network issues occur.\n• Store database credentials in environment variables or configuration files rather than hardcoding them."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why is PreparedStatement faster and safer than plain Statement?\nA: Safer: PreparedStatement treats inputs strictly as parameter values rather than executable SQL syntax, completely eliminating SQL injection. Faster: The database pre-compiles the SQL execution plan once and reuses it across multiple executions.\n\nQ: What is the difference between executeQuery(), executeUpdate(), and execute()?\nA: executeQuery() is used for SELECT queries and returns a ResultSet. executeUpdate() is used for INSERT/UPDATE/DELETE and returns an int representing affected rows. execute() returns boolean and executes arbitrary SQL (like DDL or multi-result procedures).\n\nQ: What is initial position of a ResultSet cursor?\nA: The initial position of a ResultSet cursor is positioned BEFORE the first row. You must invoke rs.next() before retrieving columns."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Employee Payroll JDBC Connector",
              "instructions": "Write a complete Java application connecting to a local MySQL DB.\n1. Create table employees(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), salary DOUBLE).\n2. Write method updateSalary(int empId, double raiseAmount) using PreparedStatement.\n3. Write method printTopEarners(double minSalary) iterating through a ResultSet and formatting output cleanly.",
              "hint": "In executeUpdate(), check if return int > 0 to confirm whether the target empId actually existed."
            },
            "resources": [
              {
                "label": "Oracle Docs — JDBC Basics",
                "url": "https://docs.oracle.com/javase/tutorial/jdbc/basics/"
              },
              {
                "label": "Baeldung — JDBC PreparedStatement",
                "url": "https://www.baeldung.com/java-preparedstatement"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which JDBC method executes a SELECT query and returns data rows?",
              "opts": [
                "executeUpdate()",
                "executeQuery()",
                "executeSelect()",
                "fetchResult()"
              ],
              "ans": 1,
              "explanation": "executeQuery() returns a ResultSet object containing data returned by SELECT."
            },
            {
              "q": "Why is PreparedStatement essential for web applications?",
              "opts": [
                "It encrypts passwords",
                "It parameterizes inputs safely, preventing SQL injection attacks",
                "It connects without passwords",
                "It runs in separate JVM"
              ],
              "ans": 1,
              "explanation": "PreparedStatement separates SQL query structure from user-provided parameters."
            },
            {
              "q": "Where is the cursor positioned immediately when a ResultSet is returned?",
              "opts": [
                "On row 1",
                "Before the first row (call next() first)",
                "On the last row",
                "On column 0"
              ],
              "ans": 1,
              "explanation": "A new ResultSet points before row 1. Calling rs.next() advances it to the first data record."
            },
            {
              "q": "What does executeUpdate() return after running an INSERT statement?",
              "opts": [
                "ResultSet",
                "An integer indicating the number of rows affected",
                "boolean true",
                "Primary key object"
              ],
              "ans": 1,
              "explanation": "executeUpdate() returns an int specifying how many database records were modified."
            },
            {
              "q": "Which interface automatically closes JDBC connections upon exiting a try block?",
              "opts": [
                "Serializable",
                "AutoCloseable (via try-with-resources)",
                "Cloneable",
                "Runnable"
              ],
              "ans": 1,
              "explanation": "Connection, PreparedStatement, and ResultSet all implement AutoCloseable."
            },
            {
              "q": "How do you retrieve the auto-generated primary key after an INSERT via PreparedStatement?",
              "opts": [
                "pstmt.getKey()",
                "Pass Statement.RETURN_GENERATED_KEYS when preparing, then call pstmt.getGeneratedKeys()",
                "Run SELECT MAX(id)",
                "pstmt.getInsertId()"
              ],
              "ans": 1,
              "explanation": "Statement.RETURN_GENERATED_KEYS instructs the DB driver to return generated keys."
            },
            {
              "q": "Which checked exception must be caught when calling JDBC methods?",
              "opts": [
                "IOException",
                "SQLException",
                "ClassNotFoundException",
                "DatabaseException"
              ],
              "ans": 1,
              "explanation": "All JDBC database interaction methods throw java.sql.SQLException."
            }
          ]
        },
        {
          "id": 3,
          "title": "DAO Pattern & MVC Architecture",
          "video": {
            "youtubeId": "DLjObn8EMYk",
            "title": "DAO Pattern & MVC Architecture - Tutorial",
            "channel": "JavaBrains",
            "duration": "40 min",
            "description": "Data Access Object (DAO) design pattern, separation of concerns, enterprise MVC layering (Controller -> Service -> DAO -> DB), and repository interfaces."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Layered Enterprise Architecture",
                "text": "The Data Access Object (DAO) pattern structural design pattern isolates domain business logic from underlying database persistence mechanics.\n\nThree-Layer Enterprise Architecture:\n1. Presentation Layer (Controller): Intercepts HTTP/user requests and delegates to services.\n2. Business Service Layer (Service): Executes domain rules, validation, and calculations.\n3. Data Access Layer (DAO / Repository): Executes raw SQL queries or ORM commands against database engines.\n\nBenefits: Decoupling allows swapping databases (e.g., MySQL to PostgreSQL) or mocking data access during unit tests without touching service logic."
              },
              {
                "heading": "Anatomy of a Clean DAO Implementation",
                "text": "A robust DAO consists of:\n1. Model / Entity Class: Plain Java Object representing a database row.\n2. DAO Interface: Defines abstract persistence operations (save, findById, findAll, update, delete).\n3. DAO Implementation Class: Executes concrete JDBC PreparedStatement queries."
              },
              {
                "heading": "Production Code — Decoupled Student DAO Layer",
                "code": "<span class=\"kw\">import</span> java.util.*;\n<span class=\"kw\">import</span> java.sql.*;\n\n<span class=\"cmt\">// 1. Model Entity</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">Student</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">int</span> id;\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> name;\n    <span class=\"kw\">private</span> <span class=\"kw\">double</span> gpa;\n    <span class=\"kw\">public</span> <span class=\"cls\">Student</span>(<span class=\"kw\">int</span> id, <span class=\"cls\">String</span> name, <span class=\"kw\">double</span> gpa) {\n        this.id = id; this.name = name; this.gpa = gpa;\n    }\n    <span class=\"kw\">public</span> <span class=\"kw\">int</span> getId() { <span class=\"kw\">return</span> id; }\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> getName() { <span class=\"kw\">return</span> name; }\n    <span class=\"kw\">public</span> <span class=\"kw\">double</span> getGpa() { <span class=\"kw\">return</span> gpa; }\n}\n\n<span class=\"cmt\">// 2. DAO Contract Interface</span>\n<span class=\"kw\">public</span> <span class=\"kw\">interface</span> <span class=\"cls\">StudentDAO</span> {\n    <span class=\"kw\">void</span> save(<span class=\"cls\">Student</span> student) <span class=\"kw\">throws</span> <span class=\"cls\">SQLException</span>;\n    <span class=\"cls\">Optional</span><<span class=\"cls\">Student</span>> findById(<span class=\"kw\">int</span> id) <span class=\"kw\">throws</span> <span class=\"cls\">SQLException</span>;\n    <span class=\"cls\">List</span><<span class=\"cls\">Student</span>> findAll() <span class=\"kw\">throws</span> <span class=\"cls\">SQLException</span>;\n}\n\n<span class=\"cmt\">// 3. Concrete JDBC Implementation</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">StudentDAOJdbcImpl</span> <span class=\"kw\">implements</span> <span class=\"cls\">StudentDAO</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">Connection</span> connection;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">StudentDAOJdbcImpl</span>(<span class=\"cls\">Connection</span> connection) {\n        this.connection = connection;\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> save(<span class=\"cls\">Student</span> student) <span class=\"kw\">throws</span> <span class=\"cls\">SQLException</span> {\n        <span class=\"cls\">String</span> sql = <span class=\"str\">\"INSERT INTO students (full_name, gpa) VALUES (?, ?)\"</span>;\n        <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> pstmt = connection.prepareStatement(sql)) {\n            pstmt.setString(1, student.getName());\n            pstmt.setDouble(2, student.getGpa());\n            pstmt.executeUpdate();\n        }\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">Optional</span><<span class=\"cls\">Student</span>> findById(<span class=\"kw\">int</span> id) <span class=\"kw\">throws</span> <span class=\"cls\">SQLException</span> {\n        <span class=\"cls\">String</span> sql = <span class=\"str\">\"SELECT student_id, full_name, gpa FROM students WHERE student_id = ?\"</span>;\n        <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> pstmt = connection.prepareStatement(sql)) {\n            pstmt.setInt(1, id);\n            <span class=\"kw\">try</span> (<span class=\"cls\">ResultSet</span> rs = pstmt.executeQuery()) {\n                <span class=\"kw\">if</span> (rs.next()) {\n                    <span class=\"kw\">return</span> <span class=\"cls\">Optional</span>.of(<span class=\"kw\">new</span> <span class=\"cls\">Student</span>(\n                        rs.getInt(<span class=\"str\">\"student_id\"</span>),\n                        rs.getString(<span class=\"str\">\"full_name\"</span>),\n                        rs.getDouble(<span class=\"str\">\"gpa\"</span>)\n                    ));\n                }\n            }\n        }\n        <span class=\"kw\">return</span> <span class=\"cls\">Optional</span>.empty(); <span class=\"cmt\">// Prevents null pointer bugs</span>\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">List</span><<span class=\"cls\">Student</span>> findAll() <span class=\"kw\">throws</span> <span class=\"cls\">SQLException</span> {\n        <span class=\"cls\">List</span><<span class=\"cls\">Student</span>> list = <span class=\"kw\">new</span> <span class=\"cls\">ArrayList</span><>();\n        <span class=\"cls\">String</span> sql = <span class=\"str\">\"SELECT student_id, full_name, gpa FROM students\"</span>;\n        <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> pstmt = connection.prepareStatement(sql);\n             <span class=\"cls\">ResultSet</span> rs = pstmt.executeQuery()) {\n            <span class=\"kw\">while</span> (rs.next()) {\n                list.add(<span class=\"kw\">new</span> <span class=\"cls\">Student</span>(\n                    rs.getInt(<span class=\"str\">\"student_id\"</span>),\n                    rs.getString(<span class=\"str\">\"full_name\"</span>),\n                    rs.getDouble(<span class=\"str\">\"gpa\"</span>)\n                ));\n            }\n        }\n        <span class=\"kw\">return</span> list;\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Return Optional<T> from findById() methods rather than null to force calling services to handle absent records explicitly.\n• Never place SQL query strings or JDBC connection code inside business Service classes.\n• Catch low-level SQLException in DAO implementations and wrap/rethrow them as clean application-level exceptions (e.g., DataAccessException)."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why do we create a DAO Interface before writing the DAO Implementation class?\nA: Coding to an interface decouples the application from specific persistence technologies. During unit testing, you can inject an InMemoryStudentDAO mock into the service layer without connecting to a real database.\n\nQ: What is the difference between DAO and Repository patterns?\nA: DAO is a data-centric abstraction centered around CRUD table operations (one DAO per table). Repository is a domain-centric abstraction centered around aggregate roots, emulating an in-memory collection of domain objects.\n\nQ: Where should input validation (like checking if email format is valid) happen?\nA: In the Business Service Layer (or validation framework at the controller boundary). The DAO layer should focus purely on database operations."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Library Book DAO Architecture",
              "instructions": "Implement a clean DAO architecture for a Book catalog.\n1. Create Book entity (isbn, title, price).\n2. Create BookDAO interface with save(Book b), findByIsbn(String isbn), and deleteByIsbn(String isbn).\n3. Create BookDAOJdbcImpl executing PreparedStatement operations.\n4. Create BookService class that validates price > 0 before delegating to BookDAO.save().",
              "hint": "In BookService, throw an IllegalArgumentException if book.getPrice() <= 0."
            },
            "resources": [
              {
                "label": "Baeldung — DAO Pattern in Java",
                "url": "https://www.baeldung.com/java-dao-pattern"
              },
              {
                "label": "GeeksforGeeks — Data Access Object Pattern",
                "url": "https://www.geeksforgeeks.org/data-access-object-pattern/"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the core objective of the Data Access Object (DAO) design pattern?",
              "opts": [
                "Encrypt database communication",
                "Isolate database persistence mechanics from application business logic",
                "Speed up SQL execution",
                "Generate UI HTML"
              ],
              "ans": 1,
              "explanation": "DAO decouples data storage implementation details from higher-level service logic."
            },
            {
              "q": "Which architectural layer should contain business validation rules and tax calculations?",
              "opts": [
                "Presentation Controller Layer",
                "Business Service Layer",
                "DAO Persistence Layer",
                "Database Trigger"
              ],
              "ans": 1,
              "explanation": "The Business Service layer encapsulates domain rules and validation logic."
            },
            {
              "q": "Why is returning Optional<T> from DAO findById() preferred over returning null?",
              "opts": [
                "It saves heap memory",
                "It forces calling service code to explicitly handle missing records, reducing NullPointerException bugs",
                "JDBC requires it",
                "It speeds up queries"
              ],
              "ans": 1,
              "explanation": "Optional clearly communicates that a result may be absent and provides methods like orElseThrow()."
            },
            {
              "q": "What architectural advantage is gained by coding against a DAO Interface?",
              "opts": [
                "Faster compiler execution",
                "Enables injecting mock implementations for fast unit testing without live database connections",
                "Eliminates SQL syntax errors",
                "Reduces jar file size"
              ],
              "ans": 1,
              "explanation": "Interfaces allow dependency substitution (e.g., using Mockito or in-memory lists during unit tests)."
            },
            {
              "q": "If you switch from MySQL to PostgreSQL, which layer should require modifications?",
              "opts": [
                "Only the Presentation layer",
                "Only the DAO Implementation layer (SQL queries/connection)",
                "The entire application codebase",
                "Only the Service layer"
              ],
              "ans": 1,
              "explanation": "Because business logic interacts only with abstract DAO interfaces, switching databases only requires updating DAO implementations."
            },
            {
              "q": "Should a DAO class handle user HTTP authentication and JSON parsing?",
              "opts": [
                "Yes, for speed",
                "No, authentication belongs in Security/Controller layers; DAO focuses exclusively on persistence",
                "Only for admin users",
                "Yes, in small apps"
              ],
              "ans": 1,
              "explanation": "Single Responsibility Principle dictates DAO strictly manages database operations."
            },
            {
              "q": "What is the recommended approach for handling low-level SQLException inside DAO methods?",
              "opts": [
                "Print stack trace and ignore",
                "Catch SQLException and wrap/rethrow as a custom application DataAccessException",
                "System.exit(1)",
                "Return null"
              ],
              "ans": 1,
              "explanation": "Translating low-level JDBC errors into application exceptions keeps service layers clean."
            }
          ]
        },
        {
          "id": 4,
          "title": "Transactions & Connection Pooling",
          "video": {
            "youtubeId": "P3OGSvlVtXY",
            "title": "Transactions & Connection Pooling - Tutorial",
            "channel": "JavaBrains",
            "duration": "35 min",
            "description": "ACID transaction properties, manual commit/rollback management in JDBC, and high-performance connection pooling with HikariCP."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — ACID Transactions",
                "text": "A database transaction is an atomic sequence of operations executed as a single indivisible unit of work. Transactions adhere to the ACID guarantees:\n1. Atomicity: All operations succeed or all roll back completely (All-or-Nothing).\n2. Consistency: Database remains in a valid state adhering to all integrity constraints.\n3. Isolation: Concurrent transactions do not interfere with each other.\n4. Durability: Once committed, updates survive power outages or system crashes.\n\nIn JDBC, auto-commit is enabled by default. To manage transactions manually:\n• conn.setAutoCommit(false);\n• Execute multiple queries.\n• conn.commit() upon success or conn.rollback() upon SQLException."
              },
              {
                "heading": "Connection Pooling with HikariCP",
                "text": "Creating a raw TCP/Socket connection via DriverManager.getConnection() takes ~50-100ms. In high-traffic applications, opening/closing connections per request destroys performance.\n\nA Connection Pool maintains a reusable pool of open database connections. When a request needs a connection, it borrows one from the pool and returns it upon completion. HikariCP is the lightning-fast industry-standard connection pool bundled into Spring Boot."
              },
              {
                "heading": "Production Code — Atomic Bank Transfer & Hikari Config",
                "code": "<span class=\"kw\">import</span> java.sql.*;\n<span class=\"kw\">import</span> com.zaxxer.hikari.*;\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">BankingTransactionManager</span> {\n    <span class=\"cmt\">// HikariCP Connection Pool Factory</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">static</span> <span class=\"cls\">HikariDataSource</span> getDataSource() {\n        <span class=\"cls\">HikariConfig</span> config = <span class=\"kw\">new</span> <span class=\"cls\">HikariConfig</span>();\n        config.setJdbcUrl(<span class=\"str\">\"jdbc:mysql://localhost:3306/bank_db\"</span>);\n        config.setUsername(<span class=\"str\">\"root\"</span>);\n        config.setPassword(<span class=\"str\">\"password\"</span>);\n        config.setMaximumPoolSize(10);        <span class=\"cmt\">// Max concurrent pooled connections</span>\n        config.setMinimumIdle(2);\n        config.setConnectionTimeout(30000);   <span class=\"cmt\">// 30 seconds wait before timeout</span>\n        <span class=\"kw\">return</span> <span class=\"kw\">new</span> <span class=\"cls\">HikariDataSource</span>(config);\n    }\n\n    <span class=\"cmt\">// Atomic Money Transfer Transaction</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> transferFunds(<span class=\"cls\">HikariDataSource</span> ds, <span class=\"kw\">int</span> fromAcc, <span class=\"kw\">int</span> toAcc, <span class=\"kw\">double</span> amount) {\n        <span class=\"cls\">String</span> debitSql = <span class=\"str\">\"UPDATE accounts SET balance = balance - ? WHERE account_id = ? AND balance >= ?\"</span>;\n        <span class=\"cls\">String</span> creditSql = <span class=\"str\">\"UPDATE accounts SET balance = balance + ? WHERE account_id = ?\"</span>;\n\n        <span class=\"cmt\">// Borrow pooled connection</span>\n        <span class=\"kw\">try</span> (<span class=\"cls\">Connection</span> conn = ds.getConnection()) {\n            <span class=\"kw\">try</span> {\n                <span class=\"cmt\">// 1. Disable auto-commit to begin transaction</span>\n                conn.setAutoCommit(<span class=\"kw\">false</span>);\n\n                <span class=\"cmt\">// 2. Execute Debit</span>\n                <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> debitStmt = conn.prepareStatement(debitSql)) {\n                    debitStmt.setDouble(1, amount);\n                    debitStmt.setInt(2, fromAcc);\n                    debitStmt.setDouble(3, amount);\n                    <span class=\"kw\">int</span> debited = debitStmt.executeUpdate();\n                    <span class=\"kw\">if</span> (debited == 0) {\n                        <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">SQLException</span>(<span class=\"str\">\"Debit failed: Insufficient balance or account not found.\"</span>);\n                    }\n                }\n\n                <span class=\"cmt\">// 3. Execute Credit</span>\n                <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> creditStmt = conn.prepareStatement(creditSql)) {\n                    creditStmt.setDouble(1, amount);\n                    creditStmt.setInt(2, toAcc);\n                    creditStmt.executeUpdate();\n                }\n\n                <span class=\"cmt\">// 4. Commit transaction atomically</span>\n                conn.commit();\n                <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Transfer of Rs. \"</span> + amount + <span class=\"str\">\" executed atomically!\"</span>);\n\n            } <span class=\"kw\">catch</span> (<span class=\"cls\">SQLException</span> e) {\n                <span class=\"cmt\">// 5. Rollback everything if any operation fails</span>\n                conn.rollback();\n                <span class=\"cls\">System</span>.err.println(<span class=\"str\">\"Transaction failed! Rolled back changes: \"</span> + e.getMessage());\n            } <span class=\"kw\">finally</span> {\n                <span class=\"cmt\">// 6. Restore auto-commit before returning connection to pool</span>\n                conn.setAutoCommit(<span class=\"kw\">true</span>);\n            }\n        } <span class=\"kw\">catch</span> (<span class=\"cls\">SQLException</span> e) {\n            e.printStackTrace();\n        }\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always execute conn.rollback() inside the catch block of a manual transaction to prevent partial data updates.\n• Always restore conn.setAutoCommit(true) in the finally block before closing/returning the connection to the pool.\n• Never hold database connections open while executing slow network calls or external API requests; borrow connections as late as possible and return immediately."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is a Dirty Read, Non-Repeatable Read, and Phantom Read?\nA: Dirty Read: Reading uncommitted changes made by another transaction that later rolls back. Non-Repeatable Read: Reading a row twice inside a transaction and getting different values because another transaction updated it. Phantom Read: Querying a set of rows twice and finding new rows inserted by another transaction.\n\nQ: Why is HikariCP faster than legacy connection pools like C3P0 or DBCP?\nA: HikariCP uses bytecode-level optimizations (FastList instead of ArrayList), lock-free ConcurrentBag data structures, and eliminates redundant wrapper objects.\n\nQ: What happens if a connection pool reaches its maximum limit and all connections are busy?\nA: Subsequent connection requests block and wait up to connectionTimeout (default 30s). If no connection frees up within that time, a SQLTimeoutException is thrown."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — E-Commerce Atomic Checkout",
              "instructions": "Simulate an order checkout requiring two atomic database operations.\n1. Setup HikariDataSource connecting to inventory_db.\n2. Write checkoutOrder(int productId, int qty, double cost) with conn.setAutoCommit(false).\n3. Operation 1: UPDATE products SET stock = stock - ? WHERE id = ? AND stock >= ?.\n4. Operation 2: INSERT INTO orders (product_id, qty, total) VALUES (?, ?, ?).\n5. If stock update returns 0 rows, throw exception and rollback. Test both success and out-of-stock scenarios.",
              "hint": "Always wrap conn.rollback() in its own try-catch block inside your main exception handler."
            },
            "resources": [
              {
                "label": "HikariCP GitHub Repository",
                "url": "https://github.com/brettwooldridge/HikariCP"
              },
              {
                "label": "Baeldung — JDBC Transactions",
                "url": "https://www.baeldung.com/java-jdbc-transactions"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which ACID property guarantees that all database updates succeed or all roll back completely?",
              "opts": [
                "Consistency",
                "Atomicity",
                "Isolation",
                "Durability"
              ],
              "ans": 1,
              "explanation": "Atomicity ensures indivisible All-or-Nothing execution."
            },
            {
              "q": "What command initiates a manual transaction block in JDBC?",
              "opts": [
                "conn.startTransaction()",
                "conn.setAutoCommit(false)",
                "conn.beginTransaction()",
                "conn.lock()"
              ],
              "ans": 1,
              "explanation": "Disabling auto-commit holds pending queries until explicit commit() or rollback()."
            },
            {
              "q": "Why do enterprise applications use connection pooling instead of opening new connections per request?",
              "opts": [
                "To encrypt TCP traffic",
                "TCP socket handshake and DB authentication take ~50-100ms; reusing pooled connections cuts latency to <1ms",
                "To bypass firewall",
                "To store data in memory"
              ],
              "ans": 1,
              "explanation": "Connection pools eliminate expensive socket setup overhead."
            },
            {
              "q": "What must you execute inside a catch block when a transactional operation throws an exception?",
              "opts": [
                "conn.close()",
                "conn.rollback()",
                "conn.commit()",
                "conn.flush()"
              ],
              "ans": 1,
              "explanation": "conn.rollback() undoes any partial SQL queries executed before the failure."
            },
            {
              "q": "Which library is the default connection pool in Spring Boot?",
              "opts": [
                "Apache DBCP2",
                "C3P0",
                "HikariCP",
                "Tomcat Pool"
              ],
              "ans": 2,
              "explanation": "HikariCP is bundled by default in Spring Boot due to its unmatched speed."
            },
            {
              "q": "What happens if a thread requests a connection from HikariCP when all pooled connections are active?",
              "opts": [
                "Throws OutOfMemoryError immediately",
                "Thread blocks waiting up to connectionTimeout duration before throwing SQLTimeoutException",
                "Creates unlimited extra connections",
                "Restarts database"
              ],
              "ans": 1,
              "explanation": "Pools throttle incoming requests by queuing threads up to connectionTimeout."
            },
            {
              "q": "Why must auto-commit be reset to true before returning a connection back to a connection pool?",
              "opts": [
                "To clear memory",
                "To ensure the next thread borrowing that pooled connection receives standard default behavior",
                "To commit pending logs",
                "To close TCP socket"
              ],
              "ans": 1,
              "explanation": "Pooled connections are shared; leaving auto-commit=false pollutes state for future borrowers."
            }
          ]
        },
        {
          "id": 5,
          "title": "Mini Project — Inventory System",
          "video": {
            "youtubeId": "7v2OnUti2eM",
            "title": "Mini Project — Inventory System - Tutorial",
            "channel": "Telusko",
            "duration": "1 hr",
            "description": "Hands-on implementation of an enterprise-grade Inventory Management System applying JDBC PreparedStatement, DAO architecture, transactions, and connection pooling."
          },
          "content": {
            "sections": [
              {
                "heading": "Project Architectural Overview",
                "text": "In this capstone topic of Week 4, you will construct a complete end-to-end console-based Inventory Management System backed by a MySQL database using JDBC and HikariCP.\n\nKey System Components:\n1. Schema Design: Normalized categories, products, and sales records.\n2. Connection Pool: HikariCP managing connection reuse.\n3. DAO Persistence Layer: ProductDAO and SaleDAO interfaces with JDBC implementations.\n4. Service Layer with Transaction Control: Atomic product sale processing (reducing stock and logging sale simultaneously)."
              },
              {
                "heading": "Database Relational Schema Design",
                "text": "• categories(category_id INT PRIMARY KEY AUTO_INCREMENT, category_name VARCHAR(100) UNIQUE)\n• products(product_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(150), price DOUBLE, stock_qty INT, category_id INT, FOREIGN KEY (category_id) REFERENCES categories(category_id))\n• sales_history(sale_id INT PRIMARY KEY AUTO_INCREMENT, product_id INT, qty_sold INT, total_revenue DOUBLE, sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
              },
              {
                "heading": "Production Code — Transactional Sale Service Layer",
                "code": "<span class=\"kw\">import</span> java.sql.*;\n\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">InventorySaleService</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">HikariDataSource</span> dataSource;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">InventorySaleService</span>(<span class=\"cls\">HikariDataSource</span> dataSource) {\n        this.dataSource = dataSource;\n    }\n\n    <span class=\"cmt\">// Atomic Sale Processing Workflow</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> executeProductSale(<span class=\"kw\">int</span> productId, <span class=\"kw\">int</span> quantitySold) {\n        <span class=\"cls\">String</span> checkStockSql = <span class=\"str\">\"SELECT name, price, stock_qty FROM products WHERE product_id = ? FOR UPDATE\"</span>;\n        <span class=\"cls\">String</span> deductStockSql = <span class=\"str\">\"UPDATE products SET stock_qty = stock_qty - ? WHERE product_id = ?\"</span>;\n        <span class=\"cls\">String</span> recordSaleSql = <span class=\"str\">\"INSERT INTO sales_history (product_id, qty_sold, total_revenue) VALUES (?, ?, ?)\"</span>;\n\n        <span class=\"kw\">try</span> (<span class=\"cls\">Connection</span> conn = dataSource.getConnection()) {\n            <span class=\"kw\">try</span> {\n                conn.setAutoCommit(<span class=\"kw\">false</span>); <span class=\"cmt\">// Begin transaction</span>\n\n                <span class=\"cmt\">// 1. Lock row and verify available inventory</span>\n                <span class=\"kw\">double</span> unitPrice = 0.0;\n                <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> checkStmt = conn.prepareStatement(checkStockSql)) {\n                    checkStmt.setInt(1, productId);\n                    <span class=\"kw\">try</span> (<span class=\"cls\">ResultSet</span> rs = checkStmt.executeQuery()) {\n                        <span class=\"kw\">if</span> (!rs.next()) <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">SQLException</span>(<span class=\"str\">\"Product ID not found: \"</span> + productId);\n                        <span class=\"kw\">int</span> currentStock = rs.getInt(<span class=\"str\">\"stock_qty\"</span>);\n                        unitPrice = rs.getDouble(<span class=\"str\">\"price\"</span>);\n                        <span class=\"kw\">if</span> (currentStock < quantitySold) {\n                            <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">SQLException</span>(<span class=\"str\">\"Insufficient stock! Available: \"</span> + currentStock);\n                        }\n                    }\n                }\n\n                <span class=\"cmt\">// 2. Deduct inventory quantity</span>\n                <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> deductStmt = conn.prepareStatement(deductStockSql)) {\n                    deductStmt.setInt(1, quantitySold);\n                    deductStmt.setInt(2, productId);\n                    deductStmt.executeUpdate();\n                }\n\n                <span class=\"cmt\">// 3. Record sale history audit</span>\n                <span class=\"kw\">double</span> totalRevenue = unitPrice * quantitySold;\n                <span class=\"kw\">try</span> (<span class=\"cls\">PreparedStatement</span> saleStmt = conn.prepareStatement(recordSaleSql)) {\n                    saleStmt.setInt(1, productId);\n                    saleStmt.setInt(2, quantitySold);\n                    saleStmt.setDouble(3, totalRevenue);\n                    saleStmt.executeUpdate();\n                }\n\n                conn.commit(); <span class=\"cmt\">// Success!</span>\n                <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Sale confirmed! Revenue: Rs. %.2f%n\"</span>, totalRevenue);\n                <span class=\"kw\">return</span> <span class=\"kw\">true</span>;\n\n            } <span class=\"kw\">catch</span> (<span class=\"cls\">SQLException</span> e) {\n                conn.rollback();\n                <span class=\"cls\">System</span>.err.println(<span class=\"str\">\"Sale transaction failed & rolled back: \"</span> + e.getMessage());\n                <span class=\"kw\">return</span> <span class=\"kw\">false</span>;\n            } <span class=\"kw\">finally</span> {\n                conn.setAutoCommit(<span class=\"kw\">true</span>);\n            }\n        } <span class=\"kw\">catch</span> (<span class=\"cls\">SQLException</span> e) {\n            e.printStackTrace();\n            <span class=\"kw\">return</span> <span class=\"kw\">false</span>;\n        }\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Concurrency Locking",
                "text": "• Use SELECT ... FOR UPDATE inside transactions when checking stock levels before modification. This places a row lock preventing concurrent threads from reading stale inventory quantities (race conditions).\n• Maintain clean Separation of Concerns: Main console menu interacts only with InventoryService, never directly invoking JDBC PreparedStatement."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is a race condition in inventory systems and how does SELECT ... FOR UPDATE solve it?\nA: If two customers simultaneously buy the last item in stock, both threads might query stock=1 before either updates it, resulting in stock=-1. SELECT ... FOR UPDATE locks the database row until the transaction commits, forcing the second thread to wait.\n\nQ: Why should foreign key constraints be defined between products and categories?\nA: To guarantee database integrity. You cannot insert a product referencing a non-existent category_id, nor can you accidentally delete a category that has active products linked to it."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Low Stock Alert Report",
              "instructions": "Extend the Inventory Management System.\n1. Add method getLowStockProducts(int thresholdQty) in ProductDAO.\n2. Execute PreparedStatement query: SELECT p.name, p.stock_qty, c.category_name FROM products p INNER JOIN categories c ON p.category_id = c.category_id WHERE p.stock_qty <= ? ORDER BY p.stock_qty ASC.\n3. Return List<ProductDTO> and print a formatted low-stock alert dashboard in console.",
              "hint": "Use INNER JOIN to display the readable category name rather than raw integer IDs."
            },
            "resources": [
              {
                "label": "MySQL Row Locking Guide",
                "url": "https://dev.mysql.com/doc/refman/8.0/en/innodb-locking-reads.html"
              },
              {
                "label": "GeeksforGeeks — Inventory Project with JDBC",
                "url": "https://www.geeksforgeeks.org/java/"
              }
            ]
          },
          "quiz": [
            {
              "q": "What SQL clause prevents concurrent race conditions when querying stock levels inside a transaction?",
              "opts": [
                "SELECT ... WITH LOCK",
                "SELECT ... FOR UPDATE",
                "SELECT ... NO CONCURRENCY",
                "SELECT ... STRICT"
              ],
              "ans": 1,
              "explanation": "FOR UPDATE places an exclusive row lock on matching records until transaction completion."
            },
            {
              "q": "In our multi-layer inventory architecture, which layer manages conn.setAutoCommit(false)?",
              "opts": [
                "Presentation Console Menu",
                "Business Service Layer (managing multi-step atomic operations)",
                "Model Entity class",
                "Database trigger"
              ],
              "ans": 1,
              "explanation": "The Business Service layer orchestrates atomic transactions spanning multiple DAO operations."
            },
            {
              "q": "Why is a FOREIGN KEY placed on products.category_id referencing categories.category_id?",
              "opts": [
                "To speed up insertions",
                "To enforce referential integrity preventing products from linking to non-existent categories",
                "To auto-increment prices",
                "To compress data"
              ],
              "ans": 1,
              "explanation": "Foreign keys prevent orphaned records and maintain structural database consistency."
            },
            {
              "q": "What happens if an exception occurs during the INSERT INTO sales_history statement in our sale workflow?",
              "opts": [
                "Product stock remains deducted",
                "conn.rollback() executes, restoring deducted product stock back to original levels",
                "Database crashes",
                "Logs empty record"
              ],
              "ans": 1,
              "explanation": "Atomicity guarantees that failure at any point rolls back prior stock deduction updates."
            },
            {
              "q": "Which object acts as the primary factory for borrowing pooled connections in our project?",
              "opts": [
                "DriverManager",
                "HikariDataSource",
                "StatementFactory",
                "ConnectionBuilder"
              ],
              "ans": 1,
              "explanation": "HikariDataSource manages connection pooling and provides getConnection()."
            },
            {
              "q": "How does using DTOs (Data Transfer Objects) benefit our low-stock reporting query?",
              "opts": [
                "Reduces network speed",
                "Packages joined query results (product name + category name) into clean objects without coupling to single database tables",
                "Eliminates constructors",
                "Auto-saves to disk"
              ],
              "ans": 1,
              "explanation": "DTOs transport customized query results across architectural layers."
            },
            {
              "q": "What is the consequence of omitting conn.setAutoCommit(true) in the finally block?",
              "opts": [
                "No issue occurs",
                "Subsequent threads borrowing that pooled connection inherit manual transaction state, causing unexpected commit failures",
                "Pool deletes connection",
                "Driver crashes"
              ],
              "ans": 1,
              "explanation": "Pooled connections must always be restored to clean default state before returning to pool."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "Which SQL clause filters individual rows BEFORE aggregate grouping happens?",
          "opts": [
            "HAVING",
            "WHERE",
            "GROUP BY",
            "ORDER BY"
          ],
          "ans": 1,
          "explanation": "WHERE filters raw rows prior to aggregation; HAVING filters groups after grouping."
        },
        {
          "q": "What does a LEFT JOIN guarantee in query results?",
          "opts": [
            "Returns only rows matching both tables",
            "Returns all rows from the left table regardless of whether a match exists in the right table",
            "Returns all right table rows",
            "Returns cross product"
          ],
          "ans": 1,
          "explanation": "LEFT JOIN preserves all left table records, filling missing right table columns with NULL."
        },
        {
          "q": "Why is PreparedStatement impervious to SQL injection attacks?",
          "opts": [
            "It encrypts strings in SHA-256",
            "It sends parameterized values separately from pre-compiled SQL structure, preventing user input from executing as commands",
            "It restricts input length",
            "It uses SSL connection"
          ],
          "ans": 1,
          "explanation": "Parameter placeholders (?) ensure user strings are treated strictly as data literals."
        },
        {
          "q": "What integer value does PreparedStatement.executeUpdate() return after deleting 4 records?",
          "opts": [
            "0",
            "1",
            "4 (number of rows affected)",
            "-1"
          ],
          "ans": 2,
          "explanation": "executeUpdate() returns exact row count affected by DML commands."
        },
        {
          "q": "What is the primary architectural benefit of Data Access Object (DAO) pattern?",
          "opts": [
            "Reduces bytecode size",
            "Isolates database persistence implementation from domain business logic, enabling easy database swapping or unit test mocking",
            "Compiles faster",
            "Prevents network lag"
          ],
          "ans": 1,
          "explanation": "DAO decouples data storage mechanics from service logic."
        },
        {
          "q": "Which ACID property ensures that once conn.commit() executes successfully, updates survive system power failures?",
          "opts": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
          ],
          "ans": 3,
          "explanation": "Durability guarantees committed transactions persist permanently in non-volatile storage."
        },
        {
          "q": "Why do enterprise systems prefer HikariCP connection pooling over raw DriverManager connections?",
          "opts": [
            "HikariCP avoids TCP socket connection handshake overhead by reusing an active pool of open database connections",
            "It compresses database files",
            "It eliminates SQL syntax errors",
            "It bypasses database authentication"
          ],
          "ans": 0,
          "explanation": "Connection pooling eliminates costly ~50-100ms socket setup delays."
        },
        {
          "q": "What happens when you execute conn.rollback() inside a JDBC catch block?",
          "opts": [
            "Closes connection",
            "Undoes all uncommitted SQL operations executed since setAutoCommit(false) was called",
            "Restarts MySQL server",
            "Deletes database table"
          ],
          "ans": 1,
          "explanation": "Rollback reverts database changes made during the current pending transaction block."
        },
        {
          "q": "Why should you execute SELECT ... FOR UPDATE when checking inventory levels prior to purchase?",
          "opts": [
            "To sort inventory",
            "To place an exclusive row lock preventing concurrent threads from reading or buying the same remaining stock simultaneously",
            "To speed up reads",
            "To bypass transactions"
          ],
          "ans": 1,
          "explanation": "FOR UPDATE prevents race conditions by locking rows until transaction ends."
        },
        {
          "q": "What is the initial position of a ResultSet cursor immediately after executeQuery() returns?",
          "opts": [
            "Row 1",
            "Row 0",
            "Positioned before the first data row (requires rs.next() call)",
            "Last row"
          ],
          "ans": 2,
          "explanation": "ResultSet starts before the first row; calling next() moves it to record 1."
        }
      ],
      "miniProject": {
        "title": "Week 4 Capstone Project — Enterprise Multi-Branch Inventory Management System",
        "description": "Construct a complete multi-tier console application managing multi-branch inventory with JDBC, HikariCP, DAO architecture, and ACID transactions.",
        "requirements": [
          "Create normalized database schema: warehouses(id, location), categories(id, name), products(id, name, price, category_id), and warehouse_stock(warehouse_id, product_id, quantity).",
          "Configure HikariCP connection pool factory reading credentials cleanly.",
          "Implement ProductDAO interface and ProductDAOJdbcImpl using PreparedStatement with try-with-resources.",
          "Implement WarehouseStockService containing method transferStock(int product, int fromWarehouse, int toWarehouse, int qty) executed inside an atomic transaction (conn.setAutoCommit(false)).",
          "In transferStock(), lock source stock row with SELECT ... FOR UPDATE, verify sufficient quantity, deduct from source warehouse, and add to destination warehouse.",
          "Implement aggregate reporting query in ProductDAO: SELECT c.name, COUNT(p.id) as item_count, AVG(p.price) as avg_price FROM categories c LEFT JOIN products p ON c.id=p.category_id GROUP BY c.name.",
          "Provide menu-driven Main console interface allowing administrators to view stock, transfer items between warehouses, and generate category valuation reports.",
          "Ensure all SQL exceptions are logged and transactions properly rolled back upon failure."
        ]
      }
    },
    {
      "id": 5,
      "title": "Spring Boot Basics",
      "topics": [
        {
          "id": 1,
          "title": "Spring Boot Setup & First REST Endpoint",
          "video": {
            "youtubeId": "9SGDpanrc8U",
            "title": "Spring Boot Setup & First REST Endpoint - Tutorial",
            "channel": "Amigoscode",
            "duration": "3 hr",
            "description": "Spring Boot architecture, auto-configuration magic, Spring Initializr setup, embedded Tomcat web server, application.properties, and building your first RESTful controller."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Why Spring Boot?",
                "text": "Legacy Spring Framework required tedious XML configuration and deploying web application archive (WAR) files to external application servers like standalone Tomcat. Spring Boot revolutionizes Java backend development by introducing:\n1. Auto-Configuration: Automatically configures beans based on JAR dependencies present on the classpath.\n2. Embedded Servers: Packages an embedded Apache Tomcat web server directly inside an executable JAR (run via java -jar app.jar).\n3. Starter POMs: Curated dependency bundles (e.g., spring-boot-starter-web) eliminating dependency version conflicts."
              },
              {
                "heading": "Anatomy of @SpringBootApplication & Application Properties",
                "text": "• @SpringBootApplication is a powerful composite annotation combining three core annotations:\n  1. @Configuration: Marks class as a source of bean definitions.\n  2. @EnableAutoConfiguration: Tells Spring Boot to guess and configure beans based on classpath settings.\n  3. @ComponentScan: Scans the current package and all sub-packages for Spring components (@Component, @Service, @Repository, @RestController).\n• application.properties (or YAML) manages runtime configuration like database URLs, server port (server.port=8080), and JPA settings."
              },
              {
                "heading": "Production Code — First REST Controller & Config",
                "code": "<span class=\"kw\">package</span> com.avron.internship;\n\n<span class=\"kw\">import</span> org.springframework.boot.<span class=\"cls\">SpringApplication</span>;\n<span class=\"kw\">import</span> org.springframework.boot.autoconfigure.<span class=\"cls\">SpringBootApplication</span>;\n<span class=\"kw\">import</span> org.springframework.web.bind.annotation.*;\n<span class=\"kw\">import</span> java.time.<span class=\"cls\">LocalDateTime</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">Map</span>;\n\n@<span class=\"cls\">SpringBootApplication</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">InternshipPortalApplication</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">static</span> <span class=\"kw\">void</span> main(<span class=\"cls\">String</span>[] args) {\n        <span class=\"cmt\">// Boostraps Spring IoC container and starts embedded Tomcat on port 8080</span>\n        <span class=\"cls\">SpringApplication</span>.run(<span class=\"cls\">InternshipPortalApplication</span>.<span class=\"kw\">class</span>, args);\n    }\n}\n\n<span class=\"cmt\">// REST Controller handling HTTP web requests</span>\n@<span class=\"cls\">RestController</span>\n@<span class=\"cls\">RequestMapping</span>(<span class=\"str\">\"/api/v1\"</span>)\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">HealthCheckController</span> {\n\n    @<span class=\"cls\">GetMapping</span>(<span class=\"str\">\"/welcome\"</span>)\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> welcomeMessage() {\n        <span class=\"kw\">return</span> <span class=\"str\">\"Welcome to avRoN Java Full Stack Internship API!\"</span>;\n    }\n\n    @<span class=\"cls\">GetMapping</span>(<span class=\"str\">\"/health\"</span>)\n    <span class=\"kw\">public</span> <span class=\"cls\">Map</span><<span class=\"cls\">String</span>, <span class=\"cls\">Object</span>> systemHealth() {\n        <span class=\"kw\">return</span> <span class=\"cls\">Map</span>.of(\n            <span class=\"str\">\"status\"</span>, <span class=\"str\">\"UP\"</span>,\n            <span class=\"str\">\"timestamp\"</span>, <span class=\"cls\">LocalDateTime</span>.now(),\n            <span class=\"str\">\"service\"</span>, <span class=\"str\">\"Internship Core API\"</span>,\n            <span class=\"str\">\"version\"</span>, <span class=\"str\">\"1.0.0-PROD\"</span>\n        );\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always place your main @SpringBootApplication class at the root package level (e.g., com.avron.app) so that sub-packages (com.avron.app.controller, com.avron.app.service) are automatically discovered by @ComponentScan.\n• Never commit sensitive environment passwords into application.properties; use Spring environment variable overriding: spring.datasource.password=${DB_PASSWORD}."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What does @RestController do compared to @Controller?\nA: @Controller marks a class as a Spring MVC controller that returns HTML view template names (Thymeleaf/JSP). @RestController is a convenience annotation combining @Controller and @ResponseBody, meaning every method return value is automatically serialized directly into HTTP response bodies (JSON/XML).\n\nQ: How does Spring Boot Auto-Configuration work under the hood?\nA: Spring Boot checks the classpath and conditional annotations (@ConditionalOnClass, @ConditionalOnMissingBean) declared inside spring-boot-autoconfigure JARs. If MySQL driver is on classpath and no custom DataSource bean exists, Spring Boot automatically creates a HikariCP DataSource bean.\n\nQ: How do you change the default Tomcat port 8080?\nA: Add server.port=9090 inside src/main/resources/application.properties."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build System Information API",
              "instructions": "Generate a Spring Boot project at start.spring.io with Spring Web starter.\n1. Create SystemInfoController annotated with @RestController at path /api/v1/system.\n2. Add @GetMapping(\"/info\") returning a Map containing OS name (System.getProperty(\"os.name\")), Java version, and available processor cores.\n3. Run using mvn spring-boot:run and verify response in Postman or browser at http://localhost:8080/api/v1/system/info.",
              "hint": "Use Runtime.getRuntime().availableProcessors() to retrieve CPU core count dynamically."
            },
            "resources": [
              {
                "label": "Spring Initializr Web Generator",
                "url": "https://start.spring.io/"
              },
              {
                "label": "Spring Boot Reference Documentation",
                "url": "https://docs.spring.io/spring-boot/docs/current/reference/html/"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which three annotations are combined inside @SpringBootApplication?",
              "opts": [
                "@Entity, @Table, @Id",
                "@Configuration, @EnableAutoConfiguration, @ComponentScan",
                "@Service, @Repository, @Controller",
                "@Bean, @Autowired, @Value"
              ],
              "ans": 1,
              "explanation": "@SpringBootApplication bundles Configuration, EnableAutoConfiguration, and ComponentScan."
            },
            {
              "q": "What web server is embedded by default in Spring Boot applications?",
              "opts": [
                "Jetty",
                "Undertow",
                "Apache Tomcat",
                "Nginx"
              ],
              "ans": 2,
              "explanation": "Spring Boot embeds Apache Tomcat on default port 8080."
            },
            {
              "q": "What distinguishes @RestController from @Controller?",
              "opts": [
                "@RestController runs faster",
                "@RestController combines @Controller + @ResponseBody, serializing return objects directly to JSON HTTP response bodies",
                "@Controller is only for databases",
                "No difference"
              ],
              "ans": 1,
              "explanation": "@RestController automatically marshals returned Java objects into JSON using Jackson."
            },
            {
              "q": "Why should the main @SpringBootApplication class reside at the root package?",
              "opts": [
                "To save compilation time",
                "Because @ComponentScan scans the current package and its sub-packages automatically",
                "Because Tomcat requires it",
                "To prevent memory leaks"
              ],
              "ans": 1,
              "explanation": "Root placement ensures controllers and services in child packages are discovered automatically."
            },
            {
              "q": "How do you override property settings using environment variables in application.properties?",
              "opts": [
                "spring.datasource.url=${DB_URL}",
                "spring.datasource.url=#DB_URL#",
                "spring.datasource.url={{DB_URL}}",
                "spring.datasource.url=ENV(DB_URL)"
              ],
              "ans": 0,
              "explanation": "Spring PropertySources placeholders use ${VARIABLE_NAME} syntax."
            },
            {
              "q": "What command runs a built Spring Boot executable JAR file from terminal?",
              "opts": [
                "spring run app.jar",
                "java -jar target/app.jar",
                "mvn jar:run",
                "tomcat start app.jar"
              ],
              "ans": 1,
              "explanation": "Spring Boot packages all dependencies into a fat JAR runnable via standard java -jar."
            },
            {
              "q": "Which Spring starter dependency includes Spring MVC, Jackson JSON, and embedded Tomcat?",
              "opts": [
                "spring-boot-starter-data-jpa",
                "spring-boot-starter-web",
                "spring-boot-starter-test",
                "spring-boot-starter-security"
              ],
              "ans": 1,
              "explanation": "spring-boot-starter-web bundles everything needed to build RESTful web APIs."
            }
          ]
        },
        {
          "id": 2,
          "title": "Dependency Injection & Spring Annotations",
          "video": {
            "youtubeId": "aX-bgylmprA",
            "title": "Dependency Injection & Spring Annotations - Tutorial",
            "channel": "Java Brains",
            "duration": "45 min",
            "description": "Inversion of Control (IoC) container, Spring Beans, @Component vs @Service vs @Repository, Constructor vs Field Injection, and lifecycle scopes."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Inversion of Control (IoC) & DI",
                "text": "In traditional Java, classes instantiate their own dependencies (e.g., StudentService creates new StudentRepositoryImpl()). This creates rigid, tightly coupled code that is nearly impossible to unit test in isolation.\n\nInversion of Control (IoC) transfers the responsibility of object instantiation and lifecycle management to the Spring IoC Container. Dependency Injection (DI) is the design pattern where the container injects required collaborating beans into classes at runtime."
              },
              {
                "heading": "Stereotype Annotations & Why Constructor Injection Wins",
                "text": "Spring provides specialized stereotype annotations to classify managed beans:\n• @Component: Generic Spring bean.\n• @Service: Encapsulates domain business logic.\n• @Repository: Encapsulates data access and enables automatic translation of DB exceptions into Spring DataAccessException.\n• @RestController: Exposes REST API endpoints.\n\nWhy Constructor Injection is superior to Field Injection (@Autowired on private fields):\n1. Immutability: Dependencies can be marked final.\n2. Null-Safety: Prevents instantiating an object in an invalid state without its dependencies.\n3. Testability: Allows pure unit testing by passing mock dependencies into constructors without needing Spring reflection."
              },
              {
                "heading": "Production Code — Clean 3-Layer Architecture with DI",
                "code": "<span class=\"kw\">package</span> com.avron.internship.service;\n\n<span class=\"kw\">import</span> org.springframework.stereotype.<span class=\"cls\">Service</span>;\n<span class=\"kw\">import</span> org.springframework.beans.factory.annotation.<span class=\"cls\">Autowired</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">List</span>;\n\n<span class=\"cmt\">// 1. Repository Layer (Mock interface)</span>\n<span class=\"kw\">interface</span> <span class=\"cls\">StudentRepository</span> {\n    <span class=\"cls\">List</span><<span class=\"cls\">String</span>> fetchAllStudentNames();\n}\n\n@org.springframework.stereotype.<span class=\"cls\">Repository</span>\n<span class=\"kw\">class</span> <span class=\"cls\">StudentRepositoryImpl</span> <span class=\"kw\">implements</span> <span class=\"cls\">StudentRepository</span> {\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">List</span><<span class=\"cls\">String</span>> fetchAllStudentNames() {\n        <span class=\"kw\">return</span> <span class=\"cls\">List</span>.of(<span class=\"str\">\"Arjun Sharma\"</span>, <span class=\"str\">\"Priya Patel\"</span>, <span class=\"str\">\"Ravi Kumar\"</span>);\n    }\n}\n\n<span class=\"cmt\">// 2. Business Service Layer with Constructor Injection</span>\n@<span class=\"cls\">Service</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">StudentEnrollmentService</span> {\n\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">StudentRepository</span> repository; <span class=\"cmt\">// Marked final for immutability!</span>\n\n    <span class=\"cmt\">// Constructor Injection (Autowired is optional in Spring 4.3+ for single constructor)</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">StudentEnrollmentService</span>(<span class=\"cls\">StudentRepository</span> repository) {\n        this.repository = repository;\n    }\n\n    <span class=\"kw\">public</span> <span class=\"cls\">List</span><<span class=\"cls\">String</span>> getActiveEnrollees() {\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Executing enrollment eligibility verification...\"</span>);\n        <span class=\"kw\">return</span> repository.fetchAllStudentNames();\n    }\n}\n\n<span class=\"cmt\">// 3. Controller Layer</span>\n@org.springframework.web.bind.annotation.<span class=\"cls\">RestController</span>\n@org.springframework.web.bind.annotation.<span class=\"cls\">RequestMapping</span>(<span class=\"str\">\"/api/v1/enrollments\"</span>)\n<span class=\"kw\">class</span> <span class=\"cls\">EnrollmentController</span> {\n\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">StudentEnrollmentService</span> enrollmentService;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">EnrollmentController</span>(<span class=\"cls\">StudentEnrollmentService</span> enrollmentService) {\n        this.enrollmentService = enrollmentService;\n    }\n\n    @org.springframework.web.bind.annotation.<span class=\"cls\">GetMapping</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">List</span><<span class=\"cls\">String</span>> listEnrollees() {\n        <span class=\"kw\">return</span> enrollmentService.getActiveEnrollees();\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Never use field injection (@Autowired private MyService svc;). SonarQube and enterprise code reviews flag field injection as a major code quality violation.\n• Understand Bean Scopes: Spring beans are Singleton by default (one shared instance per IoC container). Never store request-specific user state inside class fields of Singleton beans due to multi-threaded race conditions."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between @Service, @Component, and @Repository?\nA: Functionally, all three register a class as a Spring bean. However, @Repository adds automatic persistence exception translation (converting low-level SQL errors into Spring DataAccessException), and @Service clearly denotes domain business layer semantics.\n\nQ: What is the default scope of a Spring Bean?\nA: Singleton scope. Spring creates exactly one shared instance per ApplicationContext container. Other scopes include Prototype (new instance created every time requested), Request, and Session.\n\nQ: Why is @Autowired optional on constructors in modern Spring?\nA: Since Spring 4.3, if a class defines only a single constructor, Spring automatically assumes it should use constructor injection and resolves parameters from the IoC container without requiring @Autowired."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Notification Service Layering",
              "instructions": "Create a decoupled notification architecture.\n1. Create interface NotificationSender with send(String recipient, String msg).\n2. Create class EmailNotificationSender annotated with @Service implementing NotificationSender.\n3. Create NotificationService annotated with @Service that injects NotificationSender via constructor injection and logs dispatch.\n4. Create NotificationController exposing POST /api/v1/notify triggering the service.",
              "hint": "If you add multiple implementations of NotificationSender later, use @Qualifier(\"emailNotificationSender\") to resolve injection ambiguity."
            },
            "resources": [
              {
                "label": "Spring Core IoC Documentation",
                "url": "https://docs.spring.io/spring-framework/reference/core/beans.html"
              },
              {
                "label": "Baeldung — Constructor Injection vs Field Injection",
                "url": "https://www.baeldung.com/java-spring-field-injection-cons"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the primary benefit of Inversion of Control (IoC)?",
              "opts": [
                "Speeds up network requests",
                "Decouples object creation from business logic, making applications modular and easily unit testable",
                "Eliminates database tables",
                "Reduces JAR file size"
              ],
              "ans": 1,
              "explanation": "IoC delegates lifecycle management to the container, decoupling classes."
            },
            {
              "q": "Why is Constructor Injection preferred over Field Injection (@Autowired on fields)?",
              "opts": [
                "It compiles faster",
                "Allows declaring dependencies as final (immutable), guarantees non-null initialization, and simplifies pure unit testing",
                "It works with static methods",
                "It reduces line count"
              ],
              "ans": 1,
              "explanation": "Constructor injection enforces complete dependencies upon object creation."
            },
            {
              "q": "What specialized behavior does @Repository add beyond registering a bean?",
              "opts": [
                "Auto-creates database tables",
                "Translates native database exceptions (like SQLException) into Spring data access exceptions",
                "Encrypts SQL connections",
                "Enables HTTPS"
              ],
              "ans": 1,
              "explanation": "@Repository intercepts persistence exceptions and wraps them in clean runtime DataAccessExceptions."
            },
            {
              "q": "What is the default lifecycle scope of a Spring Bean?",
              "opts": [
                "Prototype (new instance per call)",
                "Request (new instance per HTTP request)",
                "Singleton (one shared instance per ApplicationContext)",
                "Session"
              ],
              "ans": 2,
              "explanation": "Spring manages beans as singletons by default across the IoC container."
            },
            {
              "q": "Why must you avoid storing user-specific mutable state inside fields of a @Service bean?",
              "opts": [
                "It causes compiler errors",
                "Because @Service beans are singletons shared across all concurrent HTTP threads, causing race conditions and cross-user data corruption",
                "It slows down JVM",
                "Database locks up"
              ],
              "ans": 1,
              "explanation": "Singleton beans are multi-threaded; instance variables are shared across all concurrent users."
            },
            {
              "q": "If a bean class has only one constructor, is @Autowired required in Spring 4.3+?",
              "opts": [
                "Yes, always",
                "No, Spring automatically injects constructor parameters if only one constructor exists",
                "Only for interfaces",
                "Only in @Controller classes"
              ],
              "ans": 1,
              "explanation": "Spring 4.3 implicitly injects single constructors without explicit annotations."
            },
            {
              "q": "How do you resolve injection ambiguity when two beans implement the same interface?",
              "opts": [
                "Use @Primary or @Qualifier(\"beanName\")",
                "Rename interface",
                "Delete one class",
                "Throw exception"
              ],
              "ans": 0,
              "explanation": "@Primary specifies a default, or @Qualifier explicitly names the desired bean implementation."
            }
          ]
        },
        {
          "id": 3,
          "title": "Spring Data JPA — Entities & Repositories",
          "video": {
            "youtubeId": "8SGI_XS5OPw",
            "title": "Spring Data JPA — Entities & Repositories - Tutorial",
            "channel": "Amigoscode",
            "duration": "1 hr 30 min",
            "description": "JPA (Java Persistence API), Hibernate ORM, @Entity mapping, primary key strategies, Spring Data JpaRepository, derived query methods, and JPQL."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — ORM & Spring Data JPA",
                "text": "Object-Relational Mapping (ORM) bridges the paradigm mismatch between object-oriented Java classes and relational database tables. JPA (Java Persistence API) defines the standard specification, and Hibernate is its most popular implementation.\n\nSpring Data JPA sits above JPA/Hibernate, eliminating boilerplate DAO code entirely. By extending JpaRepository<Entity, IdType>, Spring automatically generates high-performance SQL implementations at runtime for standard CRUD operations (save, findById, findAll, deleteById)."
              },
              {
                "heading": "Entity Mapping & Derived Query Methods",
                "text": "• @Entity + @Table(name=\"students\") maps a class to a database table.\n• @Id + @GeneratedValue(strategy = GenerationType.IDENTITY) maps the primary key to database auto-increment columns.\n• Derived Query Methods: Spring Data JPA parses method names inside repository interfaces and generates optimal SQL automatically!\n  - findByEmail(String email) -> SELECT * FROM students WHERE email = ?\n  - findByGpaGreaterThanEqual(Double gpa) -> SELECT * FROM students WHERE gpa >= ?"
              },
              {
                "heading": "Production Code — JPA Entity & Custom JPQL Repository",
                "code": "<span class=\"kw\">package</span> com.avron.internship.model;\n\n<span class=\"kw\">import</span> jakarta.persistence.*;\n<span class=\"kw\">import</span> java.time.<span class=\"cls\">LocalDateTime</span>;\n<span class=\"kw\">import</span> org.hibernate.annotations.<span class=\"cls\">CreationTimestamp</span>;\n\n@<span class=\"cls\">Entity</span>\n@<span class=\"cls\">Table</span>(name = <span class=\"str\">\"interns\"</span>, indexes = @<span class=\"cls\">Index</span>(name = <span class=\"str\">\"idx_intern_email\"</span>, columnList = <span class=\"str\">\"email\"</span>, unique = <span class=\"kw\">true</span>))\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">Intern</span> {\n\n    @<span class=\"cls\">Id</span>\n    @<span class=\"cls\">GeneratedValue</span>(strategy = <span class=\"cls\">GenerationType</span>.<span class=\"cls\">IDENTITY</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">Long</span> id;\n\n    @<span class=\"cls\">Column</span>(nullable = <span class=\"kw\">false</span>, length = 120)\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> fullName;\n\n    @<span class=\"cls\">Column</span>(unique = <span class=\"kw\">true</span>, nullable = <span class=\"kw\">false</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> email;\n\n    <span class=\"kw\">private</span> <span class=\"cls\">Double</span> gpa;\n\n    @<span class=\"cls\">CreationTimestamp</span>\n    @<span class=\"cls\">Column</span>(updatable = <span class=\"kw\">false</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">LocalDateTime</span> enrolledAt;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">Intern</span>() {} <span class=\"cmt\">// Required JPA no-arg constructor</span>\n\n    <span class=\"kw\">public</span> <span class=\"cls\">Intern</span>(<span class=\"cls\">String</span> fullName, <span class=\"cls\">String</span> email, <span class=\"cls\">Double</span> gpa) {\n        this.fullName = fullName; this.email = email; this.gpa = gpa;\n    }\n    <span class=\"cmt\">// Getters and Setters omitted for brevity</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">Long</span> getId() { <span class=\"kw\">return</span> id; }\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> getFullName() { <span class=\"kw\">return</span> fullName; }\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> getEmail() { <span class=\"kw\">return</span> email; }\n    <span class=\"kw\">public</span> <span class=\"cls\">Double</span> getGpa() { <span class=\"kw\">return</span> gpa; }\n}\n\n<span class=\"cmt\">// Spring Data Repository Interface</span>\n<span class=\"kw\">package</span> com.avron.internship.repository;\n\n<span class=\"kw\">import</span> org.springframework.data.jpa.repository.*;\n<span class=\"kw\">import</span> org.springframework.data.repository.query.<span class=\"cls\">Param</span>;\n<span class=\"kw\">import</span> org.springframework.stereotype.<span class=\"cls\">Repository</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">List</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">Optional</span>;\n\n@<span class=\"cls\">Repository</span>\n<span class=\"kw\">public</span> <span class=\"kw\">interface</span> <span class=\"cls\">InternRepository</span> <span class=\"kw\">extends</span> <span class=\"cls\">JpaRepository</span><<span class=\"cls\">Intern</span>, <span class=\"cls\">Long</span>> {\n\n    <span class=\"cmt\">// Derived Query Methods generated automatically by Spring Data</span>\n    <span class=\"cls\">Optional</span><<span class=\"cls\">Intern</span>> findByEmail(<span class=\"cls\">String</span> email);\n    <span class=\"cls\">List</span><<span class=\"cls\">Intern</span>> findByGpaGreaterThanOrderByGpaDesc(<span class=\"cls\">Double</span> minGpa);\n    <span class=\"kw\">boolean</span> existsByEmail(<span class=\"cls\">String</span> email);\n\n    <span class=\"cmt\">// Custom JPQL (Java Persistence Query Language) querying Entity classes not tables</span>\n    @<span class=\"cls\">Query</span>(<span class=\"str\">\"SELECT i FROM Intern i WHERE i.gpa >= :threshold AND i.fullName LIKE %:keyword%\"</span>)\n    <span class=\"cls\">List</span><<span class=\"cls\">Intern</span>> searchTopScholars(@<span class=\"cls\">Param</span>(<span class=\"str\">\"threshold\"</span>) <span class=\"cls\">Double</span> threshold, @<span class=\"cls\">Param</span>(<span class=\"str\">\"keyword\"</span>) <span class=\"cls\">String</span> keyword);\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Use spring.jpa.hibernate.ddl-auto=validate in production environments. Never use update or create-drop in production as they can lock tables or drop mission-critical production columns.\n• Beware of the N+1 Query Problem when loading entity relationships (@OneToMany). Use @Query(\"SELECT e FROM Employee e JOIN FETCH e.department\") or EntityGraphs to fetch related entities in a single SQL JOIN."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between GenerationType.IDENTITY and GenerationType.SEQUENCE?\nA: GenerationType.IDENTITY relies on database auto-increment columns (like MySQL AUTO_INCREMENT), meaning Hibernate cannot batch insert statements because it needs the ID returned immediately after each insert. GenerationType.SEQUENCE uses database sequences (PostgreSQL/Oracle), allowing high-speed JDBC batch inserts.\n\nQ: What is the difference between JPQL and native SQL queries?\nA: JPQL queries operate against JPA Entity class names and property fields (SELECT s FROM Student s WHERE s.gpa > 8.0), making them database-agnostic. Native queries operate directly against raw database table names and columns.\n\nQ: Why does JPA require every entity to have a default no-arg constructor?\nA: JPA/Hibernate uses Java Reflection (Class.newInstance()) to instantiate entity objects when mapping result sets from database queries before populating field values."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Course Catalog Repository",
              "instructions": "Create a JPA repository pipeline for University Courses.\n1. Create Course entity with fields: id (Long identity), title (String), creditHours (int), and tuitionFee (Double).\n2. Create CourseRepository interface extending JpaRepository<Course, Long>.\n3. Add derived query method: List<Course> findByCreditHoursAndTuitionFeeLessThan(int credits, Double maxFee).\n4. Write custom JPQL @Query to find average tuition fee across all courses.",
              "hint": "In JPQL aggregate queries: @Query(\"SELECT AVG(c.tuitionFee) FROM Course c\")"
            },
            "resources": [
              {
                "label": "Spring Data JPA Reference",
                "url": "https://docs.spring.io/spring-data/jpa/reference/jpa.html"
              },
              {
                "label": "Baeldung — Spring Data JPA Query Methods",
                "url": "https://www.baeldung.com/spring-data-derived-queries"
              }
            ]
          },
          "quiz": [
            {
              "q": "What does extending JpaRepository<Student, Long> provide automatically at runtime?",
              "opts": [
                "Generates HTML UI",
                "Free implementation of standard CRUD methods (save, findById, findAll, delete) and pagination",
                "Configures Tomcat port",
                "Creates backup files"
              ],
              "ans": 1,
              "explanation": "Spring Data generates proxy implementations of JpaRepository at runtime."
            },
            {
              "q": "How does Spring Data JPA generate SQL for findByEmail(String email)?",
              "opts": [
                "Requires manual SQL file",
                "Parses the method name according to naming conventions and compiles optimal SELECT queries automatically",
                "Calls MySQL REST API",
                "Searches in memory only"
              ],
              "ans": 1,
              "explanation": "Derived query method parser breaks down method prefixes and properties into SQL clauses."
            },
            {
              "q": "Why must every @Entity class define a no-arg constructor?",
              "opts": [
                "For JSON serialization only",
                "Because Hibernate uses Java Reflection to instantiate entity instances when mapping SQL results",
                "Because Java requires it",
                "To set IDs to zero"
              ],
              "ans": 1,
              "explanation": "Reflection requires a no-arg constructor to allocate object memory before populating fields."
            },
            {
              "q": "What distinguishes JPQL (@Query(\"SELECT s FROM Student s...\")) from raw SQL?",
              "opts": [
                "JPQL runs faster",
                "JPQL queries target Java Entity class names and fields rather than raw database table columns, making queries database-independent",
                "JPQL does not support WHERE clauses",
                "No difference"
              ],
              "ans": 1,
              "explanation": "JPQL is object-oriented query language translated by Hibernate into dialect-specific SQL."
            },
            {
              "q": "What is the recommended setting for spring.jpa.hibernate.ddl-auto in production?",
              "opts": [
                "update",
                "create-drop",
                "validate or none",
                "truncate"
              ],
              "ans": 2,
              "explanation": "In production, database migrations should be managed via Flyway/Liquibase; JPA should only validate schema."
            },
            {
              "q": "Which GenerationType strategy uses database auto-increment columns like MySQL AUTO_INCREMENT?",
              "opts": [
                "GenerationType.TABLE",
                "GenerationType.SEQUENCE",
                "GenerationType.IDENTITY",
                "GenerationType.AUTO"
              ],
              "ans": 2,
              "explanation": "IDENTITY delegates primary key generation to the database upon INSERT execution."
            },
            {
              "q": "What is the N+1 query problem in ORM relationships?",
              "opts": [
                "Executing 1 extra loop",
                "Executing 1 SQL query to load parent records, plus N additional SQL queries to load child relationships one by one",
                "Database index failure",
                "Id auto-increment bug"
              ],
              "ans": 1,
              "explanation": "N+1 happens when lazy relationships are accessed inside loops; fix using JOIN FETCH."
            }
          ]
        },
        {
          "id": 4,
          "title": "REST Controllers — Request/Response Handling",
          "video": {
            "youtubeId": "vtPkZShrvXQ",
            "title": "REST Controllers — Request/Response Handling - Tutorial",
            "channel": "Amigoscode",
            "duration": "2 hr",
            "description": "RESTful CRUD architecture, @PathVariable, @RequestParam, @RequestBody with DTOs, ResponseEntity status codes (200, 201, 204, 404), and global exception handling."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — REST Architecture & Data Extraction",
                "text": "REpresentational State Transfer (REST) architectural style communicates resource manipulations over HTTP.\n\nExtracting Inputs in Spring MVC:\n1. @PathVariable: Extracts parameters from URL paths (/api/v1/students/{id}).\n2. @RequestParam: Extracts query string filters (/api/v1/students?dept=CSE&page=0).\n3. @RequestBody: Instructs Jackson JSON deserializer to parse incoming HTTP JSON request bodies into Java DTO objects."
              },
              {
                "heading": "Why DTOs & ResponseEntity Status Codes",
                "text": "Never expose JPA Entity objects directly as request/response bodies in REST APIs! Entities contain database implementation details and recursive bidirectional relationships causing JSON infinite recursion (StackOverflowError).\n\nUse Data Transfer Objects (DTOs or Java Records) to decouple API contracts from database schema.\nAlways return explicit ResponseEntity<T> controlling HTTP status codes:\n• 200 OK: Successful retrieval or update.\n• 201 Created: Successful POST creation (include Location header pointing to new resource).\n• 204 No Content: Successful DELETE operation.\n• 400 Bad Request / 404 Not Found."
              },
              {
                "heading": "Production Code — Production REST Controller & DTOs",
                "code": "<span class=\"kw\">package</span> com.avron.internship.controller;\n\n<span class=\"kw\">import</span> org.springframework.http.*;\n<span class=\"kw\">import</span> org.springframework.web.bind.annotation.*;\n<span class=\"kw\">import</span> java.net.<span class=\"cls\">URI</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">List</span>;\n\n<span class=\"cmt\">// 1. Immutable DTOs using Java Records</span>\n<span class=\"kw\">record</span> <span class=\"cls\">CreateStudentReq</span>(<span class=\"cls\">String</span> name, <span class=\"cls\">String</span> email, <span class=\"cls\">Double</span> gpa) {}\n<span class=\"kw\">record</span> <span class=\"cls\">StudentRes</span>(<span class=\"cls\">Long</span> id, <span class=\"cls\">String</span> name, <span class=\"cls\">String</span> email, <span class=\"cls\">Double</span> gpa) {}\n\n@<span class=\"cls\">RestController</span>\n@<span class=\"cls\">RequestMapping</span>(<span class=\"str\">\"/api/v1/students\"</span>)\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">StudentRestController</span> {\n\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">StudentService</span> service;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">StudentRestController</span>(<span class=\"cls\">StudentService</span> service) {\n        this.service = service;\n    }\n\n    <span class=\"cmt\">// GET all students with optional query parameter filter</span>\n    @<span class=\"cls\">GetMapping</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">ResponseEntity</span><<span class=\"cls\">List</span><<span class=\"cls\">StudentRes</span>>> getStudents(\n            @<span class=\"cls\">RequestParam</span>(required = <span class=\"kw\">false</span>, defaultValue = <span class=\"str\">\"ALL\"</span>) <span class=\"cls\">String</span> dept) {\n        <span class=\"kw\">return</span> <span class=\"cls\">ResponseEntity</span>.ok(service.findAllStudents(dept));\n    }\n\n    <span class=\"cmt\">// GET single student by ID path variable</span>\n    @<span class=\"cls\">GetMapping</span>(<span class=\"str\">\"/{id}\"</span>)\n    <span class=\"kw\">public</span> <span class=\"cls\">ResponseEntity</span><<span class=\"cls\">StudentRes</span>> getStudentById(@<span class=\"cls\">PathVariable</span> <span class=\"cls\">Long</span> id) {\n        <span class=\"kw\">return</span> <span class=\"cls\">ResponseEntity</span>.ok(service.findStudentById(id));\n    }\n\n    <span class=\"cmt\">// POST create student returning 201 Created with Location header</span>\n    @<span class=\"cls\">PostMapping</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">ResponseEntity</span><<span class=\"cls\">StudentRes</span>> createStudent(@<span class=\"cls\">RequestBody</span> <span class=\"cls\">CreateStudentReq</span> req) {\n        <span class=\"cls\">StudentRes</span> created = service.registerStudent(req);\n        <span class=\"cls\">URI</span> location = <span class=\"cls\">URI</span>.create(<span class=\"str\">\"/api/v1/students/\"</span> + created.id());\n        <span class=\"kw\">return</span> <span class=\"cls\">ResponseEntity</span>.created(location).body(created);\n    }\n\n    <span class=\"cmt\">// PUT update existing student</span>\n    @<span class=\"cls\">PutMapping</span>(<span class=\"str\">\"/{id}\"</span>)\n    <span class=\"kw\">public</span> <span class=\"cls\">ResponseEntity</span><<span class=\"cls\">StudentRes</span>> updateStudent(@<span class=\"cls\">PathVariable</span> <span class=\"cls\">Long</span> id, @<span class=\"cls\">RequestBody</span> <span class=\"cls\">CreateStudentReq</span> req) {\n        <span class=\"kw\">return</span> <span class=\"cls\">ResponseEntity</span>.ok(service.updateStudent(id, req));\n    }\n\n    <span class=\"cmt\">// DELETE student returning 204 No Content</span>\n    @<span class=\"cls\">DeleteMapping</span>(<span class=\"str\">\"/{id}\"</span>)\n    <span class=\"kw\">public</span> <span class=\"cls\">ResponseEntity</span><<span class=\"cls\">Void</span>> deleteStudent(@<span class=\"cls\">PathVariable</span> <span class=\"cls\">Long</span> id) {\n        service.removeStudent(id);\n        <span class=\"kw\">return</span> <span class=\"cls\">ResponseEntity</span>.noContent().build();\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Pluralize resource path nouns (/api/v1/students, never /api/v1/getStudent or /api/v1/createStudent). HTTP verbs (GET, POST) define the action.\n• Handle exceptions centrally using @RestControllerAdvice rather than cluttering controllers with try-catch blocks."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why shouldn't you return JPA @Entity objects directly from @RestController endpoints?\nA: 1) Exposes sensitive database fields (like password hashes). 2) Causes infinite JSON recursion if bidirectional relationships (@OneToMany) exist. 3) Coupling API response format to database table schema prevents independent refactoring.\n\nQ: What is the difference between HTTP PUT and PATCH?\nA: PUT completely replaces the target resource representation with the payload provided. PATCH applies partial modifications (updating only specified fields while leaving others untouched).\n\nQ: How does Spring convert Java objects to JSON automatically?\nA: Spring Boot bundles Jackson ObjectMapperHttpMessageConverter by default. When a controller method returns an object, Spring delegates to Jackson to serialize field properties into JSON."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Project Task API",
              "instructions": "Create REST API for managing internship projects.\n1. Create DTO records: TaskCreateReq(String title, String assignee) and TaskRes(Long id, String title, String status).\n2. Create TaskController exposing:\n   • POST /api/v1/tasks returning 201 Created.\n   • GET /api/v1/tasks/{id} using @PathVariable.\n   • DELETE /api/v1/tasks/{id} returning 204 No Content.\n3. Test all response status codes in Postman.",
              "hint": "For 204 No Content: return ResponseEntity.noContent().build();"
            },
            "resources": [
              {
                "label": "Spring MVC REST Documentation",
                "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
              },
              {
                "label": "Baeldung — Spring ResponseEntity Guide",
                "url": "https://www.baeldung.com/spring-response-entity"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which annotation extracts variable values embedded directly inside URL paths like /users/{id}?",
              "opts": [
                "@RequestParam",
                "@PathVariable",
                "@RequestBody",
                "@RequestHeader"
              ],
              "ans": 1,
              "explanation": "@PathVariable binds URI template variables into controller method parameters."
            },
            {
              "q": "What HTTP status code represents resource creation success upon a POST request?",
              "opts": [
                "200 OK",
                "201 Created",
                "204 No Content",
                "202 Accepted"
              ],
              "ans": 1,
              "explanation": "201 Created is the standard status code indicating a new resource was created."
            },
            {
              "q": "Why should you use DTOs instead of direct JPA Entities in REST responses?",
              "opts": [
                "DTOs compile faster",
                "Prevents exposing database structure, avoids infinite JSON recursion on relationships, and decouples API contracts",
                "Entities cannot be returned",
                "Spring forbids entity returns"
              ],
              "ans": 1,
              "explanation": "DTOs establish secure, stable API boundaries decoupled from SQL schema."
            },
            {
              "q": "Which HTTP status code should be returned after a successful DELETE operation that returns no response body?",
              "opts": [
                "200 OK",
                "201 Created",
                "204 No Content",
                "404 Not Found"
              ],
              "ans": 2,
              "explanation": "204 No Content confirms successful processing without returning payload content."
            },
            {
              "q": "Which annotation instructs Spring to deserialize incoming HTTP JSON bodies into Java objects?",
              "opts": [
                "@ResponseBody",
                "@RequestBody",
                "@ModelAttribute",
                "@JsonParse"
              ],
              "ans": 1,
              "explanation": "@RequestBody delegates HTTP body JSON parsing to Jackson ObjectMapper."
            },
            {
              "q": "What is the standard RESTful URI convention for listing all student resources?",
              "opts": [
                "GET /api/v1/getStudents",
                "POST /api/v1/students/list",
                "GET /api/v1/students",
                "GET /api/v1/student"
              ],
              "ans": 2,
              "explanation": "REST endpoints use plural nouns representing resource collections."
            },
            {
              "q": "What library does Spring Boot use by default to marshal Java objects to JSON?",
              "opts": [
                "Gson",
                "Jackson ObjectMapper",
                "JSON-B",
                "Moshi"
              ],
              "ans": 1,
              "explanation": "FasterXML Jackson is auto-configured inside spring-boot-starter-web."
            }
          ]
        },
        {
          "id": 5,
          "title": "Pagination, Sorting & Validation",
          "video": {
            "youtubeId": "cF0Im4D1jIQ",
            "title": "Pagination, Sorting & Validation - Tutorial",
            "channel": "Daily Code Buffer",
            "duration": "50 min",
            "description": "Spring Data Pageable and Page responses, Bean Validation (@NotBlank, @Email, @Min), and @RestControllerAdvice global error handlers."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Pagination & Bean Validation",
                "text": "When a database table contains millions of records, querying findAll() crushes JVM heap memory and crashes browsers. Spring Data provides Pageable and Page<T> to query database chunks efficiently (LIMIT and OFFSET in SQL).\n\nBean Validation (JSR-380 Hibernate Validator): Instead of writing tedious if-else checks in controllers, annotate DTO fields with validation constraints (@NotBlank, @Email, @Min, @Size). Trigger validation by placing @Valid before @RequestBody."
              },
              {
                "heading": "Global Error Handling with @RestControllerAdvice",
                "text": "When validation fails or custom exceptions occur, Spring should return standardized JSON error responses instead of ugly HTML stack traces. @RestControllerAdvice intercepts exceptions thrown across all controllers globally and formats clean error responses."
              },
              {
                "heading": "Production Code — Paginated API & Global Exception Advice",
                "code": "<span class=\"kw\">package</span> com.avron.internship.controller;\n\n<span class=\"kw\">import</span> jakarta.validation.<span class=\"cls\">Valid</span>;\n<span class=\"kw\">import</span> jakarta.validation.constraints.*;\n<span class=\"kw\">import</span> org.springframework.data.domain.*;\n<span class=\"kw\">import</span> org.springframework.http.*;\n<span class=\"kw\">import</span> org.springframework.web.bind.<span class=\"cls\">MethodArgumentNotValidException</span>;\n<span class=\"kw\">import</span> org.springframework.web.bind.annotation.*;\n<span class=\"kw\">import</span> java.time.<span class=\"cls\">LocalDateTime</span>;\n<span class=\"kw\">import</span> java.util.*;\n<span class=\"kw\">import</span> java.util.stream.<span class=\"cls\">Collectors</span>;\n\n<span class=\"cmt\">// 1. Validated DTO</span>\n<span class=\"kw\">record</span> <span class=\"cls\">RegisterInternReq</span>(\n    @<span class=\"cls\">NotBlank</span>(message = <span class=\"str\">\"Full name is required\"</span>)\n    @<span class=\"cls\">Size</span>(min = 2, max = 100, message = <span class=\"str\">\"Name must be 2-100 characters\"</span>)\n    <span class=\"cls\">String</span> fullName,\n\n    @<span class=\"cls\">NotBlank</span>(message = <span class=\"str\">\"Email required\"</span>)\n    @<span class=\"cls\">Email</span>(message = <span class=\"str\">\"Invalid email structure\"</span>)\n    <span class=\"cls\">String</span> email,\n\n    @<span class=\"cls\">NotNull</span> @<span class=\"cls\">Min</span>(0) @<span class=\"cls\">Max</span>(10) <span class=\"cls\">Double</span> gpa\n) {}\n\n<span class=\"cmt\">// 2. Paginated Controller Endpoint</span>\n@<span class=\"cls\">RestController</span>\n@<span class=\"cls\">RequestMapping</span>(<span class=\"str\">\"/api/v1/interns\"</span>)\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">InternController</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">InternRepository</span> repository;\n    <span class=\"kw\">public</span> <span class=\"cls\">InternController</span>(<span class=\"cls\">InternRepository</span> repo) { this.repository = repo; }\n\n    <span class=\"cmt\">// GET /api/v1/interns?page=0&size=10&sortBy=gpa</span>\n    @<span class=\"cls\">GetMapping</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">ResponseEntity</span><<span class=\"cls\">Page</span><<span class=\"cls\">Intern</span>>> getPaginatedInterns(\n            @<span class=\"cls\">RequestParam</span>(defaultValue = <span class=\"str\">\"0\"</span>) <span class=\"kw\">int</span> page,\n            @<span class=\"cls\">RequestParam</span>(defaultValue = <span class=\"str\">\"10\"</span>) <span class=\"kw\">int</span> size,\n            @<span class=\"cls\">RequestParam</span>(defaultValue = <span class=\"str\">\"id\"</span>) <span class=\"cls\">String</span> sortBy) {\n        \n        <span class=\"cls\">Pageable</span> pageable = <span class=\"cls\">PageRequest</span>.of(page, size, <span class=\"cls\">Sort</span>.by(<span class=\"cls\">Sort</span>.<span class=\"cls\">Direction</span>.<span class=\"cls\">DESC</span>, sortBy));\n        <span class=\"cls\">Page</span><<span class=\"cls\">Intern</span>> resultPage = repository.findAll(pageable);\n        <span class=\"kw\">return</span> <span class=\"cls\">ResponseEntity</span>.ok(resultPage);\n    }\n}\n\n<span class=\"cmt\">// 3. Global Exception Handler Advice</span>\n@<span class=\"cls\">RestControllerAdvice</span>\n<span class=\"kw\">class</span> <span class=\"cls\">GlobalExceptionHandler</span> {\n\n    @<span class=\"cls\">ExceptionHandler</span>(<span class=\"cls\">MethodArgumentNotValidException</span>.<span class=\"kw\">class</span>)\n    <span class=\"kw\">public</span> <span class=\"cls\">ResponseEntity</span><<span class=\"cls\">Map</span><<span class=\"cls\">String</span>, <span class=\"cls\">Object</span>>> handleValidationErrors(<span class=\"cls\">MethodArgumentNotValidException</span> ex) {\n        <span class=\"cls\">Map</span><<span class=\"cls\">String</span>, <span class=\"cls\">String</span>> fieldErrors = ex.getBindingResult().getFieldErrors().stream()\n            .collect(<span class=\"cls\">Collectors</span>.toMap(\n                fe -> fe.getField(),\n                fe -> fe.getDefaultMessage() != <span class=\"kw\">null</span> ? fe.getDefaultMessage() : <span class=\"str\">\"Invalid\"</span>\n            ));\n\n        <span class=\"cls\">Map</span><<span class=\"cls\">String</span>, <span class=\"cls\">Object</span>> response = <span class=\"cls\">Map</span>.of(\n            <span class=\"str\">\"timestamp\"</span>, <span class=\"cls\">LocalDateTime</span>.now(),\n            <span class=\"str\">\"status\"</span>, 400,\n            <span class=\"str\">\"error\"</span>, <span class=\"str\">\"Bad Request - Validation Failed\"</span>,\n            <span class=\"str\">\"details\"</span>, fieldErrors\n        );\n        <span class=\"kw\">return</span> <span class=\"cls\">ResponseEntity</span>.status(<span class=\"cls\">HttpStatus</span>.BAD_REQUEST).body(response);\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Remember that Spring Data Page numbers are 0-indexed (page=0 is the first page of results).\n• Always validate incoming payloads at the Controller boundary using @Valid. Never allow dirty or unvalidated data to penetrate deeper into Service or Repository layers."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between @NotNull, @NotEmpty, and @NotBlank?\nA: @NotNull verifies value != null. @NotEmpty verifies value != null && value.length() > 0. @NotBlank verifies value != null && !value.trim().isEmpty() (rejects whitespace-only strings like \"   \"). Always use @NotBlank for text inputs.\n\nQ: What SQL clause does Spring Data PageRequest generate under the hood?\nA: In MySQL/PostgreSQL, PageRequest.of(page, size) generates SELECT * FROM table ORDER BY col LIMIT size OFFSET (page * size).\n\nQ: How does @RestControllerAdvice work?\nA: It uses Spring AOP (Aspect Oriented Programming) to wrap controller execution inside proxy interceptors, catching exceptions thrown by any controller method and executing @ExceptionHandler methods."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Paginated & Validated Course API",
              "instructions": "Create endpoint GET /api/v1/courses with pagination.\n1. Accept page, size, and sortBy query parameters.\n2. Create CourseCreateDTO annotated with @NotBlank title and @Min(1) creditHours.\n3. Add POST /api/v1/courses with @Valid and test submitting invalid empty titles in Postman to observe 400 Bad Request validation details.",
              "hint": "PageRequest.of(page, size, Sort.by(sortBy)) creates the Pageable argument for repo.findAll()."
            },
            "resources": [
              {
                "label": "Spring Data Pagination Guide",
                "url": "https://docs.spring.io/spring-data/commons/docs/current/reference/html/#core.web"
              },
              {
                "label": "Baeldung — Spring Boot Validation",
                "url": "https://www.baeldung.com/spring-boot-bean-validation"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the index of the first page when requesting paginated results via PageRequest.of(page, size)?",
              "opts": [
                "Page 1",
                "Page 0 (zero-indexed)",
                "Page -1",
                "Configurable only"
              ],
              "ans": 1,
              "explanation": "Spring Data pagination index starts strictly at zero."
            },
            {
              "q": "Which validation annotation strictly rejects null values, empty strings, and whitespace-only strings?",
              "opts": [
                "@NotNull",
                "@NotEmpty",
                "@NotBlank",
                "@Required"
              ],
              "ans": 2,
              "explanation": "@NotBlank trims whitespace before verifying length > 0."
            },
            {
              "q": "What annotation must precede @RequestBody in a controller method to trigger DTO Bean Validation?",
              "opts": [
                "@Verify",
                "@Valid or @Validated",
                "@Check",
                "@Trigger"
              ],
              "ans": 1,
              "explanation": "@Valid activates JSR-380 validation constraints defined on the DTO."
            },
            {
              "q": "What Spring exception is thrown when @Valid request payload validation fails?",
              "opts": [
                "IllegalArgumentException",
                "MethodArgumentNotValidException",
                "ValidationFailedException",
                "ConstraintViolationException"
              ],
              "ans": 1,
              "explanation": "Spring MVC throws MethodArgumentNotValidException containing all BindingResult field errors."
            },
            {
              "q": "What mechanism does @RestControllerAdvice use to intercept controller exceptions globally?",
              "opts": [
                "JVM bytecode alteration",
                "Spring AOP (Aspect-Oriented Programming) proxy interception",
                "Servlet Filters only",
                "Database triggers"
              ],
              "ans": 1,
              "explanation": "@RestControllerAdvice acts as an AOP cross-cutting advice intercepting exceptions."
            },
            {
              "q": "What information does a Spring Data Page<T> response object include alongside content items?",
              "opts": [
                "Database username",
                "Total pages, total elements count, current page number, and hasNext/hasPrevious boolean flags",
                "Raw SQL query",
                "Execution time"
              ],
              "ans": 1,
              "explanation": "Page<T> packages complete pagination metadata alongside list chunks."
            },
            {
              "q": "Which SQL clause is generated by PageRequest.of(2, 10) in MySQL?",
              "opts": [
                "TOP 10",
                "LIMIT 10 OFFSET 20",
                "ROWNUM <= 30",
                "SKIP 20 TAKE 10"
              ],
              "ans": 1,
              "explanation": "Page index 2 with size 10 skips the first 20 rows (page * size = 2 * 10 = 20)."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "What core innovation allows Spring Boot applications to execute via java -jar without external Tomcat installation?",
          "opts": [
            "XML configuration",
            "Embedded Apache Tomcat web server packaged inside the executable fat JAR",
            "Cloud native drivers",
            "Compiled native C code"
          ],
          "ans": 1,
          "explanation": "Spring Boot packages Tomcat directly inside runnable archives."
        },
        {
          "q": "Why is Constructor Injection universally recommended over Field Injection (@Autowired on private fields)?",
          "opts": [
            "It reduces bytecode size",
            "Enables declaring dependencies as final (immutable), prevents null instantiation, and allows pure unit testing with mocks",
            "Tomcat requires it",
            "Faster startup time"
          ],
          "ans": 1,
          "explanation": "Constructor injection guarantees object integrity upon instantiation."
        },
        {
          "q": "What does @Repository add beyond registering a class as a Spring bean?",
          "opts": [
            "Auto-generates SQL tables",
            "Automatically intercepts low-level database exceptions and translates them into Spring DataAccessException hierarchy",
            "Encrypts DB traffic",
            "Enables transactions"
          ],
          "ans": 1,
          "explanation": "@Repository translates native JDBC exceptions into standardized Spring exceptions."
        },
        {
          "q": "How does extending JpaRepository<Student, Long> eliminate boilerplate persistence code?",
          "opts": [
            "Generates HTML forms",
            "Spring Data generates dynamic proxy implementations at runtime for standard CRUD and derived query methods",
            "Creates backup files",
            "Compiles faster"
          ],
          "ans": 1,
          "explanation": "Dynamic proxy creation implements repository interfaces automatically."
        },
        {
          "q": "Why should REST API endpoints return DTO records rather than direct JPA Entity classes?",
          "opts": [
            "DTOs run faster",
            "Prevents exposing database structure, avoids JSON bidirectional recursion loops, and decouples API contracts",
            "Entities cannot be serialized",
            "Spring requires DTOs"
          ],
          "ans": 1,
          "explanation": "DTOs establish clean architectural decoupling between web APIs and database schema."
        },
        {
          "q": "Which HTTP status code should be returned after successfully creating a resource via POST?",
          "opts": [
            "200 OK",
            "201 Created (with Location header)",
            "204 No Content",
            "202 Accepted"
          ],
          "ans": 1,
          "explanation": "201 Created is the international HTTP standard for newly created resources."
        },
        {
          "q": "What is the 0-indexed page offset calculation for PageRequest.of(3, 20)?",
          "opts": [
            "LIMIT 20 OFFSET 60",
            "LIMIT 3 OFFSET 20",
            "LIMIT 20 OFFSET 40",
            "LIMIT 60 OFFSET 20"
          ],
          "ans": 0,
          "explanation": "Page index 3 * size 20 = OFFSET 60 (skipping pages 0, 1, 2)."
        },
        {
          "q": "Which validation annotation rejects empty strings and strings containing only whitespace characters?",
          "opts": [
            "@NotNull",
            "@NotEmpty",
            "@NotBlank",
            "@Trimmed"
          ],
          "ans": 2,
          "explanation": "@NotBlank trims input before validating length > 0."
        },
        {
          "q": "What is the architectural role of @RestControllerAdvice?",
          "opts": [
            "Logs database queries",
            "Intercepts exceptions thrown across all controllers globally to return standardized JSON error responses",
            "Secures endpoints",
            "Manages session cookies"
          ],
          "ans": 1,
          "explanation": "Global exception handler advice unifies error response structures across the entire API."
        },
        {
          "q": "What happens if two Spring beans implement the same interface and you inject them without @Qualifier?",
          "opts": [
            "Spring injects both",
            "NoUniqueBeanDefinitionException is thrown at application startup",
            "Spring picks the first one alphabetically",
            "Defaults to null"
          ],
          "ans": 1,
          "explanation": "Spring IoC fails fast on ambiguity unless @Primary or @Qualifier resolves it."
        }
      ],
      "miniProject": {
        "title": "Week 5 Capstone Project — Enterprise Internship Management REST API",
        "description": "Design and implement a complete, production-grade Spring Boot 3 RESTful API managing internship enrollments with validation, pagination, JPA repositories, and global error handling.",
        "requirements": [
          "Initialize Spring Boot 3 application with Web, JPA, Validation, and MySQL driver dependencies.",
          "Create JPA Entities: Department(id, name, code) and Intern(id, fullName, email, gpa, department) with @ManyToOne relationship.",
          "Implement JpaRepository interfaces with derived query: findByDepartmentCode(String code, Pageable pageable).",
          "Design Java Record DTOs: InternCreateReq (annotated with @NotBlank, @Email, @Min/Max GPA) and InternResponseDTO.",
          "Implement InternService using constructor injection, performing business validation (prevent duplicate emails).",
          "Expose REST endpoints in InternController: GET /api/v1/interns (paginated/sorted), GET /api/v1/interns/{id}, POST /api/v1/interns (returning 201 Created with Location header), and DELETE /api/v1/interns/{id} (returning 204 No Content).",
          "Implement GlobalExceptionHandler (@RestControllerAdvice) catching MethodArgumentNotValidException and custom ResourceNotFoundException, returning structured JSON error payloads.",
          "Test complete API workflow in Postman verifying all HTTP status codes (200, 201, 204, 400, 404)."
        ]
      }
    },
    {
      "id": 6,
      "title": "Spring Security & JWT",
      "topics": [
        {
          "id": 1,
          "title": "Spring Security Setup & Configuration",
          "video": {
            "youtubeId": "b9O9NI-RJ3c",
            "title": "Spring Security Setup & Configuration - Tutorial",
            "channel": "Amigoscode",
            "duration": "2 hr",
            "description": "Spring Security 6 architecture, SecurityFilterChain bean, BCrypt one-way password encoding, stateless session management, and HTTP security filter chains."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Security Architecture & Filter Chain",
                "text": "When you add spring-boot-starter-security to your project, Spring Security registers a filter chain (DelegatingFilterProxy -> FilterChainProxy -> SecurityFilterChain) intercepting every HTTP request before it reaches DispatcherServlet and your REST controllers.\n\nBy default, Spring Security secures ALL endpoints with HTTP Basic Authentication and generates a random UUID password. In modern REST APIs, we customize the SecurityFilterChain bean to disable CSRF (since REST APIs use stateless tokens rather than browser session cookies) and set session management to STATELESS."
              },
              {
                "heading": "BCrypt Password Hashing & Authentication Architecture",
                "text": "Never store passwords in plain text! If your database is breached, user passwords are compromised.\n• BCryptPasswordEncoder implements an adaptive one-way hashing function incorporating random salt and a configurable work factor (log rounds). Even if two users choose the password \"Secret123\", their BCrypt hashes will look completely different in the database.\n• AuthenticationManager orchestrates login authentication by delegating to AuthenticationProvider, which uses UserDetailsService and PasswordEncoder to verify user credentials."
              },
              {
                "heading": "Production Code — SecurityFilterChain Configuration",
                "code": "<span class=\"kw\">package</span> com.avron.internship.security;\n\n<span class=\"kw\">import</span> org.springframework.context.annotation.*;\n<span class=\"kw\">import</span> org.springframework.security.authentication.<span class=\"cls\">AuthenticationManager</span>;\n<span class=\"kw\">import</span> org.springframework.security.config.annotation.authentication.configuration.<span class=\"cls\">AuthenticationConfiguration</span>;\n<span class=\"kw\">import</span> org.springframework.security.config.annotation.web.builders.<span class=\"cls\">HttpSecurity</span>;\n<span class=\"kw\">import</span> org.springframework.security.config.annotation.web.configuration.<span class=\"cls\">EnableWebSecurity</span>;\n<span class=\"kw\">import</span> org.springframework.security.config.http.<span class=\"cls\">SessionCreationPolicy</span>;\n<span class=\"kw\">import</span> org.springframework.security.crypto.bcrypt.<span class=\"cls\">BCryptPasswordEncoder</span>;\n<span class=\"kw\">import</span> org.springframework.security.crypto.password.<span class=\"cls\">PasswordEncoder</span>;\n<span class=\"kw\">import</span> org.springframework.security.web.<span class=\"cls\">SecurityFilterChain</span>;\n<span class=\"kw\">import</span> org.springframework.security.web.authentication.<span class=\"cls\">UsernamePasswordAuthenticationFilter</span>;\n\n@<span class=\"cls\">Configuration</span>\n@<span class=\"cls\">EnableWebSecurity</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">SecurityConfiguration</span> {\n\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">JwtAuthenticationFilter</span> jwtAuthFilter;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">SecurityConfiguration</span>(<span class=\"cls\">JwtAuthenticationFilter</span> jwtAuthFilter) {\n        this.jwtAuthFilter = jwtAuthFilter;\n    }\n\n    @<span class=\"cls\">Bean</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">SecurityFilterChain</span> securityFilterChain(<span class=\"cls\">HttpSecurity</span> http) <span class=\"kw\">throws</span> <span class=\"cls\">Exception</span> {\n        http\n            <span class=\"cmt\">// 1. Disable CSRF (Cross-Site Request Forgery) for stateless REST APIs</span>\n            .csrf(csrf -> csrf.disable())\n            <span class=\"cmt\">// 2. Configure endpoint access authorizations</span>\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(<span class=\"str\">\"/api/v1/auth/**\"</span>, <span class=\"str\">\"/api/v1/public/**\"</span>).permitAll()\n                .requestMatchers(<span class=\"str\">\"/api/v1/admin/**\"</span>).hasRole(<span class=\"str\">\"ADMIN\"</span>)\n                .anyRequest().authenticated()\n            )\n            <span class=\"cmt\">// 3. Enforce STATELESS session policy (no HTTP session created in memory)</span>\n            .sessionManagement(sess -> sess.sessionCreationPolicy(<span class=\"cls\">SessionCreationPolicy</span>.<span class=\"cls\">STATELESS</span>))\n            <span class=\"cmt\">// 4. Register custom JWT filter before Spring's standard login authentication filter</span>\n            .addFilterBefore(jwtAuthFilter, <span class=\"cls\">UsernamePasswordAuthenticationFilter</span>.<span class=\"kw\">class</span>);\n\n        <span class=\"kw\">return</span> http.build();\n    }\n\n    @<span class=\"cls\">Bean</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">PasswordEncoder</span> passwordEncoder() {\n        <span class=\"kw\">return</span> <span class=\"kw\">new</span> <span class=\"cls\">BCryptPasswordEncoder</span>(12); <span class=\"cmt\">// Strength 12 work factor</span>\n    }\n\n    @<span class=\"cls\">Bean</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">AuthenticationManager</span> authenticationManager(<span class=\"cls\">AuthenticationConfiguration</span> config) <span class=\"kw\">throws</span> <span class=\"cls\">Exception</span> {\n        <span class=\"kw\">return</span> config.getAuthenticationManager();\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Never use MD5 or SHA-256 for password hashing; fast general-purpose hashes can be cracked in seconds via GPU rainbow tables. Always use adaptive algorithms like BCrypt, Argon2, or PBKDF2.\n• In Spring Security 6+, WebSecurityConfigurerAdapter is deprecated and removed. Always configure security via component beans returning SecurityFilterChain."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why do we disable CSRF protection in REST APIs?\nA: CSRF attacks trick authenticated browser users into executing unwanted actions via session cookies. Since REST APIs are stateless and authenticate via Authorization headers (Bearer tokens) rather than cookies, CSRF protection is unnecessary.\n\nQ: What is SessionCreationPolicy.STATELESS?\nA: It instructs Spring Security never to create an HttpSession or store user authentication details in server memory across requests. Every incoming request must carry valid credentials (JWT token).\n\nQ: How does BCrypt verify a password during login if it is one-way hashing?\nA: BCrypt extracts the random salt and work factor stored in the existing database hash string, hashes the plaintext login attempt using that exact same salt, and compares the resulting hash strings."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Secure Public vs Private Endpoints",
              "instructions": "Create a Spring Security 6 project.\n1. Define two REST endpoints: GET /api/v1/public/ping (should return \"Public OK\") and GET /api/v1/secure/data (should return \"Secret Data\").\n2. Configure SecurityFilterChain bean to permitAll() on /api/v1/public/** and require authentication on any other request.\n3. Configure InMemoryUserDetailsManager with user \"admin\" and BCrypt password \"password\". Verify in Postman that /public/ping succeeds without auth while /secure/data requires HTTP Basic Auth.",
              "hint": "Use User.withUsername(\"admin\").password(passwordEncoder().encode(\"password\")).roles(\"USER\").build();"
            },
            "resources": [
              {
                "label": "Spring Security 6 Architecture",
                "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
              },
              {
                "label": "Baeldung — Spring Security Filter Chain",
                "url": "https://www.baeldung.com/spring-security-upgrading-to-6"
              }
            ]
          },
          "quiz": [
            {
              "q": "In Spring Security 6+, which bean replaces the deprecated WebSecurityConfigurerAdapter?",
              "opts": [
                "SecurityManager",
                "SecurityFilterChain",
                "WebSecurityConfig",
                "AuthenticationChain"
              ],
              "ans": 1,
              "explanation": "Component-based configuration via SecurityFilterChain bean is the standard in Spring Security 6."
            },
            {
              "q": "Why is CSRF protection typically disabled in stateless REST APIs?",
              "opts": [
                "It slows down network speed",
                "REST APIs authenticate via Authorization header tokens rather than browser session cookies, making them immune to CSRF",
                "Spring Security does not support CSRF",
                "It conflicts with JSON"
              ],
              "ans": 1,
              "explanation": "CSRF exploits automatic cookie sending; stateless token authentication does not rely on cookies."
            },
            {
              "q": "What makes BCrypt superior to standard SHA-256 for hashing user passwords?",
              "opts": [
                "BCrypt produces shorter strings",
                "BCrypt incorporates random salt and an adjustable work factor that intentionally slows down GPU brute-force attacks",
                "BCrypt can be decrypted by admins",
                "BCrypt runs on client browser"
              ],
              "ans": 1,
              "explanation": "Adaptive slow hashing prevents rapid rainbow table cracking."
            },
            {
              "q": "What does SessionCreationPolicy.STATELESS guarantee?",
              "opts": [
                "No database queries are run",
                "The server stores no user session in memory; every incoming request must carry self-contained authentication credentials",
                "Tokens never expire",
                "SSL is disabled"
              ],
              "ans": 1,
              "explanation": "Stateless architecture scales horizontally because servers do not maintain local session state."
            },
            {
              "q": "Which object orchestrates the authentication verification workflow in Spring Security?",
              "opts": [
                "SecurityDispatcher",
                "AuthenticationManager",
                "PasswordValidator",
                "TokenFilter"
              ],
              "ans": 1,
              "explanation": "AuthenticationManager coordinates AuthenticationProviders to validate user credentials."
            },
            {
              "q": "Where should your custom JwtAuthenticationFilter be inserted inside the SecurityFilterChain?",
              "opts": [
                "After DispatcherServlet",
                "Before UsernamePasswordAuthenticationFilter",
                "At the very end of all filters",
                "Inside application.properties"
              ],
              "ans": 1,
              "explanation": "Inserting before UsernamePasswordAuthenticationFilter allows JWT validation prior to standard auth handling."
            },
            {
              "q": "What annotation marks a configuration class that enables Spring Security web support?",
              "opts": [
                "@EnableSecurity",
                "@EnableWebSecurity",
                "@SecureApp",
                "@SpringSecurity"
              ],
              "ans": 1,
              "explanation": "@EnableWebSecurity activates Spring Security's web configuration capabilities."
            }
          ]
        },
        {
          "id": 2,
          "title": "JWT — JSON Web Token Authentication",
          "video": {
            "youtubeId": "65Yj4unzOiI",
            "title": "JWT — JSON Web Token Authentication - Tutorial",
            "channel": "Amigoscode",
            "duration": "2 hr",
            "description": "Anatomy of a JSON Web Token (Header, Payload, Signature), generating HMAC-SHA256 tokens using io.jsonwebtoken, building custom JwtAuthenticationFilter, and token verification."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Stateless Token Anatomy",
                "text": "JSON Web Token (JWT, RFC 7519) is a compact, URL-safe standard for transmitting verified claims between parties. Unlike stateful session IDs where the server queries database/redis on every request, JWT is self-contained.\n\nStructure (Base64Url encoded, dot-separated header.payload.signature):\n1. Header: Specifies token type (JWT) and cryptographic signing algorithm (HS256 or RS256).\n2. Payload (Claims): Contains user data (sub: username, roles, iat: issued time, exp: expiration timestamp).\n3. Signature: Cryptographic hash created by signing (Base64Header + \".\" + Base64Payload) using the server's secret key. If an attacker tampers with payload claims, the signature verification fails immediately."
              },
              {
                "heading": "Custom JwtAuthenticationFilter Architecture",
                "text": "To intercept incoming requests:\n1. Extend OncePerRequestFilter ensuring the filter executes exactly once per HTTP request.\n2. Extract Authorization header: if present and starts with \"Bearer \", substring(7) extracts the token string.\n3. Validate Token: Check signature and expiration.\n4. Set SecurityContext: Create UsernamePasswordAuthenticationToken and place it into SecurityContextHolder.getContext().setAuthentication(auth)."
              },
              {
                "heading": "Production Code — JwtService & Authentication Filter",
                "code": "<span class=\"kw\">package</span> com.avron.internship.security;\n\n<span class=\"kw\">import</span> io.jsonwebtoken.*;\n<span class=\"kw\">import</span> io.jsonwebtoken.io.<span class=\"cls\">Decoders</span>;\n<span class=\"kw\">import</span> io.jsonwebtoken.security.<span class=\"cls\">Keys</span>;\n<span class=\"kw\">import</span> jakarta.servlet.<span class=\"cls\">FilterChain</span>;\n<span class=\"kw\">import</span> jakarta.servlet.<span class=\"cls\">ServletException</span>;\n<span class=\"kw\">import</span> jakarta.servlet.http.<span class=\"cls\">HttpServletRequest</span>;\n<span class=\"kw\">import</span> jakarta.servlet.http.<span class=\"cls\">HttpServletResponse</span>;\n<span class=\"kw\">import</span> org.springframework.beans.factory.annotation.<span class=\"cls\">Value</span>;\n<span class=\"kw\">import</span> org.springframework.security.authentication.<span class=\"cls\">UsernamePasswordAuthenticationToken</span>;\n<span class=\"kw\">import</span> org.springframework.security.core.context.<span class=\"cls\">SecurityContextHolder</span>;\n<span class=\"kw\">import</span> org.springframework.security.core.userdetails.*;\n<span class=\"kw\">import</span> org.springframework.security.web.authentication.<span class=\"cls\">WebAuthenticationDetailsSource</span>;\n<span class=\"kw\">import</span> org.springframework.stereotype.*;\n<span class=\"kw\">import</span> org.springframework.web.filter.<span class=\"cls\">OncePerRequestFilter</span>;\n<span class=\"kw\">import</span> java.io.<span class=\"cls\">IOException</span>;\n<span class=\"kw\">import</span> java.security.<span class=\"cls\">Key</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">Date</span>;\n\n@<span class=\"cls\">Service</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">JwtService</span> {\n    @<span class=\"cls\">Value</span>(<span class=\"str\">\"${application.security.jwt.secret-key}\"</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> secretKey;\n    @<span class=\"cls\">Value</span>(<span class=\"str\">\"${application.security.jwt.expiration:86400000}\"</span>)\n    <span class=\"kw\">private</span> <span class=\"kw\">long</span> jwtExpiration;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> generateToken(<span class=\"cls\">UserDetails</span> userDetails) {\n        <span class=\"kw\">return</span> <span class=\"cls\">Jwts</span>.builder()\n            .setSubject(userDetails.getUsername())\n            .setIssuedAt(<span class=\"kw\">new</span> <span class=\"cls\">Date</span>(<span class=\"cls\">System</span>.currentTimeMillis()))\n            .setExpiration(<span class=\"kw\">new</span> <span class=\"cls\">Date</span>(<span class=\"cls\">System</span>.currentTimeMillis() + jwtExpiration))\n            .signWith(getSignInKey(), <span class=\"cls\">SignatureAlgorithm</span>.<span class=\"cls\">HS256</span>)\n            .compact();\n    }\n\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> extractUsername(<span class=\"cls\">String</span> token) {\n        <span class=\"kw\">return</span> extractAllClaims(token).getSubject();\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> isTokenValid(<span class=\"cls\">String</span> token, <span class=\"cls\">UserDetails</span> userDetails) {\n        <span class=\"kw\">final</span> <span class=\"cls\">String</span> username = extractUsername(token);\n        <span class=\"kw\">return</span> (username.equals(userDetails.getUsername())) && !isTokenExpired(token);\n    }\n\n    <span class=\"kw\">private</span> <span class=\"kw\">boolean</span> isTokenExpired(<span class=\"cls\">String</span> token) {\n        <span class=\"kw\">return</span> extractAllClaims(token).getExpiration().before(<span class=\"kw\">new</span> <span class=\"cls\">Date</span>());\n    }\n\n    <span class=\"kw\">private</span> <span class=\"cls\">Claims</span> extractAllClaims(<span class=\"cls\">String</span> token) {\n        <span class=\"kw\">return</span> <span class=\"cls\">Jwts</span>.parserBuilder()\n            .setSigningKey(getSignInKey()).build()\n            .parseClaimsJws(token).getBody();\n    }\n\n    <span class=\"kw\">private</span> <span class=\"cls\">Key</span> getSignInKey() {\n        <span class=\"kw\">byte</span>[] keyBytes = <span class=\"cls\">Decoders</span>.<span class=\"cls\">BASE64</span>.decode(secretKey);\n        <span class=\"kw\">return</span> <span class=\"cls\">Keys</span>.hmacShaKeyFor(keyBytes);\n    }\n}\n\n@<span class=\"cls\">Component</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">JwtAuthenticationFilter</span> <span class=\"kw\">extends</span> <span class=\"cls\">OncePerRequestFilter</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">JwtService</span> jwtService;\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">UserDetailsService</span> userDetailsService;\n\n    <span class=\"kw\">public</span> <span class=\"cls\">JwtAuthenticationFilter</span>(<span class=\"cls\">JwtService</span> jwtService, <span class=\"cls\">UserDetailsService</span> userDetailsService) {\n        this.jwtService = jwtService; this.userDetailsService = userDetailsService;\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">protected</span> <span class=\"kw\">void</span> doFilterInternal(<span class=\"cls\">HttpServletRequest</span> request, <span class=\"cls\">HttpServletResponse</span> response, <span class=\"cls\">FilterChain</span> chain)\n            <span class=\"kw\">throws</span> <span class=\"cls\">ServletException</span>, <span class=\"cls\">IOException</span> {\n        <span class=\"kw\">final</span> <span class=\"cls\">String</span> authHeader = request.getHeader(<span class=\"str\">\"Authorization\"</span>);\n        <span class=\"kw\">if</span> (authHeader == <span class=\"kw\">null</span> || !authHeader.startsWith(<span class=\"str\">\"Bearer \"</span>)) {\n            chain.doFilter(request, response);\n            <span class=\"kw\">return</span>;\n        }\n        <span class=\"kw\">final</span> <span class=\"cls\">String</span> jwt = authHeader.substring(7);\n        <span class=\"kw\">final</span> <span class=\"cls\">String</span> userEmail = jwtService.extractUsername(jwt);\n        <span class=\"kw\">if</span> (userEmail != <span class=\"kw\">null</span> && <span class=\"cls\">SecurityContextHolder</span>.getContext().getAuthentication() == <span class=\"kw\">null</span>) {\n            <span class=\"cls\">UserDetails</span> userDetails = this.userDetailsService.loadUserByUsername(userEmail);\n            <span class=\"kw\">if</span> (jwtService.isTokenValid(jwt, userDetails)) {\n                <span class=\"kw\">var</span> authToken = <span class=\"kw\">new</span> <span class=\"cls\">UsernamePasswordAuthenticationToken</span>(userDetails, <span class=\"kw\">null</span>, userDetails.getAuthorities());\n                authToken.setDetails(<span class=\"kw\">new</span> <span class=\"cls\">WebAuthenticationDetailsSource</span>().buildDetails(request));\n                <span class=\"cls\">SecurityContextHolder</span>.getContext().setAuthentication(authToken);\n            }\n        }\n        chain.doFilter(request, response);\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Keep access token lifespans short (15-30 minutes). Use Refresh Tokens (stored in HTTP-only secure cookies) to obtain new access tokens cleanly without forcing user re-login.\n• Ensure secret keys are at least 256 bits (32 characters) long when using HMAC-SHA256 (HS256), otherwise io.jsonwebtoken will throw weak signing key exceptions."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Can sensitive data like credit card numbers be stored inside a JWT payload?\nA: Absolutely NOT! JWT payloads are merely Base64Url encoded, NOT encrypted. Anyone intercepting the token can decode the Base64 string and read the claims. Only store non-sensitive identifiers (user ID, roles, email).\n\nQ: How do you invalidate a JWT access token before its expiration time if a user logs out?\nA: Since JWTs are stateless and verified by signature alone, servers cannot easily invalidate them. Common industry solutions: 1) Short expiration times. 2) Maintain a Redis token deny-list (blacklist) checked during filtering. 3) Rotate user token version sequences in the database.\n\nQ: Why must JwtAuthenticationFilter extend OncePerRequestFilter?\nA: Standard servlet filters might be invoked multiple times during a single HTTP request dispatch (e.g., internal forwards or error dispatching). OncePerRequestFilter guarantees single execution."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Implement Auth Login Endpoint",
              "instructions": "Integrate JwtService into an authentication controller.\n1. Create DTO records: LoginRequest(String email, String password) and AuthResponse(String token).\n2. Create AuthController with POST /api/v1/auth/login.\n3. In AuthController, call authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password)).\n4. If successful, load UserDetails, call jwtService.generateToken(user), and return AuthResponse containing the JWT.",
              "hint": "If credentials do not match, authenticationManager.authenticate() throws BadCredentialsException."
            },
            "resources": [
              {
                "label": "JWT Official Standard & Debugger",
                "url": "https://jwt.io/"
              },
              {
                "label": "Baeldung — Spring Boot JWT Authentication",
                "url": "https://www.baeldung.com/spring-security-oauth-jwt"
              }
            ]
          },
          "quiz": [
            {
              "q": "What are the three dot-separated components of a JSON Web Token string?",
              "opts": [
                "Username.Password.Role",
                "Header.Payload.Signature",
                "Algorithm.Claims.Encryption",
                "Key.Salt.Hash"
              ],
              "ans": 1,
              "explanation": "JWT format consists of Base64Url header, payload claims, and cryptographic signature."
            },
            {
              "q": "What happens if a malicious client modifies user claims inside a JWT payload?",
              "opts": [
                "Nothing, the token still works",
                "The cryptographic signature verification fails on the server, rejecting the token immediately",
                "The server updates the user role",
                "The server decrypts the token"
              ],
              "ans": 1,
              "explanation": "Signature is calculated over exact header + payload string; tampering breaks signature matching."
            },
            {
              "q": "What prefix is mandated by RFC 6750 for transmitting JWTs inside HTTP Authorization headers?",
              "opts": [
                "Token ",
                "JWT ",
                "Bearer ",
                "Basic "
              ],
              "ans": 2,
              "explanation": "Standard format: Authorization: Bearer <jwt_token_string>."
            },
            {
              "q": "Why should you never store confidential passwords or credit card numbers inside JWT claims?",
              "opts": [
                "It increases token length",
                "JWT payloads are merely Base64Url encoded (readable by anyone), NOT encrypted",
                "The compiler blocks it",
                "It violates REST rules"
              ],
              "ans": 1,
              "explanation": "Base64 encoding provides zero confidentiality; anyone can decode claims in milliseconds."
            },
            {
              "q": "Why do we extend OncePerRequestFilter when implementing custom JWT verification?",
              "opts": [
                "To run in parallel threads",
                "To guarantee the authentication filter executes exactly once per incoming HTTP request dispatch",
                "To encrypt responses",
                "To bypass security"
              ],
              "ans": 1,
              "explanation": "Prevents duplicate authentication checks during internal request forwarding."
            },
            {
              "q": "Where does the JWT filter place authenticated user details upon successful token verification?",
              "opts": [
                "HttpSession",
                "SecurityContextHolder.getContext().setAuthentication(...)",
                "Database table",
                "Local cookie"
              ],
              "ans": 1,
              "explanation": "Spring Security reads thread-local SecurityContextHolder to verify request authorization."
            },
            {
              "q": "How does an application handle logging out stateless JWT users securely?",
              "opts": [
                "Call jwt.delete()",
                "Combine short token expiration intervals with a Redis token deny-list (blacklist)",
                "Restart Spring Boot server",
                "Clear database password"
              ],
              "ans": 1,
              "explanation": "Stateless tokens remain valid until expiration unless explicitly denied in shared caching layers."
            }
          ]
        },
        {
          "id": 3,
          "title": "UserDetailsService with Database",
          "video": {
            "youtubeId": "65Yj4unzOiI",
            "title": "UserDetailsService with Database - Tutorial",
            "channel": "Amigoscode",
            "duration": "1 hr",
            "description": "Loading users dynamically from relational database via JPA, implementing UserDetailsService and UserDetails interfaces, and mapping entity roles to GrantedAuthorities."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Dynamic Database Authentication",
                "text": "For production applications, user accounts reside in relational databases. Spring Security defines the UserDetailsService interface containing a single method:\nUserDetails loadUserByUsername(String username) throws UsernameNotFoundException;\n\nWhen a login attempt occurs, Spring Security calls loadUserByUsername(email). Your implementation queries UserRepository, retrieves the User entity containing the hashed BCrypt password and assigned roles, and maps it into Spring's UserDetails contract."
              },
              {
                "heading": "Mapping Roles to GrantedAuthorities",
                "text": "Spring Security represents user roles and permissions as GrantedAuthority objects.\n• Roles must follow standard prefix conventions: ROLE_USER, ROLE_ADMIN.\n• If your User entity implements UserDetails directly, getAuthorities() converts user roles into SimpleGrantedAuthority instances: roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList())."
              },
              {
                "heading": "Production Code — User Entity & Custom UserDetailsService",
                "code": "<span class=\"kw\">package</span> com.avron.internship.security;\n\n<span class=\"kw\">import</span> jakarta.persistence.*;\n<span class=\"kw\">import</span> org.springframework.security.core.<span class=\"cls\">GrantedAuthority</span>;\n<span class=\"kw\">import</span> org.springframework.security.core.authority.<span class=\"cls\">SimpleGrantedAuthority</span>;\n<span class=\"kw\">import</span> org.springframework.security.core.userdetails.*;\n<span class=\"kw\">import</span> org.springframework.stereotype.<span class=\"cls\">Service</span>;\n<span class=\"kw\">import</span> java.util.*;\n<span class=\"kw\">import</span> java.util.stream.<span class=\"cls\">Collectors</span>;\n\n<span class=\"cmt\">// 1. Role Entity</span>\n@<span class=\"cls\">Entity</span> @<span class=\"cls\">Table</span>(name = <span class=\"str\">\"roles\"</span>)\n<span class=\"kw\">class</span> <span class=\"cls\">Role</span> {\n    @<span class=\"cls\">Id</span> @<span class=\"cls\">GeneratedValue</span>(strategy = <span class=\"cls\">GenerationType</span>.<span class=\"cls\">IDENTITY</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">Long</span> id;\n    @<span class=\"cls\">Column</span>(unique = <span class=\"kw\">true</span>, nullable = <span class=\"kw\">false</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> name; <span class=\"cmt\">// e.g., \"ROLE_USER\" or \"ROLE_ADMIN\"</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">String</span> getName() { <span class=\"kw\">return</span> name; }\n}\n\n<span class=\"cmt\">// 2. User Entity implementing UserDetails</span>\n@<span class=\"cls\">Entity</span> @<span class=\"cls\">Table</span>(name = <span class=\"str\">\"users\"</span>)\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">AppUser</span> <span class=\"kw\">implements</span> <span class=\"cls\">UserDetails</span> {\n    @<span class=\"cls\">Id</span> @<span class=\"cls\">GeneratedValue</span>(strategy = <span class=\"cls\">GenerationType</span>.<span class=\"cls\">IDENTITY</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">Long</span> id;\n    @<span class=\"cls\">Column</span>(unique = <span class=\"kw\">true</span>, nullable = <span class=\"kw\">false</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> email;\n    @<span class=\"cls\">Column</span>(nullable = <span class=\"kw\">false</span>)\n    <span class=\"kw\">private</span> <span class=\"cls\">String</span> password; <span class=\"cmt\">// Stored as BCrypt hash</span>\n\n    @<span class=\"cls\">ManyToMany</span>(fetch = <span class=\"cls\">FetchType</span>.<span class=\"cls\">EAGER</span>)\n    @<span class=\"cls\">JoinTable</span>(name = <span class=\"str\">\"user_roles\"</span>,\n        joinColumns = @<span class=\"cls\">JoinColumn</span>(name = <span class=\"str\">\"user_id\"</span>),\n        inverseJoinColumns = @<span class=\"cls\">JoinColumn</span>(name = <span class=\"str\">\"role_id\"</span>))\n    <span class=\"kw\">private</span> <span class=\"cls\">Set</span><<span class=\"cls\">Role</span>> roles = <span class=\"kw\">new</span> <span class=\"cls\">HashSet</span><>();\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">Collection</span><? <span class=\"kw\">extends</span> <span class=\"cls\">GrantedAuthority</span>> getAuthorities() {\n        <span class=\"kw\">return</span> roles.stream()\n            .map(role -> <span class=\"kw\">new</span> <span class=\"cls\">SimpleGrantedAuthority</span>(role.getName()))\n            .collect(<span class=\"cls\">Collectors</span>.toList());\n    }\n\n    @<span class=\"cls\">Override</span> <span class=\"kw\">public</span> <span class=\"cls\">String</span> getPassword() { <span class=\"kw\">return</span> password; }\n    @<span class=\"cls\">Override</span> <span class=\"kw\">public</span> <span class=\"cls\">String</span> getUsername() { <span class=\"kw\">return</span> email; }\n    @<span class=\"cls\">Override</span> <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> isAccountNonExpired() { <span class=\"kw\">return</span> <span class=\"kw\">true</span>; }\n    @<span class=\"cls\">Override</span> <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> isAccountNonLocked() { <span class=\"kw\">return</span> <span class=\"kw\">true</span>; }\n    @<span class=\"cls\">Override</span> <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> isCredentialsNonExpired() { <span class=\"kw\">return</span> <span class=\"kw\">true</span>; }\n    @<span class=\"cls\">Override</span> <span class=\"kw\">public</span> <span class=\"kw\">boolean</span> isEnabled() { <span class=\"kw\">return</span> <span class=\"kw\">true</span>; }\n}\n\n<span class=\"cmt\">// 3. Custom UserDetailsService Implementation</span>\n@<span class=\"cls\">Service</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">CustomUserDetailsService</span> <span class=\"kw\">implements</span> <span class=\"cls\">UserDetailsService</span> {\n\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">UserRepository</span> userRepository;\n    <span class=\"kw\">public</span> <span class=\"cls\">CustomUserDetailsService</span>(<span class=\"cls\">UserRepository</span> repo) { this.userRepository = repo; }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">UserDetails</span> loadUserByUsername(<span class=\"cls\">String</span> email) <span class=\"kw\">throws</span> <span class=\"cls\">UsernameNotFoundException</span> {\n        <span class=\"kw\">return</span> userRepository.findByEmail(email)\n            .orElseThrow(() -> <span class=\"kw\">new</span> <span class=\"cls\">UsernameNotFoundException</span>(<span class=\"str\">\"User account not found for email: \"</span> + email));\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Use FetchType.EAGER on User-Role relationships (or JOIN FETCH queries in repository) when loading UserDetails. If lazy loaded, accessing roles inside security filters outside active Hibernate transactions causes LazyInitializationException.\n• Always return true for account status booleans (isEnabled, isAccountNonLocked) unless you actively build and maintain account suspension features."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why does Spring Security use UserDetails interface instead of directly using custom User entities?\nA: Decoupling. Spring Security needs a predictable contract (getUsername, getPassword, getAuthorities) to execute authentication regardless of whether your domain entity is named AppUser, Account, or Employee.\n\nQ: What exception should be thrown if loadUserByUsername cannot find the user in the database?\nA: UsernameNotFoundException. Spring Security catches this during login and returns standard BadCredentialsException to the user (preventing username enumeration attacks).\n\nQ: What is the difference between a Role and an Authority in Spring Security?\nA: Semantically, an Authority is a fine-grained permission string (e.g., \"COURSE_CREATE\", \"USER_DELETE\"). A Role is coarse-grained grouping prefixed with \"ROLE_\" (e.g., \"ROLE_ADMIN\"). Under the hood, both are represented as GrantedAuthority instances."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — User Registration with Default Role",
              "instructions": "Create AuthService registration endpoint.\n1. In register(RegisterRequest req), check if userRepository.existsByEmail(req.email()). If true, throw exception.\n2. Fetch default role \"ROLE_USER\" from RoleRepository.\n3. Encode password using passwordEncoder.encode(req.password()).\n4. Save AppUser and verify that newly registered users can log in successfully.",
              "hint": "Always encode raw user passwords before invoking repository.save(newUser)."
            },
            "resources": [
              {
                "label": "Spring Security UserDetailsService Guide",
                "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/user-details-service.html"
              },
              {
                "label": "Baeldung — UserDetailsService with JPA",
                "url": "https://www.baeldung.com/spring-security-authentication-with-a-database"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which core method must be implemented when writing a custom UserDetailsService?",
              "opts": [
                "authenticateUser()",
                "loadUserByUsername(String username)",
                "findUserByEmail()",
                "verifyPassword()"
              ],
              "ans": 1,
              "explanation": "loadUserByUsername retrieves user persistence data for authentication verification."
            },
            {
              "q": "What exception must loadUserByUsername throw when the queried email does not exist in database?",
              "opts": [
                "NullPointerException",
                "UsernameNotFoundException",
                "UserMissingException",
                "SecurityException"
              ],
              "ans": 1,
              "explanation": "UsernameNotFoundException alerts AuthenticationProvider that credentials cannot be matched."
            },
            {
              "q": "Why should user roles be loaded eagerly (FetchType.EAGER) or fetched via JOIN FETCH during authentication?",
              "opts": [
                "To save disk space",
                "Because accessing lazy-loaded roles inside security filters outside an active Hibernate transaction triggers LazyInitializationException",
                "To make passwords stronger",
                "Required by JPA"
              ],
              "ans": 1,
              "explanation": "Security context filtering happens before transactional service boundaries open."
            },
            {
              "q": "What standard string prefix does Spring Security require when checking hasRole(\"ADMIN\")?",
              "opts": [
                "AUTH_",
                "PERM_",
                "ROLE_",
                "SEC_"
              ],
              "ans": 2,
              "explanation": "hasRole(\"ADMIN\") automatically looks for authorities matching \"ROLE_ADMIN\"."
            },
            {
              "q": "Which interface wraps user permission strings inside UserDetails?",
              "opts": [
                "SecurityPermission",
                "GrantedAuthority",
                "UserRole",
                "AccessClaim"
              ],
              "ans": 1,
              "explanation": "GrantedAuthority represents permissions/roles via getAuthority()."
            },
            {
              "q": "When a user registers, at what stage should passwordEncoder.encode(rawPassword) execute?",
              "opts": [
                "During database retrieval",
                "Strictly before calling userRepository.save(user)",
                "In the browser frontend",
                "Inside JWT generation"
              ],
              "ans": 1,
              "explanation": "Passwords must be hashed into irreversible BCrypt strings prior to persistence."
            },
            {
              "q": "Why does Spring Security convert UsernameNotFoundException into generic BadCredentialsException during login?",
              "opts": [
                "To save logs",
                "To prevent username enumeration attacks (stopping hackers from probing which email accounts exist)",
                "Due to Java syntax",
                "To speed up responses"
              ],
              "ans": 1,
              "explanation": "Returning identical generic error messages prevents attackers from discovering registered email lists."
            }
          ]
        },
        {
          "id": 4,
          "title": "Role-Based Access Control",
          "video": {
            "youtubeId": "GKDlCvYDtlk",
            "title": "Role-Based Access Control - Tutorial",
            "channel": "JavaBrains",
            "duration": "45 min",
            "description": "Fine-grained method-level security using @EnableMethodSecurity, @PreAuthorize, @PostAuthorize SpEL expressions, and domain object permission checks."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Method-Level Security",
                "text": "While SecurityFilterChain configures coarse URL-level security (e.g., /api/admin/** requires ROLE_ADMIN), enterprise applications require fine-grained method-level security.\n\nAnnotating configuration with @EnableMethodSecurity activates Spring Security AOP method interceptors supporting SpEL (Spring Expression Language):\n• @PreAuthorize(\"hasRole('ADMIN') or hasAuthority('COURSE_CREATE')\"): Evaluates condition BEFORE method execution. If false, AccessDeniedException (HTTP 403 Forbidden) is thrown immediately.\n• @PostAuthorize(\"returnObject.ownerEmail == authentication.principal.username\"): Evaluates condition AFTER method execution, inspecting the returned domain object."
              },
              {
                "heading": "Advanced SpEL Parameter Verification",
                "text": "You can reference method parameters directly inside @PreAuthorize expressions using #parameterName:\n@PreAuthorize(\"#studentId == authentication.principal.id or hasRole('ADMIN')\")\npublic StudentDTO getStudentProfile(Long studentId) { ... }\nThis ensures regular students can only query their own personal profile, while administrators can query any profile."
              },
              {
                "heading": "Production Code — Fine-Grained Method Security Service",
                "code": "<span class=\"kw\">package</span> com.avron.internship.service;\n\n<span class=\"kw\">import</span> org.springframework.security.access.prepost.*;\n<span class=\"kw\">import</span> org.springframework.stereotype.<span class=\"cls\">Service</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">List</span>;\n\n@<span class=\"cls\">Service</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">InternshipAdministrationService</span> {\n\n    <span class=\"cmt\">// Coarse role verification</span>\n    @<span class=\"cls\">PreAuthorize</span>(<span class=\"str\">\"hasRole('ADMIN')\"</span>)\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> deleteInternshipPosting(<span class=\"cls\">Long</span> postingId) {\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Admin deleting posting ID: \"</span> + postingId);\n    }\n\n    <span class=\"cmt\">// Combined role and fine-grained authority verification</span>\n    @<span class=\"cls\">PreAuthorize</span>(<span class=\"str\">\"hasRole('ADMIN') or (hasRole('INSTRUCTOR') and hasAuthority('EVALUATE_SUBMISSIONS'))\"</span>)\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> gradeInternSubmission(<span class=\"cls\">Long</span> submissionId, <span class=\"kw\">int</span> score) {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Grading submission %d with score %d%n\"</span>, submissionId, score);\n    }\n\n    <span class=\"cmt\">// Parameter ownership verification: Users can only edit their own account profile</span>\n    @<span class=\"cls\">PreAuthorize</span>(<span class=\"str\">\"#userEmail == authentication.principal.username or hasRole('ADMIN')\"</span>)\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> updateProfileBio(<span class=\"cls\">String</span> userEmail, <span class=\"cls\">String</span> newBio) {\n        <span class=\"cls\">System</span>.out.printf(<span class=\"str\">\"Updating bio for user %s%n\"</span>, userEmail);\n    }\n\n    <span class=\"cmt\">// Post-execution evaluation verifying returned data ownership</span>\n    @<span class=\"cls\">PostAuthorize</span>(<span class=\"str\">\"returnObject.isPublic == true or returnObject.authorEmail == authentication.principal.username\"</span>)\n    <span class=\"kw\">public</span> <span class=\"cls\">DocumentDTO</span> fetchConfidentialDocument(<span class=\"cls\">Long</span> docId) {\n        <span class=\"kw\">return</span> <span class=\"kw\">new</span> <span class=\"cls\">DocumentDTO</span>(docId, <span class=\"str\">\"Secret Project Specs\"</span>, <span class=\"kw\">false</span>, <span class=\"str\">\"arjun@tech.edu\"</span>);\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Remember that method-level security annotations (@PreAuthorize) rely on Spring AOP proxies. If internal method A calls annotated method B within the exact same class instance, the proxy interceptor is bypassed and security checks DO NOT execute!\n• Always map AccessDeniedException to HTTP 403 Forbidden in global exception handlers."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the HTTP status difference between 401 Unauthorized and 403 Forbidden?\nA: 401 Unauthorized indicates unauthenticated requests (missing or invalid JWT token). 403 Forbidden indicates authenticated users attempting actions exceeding their assigned role permissions (e.g., ROLE_USER calling @PreAuthorize(\"hasRole('ADMIN')\")).\n\nQ: How does authentication.principal work inside SpEL expressions?\nA: 'authentication' references the active SecurityContextHolder thread object. 'principal' represents the UserDetails instance returned by UserDetailsService during login verification.\n\nQ: Why use @PostAuthorize if the method executes anyway?\nA: @PostAuthorize is essential when permission depends on data retrieved from the database inside the method body (e.g., checking if the retrieved document author matches the logged-in user)."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Secure Assignment Submission Endpoint",
              "instructions": "Enable method security on an AssignmentService class.\n1. Add @EnableMethodSecurity to your SecurityConfig.\n2. Write submitAssignment(Long studentId, String content) annotated with @PreAuthorize(\"#studentId == authentication.principal.id\").\n3. Write deleteAssignment(Long id) annotated with @PreAuthorize(\"hasRole('ADMIN')\"). Test triggering 403 Forbidden errors when logging in as regular user attempting admin deletion.",
              "hint": "Ensure your UserDetails object exposes getId() if matching against #studentId numeric parameters."
            },
            "resources": [
              {
                "label": "Spring Method Security Reference",
                "url": "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html"
              },
              {
                "label": "Baeldung — @PreAuthorize and @PostAuthorize",
                "url": "https://www.baeldung.com/spring-security-method-security"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which configuration annotation activates @PreAuthorize and @PostAuthorize method security?",
              "opts": [
                "@EnableMethodSecurity",
                "@EnableGlobalAuth",
                "@SecureMethods",
                "@ActivateAOP"
              ],
              "ans": 0,
              "explanation": "@EnableMethodSecurity activates Spring Security method interception proxies."
            },
            {
              "q": "What HTTP status code represents an authenticated user attempting an action prohibited by their role (AccessDeniedException)?",
              "opts": [
                "400 Bad Request",
                "401 Unauthorized",
                "403 Forbidden",
                "500 Internal Server Error"
              ],
              "ans": 2,
              "explanation": "403 Forbidden confirms valid identity but denied access privileges."
            },
            {
              "q": "How do you reference a method parameter named 'deptCode' inside a @PreAuthorize SpEL expression?",
              "opts": [
                "${deptCode}",
                "#deptCode",
                "@deptCode",
                "param.deptCode"
              ],
              "ans": 1,
              "explanation": "SpEL uses #parameterName syntax to reference method input arguments."
            },
            {
              "q": "Why does calling an @PreAuthorize annotated method internally from another method inside the same class bypass security checks?",
              "opts": [
                "Because Spring AOP proxies only intercept external method invocations entering the bean",
                "Because of JVM bugs",
                "Because internal calls are always admin",
                "It causes compiler error"
              ],
              "ans": 0,
              "explanation": "Self-invocation (this.methodB()) bypasses the Spring CGLIB proxy wrapper."
            },
            {
              "q": "When does a @PostAuthorize expression evaluate?",
              "opts": [
                "Before method starts",
                "After the method executes, allowing verification against returnObject properties",
                "During compilation",
                "Upon server startup"
              ],
              "ans": 1,
              "explanation": "@PostAuthorize inspects data produced by method execution before returning it to caller."
            },
            {
              "q": "What expression verifies that the current logged-in username matches parameter 'email'?",
              "opts": [
                "#email == authentication.principal.username",
                "user == email",
                "auth.email == #email",
                "principal.equals(#email)"
              ],
              "ans": 0,
              "explanation": "authentication.principal accesses the active UserDetails object."
            },
            {
              "q": "What happens when @PreAuthorize condition evaluates to false?",
              "opts": [
                "Returns null",
                "Throws AccessDeniedException immediately without executing method body",
                "Logs warning and runs method",
                "Redirects to home page"
              ],
              "ans": 1,
              "explanation": "Method execution is completely aborted upon authorization check failure."
            }
          ]
        },
        {
          "id": 5,
          "title": "OAuth2 & Security Best Practices",
          "video": {
            "youtubeId": "j_ZWbfJdFcQ",
            "title": "OAuth2 & Security Best Practices - Tutorial",
            "channel": "Amigoscode",
            "duration": "1 hr",
            "description": "CORS (Cross-Origin Resource Sharing) configuration, Rate Limiting with Bucket4j, HTTPS hardening, and enterprise security checklists."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — CORS & Production Hardening",
                "text": "When a React frontend running on http://localhost:3000 calls a Spring Boot API on http://localhost:8080, web browsers enforce Same-Origin Policy and block the request unless the backend explicitly sends Cross-Origin Resource Sharing (CORS) headers.\n\nConfigure CorsConfigurationSource bean allowing exact frontend origins (NEVER use setAllowedOrigins(List.of(\"*\")) when allowing credentials/cookies in production!)."
              },
              {
                "heading": "Rate Limiting & Token Expiration Defense",
                "text": "• Brute-Force Defense: Attackers use automated bots to attempt thousands of login passwords per minute. Rate limiting (using libraries like Bucket4j or API Gateways) restricts clients to a maximum number of requests per IP within a time window (returning HTTP 429 Too Many Requests).\n• Security Checklist: 1) Always enforce HTTPS/TLS in production. 2) Set secure HTTP-only cookies for refresh tokens. 3) Strip sensitive server headers (server: Apache-Coyote)."
              },
              {
                "heading": "Production Code — CORS Configuration & Bucket4j Rate Limiter",
                "code": "<span class=\"kw\">package</span> com.avron.internship.config;\n\n<span class=\"kw\">import</span> org.springframework.context.annotation.*;\n<span class=\"kw\">import</span> org.springframework.web.cors.*;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">List</span>;\n\n@<span class=\"cls\">Configuration</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">WebCorsConfiguration</span> {\n\n    @<span class=\"cls\">Bean</span>\n    <span class=\"kw\">public</span> <span class=\"cls\">CorsConfigurationSource</span> corsConfigurationSource() {\n        <span class=\"cls\">CorsConfiguration</span> configuration = <span class=\"kw\">new</span> <span class=\"cls\">CorsConfiguration</span>();\n        <span class=\"cmt\">// Whitelist exact trusted frontend domains</span>\n        configuration.setAllowedOrigins(<span class=\"cls\">List</span>.of(<span class=\"str\">\"http://localhost:3000\"</span>, <span class=\"str\">\"https://avron-internship.vercel.app\"</span>));\n        configuration.setAllowedMethods(<span class=\"cls\">List</span>.of(<span class=\"str\">\"GET\"</span>, <span class=\"str\">\"POST\"</span>, <span class=\"str\">\"PUT\"</span>, <span class=\"str\">\"DELETE\"</span>, <span class=\"str\">\"OPTIONS\"</span>));\n        configuration.setAllowedHeaders(<span class=\"cls\">List</span>.of(<span class=\"str\">\"Authorization\"</span>, <span class=\"str\">\"Content-Type\"</span>, <span class=\"str\">\"Accept\"</span>));\n        configuration.setAllowCredentials(<span class=\"kw\">true</span>);\n        configuration.setMaxAge(3600L); <span class=\"cmt\">// Cache pre-flight OPTIONS response for 1 hour</span>\n\n        <span class=\"cls\">UrlBasedCorsConfigurationSource</span> source = <span class=\"kw\">new</span> <span class=\"cls\">UrlBasedCorsConfigurationSource</span>();\n        source.registerCorsConfiguration(<span class=\"str\">\"/api/**\"</span>, configuration);\n        <span class=\"kw\">return</span> source;\n    }\n}\n\n<span class=\"cmt\">// Token Rate Limiter Interceptor Concept</span>\n<span class=\"kw\">package</span> com.avron.internship.security;\n\n<span class=\"kw\">import</span> io.github.bucket4j.*;\n<span class=\"kw\">import</span> jakarta.servlet.*;\n<span class=\"kw\">import</span> jakarta.servlet.http.*;\n<span class=\"kw\">import</span> org.springframework.stereotype.<span class=\"cls\">Component</span>;\n<span class=\"kw\">import</span> java.io.<span class=\"cls\">IOException</span>;\n<span class=\"kw\">import</span> java.time.<span class=\"cls\">Duration</span>;\n\n@<span class=\"cls\">Component</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">LoginRateLimitFilter</span> <span class=\"kw\">extends</span> <span class=\"cls\">HttpFilter</span> {\n    <span class=\"cmt\">// Bucket allowing 5 login attempts per minute per IP</span>\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">Bucket</span> bucket = <span class=\"cls\">Bucket</span>.builder()\n        .addLimit(<span class=\"cls\">Bandwidth</span>.simple(5, <span class=\"cls\">Duration</span>.ofMinutes(1)))\n        .build();\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">protected</span> <span class=\"kw\">void</span> doFilter(<span class=\"cls\">HttpServletRequest</span> req, <span class=\"cls\">HttpServletResponse</span> res, <span class=\"cls\">FilterChain</span> chain)\n            <span class=\"kw\">throws</span> <span class=\"cls\">IOException</span>, <span class=\"cls\">ServletException</span> {\n        <span class=\"kw\">if</span> (req.getRequestURI().equals(<span class=\"str\">\"/api/v1/auth/login\"</span>)) {\n            <span class=\"kw\">if</span> (!bucket.tryConsume(1)) {\n                res.setStatus(429); <span class=\"cmt\">// HTTP 429 Too Many Requests</span>\n                res.getWriter().write(<span class=\"str\">\"{\"</span>error<span class=\"str\">\": \"</span><span class=\"cls\">Rate</span> limit exceeded. <span class=\"cls\">Try</span> again in 1 minute.<span class=\"str\">\"}\"</span>);\n                <span class=\"kw\">return</span>;\n            }\n        }\n        chain.doFilter(req, res);\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Never expose internal database IDs or stack traces in error responses. An attacker reading SQL syntax errors can easily map database structure.\n• Keep third-party dependencies updated; run mvn dependency-check:check regularly to scan for known CVE security vulnerabilities."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is a CORS Pre-flight OPTIONS request?\nA: Before sending complex cross-origin requests (like PUT/DELETE or custom Authorization headers), browsers automatically send an HTTP OPTIONS pre-flight request asking the server if the origin and headers are permitted.\n\nQ: What HTTP status code is returned when an API client exceeds rate limits?\nA: HTTP 429 Too Many Requests.\n\nQ: What is OAuth2 and OpenID Connect (OIDC)?\nA: OAuth2 is an authorization framework allowing applications to obtain limited access to user accounts on HTTP services (like GitHub or Google). OpenID Connect is an authentication layer built on top of OAuth2 verifying identity via ID Tokens (JWT)."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Configure Production CORS & Rate Limit",
              "instructions": "Secure your backend against cross-origin failures and brute force.\n1. Register CorsConfigurationSource bean allowing requests strictly from http://localhost:3000.\n2. Add Bucket4j dependency to pom.xml.\n3. Create RateLimitFilter blocking more than 3 requests per 10 seconds on /api/v1/auth/**.\n4. Test by sending 5 rapid requests in Postman to observe HTTP 429 responses.",
              "hint": "In CorsConfiguration, setAllowCredentials(true) is mandatory if frontend sends cookies or authorization tokens."
            },
            "resources": [
              {
                "label": "MDN Web Docs — CORS Explained",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
              },
              {
                "label": "OWASP Top 10 API Security Risks",
                "url": "https://owasp.org/www-project-api-security/"
              }
            ]
          },
          "quiz": [
            {
              "q": "Why does a web browser block fetch requests from http://localhost:3000 to http://localhost:8080?",
              "opts": [
                "Due to firewall rules",
                "The browser enforces Same-Origin Policy; different port numbers constitute distinct origins requiring CORS headers",
                "Port 8080 is invalid",
                "SSL is missing"
              ],
              "ans": 1,
              "explanation": "Protocol, host domain, and port must match exactly for Same-Origin policy."
            },
            {
              "q": "Why is configuration.setAllowedOrigins(List.of(\"*\")) dangerous when allowCredentials=true?",
              "opts": [
                "It crashes Tomcat",
                "It allows any malicious external website to make authenticated API requests using user credentials",
                "It disables JSON",
                "It slows down requests"
              ],
              "ans": 1,
              "explanation": "Wildcard CORS with credentials enables universal cross-site data hijacking."
            },
            {
              "q": "What HTTP method does a browser use for pre-flight CORS verification?",
              "opts": [
                "GET",
                "OPTIONS",
                "CONNECT",
                "PREFLIGHT"
              ],
              "ans": 1,
              "explanation": "HTTP OPTIONS queries server permissions prior to sending actual requests."
            },
            {
              "q": "What standard HTTP status code indicates a client has exceeded API rate limits?",
              "opts": [
                "401 Unauthorized",
                "403 Forbidden",
                "429 Too Many Requests",
                "503 Service Unavailable"
              ],
              "ans": 2,
              "explanation": "429 Too Many Requests alerts clients to slow down invocation rates."
            },
            {
              "q": "How does rate limiting protect authentication endpoints?",
              "opts": [
                "Encrypts passwords",
                "Prevents automated brute-force scripts from guessing thousands of passwords per minute",
                "Speeds up database",
                "Eliminates CSRF"
              ],
              "ans": 1,
              "explanation": "Rate limiting throttles credential guessing velocity."
            },
            {
              "q": "What is the primary distinction between OAuth2 and OpenID Connect (OIDC)?",
              "opts": [
                "No difference",
                "OAuth2 handles Authorization (access delegation); OIDC adds an identity layer for Authentication (verifying who the user is)",
                "OIDC is older",
                "OAuth2 uses XML"
              ],
              "ans": 1,
              "explanation": "OAuth2 grants access tokens; OIDC issues identity ID tokens."
            },
            {
              "q": "Why should detailed server stack traces be disabled in production API responses?",
              "opts": [
                "They consume bandwidth",
                "Attackers analyze stack traces to discover database schema structure and internal framework vulnerabilities",
                "They break JSON parsing",
                "Required by Java"
              ],
              "ans": 1,
              "explanation": "Leakage of internal implementation details aids malicious vulnerability scanning."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "What is the primary responsibility of Spring Security's SecurityFilterChain?",
          "opts": [
            "Encrypt HTML",
            "Intercept incoming HTTP requests to apply authentication, CORS, CSRF, and authorization rules before reaching controllers",
            "Connect to MySQL",
            "Format JSON"
          ],
          "ans": 1,
          "explanation": "SecurityFilterChain forms the security perimeter protecting web endpoints."
        },
        {
          "q": "Why must passwords be hashed using adaptive one-way algorithms like BCrypt rather than plain SHA-256?",
          "opts": [
            "BCrypt generates shorter hashes",
            "BCrypt incorporates random salt and configurable work factors to intentionally slow down GPU brute-force attacks",
            "SHA-256 is illegal",
            "BCrypt is reversible"
          ],
          "ans": 1,
          "explanation": "Fast hashes (SHA-256) allow billions of guesses per second; BCrypt slows attempts down."
        },
        {
          "q": "Why is CSRF protection disabled when securing stateless JWT REST APIs?",
          "opts": [
            "CSRF is deprecated",
            "Stateless REST APIs authenticate via Authorization headers rather than browser session cookies, eliminating CSRF vulnerability",
            "It speeds up compilation",
            "Tomcat blocks it"
          ],
          "ans": 1,
          "explanation": "CSRF targets automatic cookie transmission; header tokens require explicit client attachment."
        },
        {
          "q": "What happens if a malicious client alters the role claim inside a JWT payload?",
          "opts": [
            "Server grants admin access",
            "Cryptographic signature verification fails on server, rejecting token immediately",
            "Token expires",
            "Server updates database"
          ],
          "ans": 1,
          "explanation": "Signature validation confirms payload integrity against tampering."
        },
        {
          "q": "Why should custom JWT filters extend OncePerRequestFilter?",
          "opts": [
            "To run multi-threaded",
            "To guarantee the authentication filter executes exactly once per HTTP request dispatch",
            "To encrypt cookies",
            "To connect to DB"
          ],
          "ans": 1,
          "explanation": "Prevents redundant token parsing during internal request forwards."
        },
        {
          "q": "Which method must custom UserDetailsService classes implement to load users from MySQL?",
          "opts": [
            "findUser()",
            "loadUserByUsername(String username)",
            "authenticate()",
            "getAuthorities()"
          ],
          "ans": 1,
          "explanation": "loadUserByUsername retrieves persistence account state during authentication."
        },
        {
          "q": "What exception must be thrown when a login attempt queries a non-existent email address?",
          "opts": [
            "NullPointerException",
            "UsernameNotFoundException",
            "UserMissingException",
            "SecurityException"
          ],
          "ans": 1,
          "explanation": "UsernameNotFoundException instructs AuthenticationManager to fail login."
        },
        {
          "q": "How do you evaluate method parameters inside @PreAuthorize annotations?",
          "opts": [
            "${param}",
            "#parameterName SpEL syntax",
            "@param",
            "args[0]"
          ],
          "ans": 1,
          "explanation": "SpEL #var syntax accesses method argument values directly."
        },
        {
          "q": "What HTTP status code represents an authenticated user attempting an action forbidden by their role?",
          "opts": [
            "401 Unauthorized",
            "403 Forbidden",
            "404 Not Found",
            "429 Too Many Requests"
          ],
          "ans": 1,
          "explanation": "403 confirms valid identity but denies permission."
        },
        {
          "q": "Why must CORS origins be explicitly specified in production rather than allowing wildcard \"*\"?",
          "opts": [
            "Wildcard crashes Tomcat",
            "Wildcard combined with credentials allows any external website to hijack user API sessions cross-origin",
            "Wildcard blocks JSON",
            "Wildcard disables HTTPS"
          ],
          "ans": 1,
          "explanation": "Explicit origin whitelisting prevents cross-site request forgery and data theft."
        }
      ],
      "miniProject": {
        "title": "Week 6 Capstone Project — Production-Grade JWT Authentication & Role Security Engine",
        "description": "Implement a complete, production-grade Spring Security 6 authentication engine with stateless JWT tokens, BCrypt password hashing, database-backed roles, and method-level authorization.",
        "requirements": [
          "Configure Spring Security 6 SecurityFilterChain with SessionCreationPolicy.STATELESS and disabled CSRF.",
          "Create JPA Entities: Role(id, name) and AppUser(id, email, password, roles) implementing UserDetails interface.",
          "Implement CustomUserDetailsService loading users from database and mapping roles to GrantedAuthorities.",
          "Implement JwtService generating HMAC-SHA256 tokens with 24-hour expiration and extracting username/expiration claims.",
          "Implement JwtAuthenticationFilter extending OncePerRequestFilter, validating Bearer tokens and setting SecurityContextHolder.",
          "Create AuthController exposing POST /api/v1/auth/register (hashing passwords via BCrypt) and POST /api/v1/auth/login (returning JWT string).",
          "Configure WebCorsConfiguration allowing requests from http://localhost:3000.",
          "Implement method security (@EnableMethodSecurity) protecting endpoints: GET /api/v1/admin/dashboard (@PreAuthorize(\"hasRole('ADMIN')\")) and PUT /api/v1/users/{id}/profile (@PreAuthorize(\"#id == authentication.principal.id\"))."
        ]
      }
    },
    {
      "id": 7,
      "title": "React Frontend Basics",
      "topics": [
        {
          "id": 1,
          "title": "React Setup, JSX & Components",
          "video": {
            "youtubeId": "bMknfKXIFA8",
            "title": "React Setup, JSX & Components - Tutorial",
            "channel": "Dave Gray",
            "duration": "9 hr",
            "description": "Complete React foundation — Virtual DOM architecture, Vite fast bundling, JSX syntactic sugar, Functional Components, props data flow, and list rendering rules."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Component-Driven Architecture & Virtual DOM",
                "text": "React is a declarative JavaScript library for building interactive user interfaces. Traditional vanilla DOM manipulation (document.getElementById()) is slow and cumbersome in complex SPA (Single Page Application) dashboards.\n\nReact introduces the Virtual DOM: an lightweight in-memory JavaScript representation of the actual DOM. When component state changes, React constructs a new Virtual DOM tree, diffs it against the previous tree (Reconciliation algorithm), and calculates the minimal exact DOM mutations required to update the browser UI."
              },
              {
                "heading": "JSX & Props Unidirectional Data Flow",
                "text": "• JSX (JavaScript XML) allows writing HTML-like structures directly inside JavaScript files. Under the hood, JSX compiles into React.createElement() method calls.\n• Functional Components are reusable JavaScript functions accepting an input object called 'props' (properties) and returning JSX.\n• Unidirectional Data Flow: Props flow strictly downwards from parent to child components. Props are immutable read-only objects; a child component cannot modify the props passed to it."
              },
              {
                "heading": "Production Code — Modular Component Tree with JSX",
                "code": "<span class=\"kw\">import</span> <span class=\"cls\">React</span> <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n<span class=\"kw\">import</span> <span class=\"str\">'./StudentCard.css'</span>;\n\n<span class=\"cmt\">// Child Component receiving destructured props</span>\n<span class=\"kw\">export</span> <span class=\"kw\">function</span> <span class=\"cls\">StudentCard</span>({ name, gpa, department, onSelect }) {\n  <span class=\"cmt\">// Conditional class assignment</span>\n  <span class=\"kw\">const</span> badgeClass = gpa >= 8.5 ? <span class=\"str\">\"badge-honors\"</span> : <span class=\"str\">\"badge-standard\"</span>;\n\n  <span class=\"kw\">return</span> (\n    <div className=<span class=\"str\">\"student-card\"</span> onClick={() => onSelect(name)}>\n      <div className=<span class=\"str\">\"card-header\"</span>>\n        <h3>{name}</h3>\n        <span className={`badge ${badgeClass}`}>{gpa.toFixed(2)} <span class=\"cls\">GPA</span></span>\n      </div>\n      <p className=<span class=\"str\">\"dept-label\"</span>><span class=\"cls\">Department</span>: <strong>{department}</strong></p>\n      <button className=<span class=\"str\">\"action-btn\"</span>><span class=\"cls\">View</span> <span class=\"cls\">Full</span> <span class=\"cls\">Transcripts</span></button>\n    </div>\n  );\n}\n\n<span class=\"cmt\">// Parent Component rendering a mapped list of items</span>\n<span class=\"kw\">export</span> <span class=\"kw\">default</span> <span class=\"kw\">function</span> <span class=\"cls\">StudentRosterGrid</span>() {\n  <span class=\"kw\">const</span> students = [\n    { id: <span class=\"str\">\"ID_101\"</span>, name: <span class=\"str\">\"Arjun Sharma\"</span>, gpa: 8.85, dept: <span class=\"str\">\"CSE\"</span> },\n    { id: <span class=\"str\">\"ID_102\"</span>, name: <span class=\"str\">\"Priya Patel\"</span>, gpa: 9.40, dept: <span class=\"str\">\"ECE\"</span> },\n    { id: <span class=\"str\">\"ID_103\"</span>, name: <span class=\"str\">\"Ravi Kumar\"</span>, gpa: 7.60, dept: <span class=\"str\">\"MECH\"</span> }\n  ];\n\n  <span class=\"kw\">const</span> handleStudentClick = (studentName) => {\n    alert(`<span class=\"cls\">Selected</span> <span class=\"cls\">Intern</span> <span class=\"cls\">Profile</span>: ${studentName}`);\n  };\n\n  <span class=\"kw\">return</span> (\n    <section className=<span class=\"str\">\"roster-container\"</span>>\n      <h2><span class=\"cls\">Active</span> <span class=\"cls\">Internship</span> <span class=\"cls\">Roster</span></h2>\n      <div className=<span class=\"str\">\"grid-layout\"</span>>\n        {students.map((student) => (\n          <span class=\"cmt\">// Key prop is mandatory when rendering dynamic lists!</span>\n          <<span class=\"cls\">StudentCard</span>\n            key={student.id}\n            name={student.name}\n            gpa={student.gpa}\n            department={student.dept}\n            onSelect={handleStudentClick}\n          />\n        ))}\n      </div>\n    </section>\n  );\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always provide a unique, stable 'key' prop (like a database ID or UUID) when rendering array lists via .map(). Never use the array index (key={index}) if items can be reordered, inserted, or deleted, as it breaks Virtual DOM reconciliation and causes severe UI bug artifacts.\n• Remember JSX syntax differences: use className instead of class, and htmlFor instead of for."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why can't browsers read JSX directly?\nA: Web browser JavaScript engines (V8, SpiderMonkey) only understand standard ECMAScript. JSX is syntactic sugar that must be transpiled by build tools like Babel or Vite (Esbuild) into standard JavaScript React.createElement() objects before browser execution.\n\nQ: What is the difference between State and Props?\nA: Props are external inputs passed from parent components down to child components and are immutable. State is internal data managed strictly inside the component itself and can change over time via state setter functions.\n\nQ: Why must every list item have a unique 'key' prop?\nA: Keys give Virtual DOM nodes a stable identity across render cycles. During reconciliation, React uses keys to match previous tree items with new tree items, updating only modified nodes rather than re-rendering the entire list."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Modular Course Card Grid",
              "instructions": "Initialize a Vite React app using npm create vite@latest.\n1. Create CourseCard component accepting props: title, instructor, durationWeeks, and level (\"Beginner\" or \"Advanced\").\n2. Style CourseCard conditionally: render a green border if level is Advanced.\n3. Create CourseCatalog parent component containing an array of 5 course objects.\n4. Map over the array rendering CourseCard components with proper key attributes.",
              "hint": "In CourseCatalog, pass key={course.id} inside the mapped return block."
            },
            "resources": [
              {
                "label": "React Official Documentation — Describing the UI",
                "url": "https://react.dev/learn/describing-the-ui"
              },
              {
                "label": "Vite Next-Gen Frontend Tooling",
                "url": "https://vitejs.dev/"
              }
            ]
          },
          "quiz": [
            {
              "q": "What tool transpiles JSX syntactic sugar into standard browser-readable JavaScript objects?",
              "opts": [
                "Webpack / Babel / Esbuild",
                "Tomcat Server",
                "Java Compiler",
                "CSS Parser"
              ],
              "ans": 0,
              "explanation": "Babel/Esbuild transforms JSX syntax into standard React.createElement() JavaScript objects."
            },
            {
              "q": "What algorithm does React use to compare Virtual DOM trees and calculate minimal DOM updates?",
              "opts": [
                "Binary Search",
                "Reconciliation (Diffing algorithm)",
                "Bubble Sort",
                "Dijkstra Algorithm"
              ],
              "ans": 1,
              "explanation": "Reconciliation diffs virtual nodes and executes precise DOM mutations."
            },
            {
              "q": "Why is using array index as a 'key' prop dangerous when rendering dynamic lists?",
              "opts": [
                "It causes syntax errors",
                "If array items are reordered or deleted, index indices shift, confusing Virtual DOM reconciliation and corrupting component state",
                "It slows down compilation",
                "React blocks index keys"
              ],
              "ans": 1,
              "explanation": "Stable unique IDs prevent state contamination when list order changes."
            },
            {
              "q": "Can a child component directly modify a prop passed down to it by its parent?",
              "opts": [
                "Yes, anytime",
                "No, props are immutable read-only objects in React",
                "Only inside useEffect",
                "Only if passed as var"
              ],
              "ans": 1,
              "explanation": "Unidirectional data flow enforces that child components cannot mutate incoming props."
            },
            {
              "q": "Which JSX attribute correctly assigns CSS classes to HTML DOM nodes?",
              "opts": [
                "class=\"card\"",
                "className=\"card\"",
                "css=\"card\"",
                "styleClass=\"card\""
              ],
              "ans": 1,
              "explanation": "Because 'class' is a reserved keyword in JavaScript, JSX uses className."
            },
            {
              "q": "What build tool is recommended by modern standards over legacy Create React App (CRA)?",
              "opts": [
                "Gulp",
                "Vite",
                "Ant",
                "Maven"
              ],
              "ans": 1,
              "explanation": "Vite provides native ES modules and lightning-fast Hot Module Replacement (HMR)."
            },
            {
              "q": "What must a React functional component return?",
              "opts": [
                "Void",
                "JSX (or null)",
                "An HTML string",
                "A JSON object"
              ],
              "ans": 1,
              "explanation": "Functional components return JSX structures describing UI layouts."
            }
          ]
        },
        {
          "id": 2,
          "title": "useState & useEffect Hooks",
          "video": {
            "youtubeId": "O6P86uwfdR0",
            "title": "useState & useEffect Hooks - Tutorial",
            "channel": "Web Dev Simplified",
            "duration": "1 hr",
            "description": "Master React Hooks: useState for reactive state management, functional state updates, useEffect dependency arrays, and cleanup functions."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Reactive State with useState",
                "text": "Hooks allow functional components to hook into React state and lifecycle features.\n\nuseState returns an array containing two items: [currentStateValue, stateSetterFunction].\nWhen you invoke the setter function (e.g., setCount(count + 1)), React schedules a re-render of the component. Rule of thumb: Never mutate state variables directly (e.g., count = 5 or array.push(item)), because direct mutations do not trigger React re-renders!"
              },
              {
                "heading": "Side Effects & useEffect Dependency Array Rules",
                "text": "A side effect is any operation reaching outside the component (fetching API data, manipulating DOM directly, setting timers, or subscribing to WebSockets).\n\nuseEffect(setupFunction, dependencyArray) manages side effects:\n• No dependency array (useEffect(fn)): Executes after EVERY component render.\n• Empty dependency array (useEffect(fn, [])): Executes exactly ONCE when component mounts.\n• Populated array (useEffect(fn, [id, filter])): Executes on mount AND whenever any variable in the array changes between renders.\n• Cleanup Function: If setupFunction returns a function, React runs it upon component unmount (essential for clearing timers or aborting fetch requests)."
              },
              {
                "heading": "Production Code — Live API Search Dashboard with Cleanup",
                "code": "<span class=\"kw\">import</span> <span class=\"cls\">React</span>, { useState, useEffect } <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n\n<span class=\"kw\">export</span> <span class=\"kw\">default</span> <span class=\"kw\">function</span> <span class=\"cls\">InternSearchDashboard</span>() {\n  <span class=\"kw\">const</span> [interns, setInterns] = useState([]);\n  <span class=\"kw\">const</span> [searchQuery, setSearchQuery] = useState(<span class=\"str\">\"\"</span>);\n  <span class=\"kw\">const</span> [isLoading, setIsLoading] = useState(<span class=\"kw\">true</span>);\n  <span class=\"kw\">const</span> [errorMsg, setErrorMsg] = useState(<span class=\"kw\">null</span>);\n\n  useEffect(() => {\n    <span class=\"cmt\">// AbortController prevents race conditions if query updates quickly</span>\n    <span class=\"kw\">const</span> controller = <span class=\"kw\">new</span> <span class=\"cls\">AbortController</span>();\n    setIsLoading(<span class=\"kw\">true</span>);\n    setErrorMsg(<span class=\"kw\">null</span>);\n\n    fetch(`http:<span class=\"cmt\">//localhost:8080/api/v1/interns?search=${encodeURIComponent(searchQuery)}`, {</span>\n      signal: controller.signal\n    })\n      .then((res) => {\n        <span class=\"kw\">if</span> (!res.ok) <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">Error</span>(<span class=\"str\">\"API network response failure\"</span>);\n        <span class=\"kw\">return</span> res.json();\n      })\n      .then((data) => {\n        setInterns(data.content || data);\n        setIsLoading(<span class=\"kw\">false</span>);\n      })\n      .<span class=\"kw\">catch</span>((err) => {\n        <span class=\"kw\">if</span> (err.name !== <span class=\"str\">\"AbortError\"</span>) {\n          setErrorMsg(err.message);\n          setIsLoading(<span class=\"kw\">false</span>);\n        }\n      });\n\n    <span class=\"cmt\">// Cleanup Function: Aborts in-flight network requests if component unmounts or query updates</span>\n    <span class=\"kw\">return</span> () => {\n      controller.abort();\n    };\n  }, [searchQuery]); <span class=\"cmt\">// Re-executes whenever searchQuery state changes!</span>\n\n  <span class=\"kw\">return</span> (\n    <div className=<span class=\"str\">\"dashboard\"</span>>\n      <input\n        type=<span class=\"str\">\"text\"</span>\n        placeholder=<span class=\"str\">\"Filter interns by name...\"</span>\n        value={searchQuery}\n        onChange={(e) => setSearchQuery(e.target.value)}\n      />\n\n      {isLoading && <div className=<span class=\"str\">\"spinner\"</span>><span class=\"cls\">Loading</span> active roster...</div>}\n      {errorMsg && <div className=<span class=\"str\">\"alert-error\"</span>><span class=\"cls\">Error</span>: {errorMsg}</div>}\n\n      {!isLoading && !errorMsg && (\n        <ul className=<span class=\"str\">\"intern-list\"</span>>\n          {interns.map((item) => (\n            <li key={item.id}>{item.fullName} — <span class=\"cls\">GPA</span>: {item.gpa}</li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Use Functional State Updates (setCount(prev => prev + 1)) when updating state based on previous state values. Direct updates (setCount(count + 1)) inside asynchronous closures can reference stale state closures.\n• Never omit variables used inside useEffect from its dependency array, as it causes stale closure bugs where the effect uses outdated variable values."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why must React Hooks be called only at the top level of functional components?\nA: Under the hood, React maintains component state via internal linked lists of hook call indices. If you place a hook inside an if-condition or loop, execution order changes between renders, causing React's internal index pointer to mismatch state variables.\n\nQ: What is an infinite re-render loop in useEffect and what causes it?\nA: It happens when useEffect updates a state variable that is also listed inside its own dependency array without proper conditional guards. Every render runs the effect, updating state, which triggers a new render, repeating infinitely.\n\nQ: How do you properly update an object or array stored inside useState?\nA: Since React state must be treated as immutable, spread the existing object/array into a new reference: setUser(prev => ({ ...prev, name: \"New Name\" })) or setList(prev => [...prev, newItem])."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Live Digital Clock & Auto-Refresh Roster",
              "instructions": "Create a component that auto-refreshes data on a timer.\n1. Use useState to track time (new Date().toLocaleTimeString()).\n2. Use useEffect with empty array [] setting up setInterval updating time every 1000ms.\n3. Implement return () => clearInterval(timerId) inside the effect to prevent memory leaks.\n4. Add a second state variable count tracking auto-refresh cycles every 10 seconds.",
              "hint": "Always clear interval timers inside the useEffect cleanup return block."
            },
            "resources": [
              {
                "label": "React Docs — State as a Snapshot",
                "url": "https://react.dev/learn/state-as-a-snapshot"
              },
              {
                "label": "React Docs — Synchronizing with Effects",
                "url": "https://react.dev/learn/synchronizing-with-effects"
              }
            ]
          },
          "quiz": [
            {
              "q": "What does calling a useState setter function (e.g., setCount(5)) signal to React?",
              "opts": [
                "Mutates DOM instantly",
                "Schedules a re-render of the component with updated state value",
                "Deletes component",
                "Stops execution"
              ],
              "ans": 1,
              "explanation": "State setters trigger asynchronous Virtual DOM re-render cycles."
            },
            {
              "q": "When does useEffect(fn, []) execute when passed an empty dependency array?",
              "opts": [
                "After every render",
                "Never",
                "Exactly once immediately after initial component mount",
                "When unmounting"
              ],
              "ans": 2,
              "explanation": "An empty dependency array indicates zero reactive triggers after initial mount."
            },
            {
              "q": "Why should you use setCount(prev => prev + 1) rather than setCount(count + 1) inside asynchronous callbacks?",
              "opts": [
                "It runs faster",
                "Functional updater guarantees access to the latest state value rather than stale closures captured at callback creation",
                "Syntax requirement",
                "Prevents memory leak"
              ],
              "ans": 1,
              "explanation": "Functional updates pass current fresh state directly into the updater function."
            },
            {
              "q": "What causes an infinite re-render loop inside a component using useEffect?",
              "opts": [
                "Calling fetch()",
                "Updating a state variable inside useEffect while listing that same variable in the dependency array without conditional checks",
                "Using multiple useState hooks",
                "Omitting key props"
              ],
              "ans": 1,
              "explanation": "State updates inside unconditional effect dependencies loop endlessly."
            },
            {
              "q": "What happens to the return function of useEffect when a component unmounts?",
              "opts": [
                "Ignored",
                "React executes it as a cleanup handler to abort timers, subscriptions, or network calls",
                "Throws error",
                "Runs twice"
              ],
              "ans": 1,
              "explanation": "Cleanup blocks prevent memory leaks when components disappear from UI."
            },
            {
              "q": "Why does directly mutating state (user.name = \"Arjun\") fail to update browser UI?",
              "opts": [
                "React forbids strings",
                "React compares state references using shallow equality; mutating objects in place keeps same reference pointer, failing to trigger re-render",
                "JS syntax error",
                "Causes crash"
              ],
              "ans": 1,
              "explanation": "React relies on reference changes (new Object({ ...prev })) to detect state mutations."
            },
            {
              "q": "Why must React Hooks never be placed inside conditional if statements?",
              "opts": [
                "For code readability",
                "React relies on strict execution order across renders to link hook state indices correctly",
                "Vite blocks it",
                "CSS breaks"
              ],
              "ans": 1,
              "explanation": "Conditional execution corrupts React's internal hook index ordering."
            }
          ]
        },
        {
          "id": 3,
          "title": "React Router — Navigation & Protected Routes",
          "video": {
            "youtubeId": "Ul3y1LXxzdU",
            "title": "React Router — Navigation & Protected Routes - Tutorial",
            "channel": "Web Dev Simplified",
            "duration": "45 min",
            "description": "React Router v6 client-side routing, BrowserRouter, Routes, Route, Link vs anchor tags, useNavigate, useParams, and building Auth Guard Protected Routes."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Client-Side Routing",
                "text": "Traditional multi-page web applications trigger full browser reloads from the server whenever a user clicks a link. Single Page Applications (SPAs) use Client-Side Routing: the browser URL changes via HTML5 History API, but React intercepts the navigation and swaps component trees instantly in memory without full-page reloads.\n\nReact Router v6 Core Components:\n• <BrowserRouter>: Top-level router context wrapping the entire app.\n• <Routes> & <Route path=\"/\" element={<Component />}>: Maps URL path patterns to component views.\n• <Link to=\"/dashboard\">: Replaces standard <a href> anchor tags to prevent full page reloads."
              },
              {
                "heading": "Dynamic URL Parameters & Protected Route Guards",
                "text": "• useParams() hook extracts dynamic segments embedded in URL paths (e.g., /interns/:id allows const { id } = useParams()).\n• useNavigate() hook enables programmatic navigation inside event handlers (navigate(\"/dashboard\")).\n• Protected Route Guard: A wrapper component that checks if a valid JWT token exists in localStorage or auth context. If authenticated, it renders the protected child component (<Outlet /> or children); otherwise, it redirects the user instantly using <Navigate to=\"/login\" replace />."
              },
              {
                "heading": "Production Code — SPA Router with Protected Auth Guard",
                "code": "<span class=\"kw\">import</span> <span class=\"cls\">React</span> <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n<span class=\"kw\">import</span> { <span class=\"cls\">BrowserRouter</span>, <span class=\"cls\">Routes</span>, <span class=\"cls\">Route</span>, <span class=\"cls\">Navigate</span>, <span class=\"cls\">Link</span>, useParams, useNavigate } <span class=\"kw\">from</span> <span class=\"str\">'react-router-dom'</span>;\n\n<span class=\"cmt\">// Protected Route Guard Component</span>\n<span class=\"kw\">function</span> <span class=\"cls\">ProtectedRoute</span>({ children }) {\n  <span class=\"kw\">const</span> token = localStorage.getItem(<span class=\"str\">\"jwt_token\"</span>);\n  <span class=\"kw\">if</span> (!token) {\n    <span class=\"cmt\">// Redirect unauthenticated traffic to login screen</span>\n    <span class=\"kw\">return</span> <<span class=\"cls\">Navigate</span> to=<span class=\"str\">\"/login\"</span> replace />;\n  }\n  <span class=\"kw\">return</span> children;\n}\n\n<span class=\"cmt\">// Dynamic Profile Component using useParams & useNavigate</span>\n<span class=\"kw\">function</span> <span class=\"cls\">InternProfileDetail</span>() {\n  <span class=\"kw\">const</span> { id } = useParams(); <span class=\"cmt\">// Extracts numeric ID from URL path /interns/101</span>\n  <span class=\"kw\">const</span> navigate = useNavigate();\n\n  <span class=\"kw\">return</span> (\n    <div className=<span class=\"str\">\"profile-detail\"</span>>\n      <h2><span class=\"cls\">Internship</span> <span class=\"cls\">Record</span> <span class=\"cls\">ID</span>: #{id}</h2>\n      <p><span class=\"cls\">Loaded</span> detailed transcripts <span class=\"kw\">for</span> candidate #{id}</p>\n      <button onClick={() => navigate(-1)} className=<span class=\"str\">\"back-btn\"</span>>\n        ← <span class=\"cls\">Go</span> <span class=\"cls\">Back</span> to <span class=\"cls\">Roster</span>\n      </button>\n    </div>\n  );\n}\n\n<span class=\"cmt\">// Master Application Routing Tree</span>\n<span class=\"kw\">export</span> <span class=\"kw\">default</span> <span class=\"kw\">function</span> <span class=\"cls\">AppRouter</span>() {\n  <span class=\"kw\">return</span> (\n    <<span class=\"cls\">BrowserRouter</span>>\n      <nav className=<span class=\"str\">\"navbar\"</span>>\n        <<span class=\"cls\">Link</span> to=<span class=\"str\">\"/\"</span>><span class=\"cls\">Home</span></<span class=\"cls\">Link</span>>\n        <<span class=\"cls\">Link</span> to=<span class=\"str\">\"/roster\"</span>><span class=\"cls\">Intern</span> <span class=\"cls\">Roster</span></<span class=\"cls\">Link</span>>\n        <<span class=\"cls\">Link</span> to=<span class=\"str\">\"/admin\"</span>><span class=\"cls\">Admin</span> <span class=\"cls\">Dashboard</span></<span class=\"cls\">Link</span>>\n      </nav>\n\n      <<span class=\"cls\">Routes</span>>\n        <<span class=\"cls\">Route</span> path=<span class=\"str\">\"/\"</span> element={<h1><span class=\"cls\">Welcome</span> <span class=\"cls\">Portal</span></h1>} />\n        <<span class=\"cls\">Route</span> path=<span class=\"str\">\"/login\"</span> element={<div className=<span class=\"str\">\"card\"</span>><span class=\"cls\">Login</span> <span class=\"cls\">Screen</span></div>} />\n        \n        <<span class=\"cls\">Route</span> path=<span class=\"str\">\"/roster\"</span> element={<<span class=\"cls\">InternRosterGrid</span> />} />\n        <<span class=\"cls\">Route</span> path=<span class=\"str\">\"/interns/:id\"</span> element={<<span class=\"cls\">InternProfileDetail</span> />} />\n\n        {<span class=\"cmt\">/* Protected Admin Route Guard */</span>}\n        <<span class=\"cls\">Route</span>\n          path=<span class=\"str\">\"/admin/*\"</span>\n          element={\n            <<span class=\"cls\">ProtectedRoute</span>>\n              <div className=<span class=\"str\">\"admin-panel\"</span>><span class=\"cls\">Confidential</span> <span class=\"cls\">Admin</span> <span class=\"cls\">Portal</span></div>\n            </<span class=\"cls\">ProtectedRoute</span>>\n          }\n        />\n\n        {<span class=\"cmt\">/* 404 Catch-All Wildcard Route */</span>}\n        <<span class=\"cls\">Route</span> path=<span class=\"str\">\"*\"</span> element={<h2>404 - <span class=\"cls\">Page</span> <span class=\"cls\">Not</span> <span class=\"cls\">Found</span></h2>} />\n      </<span class=\"cls\">Routes</span>>\n    </<span class=\"cls\">BrowserRouter</span>>\n  );\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Never use standard HTML <a href=\"/page\"> anchor tags inside React SPAs! Standard links force the browser to reload HTML from scratch, destroying all in-memory React state.\n• When deploying SPAs to production servers (Render/Vercel), configure server rewrite rules forwarding all 404 requests back to index.html so React Router can handle client-side URLs properly."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: How does client-side routing work without refreshing the page?\nA: React Router leverages the HTML5 History API (window.history.pushState()). When a user clicks <Link>, React Router intercepts the click, updates the URL address bar via pushState without triggering a server request, and re-renders matching route components.\n\nQ: What is the difference between <Navigate> component and useNavigate() hook?\nA: <Navigate to=\"/login\" /> is a declarative JSX component used inside rendering trees (like protected route wrappers). useNavigate() returns an imperative JavaScript function used inside event handler callbacks (like form submissions or button clicks).\n\nQ: What does the wildcard <Route path=\"*\" element={<NotFound />} /> do?\nA: It matches any URL path that failed to match previous routes defined in <Routes>, serving as a 404 Error handler."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Multi-Page Portal with Auth Guard",
              "instructions": "Set up React Router v6.\n1. Create routes: /home, /login, /dashboard, and /courses/:courseId.\n2. Write a ProtectedRoute guard component checking localStorage.getItem(\"auth_token\").\n3. Wrap /dashboard route inside ProtectedRoute.\n4. Add navigation buttons: test clicking Dashboard while logged out redirects to /login.",
              "hint": "In ProtectedRoute: if (!token) return <Navigate to=\"/login\" />;"
            },
            "resources": [
              {
                "label": "React Router Official Tutorial",
                "url": "https://reactrouter.com/en/main/start/tutorial"
              },
              {
                "label": "FreeCodeCamp — React Router v6 Guide",
                "url": "https://www.freecodecamp.org/news/learn-react-router-v6/"
              }
            ]
          },
          "quiz": [
            {
              "q": "Why must you use <Link to=\"/path\"> instead of standard HTML <a href=\"/path\"> inside React SPAs?",
              "opts": [
                "<a href> causes syntax error",
                "<a href> triggers a full browser reload from the server, wiping out all in-memory React state variables",
                "<Link> compiles faster",
                "<a href> lacks styling"
              ],
              "ans": 1,
              "explanation": "<Link> intercepts clicks to update browser URL cleanly without refreshing DOM state."
            },
            {
              "q": "Which hook extracts dynamic variable segments embedded inside URL routes like /interns/:id?",
              "opts": [
                "useLocation()",
                "useParams()",
                "useNavigate()",
                "useRoute()"
              ],
              "ans": 1,
              "explanation": "useParams() returns an object containing route parameter values."
            },
            {
              "q": "What declarative component redirects users to another route immediately when rendered?",
              "opts": [
                "<Redirect>",
                "<Navigate to=\"/login\" />",
                "<Forward>",
                "<RouteRedirect>"
              ],
              "ans": 1,
              "explanation": "<Navigate> declarative component executes instant route redirects in v6."
            },
            {
              "q": "How do you navigate programmatically inside a form submission click handler?",
              "opts": [
                "window.location = \"/home\"",
                "const navigate = useNavigate(); navigate(\"/home\");",
                "useRouter().push()",
                "Link.go(\"/home\")"
              ],
              "ans": 1,
              "explanation": "useNavigate() provides programmatic navigation control inside JS functions."
            },
            {
              "q": "What does the wildcard path <Route path=\"*\" element={<NotFound />} /> match?",
              "opts": [
                "Only root path",
                "Any URL path that did not match any prior routes in the switch (404 Fallback)",
                "Admin routes",
                "API calls"
              ],
              "ans": 1,
              "explanation": "Wildcard * catches all unmatched paths for 404 pages."
            },
            {
              "q": "What underlying HTML5 browser feature enables client-side routing without server page reloads?",
              "opts": [
                "WebSockets",
                "HTML5 History API (window.history.pushState)",
                "LocalStorage",
                "Service Workers"
              ],
              "ans": 1,
              "explanation": "pushState modifies address bar URLs without triggering HTTP page requests."
            },
            {
              "q": "When deploying a React SPA to Vercel/Render, why must server rewrite rules redirect 404s to index.html?",
              "opts": [
                "To save bandwidth",
                "Because direct browser navigation to deep SPA paths (/dashboard) looks for static server files; rewriting to index.html lets React Router handle the route",
                "Required for HTTPS",
                "To compress HTML"
              ],
              "ans": 1,
              "explanation": "SPAs require server fallback routing to serve index.html on deep URL reloads."
            }
          ]
        },
        {
          "id": 4,
          "title": "Axios & API Integration",
          "video": {
            "youtubeId": "6LyagkoRWYA",
            "title": "Axios & API Integration - Tutorial",
            "channel": "Dave Gray",
            "duration": "45 min",
            "description": "Configuring Axios client instances, global request/response interceptors for JWT injection, centralized service files, and structured error handling."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Axios vs Vanilla Fetch",
                "text": "While browser native fetch() works well, Axios is the enterprise standard HTTP client library for React applications because it provides:\n1. Automatic JSON Serialization/Deserialization (no manual res.json() calls needed).\n2. Request/Response Interceptors: Global middleware wrapping HTTP traffic.\n3. Automatic HTTP Error Rejection: Rejects promises on HTTP 4xx/5xx status codes (unlike fetch which resolves successfully even on 404/500 errors).\n4. Configurable timeouts and clean cancellation."
              },
              {
                "heading": "Global Interceptors & Centralized API Services",
                "text": "Never scatter raw axios.get(\"http://localhost:8080/...\") URLs across component files!\n• Create a centralized Axios Client Instance with a shared baseURL and timeout.\n• Request Interceptor: Automatically inspects localStorage for a JWT token and injects Authorization: Bearer <token> into every outbound API request header.\n• Response Interceptor: Intercepts inbound HTTP responses globally. If an HTTP 401 Unauthorized status is returned (expired token), the interceptor automatically clears localStorage and redirects the user cleanly to the login screen."
              },
              {
                "heading": "Production Code — Central Axios Instance with Interceptors",
                "code": "<span class=\"kw\">import</span> axios <span class=\"kw\">from</span> <span class=\"str\">'axios'</span>;\n\n<span class=\"cmt\">// 1. Create configured Axios client instance</span>\n<span class=\"kw\">const</span> apiClient = axios.create({\n  baseURL: <span class=\"kw\">import</span>.meta.env.VITE_API_BASE_URL || <span class=\"str\">\"http://localhost:8080/api/v1\"</span>,\n  timeout: 10000, <span class=\"cmt\">// 10 seconds timeout limit</span>\n  headers: {\n    <span class=\"str\">\"Content-Type\"</span>: <span class=\"str\">\"application/json\"</span>\n  }\n});\n\n<span class=\"cmt\">// 2. Request Interceptor: Auto-attach JWT token from localStorage</span>\napiClient.interceptors.request.use(\n  (config) => {\n    <span class=\"kw\">const</span> jwtToken = localStorage.getItem(<span class=\"str\">\"jwt_token\"</span>);\n    <span class=\"kw\">if</span> (jwtToken && config.headers) {\n      config.headers.<span class=\"cls\">Authorization</span> = `<span class=\"cls\">Bearer</span> ${jwtToken}`;\n    }\n    <span class=\"kw\">return</span> config;\n  },\n  (error) => <span class=\"cls\">Promise</span>.reject(error)\n);\n\n<span class=\"cmt\">// 3. Response Interceptor: Global error logging and 401 redirection</span>\napiClient.interceptors.response.use(\n  (response) => response.data, <span class=\"cmt\">// Unwraps axios data object automatically</span>\n  (error) => {\n    <span class=\"kw\">if</span> (error.response?.status === 401) {\n      console.warn(<span class=\"str\">\"Session expired or unauthorized. Redirecting to login...\"</span>);\n      localStorage.removeItem(<span class=\"str\">\"jwt_token\"</span>);\n      window.location.href = <span class=\"str\">\"/login\"</span>;\n    }\n    <span class=\"cmt\">// Return formatted error message to calling component</span>\n    <span class=\"kw\">const</span> errorMessage = error.response?.data?.error || error.message || <span class=\"str\">\"Network API error\"</span>;\n    <span class=\"kw\">return</span> <span class=\"cls\">Promise</span>.reject(<span class=\"kw\">new</span> <span class=\"cls\">Error</span>(errorMessage));\n  }\n);\n\n<span class=\"cmt\">// 4. Decoupled Student Service Layer</span>\n<span class=\"kw\">export</span> <span class=\"kw\">const</span> internApiService = {\n  fetchAll: (params) => apiClient.get(<span class=\"str\">\"/interns\"</span>, { params }),\n  fetchById: (id) => apiClient.get(`/interns/${id}`),\n  create: (data) => apiClient.post(<span class=\"str\">\"/interns\"</span>, data),\n  update: (id, data) => apiClient.put(`/interns/${id}`, data),\n  delete: (id) => apiClient.delete(`/interns/${id}`)\n};"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Store API environment endpoints inside .env files (VITE_API_BASE_URL) rather than hardcoding localhost strings.\n• Keep components clean: React components should call internApiService.fetchAll() rather than interacting directly with Axios APIs."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why does native fetch() fail to catch HTTP 404 or 500 errors inside .catch() blocks?\nA: According to fetch API specifications, network promises reject ONLY upon network connection failure (DNS failure or offline). HTTP 404 or 500 responses are considered completed HTTP transmissions. You must manually check if (!res.ok) throw new Error(). Axios automatically rejects promises on 4xx/5xx responses.\n\nQ: What is the primary benefit of Axios Request Interceptors?\nA: Eliminates repetitive code. Instead of manually reading localStorage and attaching Authorization headers inside 50 different component API calls, the request interceptor attaches the JWT header automatically to every outbound call."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Central API Client Layer",
              "instructions": "Install axios via npm install axios.\n1. Create src/services/apiClient.js setting baseURL to http://localhost:8080/api/v1.\n2. Configure a request interceptor attaching Authorization Bearer token.\n3. Create courseService.js exporting getAllCourses() and createCourse(data).\n4. Import courseService into a React component and fetch items inside useEffect.",
              "hint": "In your response interceptor, returning response.data saves components from doing res.data.data."
            },
            "resources": [
              {
                "label": "Axios Official Documentation",
                "url": "https://axios-http.com/docs/intro"
              },
              {
                "label": "Baeldung — Axios Interceptors in React",
                "url": "https://www.baeldung.com/axios-interceptors"
              }
            ]
          },
          "quiz": [
            {
              "q": "How does Axios handle HTTP 404 or 500 server error responses compared to native fetch()?",
              "opts": [
                "Resolves successfully like fetch",
                "Automatically rejects the promise, triggering .catch() blocks cleanly",
                "Crashes browser",
                "Retries infinitely"
              ],
              "ans": 1,
              "explanation": "Axios automatically treats HTTP status codes outside 2xx as rejected errors."
            },
            {
              "q": "What is the primary architectural purpose of an Axios Request Interceptor?",
              "opts": [
                "To format CSS",
                "To intercept outbound HTTP requests globally, attaching authorization headers or logging timestamps automatically",
                "To encrypt local files",
                "To speed up DNS"
              ],
              "ans": 1,
              "explanation": "Request interceptors apply shared cross-cutting logic before packets leave browser."
            },
            {
              "q": "What action should an Axios Response Interceptor execute upon receiving HTTP 401 Unauthorized?",
              "opts": [
                "Ignore response",
                "Clear expired tokens from localStorage and redirect user cleanly to /login screen",
                "Retry request 100 times",
                "Show alert box only"
              ],
              "ans": 1,
              "explanation": "401 indicates invalid/expired session; auto-logout prevents broken states."
            },
            {
              "q": "Why should React components call abstracted service methods (studentService.getAll()) rather than raw axios.get()?",
              "opts": [
                "Separation of concerns: decouples UI rendering components from underlying network communication details",
                "Compiles faster",
                "Vite requires it",
                "Axios blocks components"
              ],
              "ans": 0,
              "explanation": "Service layers centralize endpoint URLs and error mapping."
            },
            {
              "q": "How do you access environment variables inside a Vite React application?",
              "opts": [
                "process.env.API_URL",
                "import.meta.env.VITE_API_BASE_URL",
                "window.env.API",
                "config.env"
              ],
              "ans": 1,
              "explanation": "Vite exposes environment properties prefixed with VITE_ via import.meta.env."
            },
            {
              "q": "Does Axios require calling JSON.stringify() manually when posting JavaScript objects?",
              "opts": [
                "Yes, always",
                "No, Axios automatically serializes JS objects to JSON payload bodies",
                "Only for nested objects",
                "Only in POST requests"
              ],
              "ans": 1,
              "explanation": "Axios automatically sets Content-Type: application/json and serializes objects."
            },
            {
              "q": "Where should JWT access tokens be stored on the browser client for Axios interceptor retrieval?",
              "opts": [
                "In React component state only",
                "localStorage or sessionStorage (or HTTP-only cookies for maximum security)",
                "In CSS variables",
                "In URL parameters"
              ],
              "ans": 1,
              "explanation": "Client storage persists tokens across page reloads."
            }
          ]
        },
        {
          "id": 5,
          "title": "React Context & Forms",
          "video": {
            "youtubeId": "5LrDIWkK_Bc",
            "title": "React Context & Forms - Tutorial",
            "channel": "Traversy Media",
            "duration": "1 hr",
            "description": "Eliminating Prop Drilling using React Context API (createContext, useContext, Provider), and building performant validated forms using React Hook Form."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Global State & Prop Drilling Elimination",
                "text": "Prop Drilling occurs when you must pass data (like user login profiles or theme settings) through 5 intermediate nested components just so a deep child component can access it.\n\nReact Context API solves this by creating a global state broadcasting channel:\n1. createContext(): Creates context object.\n2. <AuthContext.Provider value={{ user, login, logout }}>: Wraps application tree.\n3. useContext(AuthContext): Any nested component consumes global values directly without prop passing!"
              },
              {
                "heading": "High-Performance Forms with React Hook Form",
                "text": "Standard controlled forms (useState for every input field) cause the entire component to re-render on every single keystroke! In complex 20-field registration forms, this causes UI lag.\n\nReact Hook Form (useForm()) uses uncontrolled input refs under the hood. It triggers zero re-renders during typing while providing declarative validation rules (required, minLength, pattern) and clean error messages."
              },
              {
                "heading": "Production Code — Global AuthContext & React Hook Form",
                "code": "<span class=\"kw\">import</span> <span class=\"cls\">React</span>, { createContext, useContext, useState } <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n<span class=\"kw\">import</span> { useForm } <span class=\"kw\">from</span> <span class=\"str\">'react-hook-form'</span>;\n\n<span class=\"cmt\">// 1. Create Global Auth Context</span>\n<span class=\"kw\">const</span> <span class=\"cls\">AuthContext</span> = createContext(<span class=\"kw\">null</span>);\n\n<span class=\"kw\">export</span> <span class=\"kw\">function</span> <span class=\"cls\">AuthProvider</span>({ children }) {\n  <span class=\"kw\">const</span> [user, setUser] = useState(() => {\n    <span class=\"kw\">const</span> saved = localStorage.getItem(<span class=\"str\">\"user_profile\"</span>);\n    <span class=\"kw\">return</span> saved ? <span class=\"cls\">JSON</span>.parse(saved) : <span class=\"kw\">null</span>;\n  });\n\n  <span class=\"kw\">const</span> login = <span class=\"kw\">async</span> (email, password) => {\n    <span class=\"cmt\">// Simulated API call</span>\n    <span class=\"kw\">const</span> token = <span class=\"str\">\"mock_jwt_token_998877\"</span>;\n    <span class=\"kw\">const</span> profile = { email, role: <span class=\"str\">\"ROLE_USER\"</span> };\n    localStorage.setItem(<span class=\"str\">\"jwt_token\"</span>, token);\n    localStorage.setItem(<span class=\"str\">\"user_profile\"</span>, <span class=\"cls\">JSON</span>.stringify(profile));\n    setUser(profile);\n  };\n\n  <span class=\"kw\">const</span> logout = () => {\n    localStorage.clear();\n    setUser(<span class=\"kw\">null</span>);\n  };\n\n  <span class=\"kw\">return</span> (\n    <<span class=\"cls\">AuthContext</span>.<span class=\"cls\">Provider</span> value={{ user, isAuthenticated: !!user, login, logout }}>\n      {children}\n    </<span class=\"cls\">AuthContext</span>.<span class=\"cls\">Provider</span>>\n  );\n}\n\n<span class=\"cmt\">// Custom Hook for clean context consumption</span>\n<span class=\"kw\">export</span> <span class=\"kw\">const</span> useAuth = () => useContext(<span class=\"cls\">AuthContext</span>);\n\n<span class=\"cmt\">// 2. Performant Registration Form using React Hook Form</span>\n<span class=\"kw\">export</span> <span class=\"kw\">function</span> <span class=\"cls\">InternRegistrationForm</span>() {\n  <span class=\"kw\">const</span> { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();\n  <span class=\"kw\">const</span> { login } = useAuth();\n\n  <span class=\"kw\">const</span> onSubmitForm = <span class=\"kw\">async</span> (data) => {\n    <span class=\"kw\">await</span> login(data.email, data.password);\n    alert(<span class=\"str\">\"Successfully registered and authenticated!\"</span>);\n  };\n\n  <span class=\"kw\">return</span> (\n    <form onSubmit={handleSubmit(onSubmitForm)} className=<span class=\"str\">\"reg-form\"</span>>\n      <div className=<span class=\"str\">\"field-group\"</span>>\n        <label><span class=\"cls\">Candidate</span> <span class=\"cls\">Email</span>:</label>\n        <input\n          type=<span class=\"str\">\"email\"</span>\n          {...register(<span class=\"str\">\"email\"</span>, {\n            required: <span class=\"str\">\"Email address is required\"</span>,\n            pattern: { value: /^\\<span class=\"cls\">S</span>+@\\<span class=\"cls\">S</span>+$/i, message: <span class=\"str\">\"Invalid email structure\"</span> }\n          })}\n        />\n        {errors.email && <span className=<span class=\"str\">\"error-text\"</span>>{errors.email.message}</span>}\n      </div>\n\n      <div className=<span class=\"str\">\"field-group\"</span>>\n        <label><span class=\"cls\">Password</span>:</label>\n        <input\n          type=<span class=\"str\">\"password\"</span>\n          {...register(<span class=\"str\">\"password\"</span>, {\n            required: <span class=\"str\">\"Password required\"</span>,\n            minLength: { value: 6, message: <span class=\"str\">\"Must be at least 6 characters\"</span> }\n          })}\n        />\n        {errors.password && <span className=<span class=\"str\">\"error-text\"</span>>{errors.password.message}</span>}\n      </div>\n\n      <button type=<span class=\"str\">\"submit\"</span> disabled={isSubmitting}>\n        {isSubmitting ? <span class=\"str\">\"Submitting...\"</span> : <span class=\"str\">\"Complete Registration\"</span>}\n      </button>\n    </form>\n  );\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Do not put high-frequency rapidly changing state (like mouse coordinates or live video timers) into React Context; every change forces all consuming child components to re-render.\n• Always wrap your context consumer logic in a custom hook (useAuth()) to encapsulate null checks and keep component code clean."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What problem does React Context API solve?\nA: It eliminates Prop Drilling by providing a mechanism to broadcast global state (user profile, authentication tokens, UI themes) directly to deeply nested components without explicitly passing props through intermediate layers.\n\nQ: Why is React Hook Form faster than standard controlled React useState forms?\nA: Standard controlled inputs trigger a full Virtual DOM re-render on every keystroke. React Hook Form registers DOM element refs directly, bypassing intermediate re-renders entirely until form submission or validation triggers.\n\nQ: What happens if a component calls useContext(AuthContext) outside an <AuthProvider> wrapper?\nA: useContext returns the default value passed into createContext(defaultValue). If null was passed, accessing properties causes a TypeError."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Global Theme & Login Portal",
              "instructions": "Combine Context and React Hook Form.\n1. Create ThemeContext toggling \"light\" and \"dark\" modes globally.\n2. Create AuthProvider wrapping your app.\n3. Build LoginForm component using useForm(). Validate email pattern and password length >= 6.\n4. Upon submit, call login() from useAuth() and display a welcome banner.",
              "hint": "In useForm, register inputs with {...register(\"fieldName\", { required: true })}."
            },
            "resources": [
              {
                "label": "React Docs — Passing Data Deeply with Context",
                "url": "https://react.dev/learn/passing-data-deeply-with-context"
              },
              {
                "label": "React Hook Form Official Guide",
                "url": "https://react-hook-form.com/get-started"
              }
            ]
          },
          "quiz": [
            {
              "q": "What architectural problem does React Context API solve?",
              "opts": [
                "CSS styling conflicts",
                "Prop Drilling (passing props through multiple intermediate component layers unnecessarily)",
                "SQL query delays",
                "Memory leaks"
              ],
              "ans": 1,
              "explanation": "Context broadcasts state directly to deep tree consumers."
            },
            {
              "q": "Which hook allows a child component to consume data broadcasted by a Context Provider?",
              "opts": [
                "useReducer()",
                "useContext()",
                "useState()",
                "useConsumer()"
              ],
              "ans": 1,
              "explanation": "useContext(MyContext) reads current provider context values."
            },
            {
              "q": "Why does React Hook Form outperform standard useState controlled input forms?",
              "opts": [
                "It uses WebAssembly",
                "It uses uncontrolled input refs under the hood, eliminating full component re-renders on every keystroke",
                "It disables validation",
                "It runs on server"
              ],
              "ans": 1,
              "explanation": "Ref-based form tracking eliminates per-character Virtual DOM diffing."
            },
            {
              "q": "What function from useForm() connects an HTML input element to React Hook Form tracking?",
              "opts": [
                "connect()",
                "register(\"fieldName\")",
                "bind()",
                "track()"
              ],
              "ans": 1,
              "explanation": "{...register(\"field\")} injects ref, name, and validation rules into inputs."
            },
            {
              "q": "Where should <AuthProvider> be placed in the component hierarchy?",
              "opts": [
                "Inside individual child forms",
                "Wrapping the top-level application root (<App />) so all nested routes and components can access auth state",
                "In CSS file",
                "Only in footer"
              ],
              "ans": 1,
              "explanation": "Providers must wrap all potential child tree consumers."
            },
            {
              "q": "Why should you avoid placing rapidly updating state (like live mouse X/Y coordinates) inside React Context?",
              "opts": [
                "It crashes browser",
                "Whenever context value updates, ALL components consuming that context re-render simultaneously, causing severe UI lag",
                "Context forbids numbers",
                "It throws syntax error"
              ],
              "ans": 1,
              "explanation": "Context updates trigger re-renders across all subscribing tree nodes."
            },
            {
              "q": "How do you access validation error messages inside React Hook Form?",
              "opts": [
                "form.getErrors()",
                "Destructure formState: { errors } from useForm()",
                "alert(errors)",
                "window.errors"
              ],
              "ans": 1,
              "explanation": "errors object inside formState contains validation violation messages."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "What core performance advantage does the Virtual DOM provide over raw browser DOM manipulation?",
          "opts": [
            "Encrypts HTML",
            "Diffs previous and next virtual trees in memory (Reconciliation) to apply minimal exact batch mutations to browser DOM",
            "Deletes JavaScript",
            "Disables CSS"
          ],
          "ans": 1,
          "explanation": "Reconciliation avoids slow DOM redraws by batching minimal updates."
        },
        {
          "q": "Why must dynamic lists mapped via .map() always include a unique stable 'key' prop?",
          "opts": [
            "To color items",
            "Keys allow Virtual DOM reconciliation to match previous node identities across re-renders without re-creating entire lists",
            "Vite blocks compilation",
            "SQL requires it"
          ],
          "ans": 1,
          "explanation": "Keys maintain node identity consistency across tree re-evaluations."
        },
        {
          "q": "When does useEffect(fn, [userId]) execute?",
          "opts": [
            "Only when unmounting",
            "Once on mount AND whenever userId changes between render cycles",
            "Every millisecond",
            "Never"
          ],
          "ans": 1,
          "explanation": "Dependency array variables trigger re-execution whenever their values alter."
        },
        {
          "q": "Why must you execute clearInterval() or abort network calls inside the useEffect cleanup return block?",
          "opts": [
            "To free up CSS",
            "To prevent memory leaks and race conditions when components unmount before async operations complete",
            "To restart server",
            "Required by JSX"
          ],
          "ans": 1,
          "explanation": "Cleanup handlers dismantle background timers and dangling network listeners."
        },
        {
          "q": "How does <Link to=\"/roster\"> navigate without triggering a full page reload?",
          "opts": [
            "It uses FTP",
            "It leverages HTML5 History API (pushState) to swap React component views in memory instantly",
            "It reloads iframe",
            "It uses cookies"
          ],
          "ans": 1,
          "explanation": "History API updates address bars without HTTP page requests."
        },
        {
          "q": "What is the function of an Axios Request Interceptor in our SPA architecture?",
          "opts": [
            "Compiles JSX",
            "Automatically attaches stored JWT Authorization headers to every outbound API request globally",
            "Sorts arrays",
            "Clears database"
          ],
          "ans": 1,
          "explanation": "Request interceptors inject shared auth tokens seamlessly."
        },
        {
          "q": "What action does our Axios Response Interceptor perform upon intercepting HTTP 401 Unauthorized?",
          "opts": [
            "Ignores response",
            "Clears expired tokens from localStorage and redirects user cleanly to /login screen",
            "Retries 50 times",
            "Shuts down tab"
          ],
          "ans": 1,
          "explanation": "401 triggers clean session termination and re-authentication routing."
        },
        {
          "q": "What problem does React Context API eliminate?",
          "opts": [
            "Prop Drilling (passing props through numerous intermediate component layers unnecesarily)",
            "Network timeouts",
            "SQL injection",
            "CSS specificity"
          ],
          "ans": 0,
          "explanation": "Context broadcasts state directly to deep consumers without intermediate prop passing."
        },
        {
          "q": "Why does React Hook Form achieve superior rendering performance over standard useState forms?",
          "opts": [
            "Runs in C++",
            "Uses uncontrolled DOM element refs, preventing full component re-renders on every single keystroke",
            "Disables validation",
            "Stores in DB"
          ],
          "ans": 1,
          "explanation": "Ref-based tracking decouples keystrokes from Virtual DOM render cycles."
        },
        {
          "q": "Why should React components interact with abstracted API services (internService.getAll()) rather than direct axios calls?",
          "opts": [
            "Decouples UI rendering logic from networking endpoints, enabling centralized error handling and easy refactoring",
            "Compiles faster",
            "Vite blocks raw axios",
            "Reduces bundle size"
          ],
          "ans": 0,
          "explanation": "Separation of concerns isolates view rendering from networking infrastructure."
        }
      ],
      "miniProject": {
        "title": "Week 7 Capstone Project — Full-Featured SPA Internship Roster & Portal",
        "description": "Build a complete, responsive React 18 Single Page Application featuring Vite tooling, React Router v6 navigation, Axios interceptor authentication, and React Hook Form validation.",
        "requirements": [
          "Initialize Vite React project with React Router v6, Axios, and React Hook Form dependencies.",
          "Construct Global AuthContext managing login state, storing JWT tokens inside localStorage.",
          "Configure centralized Axios API Client with request interceptor attaching Bearer JWT headers and response interceptor auto-redirecting on 401 Unauthorized.",
          "Build Navigation Navbar and AppRouter defining routes: / (Home), /login, /roster, and /interns/:id.",
          "Implement ProtectedRoute guard wrapper securing /roster and /interns/:id against unauthenticated access.",
          "Implement InternRosterGrid component fetching data from backend inside useEffect (with AbortController cleanup), rendering mapped StudentCard items with unique keys.",
          "Build performant CandidateRegistrationModal using React Hook Form enforcing email regex patterns and password length constraints.",
          "Ensure fully responsive styling and clean error state displays across all network workflows."
        ]
      }
    },
    {
      "id": 8,
      "title": "React Advanced & Full Stack Integration",
      "topics": [
        {
          "id": 1,
          "title": "React State Management & Custom Hooks",
          "video": {
            "youtubeId": "5LrDIWkK_Bc",
            "title": "React State Management & Custom Hooks - Tutorial",
            "channel": "Traversy Media",
            "duration": "1 hr",
            "description": "Advanced state architecture: building reusable custom hooks (useFetch, useDebounce), managing complex state machines with useReducer, and performance memoization."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Reusable Custom Hooks & useReducer",
                "text": "As applications grow, standard useState + useEffect blocks get duplicated across dozens of components. Custom Hooks allow extracting stateful logic into reusable modular JavaScript functions starting with the naming prefix 'use' (e.g., useFetch, useDebounce, useLocalStorage).\n\nWhen state logic becomes intricate (e.g., multiple sub-values dependent on each other, or complex state transition workflows), useState becomes unwieldy. useReducer(reducer, initialState) models state transitions using Redux-style action dispatching: (state, action) => newState."
              },
              {
                "heading": "Debouncing High-Frequency Events",
                "text": "When a user types inside a live search bar, dispatching API fetch calls on every keystroke fires 10 requests per second, overloading backend servers and causing race conditions.\n\nA Custom Debounce Hook (useDebounce) delays updating a reactive value until a specified idle duration (e.g., 500ms) has passed since the last typing event."
              },
              {
                "heading": "Production Code — Custom useFetch & useDebounce Hooks",
                "code": "<span class=\"kw\">import</span> { useState, useEffect, useReducer } <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n\n<span class=\"cmt\">// 1. Custom Hook: useDebounce delays reactive state updates</span>\n<span class=\"kw\">export</span> <span class=\"kw\">function</span> useDebounce(value, delayMs = 500) {\n  <span class=\"kw\">const</span> [debouncedValue, setDebouncedValue] = useState(value);\n\n  useEffect(() => {\n    <span class=\"cmt\">// Set timer to update value after idle delay</span>\n    <span class=\"kw\">const</span> timerId = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delayMs);\n\n    <span class=\"cmt\">// Cleanup: clears timer if value changes before delay expires!</span>\n    <span class=\"kw\">return</span> () => clearTimeout(timerId);\n  }, [value, delayMs]);\n\n  <span class=\"kw\">return</span> debouncedValue;\n}\n\n<span class=\"cmt\">// 2. Custom Hook: useFetch encapsulating async state machines</span>\n<span class=\"kw\">const</span> fetchReducer = (state, action) => {\n  <span class=\"kw\">switch</span> (action.type) {\n    <span class=\"kw\">case</span> <span class=\"str\">'FETCH_INIT'</span>:\n      <span class=\"kw\">return</span> { ...state, isLoading: <span class=\"kw\">true</span>, error: <span class=\"kw\">null</span> };\n    <span class=\"kw\">case</span> <span class=\"str\">'FETCH_SUCCESS'</span>:\n      <span class=\"kw\">return</span> { isLoading: <span class=\"kw\">false</span>, data: action.payload, error: <span class=\"kw\">null</span> };\n    <span class=\"kw\">case</span> <span class=\"str\">'FETCH_FAILURE'</span>:\n      <span class=\"kw\">return</span> { isLoading: <span class=\"kw\">false</span>, data: <span class=\"kw\">null</span>, error: action.payload };\n    <span class=\"kw\">default</span>:\n      <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">Error</span>(`<span class=\"cls\">Unhandled</span> action type: ${action.type}`);\n  }\n};\n\n<span class=\"kw\">export</span> <span class=\"kw\">function</span> useFetch(endpointUrl) {\n  <span class=\"kw\">const</span> [state, dispatch] = useReducer(fetchReducer, {\n    data: <span class=\"kw\">null</span>,\n    isLoading: <span class=\"kw\">true</span>,\n    error: <span class=\"kw\">null</span>\n  });\n\n  useEffect(() => {\n    <span class=\"kw\">let</span> isMounted = <span class=\"kw\">true</span>;\n    dispatch({ type: <span class=\"str\">'FETCH_INIT'</span> });\n\n    fetch(endpointUrl)\n      .then((res) => {\n        <span class=\"kw\">if</span> (!res.ok) <span class=\"kw\">throw</span> <span class=\"kw\">new</span> <span class=\"cls\">Error</span>(<span class=\"str\">\"HTTP Fetch Error: \"</span> + res.status);\n        <span class=\"kw\">return</span> res.json();\n      })\n      .then((payload) => {\n        <span class=\"kw\">if</span> (isMounted) dispatch({ type: <span class=\"str\">'FETCH_SUCCESS'</span>, payload });\n      })\n      .<span class=\"kw\">catch</span>((error) => {\n        <span class=\"kw\">if</span> (isMounted) dispatch({ type: <span class=\"str\">'FETCH_FAILURE'</span>, payload: error.message });\n      });\n\n    <span class=\"kw\">return</span> () => { isMounted = <span class=\"kw\">false</span>; };\n  }, [endpointUrl]);\n\n  <span class=\"kw\">return</span> state;\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Strict Naming Convention: Custom hooks MUST begin with 'use' (e.g., useTheme). React linter rules enforce this to verify hook execution ordering rules.\n• Always clean up timers inside custom hooks returning cleanup functions."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Can custom hooks share state across multiple components like React Context?\nA: No! Custom hooks share stateful LOGIC, not state instances. Every component calling useFetch(\"/url\") gets its own independent internal state variables.\n\nQ: When should you choose useReducer over useState?\nA: Choose useReducer when: 1) State transitions involve complex conditional branches. 2) Next state depends heavily on previous state across multiple sub-properties. 3) You want to decouple state transition rules from UI component rendering logic."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build useLocalStorage Custom Hook",
              "instructions": "Create a custom hook useLocalStorage(key, initialValue).\n1. Initialize state by reading localStorage.getItem(key); if null, return initialValue.\n2. Wrap state updates in useEffect setting localStorage.setItem(key, JSON.stringify(value)).\n3. Consume useLocalStorage inside a component persisting user UI settings across browser refreshes.",
              "hint": "Handle JSON.parse errors cleanly inside try-catch blocks during state initialization."
            },
            "resources": [
              {
                "label": "React Docs — Reusing Logic with Custom Hooks",
                "url": "https://react.dev/learn/reusing-logic-with-custom-hooks"
              },
              {
                "label": "Baeldung — React useReducer Deep Dive",
                "url": "https://www.baeldung.com/react-usereducer-hook"
              }
            ]
          },
          "quiz": [
            {
              "q": "What naming rule must all React Custom Hooks adhere to?",
              "opts": [
                "Must end with Hook",
                "Must begin with prefix 'use' (e.g., useFetch)",
                "Must begin with get",
                "Must be uppercase"
              ],
              "ans": 1,
              "explanation": "React linter rules check 'use' prefix to verify hook execution rules."
            },
            {
              "q": "Do two components calling the same custom hook share the exact same state instance?",
              "opts": [
                "Yes, like Context",
                "No, custom hooks reuse stateful logic; each component receives completely independent state variables",
                "Only if static",
                "Only in production"
              ],
              "ans": 1,
              "explanation": "Custom hooks encapsulate stateful functions, generating isolated state per invocation."
            },
            {
              "q": "How does useDebounce protect backend servers during fast live typing?",
              "opts": [
                "Encrypts keystrokes",
                "Delays dispatching updates until typing stops for a configured idle duration, preventing request flooding",
                "Locks keyboard",
                "Compresses JSON"
              ],
              "ans": 1,
              "explanation": "Debouncing throttles high-frequency events into single consolidated updates."
            },
            {
              "q": "What arguments does useReducer accept?",
              "opts": [
                "(state, props)",
                "(reducerFunction, initialState)",
                "(url, headers)",
                "(action, dispatch)"
              ],
              "ans": 1,
              "explanation": "useReducer takes a reducer transition function and an initial state object."
            },
            {
              "q": "In useReducer, what does the dispatch() function do?",
              "opts": [
                "Deletes state",
                "Sends an action object ({ type: 'ACTION_NAME', payload }) to the reducer to compute next state",
                "Compiles JSX",
                "Aborts network"
              ],
              "ans": 1,
              "explanation": "dispatch triggers reducer evaluation to update state transitions cleanly."
            },
            {
              "q": "Why should cleanup timers (clearTimeout) be returned inside useEffect when debouncing?",
              "opts": [
                "To save RAM",
                "To cancel pending timeout callbacks if the user types another keystroke before the previous delay expires",
                "Required by Vite",
                "To speed up CSS"
              ],
              "ans": 1,
              "explanation": "Clearing prior timers prevents outdated callbacks from overwriting fresh inputs."
            },
            {
              "q": "When is useReducer preferred over useState?",
              "opts": [
                "For booleans",
                "When state transitions involve complex conditional branches or interdependent sub-values",
                "Only in classes",
                "For simple strings"
              ],
              "ans": 1,
              "explanation": "useReducer centralizes intricate transition logic cleanly."
            }
          ]
        },
        {
          "id": 2,
          "title": "File Uploads & Progress Indicators",
          "video": {
            "youtubeId": "RoGnO-GNRTI",
            "title": "File Uploads & Progress Indicators - Tutorial",
            "channel": "Amigoscode",
            "duration": "1 hr",
            "description": "Full-stack binary file transmission: HTML5 file inputs, FormData serialization, Axios multipart/form-data, upload progress tracking, and Spring Boot @RequestPart handling."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Multipart Binary Transmission",
                "text": "Sending binary files (profile photos, PDF resumes) requires different mechanics than JSON payloads. JSON cannot transmit raw binary streams cleanly without heavy 33% Base64 encoding overhead.\n\nFull-Stack Pipeline:\n1. Frontend: Extract File object from <input type=\"file\">.\n2. Serialize: Append file into HTML5 FormData object.\n3. Axios Transmission: Post with Content-Type: multipart/form-data.\n4. Progress Tracking: Hook into Axios onUploadProgress event measuring loaded vs total bytes.\n5. Spring Boot Backend: Intercept using @RequestParam(\"file\") MultipartFile file or @RequestPart."
              },
              {
                "heading": "Instant Client-Side Previews & Security Validation",
                "text": "• Instant Previews: Before uploading, generate an immediate browser blob URL using URL.createObjectURL(file) to display preview images without server roundtrips.\n• Security Hardening: Validate file extensions and maximum byte sizes on BOTH client frontend and Spring Boot backend (@MultipartConfig(maxFileSize=\"5MB\"))."
              },
              {
                "heading": "Production Code — Photo Upload Component with Progress Bar",
                "code": "<span class=\"kw\">import</span> <span class=\"cls\">React</span>, { useState } <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n<span class=\"kw\">import</span> axios <span class=\"kw\">from</span> <span class=\"str\">'axios'</span>;\n\n<span class=\"kw\">export</span> <span class=\"kw\">function</span> <span class=\"cls\">ProfilePhotoUploader</span>({ internId, onUploadComplete }) {\n  <span class=\"kw\">const</span> [selectedFile, setSelectedFile] = useState(<span class=\"kw\">null</span>);\n  <span class=\"kw\">const</span> [previewUrl, setPreviewUrl] = useState(<span class=\"kw\">null</span>);\n  <span class=\"kw\">const</span> [uploadProgress, setUploadProgress] = useState(0);\n  <span class=\"kw\">const</span> [isUploading, setIsUploading] = useState(<span class=\"kw\">false</span>);\n\n  <span class=\"kw\">const</span> handleFileSelect = (event) => {\n    <span class=\"kw\">const</span> file = event.target.files[0];\n    <span class=\"kw\">if</span> (!file) <span class=\"kw\">return</span>;\n\n    <span class=\"cmt\">// Client-side security validation (Max 2MB, JPG/PNG only)</span>\n    <span class=\"kw\">if</span> (file.size > 2 * 1024 * 1024) {\n      alert(<span class=\"str\">\"Validation Error: File size exceeds 2MB limit.\"</span>);\n      <span class=\"kw\">return</span>;\n    }\n    <span class=\"kw\">if</span> (![<span class=\"str\">\"image/jpeg\"</span>, <span class=\"str\">\"image/png\"</span>].includes(file.type)) {\n      alert(<span class=\"str\">\"Validation Error: Only JPG and PNG formats permitted.\"</span>);\n      <span class=\"kw\">return</span>;\n    }\n\n    setSelectedFile(file);\n    setPreviewUrl(<span class=\"cls\">URL</span>.createObjectURL(file)); <span class=\"cmt\">// Generate instant local blob preview</span>\n  };\n\n  <span class=\"kw\">const</span> executeFileUpload = <span class=\"kw\">async</span> () => {\n    <span class=\"kw\">if</span> (!selectedFile) <span class=\"kw\">return</span>;\n    setIsUploading(<span class=\"kw\">true</span>);\n\n    <span class=\"cmt\">// Package file into HTML5 FormData container</span>\n    <span class=\"kw\">const</span> formData = <span class=\"kw\">new</span> <span class=\"cls\">FormData</span>();\n    formData.append(<span class=\"str\">\"profileImage\"</span>, selectedFile);\n\n    <span class=\"kw\">try</span> {\n      <span class=\"kw\">const</span> token = localStorage.getItem(<span class=\"str\">\"jwt_token\"</span>);\n      <span class=\"kw\">await</span> axios.post(`http:<span class=\"cmt\">//localhost:8080/api/v1/interns/${internId}/photo`, formData, {</span>\n        headers: {\n          <span class=\"str\">\"Content-Type\"</span>: <span class=\"str\">\"multipart/form-data\"</span>,\n          <span class=\"str\">\"Authorization\"</span>: `<span class=\"cls\">Bearer</span> ${token}`\n        },\n        <span class=\"cmt\">// Track upload transmission progress</span>\n        onUploadProgress: (progressEvent) => {\n          <span class=\"kw\">const</span> percentCompleted = <span class=\"cls\">Math</span>.round((progressEvent.loaded * 100) / progressEvent.total);\n          setUploadProgress(percentCompleted);\n        }\n      });\n\n      alert(<span class=\"str\">\"Profile photo successfully updated!\"</span>);\n      onUploadComplete();\n    } <span class=\"kw\">catch</span> (error) {\n      alert(<span class=\"str\">\"Upload failed: \"</span> + (error.response?.data?.message || error.message));\n    } <span class=\"kw\">finally</span> {\n      setIsUploading(<span class=\"kw\">false</span>);\n      setUploadProgress(0);\n    }\n  };\n\n  <span class=\"kw\">return</span> (\n    <div className=<span class=\"str\">\"uploader-container\"</span>>\n      {previewUrl && (\n        <div className=<span class=\"str\">\"preview-box\"</span>>\n          <img src={previewUrl} alt=<span class=\"str\">\"Avatar Preview\"</span> className=<span class=\"str\">\"avatar-preview\"</span> />\n        </div>\n      )}\n      <input type=<span class=\"str\">\"file\"</span> accept=<span class=\"str\">\"image/png, image/jpeg\"</span> onChange={handleFileSelect} />\n      <button onClick={executeFileUpload} disabled={!selectedFile || isUploading}>\n        {isUploading ? <span class=\"str\">\"Transmitting...\"</span> : <span class=\"str\">\"Upload Profile Photo\"</span>}\n      </button>\n\n      {isUploading && (\n        <div className=<span class=\"str\">\"progress-wrapper\"</span>>\n          <progress value={uploadProgress} max=<span class=\"str\">\"100\"</span> />\n          <span>{uploadProgress}%</span>\n        </div>\n      )}\n    </div>\n  );\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always revoke local blob preview URLs (URL.revokeObjectURL(previewUrl)) inside useEffect cleanup to prevent memory leaks.\n• Never store large binary files directly inside relational database tables (BLOB columns); store files in Cloud Object Storage (AWS S3, Cloudinary) and store only the resulting CDN URL string in MySQL."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why do file uploads require multipart/form-data instead of application/json?\nA: application/json encodes data as text strings. Transmitting raw binary image/PDF bytes inside JSON requires Base64 text conversion, expanding file payload size by ~33% and consuming massive CPU parsing overhead. multipart/form-data streams raw binary chunks separated by boundary delimiters.\n\nQ: How does Spring Boot receive uploaded files in REST controllers?\nA: Using the MultipartFile interface: @PostMapping(\"/photo\") public ResponseEntity<?> upload(@RequestParam(\"file\") MultipartFile file). You can check file.isEmpty(), file.getSize(), and transfer bytes via file.transferTo(new File(path))."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Resume PDF Upload & Verification",
              "instructions": "Build resume upload pipeline.\n1. Create file input restricted to accept=\".pdf\".\n2. Validate client-side that file.size <= 5MB.\n3. Package inside FormData and post to Spring Boot endpoint @PostMapping(\"/api/v1/interns/{id}/resume\").\n4. On Spring Boot side, verify file extension and save to local uploads/ directory.",
              "hint": "In Spring Boot: file.transferTo(new File(\"/absolute/path/\" + file.getOriginalFilename()));"
            },
            "resources": [
              {
                "label": "MDN Web Docs — FormData API",
                "url": "https://developer.mozilla.org/en-US/docs/Web/API/FormData"
              },
              {
                "label": "Spring Boot File Upload Guide",
                "url": "https://spring.io/guides/gs/uploading-files/"
              }
            ]
          },
          "quiz": [
            {
              "q": "Which HTTP Content-Type header must be specified when uploading raw binary files?",
              "opts": [
                "application/json",
                "multipart/form-data",
                "text/plain",
                "application/x-www-form-urlencoded"
              ],
              "ans": 1,
              "explanation": "multipart/form-data splits payloads into distinct binary boundaries efficiently."
            },
            {
              "q": "Which JavaScript object packages file binary streams for Axios multipart transmission?",
              "opts": [
                "JSON.stringify",
                "FormData",
                "URLSearchParams",
                "BlobContainer"
              ],
              "ans": 1,
              "explanation": "HTML5 FormData constructs multipart boundaries natively."
            },
            {
              "q": "How do you generate an instant local image preview without uploading to a server?",
              "opts": [
                "URL.createObjectURL(file)",
                "file.toBase64()",
                "window.preview(file)",
                "document.render(file)"
              ],
              "ans": 0,
              "explanation": "createObjectURL creates an in-memory blob URL rendering instantly."
            },
            {
              "q": "Which Axios request configuration option provides real-time byte transmission metrics?",
              "opts": [
                "onUploadProgress",
                "onDownloadProgress",
                "progressTracker",
                "byteMonitor"
              ],
              "ans": 0,
              "explanation": "onUploadProgress exposes loaded and total byte counts during transmission."
            },
            {
              "q": "Which Spring MVC interface intercepts uploaded binary payloads inside controllers?",
              "opts": [
                "FileStream",
                "MultipartFile",
                "BinaryPayload",
                "UploadBuffer"
              ],
              "ans": 1,
              "explanation": "org.springframework.web.multipart.MultipartFile exposes getSize() and transferTo()."
            },
            {
              "q": "Why is storing large binary images inside relational database BLOB columns discouraged?",
              "opts": [
                "SQL syntax error",
                "Bloats database storage, degrades backup speed, and exhausts database RAM; cloud storage (S3) is vastly superior",
                "Tomcat blocks it",
                "Causes JSON errors"
              ],
              "ans": 1,
              "explanation": "Relational DBs are optimized for structured rows; files belong in cloud object stores."
            },
            {
              "q": "Why must file size limits be validated on both client frontend and Spring Boot backend?",
              "opts": [
                "To double speed",
                "Client validation improves UX; backend validation prevents malicious attackers from bypassing frontend scripts to crash server RAM",
                "Required by HTML5",
                "To compress data"
              ],
              "ans": 1,
              "explanation": "Frontend scripts are easily bypassed via Postman or cURL; backend validation is mandatory."
            }
          ]
        },
        {
          "id": 3,
          "title": "Real-Time Features & WebSockets",
          "video": {
            "youtubeId": "OPbTHTZJRKc",
            "title": "Real-Time Features & WebSockets - Tutorial",
            "channel": "The Net Ninja",
            "duration": "45 min",
            "description": "Full-duplex real-time communication: HTTP Request-Response limitations, WebSocket persistent connections, STOMP messaging protocol over WebSockets, and Spring WebSocket broker setup."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — WebSockets vs HTTP Polling",
                "text": "Standard HTTP is strictly unidirectional and request-driven: the client must send a request before the server can reply. For real-time notifications or live chat, polling HTTP endpoints every 2 seconds wastes bandwidth and battery.\n\nWebSockets (RFC 6455) establish a persistent, full-duplex TCP connection between client and server. Once the initial HTTP upgrade handshake completes, both server and client can push message packets to each other instantly with zero header overhead."
              },
              {
                "heading": "STOMP Messaging Protocol over Spring WebSockets",
                "text": "Raw WebSockets send unstructured text frames. Enterprise applications layer STOMP (Simple Text Oriented Messaging Protocol) over WebSockets to provide Pub/Sub routing semantics:\n• Message Broker: Spring configures an in-memory broker routing messages.\n• Topics (/topic/announcements): Broadcasts messages to all subscribed connected clients.\n• Queues (/user/queue/notifications): Sends private messages targeting a single specific user."
              },
              {
                "heading": "Production Code — STOMP Client Hook & Spring Broker",
                "code": "<span class=\"cmt\">// 1. Spring Boot WebSocket Configuration</span>\n<span class=\"kw\">package</span> com.avron.internship.config;\n\n<span class=\"kw\">import</span> org.springframework.context.annotation.<span class=\"cls\">Configuration</span>;\n<span class=\"kw\">import</span> org.springframework.messaging.simp.config.<span class=\"cls\">MessageBrokerRegistry</span>;\n<span class=\"kw\">import</span> org.springframework.web.socket.config.annotation.*;\n\n@<span class=\"cls\">Configuration</span>\n@<span class=\"cls\">EnableWebSocketMessageBroker</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">WebSocketBrokerConfig</span> <span class=\"kw\">implements</span> <span class=\"cls\">WebSocketMessageBrokerConfigurer</span> {\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> configureMessageBroker(<span class=\"cls\">MessageBrokerRegistry</span> config) {\n        config.enableSimpleBroker(<span class=\"str\">\"/topic\"</span>, <span class=\"str\">\"/queue\"</span>); <span class=\"cmt\">// Broker destinations</span>\n        config.setApplicationDestinationPrefixes(<span class=\"str\">\"/app\"</span>); <span class=\"cmt\">// Controller prefixes</span>\n    }\n\n    @<span class=\"cls\">Override</span>\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> registerStompEndpoints(<span class=\"cls\">StompEndpointRegistry</span> registry) {\n        registry.addEndpoint(<span class=\"str\">\"/ws-internship\"</span>).setAllowedOriginPatterns(<span class=\"str\">\"*\"</span>).withSockJS();\n    }\n}\n\n<span class=\"cmt\">// 2. React Custom Hook using @stomp/stompjs</span>\n<span class=\"kw\">import</span> { useState, useEffect } <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n<span class=\"kw\">import</span> { <span class=\"cls\">Client</span> } <span class=\"kw\">from</span> <span class=\"str\">'@stomp/stompjs'</span>;\n<span class=\"kw\">import</span> <span class=\"cls\">SockJS</span> <span class=\"kw\">from</span> <span class=\"str\">'sockjs-client'</span>;\n\n<span class=\"kw\">export</span> <span class=\"kw\">function</span> useLiveNotifications(userId) {\n  <span class=\"kw\">const</span> [alerts, setAlerts] = useState([]);\n\n  useEffect(() => {\n    <span class=\"kw\">const</span> stompClient = <span class=\"kw\">new</span> <span class=\"cls\">Client</span>({\n      webSocketFactory: () => <span class=\"kw\">new</span> <span class=\"cls\">SockJS</span>(<span class=\"str\">\"http://localhost:8080/ws-internship\"</span>),\n      reconnectDelay: 5000,\n      onConnect: () => {\n        console.log(<span class=\"str\">\"WebSocket STOMP Connection Established!\"</span>);\n        <span class=\"cmt\">// Subscribe to private user notification queue</span>\n        stompClient.subscribe(`/queue/notifications-${userId}`, (message) => {\n          <span class=\"kw\">const</span> incomingAlert = <span class=\"cls\">JSON</span>.parse(message.body);\n          setAlerts((prev) => [incomingAlert, ...prev]);\n        });\n      }\n    });\n\n    stompClient.activate(); <span class=\"cmt\">// Initiate WebSocket handshake</span>\n\n    <span class=\"kw\">return</span> () => {\n      stompClient.deactivate(); <span class=\"cmt\">// Clean disconnect on unmount</span>\n    };\n  }, [userId]);\n\n  <span class=\"kw\">return</span> alerts;\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always configure automatic reconnection logic (reconnectDelay) inside STOMP clients, as mobile network drops or server redeploys will terminate WebSocket TCP connections.\n• Cleanly deactivate WebSocket connections inside useEffect unmount returns to prevent ghost socket connections draining server memory."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between WebSockets and Server-Sent Events (SSE)?\nA: WebSockets provide bidirectional full-duplex communication (both client and server send messages anytime). Server-Sent Events (SSE) establish a unidirectional HTTP stream where only the server pushes live updates to the client (ideal for live news feeds or stock tickers).\n\nQ: What is SockJS and why do we use it alongside STOMP?\nA: SockJS is a browser fallback library. If strict corporate firewalls or legacy proxies block raw WebSocket TCP upgrade protocols, SockJS automatically falls back to HTTP long-polling while maintaining the exact same STOMP API contract."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Build Live Broadcast Notification Banner",
              "instructions": "Implement live system announcements.\n1. Configure Spring Boot WebSocket broker enabling /topic destination.\n2. Create SimpMessagingTemplate controller broadcasting messages to /topic/announcements.\n3. In React, build NotificationBanner component subscribing to /topic/announcements displaying live toast banners.",
              "hint": "Use messagingTemplate.convertAndSend(\"/topic/announcements\", alertObject) on backend."
            },
            "resources": [
              {
                "label": "Spring WebSocket Documentation",
                "url": "https://docs.spring.io/spring-framework/reference/web/websocket.html"
              },
              {
                "label": "STOMP.js Official Client Guide",
                "url": "https://stomp-js.github.io/guide/stompjs/using-stompjs-v5.html"
              }
            ]
          },
          "quiz": [
            {
              "q": "How does a WebSocket connection differ fundamentally from standard HTTP requests?",
              "opts": [
                "It uses UDP",
                "WebSocket establishes a persistent, bidirectional full-duplex TCP connection allowing instant two-way message pushing",
                "It runs slower",
                "It requires XML"
              ],
              "ans": 1,
              "explanation": "Persistent full-duplex sockets eliminate HTTP polling header latency."
            },
            {
              "q": "What protocol is commonly layered over WebSockets to provide Pub/Sub topic routing?",
              "opts": [
                "SMTP",
                "FTP",
                "STOMP (Simple Text Oriented Messaging Protocol)",
                "POP3"
              ],
              "ans": 2,
              "explanation": "STOMP adds destination routing (/topic, /queue) over raw sockets."
            },
            {
              "q": "What is the primary function of SockJS?",
              "opts": [
                "Compiles React",
                "Provides automatic fallback transport (like HTTP long-polling) if network firewalls block raw WebSocket upgrades",
                "Encrypts DB",
                "Formats CSS"
              ],
              "ans": 1,
              "explanation": "SockJS guarantees connection persistence across restrictive network proxies."
            },
            {
              "q": "Which Spring annotation configures a class as a WebSocket message broker?",
              "opts": [
                "@EnableWebSocketMessageBroker",
                "@EnableSocket",
                "@MessageConfig",
                "@BrokerSetup"
              ],
              "ans": 0,
              "explanation": "@EnableWebSocketMessageBroker activates STOMP broker routing in Spring."
            },
            {
              "q": "In STOMP conventions, which destination prefix broadcasts messages to multiple subscribed clients?",
              "opts": [
                "/private",
                "/topic",
                "/secret",
                "/direct"
              ],
              "ans": 1,
              "explanation": "/topic destinations broadcast publish-subscribe messages to all active subscribers."
            },
            {
              "q": "Why must STOMP client connections be deactivated inside useEffect cleanup blocks?",
              "opts": [
                "To free up CSS",
                "To cleanly close active TCP socket connections when components unmount, preventing server memory leaks",
                "Required by Vite",
                "To speed up compilation"
              ],
              "ans": 1,
              "explanation": "Closing idle sockets preserves server file descriptor limits."
            },
            {
              "q": "Which Spring class allows controllers or services to push STOMP messages programmatically?",
              "opts": [
                "SocketSender",
                "SimpMessagingTemplate",
                "MessageDispatcher",
                "StompPublisher"
              ],
              "ans": 1,
              "explanation": "SimpMessagingTemplate exposes convertAndSend() to push real-time packets."
            }
          ]
        },
        {
          "id": 4,
          "title": "Testing React Components",
          "video": {
            "youtubeId": "OEWhbj79VL4",
            "title": "Testing React Components - Tutorial",
            "channel": "Amigoscode",
            "duration": "45 min",
            "description": "Unit and integration testing frontend React components using Jest test runner and React Testing Library (RTL), simulating user events, and mocking Axios."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Testing Behavior over Implementation",
                "text": "Testing frontend UI code ensures component reliability during refactoring. Modern React testing relies on two core tools:\n1. Jest / Vitest: The test runner that executes suites, asserts expectations (expect().toBe()), and generates code coverage.\n2. React Testing Library (RTL): Provides virtual DOM rendering and DOM queries.\n\nRTL Core Philosophy: Test your components the way real users interact with them! Never assert internal component state variables or CSS class names. Instead, query elements by accessible roles (getByRole('button')), labels (getByLabelText('Email')), or displayed text (getByText('Submit'))."
              },
              {
                "heading": "Query Types & Simulating User Events",
                "text": "• getBy* vs queryBy* vs findBy*:\n  - getByText(): Returns element instantly or throws failure error if absent (used for synchronous elements).\n  - queryByText(): Returns element or null if absent (used to verify an element is NOT present).\n  - findByText(): Returns a Promise awaiting asynchronous DOM updates (used after async API calls).\n• User Events: userEvent.click() or fireEvent.change() simulate realistic keyboard/mouse actions."
              },
              {
                "heading": "Production Code — Component Test Suite with Mocked API",
                "code": "<span class=\"kw\">import</span> <span class=\"cls\">React</span> <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n<span class=\"kw\">import</span> { render, screen, waitFor } <span class=\"kw\">from</span> <span class=\"str\">'@testing-library/react'</span>;\n<span class=\"kw\">import</span> userEvent <span class=\"kw\">from</span> <span class=\"str\">'@testing-library/user-event'</span>;\n<span class=\"kw\">import</span> <span class=\"str\">'@testing-library/jest-dom'</span>;\n<span class=\"kw\">import</span> axios <span class=\"kw\">from</span> <span class=\"str\">'axios'</span>;\n<span class=\"kw\">import</span> { <span class=\"cls\">InternRegistrationForm</span> } <span class=\"kw\">from</span> <span class=\"str\">'./InternRegistrationForm'</span>;\n\n<span class=\"cmt\">// Mock entire axios module to prevent real network requests during testing</span>\njest.mock(<span class=\"str\">'axios'</span>);\n\ndescribe(<span class=\"str\">'InternRegistrationForm Component Suite'</span>, () => {\n  beforeEach(() => {\n    jest.clearAllMocks();\n  });\n\n  test(<span class=\"str\">'renders form input labels and submit button correctly'</span>, () => {\n    render(<<span class=\"cls\">InternRegistrationForm</span> />);\n    \n    <span class=\"cmt\">// Query DOM using user-centric accessible attributes</span>\n    expect(screen.getByLabelText(/candidate email/i)).toBeInTheDocument();\n    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();\n    expect(screen.getByRole(<span class=\"str\">'button'</span>, { name: /complete registration/i })).toBeEnabled();\n  });\n\n  test(<span class=\"str\">'displays validation error when submitting empty form fields'</span>, <span class=\"kw\">async</span> () => {\n    render(<<span class=\"cls\">InternRegistrationForm</span> />);\n    \n    <span class=\"kw\">const</span> submitBtn = screen.getByRole(<span class=\"str\">'button'</span>, { name: /complete registration/i });\n    <span class=\"kw\">await</span> userEvent.click(submitBtn);\n\n    <span class=\"cmt\">// Verify asynchronous validation feedback messages appear</span>\n    expect(<span class=\"kw\">await</span> screen.findByText(/email address is required/i)).toBeInTheDocument();\n    expect(<span class=\"kw\">await</span> screen.findByText(/password required/i)).toBeInTheDocument();\n  });\n\n  test(<span class=\"str\">'submits payload successfully when valid credentials entered'</span>, <span class=\"kw\">async</span> () => {\n    axios.post.mockResolvedValueOnce({ data: { success: <span class=\"kw\">true</span> } });\n    render(<<span class=\"cls\">InternRegistrationForm</span> />);\n\n    <span class=\"cmt\">// Simulate realistic typing events</span>\n    <span class=\"kw\">await</span> userEvent.type(screen.getByLabelText(/candidate email/i), <span class=\"str\">'arjun@tech.edu'</span>);\n    <span class=\"kw\">await</span> userEvent.type(screen.getByLabelText(/password/i), <span class=\"str\">'Secret@123'</span>);\n    <span class=\"kw\">await</span> userEvent.click(screen.getByRole(<span class=\"str\">'button'</span>, { name: /complete registration/i }));\n\n    <span class=\"cmt\">// Assert Axios API was called with expected payload</span>\n    <span class=\"kw\">await</span> waitFor(() => {\n      expect(axios.post).toHaveBeenCalledWith(\n        expect.stringContaining(<span class=\"str\">'/auth/login'</span>),\n        expect.objectContaining({ email: <span class=\"str\">'arjun@tech.edu'</span> })\n      );\n    });\n  });\n});"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Prefer userEvent over fireEvent whenever possible. userEvent simulates full browser interaction sequences (hover, focus, typing key-by-key) whereas fireEvent dispatches synthetic synthetic events directly.\n• Never make real network API requests inside Jest unit tests; always mock Axios or configure Mock Service Worker (MSW)."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why does React Testing Library discourage querying DOM elements by ID or CSS classes?\nA: Users do not see HTML IDs or CSS class names. If you refactor a class name from .btn-primary to .btn-large without changing UI functionality, a test querying by CSS class breaks (false negative). Querying by accessible roles (getByRole) guarantees tests only fail when user experience actually breaks.\n\nQ: What is the difference between getBy, queryBy, and findBy queries?\nA: getBy throws an error immediately if no match exists. queryBy returns null if no match exists (essential for asserting element absence: expect(queryByText('Error')).toBeNull()). findBy returns a Promise that retries up to 1000ms waiting for async elements to render."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Write Unit Tests for StudentCard",
              "instructions": "Set up Vitest/Jest and React Testing Library.\n1. Write test verifying StudentCard renders student name and GPA prop correctly.\n2. Write test verifying clicking the card triggers onSelect callback prop using userEvent.click().\n3. Write negative assertion verifying honors badge does NOT render when GPA < 8.0 using queryByText().",
              "hint": "Use const mockFn = vi.fn() (or jest.fn()) to pass a spy callback into onSelect prop."
            },
            "resources": [
              {
                "label": "React Testing Library Official Guide",
                "url": "https://testing-library.com/docs/react-testing-library/intro/"
              },
              {
                "label": "Vitest Next-Gen Testing Framework",
                "url": "https://vitest.dev/"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the guiding guiding philosophy of React Testing Library (RTL)?",
              "opts": [
                "Test internal state variables",
                "Test component behavior exactly as users interact with accessible DOM elements",
                "Test CSS selectors",
                "Test Redux reducers"
              ],
              "ans": 1,
              "explanation": "RTL focuses on accessible user interactions rather than internal implementation."
            },
            {
              "q": "Which RTL query should be used to assert that an error message element is NOT currently present in DOM?",
              "opts": [
                "getByText()",
                "findByText()",
                "queryByText() (returns null if missing)",
                "assertNoText()"
              ],
              "ans": 2,
              "explanation": "queryBy returns null when absent, enabling expect(...).toBeNull() assertions."
            },
            {
              "q": "Which query returns a Promise awaiting asynchronous DOM updates resulting from API calls?",
              "opts": [
                "getByRole()",
                "queryByRole()",
                "findByRole()",
                "asyncByRole()"
              ],
              "ans": 2,
              "explanation": "findBy queries retry asynchronously for up to 1 second awaiting DOM rendering."
            },
            {
              "q": "Why is userEvent preferred over fireEvent for simulating typing and clicking?",
              "opts": [
                "Runs faster",
                "userEvent simulates realistic browser interaction sequences (focusing, keystrokes, bubbling) rather than dispatching synthetic isolated events",
                "Required by Jest",
                "It works with Java"
              ],
              "ans": 1,
              "explanation": "userEvent mirrors true browser user mechanics accurately."
            },
            {
              "q": "How do you prevent unit tests from making live network HTTP requests during test runs?",
              "opts": [
                "Disconnect Wi-Fi",
                "Mock HTTP modules using jest.mock('axios') or Mock Service Worker (MSW)",
                "Run tests in production",
                "Delete API URLs"
              ],
              "ans": 1,
              "explanation": "Mocking intercepts outbound network requests with deterministic test payloads."
            },
            {
              "q": "Which Jest assertion function verifies that a spy mock callback was invoked during a test?",
              "opts": [
                "expect(fn).toBeCalled()",
                "expect(fn).toHaveBeenCalledWith(expectedArgs)",
                "expect(fn).toRun()",
                "expect(fn).toBeTrue()"
              ],
              "ans": 1,
              "explanation": "toHaveBeenCalledWith asserts exact function execution arguments."
            },
            {
              "q": "Why is querying by accessible ARIA role (getByRole('button')) superior to querying by test ID?",
              "opts": [
                "Shorter syntax",
                "Ensures applications remain fully accessible to screen readers while surviving CSS structure refactoring",
                "Compiles faster",
                "Required by HTML5"
              ],
              "ans": 1,
              "explanation": "Accessible role queries guarantee robust accessibility compliance."
            }
          ]
        },
        {
          "id": 5,
          "title": "Performance Optimization",
          "video": {
            "youtubeId": "sBws8MSXN7A",
            "title": "Performance Optimization - Tutorial",
            "channel": "Traversy Media",
            "duration": "30 min",
            "description": "Eliminating wasted re-renders: React.memo shallow prop comparison, useMemo computational caching, useCallback function reference stability, and Code Splitting with React.lazy."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Memoization & Wasted Re-Renders",
                "text": "By default, whenever a parent component re-renders, React recursively re-renders ALL child components inside its tree, even if child props have not changed! In data-heavy grids, wasted re-renders cause severe UI stuttering.\n\nMemoization Techniques:\n1. React.memo(Component): Wraps functional components. React performs shallow prop comparison; if incoming props equal previous props, re-rendering is skipped entirely.\n2. useMemo(() => heavyCalc(), [deps]): Caches the return result of expensive CPU calculations across renders.\n3. useCallback(fn, [deps]): Caches function reference pointers across render cycles."
              },
              {
                "heading": "Why useCallback is Essential for React.memo",
                "text": "In JavaScript, functions are objects. If a parent component creates a callback function (const handleSelect = () => { ... }) and passes it as a prop to a child wrapped in React.memo, every parent render creates a brand new function reference address! React.memo compares oldProp.onSelect === newProp.onSelect, sees different reference pointers, and re-renders the child anyway!\n\nWrapping the callback in useCallback stabilizes the function reference across renders, preserving React.memo optimization."
              },
              {
                "heading": "Production Code — Optimized Roster & Lazy Route Splitting",
                "code": "<span class=\"kw\">import</span> <span class=\"cls\">React</span>, { useState, useMemo, useCallback, <span class=\"cls\">Suspense</span> } <span class=\"kw\">from</span> <span class=\"str\">'react'</span>;\n\n<span class=\"cmt\">// 1. Child Component wrapped in React.memo to prevent wasted re-renders</span>\n<span class=\"kw\">const</span> <span class=\"cls\">MemoizedStudentRow</span> = <span class=\"cls\">React</span>.memo(<span class=\"kw\">function</span> <span class=\"cls\">StudentRow</span>({ intern, onPromote }) {\n  console.log(<span class=\"str\">\"Rendering Row for:\"</span>, intern.name);\n  <span class=\"kw\">return</span> (\n    <div className=<span class=\"str\">\"row-item\"</span>>\n      <span>{intern.name} — <span class=\"cls\">GPA</span>: {intern.gpa}</span>\n      <button onClick={() => onPromote(intern.id)}><span class=\"cls\">Promote</span> <span class=\"cls\">Candidate</span></button>\n    </div>\n  );\n});\n\n<span class=\"cmt\">// 2. Code Splitting: Lazy load heavy analytics dashboard chunk on demand</span>\n<span class=\"kw\">const</span> <span class=\"cls\">HeavyAnalyticsChart</span> = <span class=\"cls\">React</span>.lazy(() => <span class=\"kw\">import</span>(<span class=\"str\">'./HeavyAnalyticsChart'</span>));\n\n<span class=\"kw\">export</span> <span class=\"kw\">default</span> <span class=\"kw\">function</span> <span class=\"cls\">OptimizedRosterPortal</span>() {\n  <span class=\"kw\">const</span> [roster, setRoster] = useState([\n    { id: 1, name: <span class=\"str\">\"Arjun Sharma\"</span>, gpa: 8.9 },\n    { id: 2, name: <span class=\"str\">\"Priya Patel\"</span>, gpa: 9.4 },\n    { id: 3, name: <span class=\"str\">\"Ravi Kumar\"</span>, gpa: 7.2 }\n  ]);\n  <span class=\"kw\">const</span> [filterMinGpa, setFilterMinGpa] = useState(8.0);\n  <span class=\"kw\">const</span> [toggleCounter, setToggleCounter] = useState(0);\n\n  <span class=\"cmt\">// useMemo caches expensive array filtering/sorting across irrelevant state updates</span>\n  <span class=\"kw\">const</span> topScholars = useMemo(() => {\n    console.log(<span class=\"str\">\"Executing intensive filtering calculation...\"</span>);\n    <span class=\"kw\">return</span> roster.filter(item => item.gpa >= filterMinGpa);\n  }, [roster, filterMinGpa]);\n\n  <span class=\"cmt\">// useCallback stabilizes callback reference address for React.memo child</span>\n  <span class=\"kw\">const</span> handlePromotion = useCallback((candidateId) => {\n    alert(`<span class=\"cls\">Promoted</span> candidate <span class=\"cls\">ID</span>: ${candidateId}`);\n  }, []);\n\n  <span class=\"kw\">return</span> (\n    <div className=<span class=\"str\">\"portal\"</span>>\n      {<span class=\"cmt\">/* Unrelated state toggle does NOT trigger child row re-renders! */</span>}\n      <button onClick={() => setToggleCounter(c => c + 1)}>\n        <span class=\"cls\">Unrelated</span> <span class=\"cls\">UI</span> <span class=\"cls\">Re</span>-render <span class=\"cls\">Count</span>: {toggleCounter}\n      </button>\n\n      <div className=<span class=\"str\">\"roster-grid\"</span>>\n        {topScholars.map(item => (\n          <<span class=\"cls\">MemoizedStudentRow</span> key={item.id} intern={item} onPromote={handlePromotion} />\n        ))}\n      </div>\n\n      {<span class=\"cmt\">/* Suspense displays fallback UI while lazy chunk downloads over network */</span>}\n      <<span class=\"cls\">Suspense</span> fallback={<div className=<span class=\"str\">\"spinner\"</span>><span class=\"cls\">Downloading</span> <span class=\"cls\">Analytics</span> <span class=\"cls\">Engine</span>...</div>}>\n        <<span class=\"cls\">HeavyAnalyticsChart</span> data={topScholars} />\n      </<span class=\"cls\">Suspense</span>>\n    </div>\n  );\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Do not wrap every single component in React.memo or useMemo! Memoization requires memory allocation and shallow comparison computation. Apply memoization strictly to heavy list items, complex SVG charts, or components receiving stabilized callbacks.\n• Use React DevTools Profiler recording tools to measure exact component render durations before and after optimization."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between useMemo and useCallback?\nA: Both cache values across renders. useMemo caches the RESULT of an executed calculation function (() => compute()). useCallback caches the actual FUNCTION DEFINITION reference itself (() => fn).\n\nQ: How does Code Splitting via React.lazy optimize initial page load speed?\nA: By default, Vite bundles your entire React application into a single massive index.js bundle. React.lazy splits heavy routes into separate smaller chunk files (e.g., Analytics.js). The browser downloads the chunk over network only when the user navigates to that specific page, slashing initial load times."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Optimize Heavy Component Rendering Grid",
              "instructions": "Build a list of 500 items to observe wasted renders.\n1. Create ItemRow component logging console.log(\"Rendering row\") when rendered.\n2. Wrap ItemRow in React.memo.\n3. Create parent passing onDelete callback wrapped in useCallback.\n4. Add an unrelated counter state button in parent; verify clicking counter does NOT trigger 500 row console logs.",
              "hint": "If ItemRow still re-renders, verify that your onDelete prop is properly memoized via useCallback."
            },
            "resources": [
              {
                "label": "React Docs — Code Splitting & Lazy Loading",
                "url": "https://react.dev/reference/react/lazy"
              },
              {
                "label": "Baeldung — React useMemo and useCallback",
                "url": "https://www.baeldung.com/react-usememo-vs-usecallback"
              }
            ]
          },
          "quiz": [
            {
              "q": "What optimization does React.memo perform on functional components?",
              "opts": [
                "Compresses JSX",
                "Performs shallow prop comparison; skips re-rendering component if props have not changed",
                "Pre-compiles code",
                "Stores component in DB"
              ],
              "ans": 1,
              "explanation": "React.memo prevents redundant subtree re-renders when incoming props match exact previous values."
            },
            {
              "q": "What is the distinction between useMemo and useCallback?",
              "opts": [
                "No difference",
                "useMemo caches computed return values; useCallback caches function reference addresses across renders",
                "useCallback is for classes",
                "useMemo runs on server"
              ],
              "ans": 1,
              "explanation": "useMemo stores calculated results; useCallback preserves function pointer identity."
            },
            {
              "q": "Why does passing an inline callback (() => fn()) to a React.memo child cause it to re-render anyway?",
              "opts": [
                "Inline syntax error",
                "Every parent render creates a brand new function reference address, failing shallow equality checks",
                "React forbids inline functions",
                "Vite blocks callbacks"
              ],
              "ans": 1,
              "explanation": "New function references break shallow prop equality comparisons."
            },
            {
              "q": "How does Code Splitting via React.lazy improve initial website loading speed?",
              "opts": [
                "Deletes CSS",
                "Splits large JS bundles into smaller chunks downloaded dynamically over network only when routes are accessed",
                "Runs on GPU",
                "Compiles C code"
              ],
              "ans": 1,
              "explanation": "On-demand chunk loading drastically reduces initial JavaScript bundle transfer sizes."
            },
            {
              "q": "What component must wrap React.lazy components to display loading indicators during network chunk download?",
              "opts": [
                "<ErrorBoundary>",
                "<Suspense fallback={<Spinner />}>",
                "<LazyLoader>",
                "<AsyncWrapper>"
              ],
              "ans": 1,
              "explanation": "<Suspense> catches asynchronous loading states to display fallback spinner UIs."
            },
            {
              "q": "Why should you avoid wrapping trivial, lightweight components in React.memo?",
              "opts": [
                "Syntax error",
                "Shallow prop comparison computation overhead can cost more CPU cycles than re-rendering simple DOM elements directly",
                "React blocks it",
                "Causes memory leaks"
              ],
              "ans": 1,
              "explanation": "Over-memoization introduces pointless comparison overhead on trivial renders."
            },
            {
              "q": "Which developer tool records real-time component render durations to identify bottleneck components?",
              "opts": [
                "Postman",
                "React DevTools Profiler tab",
                "MySQL Workbench",
                "Docker Desktop"
              ],
              "ans": 1,
              "explanation": "React Profiler highlights slow components and render cause triggers visually."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "Why do custom hooks require the strict naming prefix 'use' (e.g., useFetch)?",
          "opts": [
            "To sort alphabetically",
            "React linter rules check the 'use' prefix to verify strict hook execution ordering rules across renders",
            "Vite compilation requirement",
            "JavaScript keyword rule"
          ],
          "ans": 1,
          "explanation": "React enforces hook rules (no loops/conditionals) by inspecting the 'use' prefix."
        },
        {
          "q": "When is useReducer preferred over standard useState inside React components?",
          "opts": [
            "For simple booleans",
            "When state transitions involve complex conditional workflows or multiple interdependent sub-properties",
            "Only in class components",
            "To encrypt state"
          ],
          "ans": 1,
          "explanation": "useReducer organizes intricate state machines cleanly."
        },
        {
          "q": "Why must binary files (images/PDFs) be transmitted using Content-Type: multipart/form-data rather than application/json?",
          "opts": [
            "JSON cannot transmit files",
            "Encoding raw binary bytes inside JSON requires 33% Base64 overhead; multipart streams raw binary chunks directly",
            "Tomcat blocks JSON files",
            "Axios requires multipart"
          ],
          "ans": 1,
          "explanation": "multipart/form-data streams raw binary segments efficiently."
        },
        {
          "q": "How do you generate an instant client-side image preview prior to uploading to Spring Boot?",
          "opts": [
            "URL.createObjectURL(file)",
            "file.toText()",
            "window.previewImage(file)",
            "document.render(file)"
          ],
          "ans": 0,
          "explanation": "createObjectURL generates local browser blob URLs instantly."
        },
        {
          "q": "How does persistent WebSocket communication surpass traditional HTTP polling for live notifications?",
          "opts": [
            "WebSockets use UDP",
            "WebSockets maintain a full-duplex persistent TCP socket allowing instant two-way pushing without polling header overhead",
            "WebSockets encrypt SQL",
            "HTTP polling crashes browsers"
          ],
          "ans": 1,
          "explanation": "Full-duplex persistent sockets eliminate polling latency."
        },
        {
          "q": "What messaging protocol is layered over Spring WebSockets to provide Pub/Sub topic routing (/topic/announcements)?",
          "opts": [
            "SMTP",
            "STOMP (Simple Text Oriented Messaging Protocol)",
            "POP3",
            "FTP"
          ],
          "ans": 1,
          "explanation": "STOMP provides destination routing over raw WebSockets."
        },
        {
          "q": "Why does React Testing Library (RTL) advocate querying elements by accessible role (getByRole) rather than CSS classes?",
          "opts": [
            "Shorter code",
            "Guarantees tests mirror user behavior and accessibility while surviving CSS refactoring without false failures",
            "Compiles faster",
            "Vite requires roles"
          ],
          "ans": 1,
          "explanation": "User-centric accessible queries ensure true visual functionality is verified."
        },
        {
          "q": "Which RTL query should be used to assert that a loading spinner element has disappeared from the DOM?",
          "opts": [
            "getByText()",
            "queryByText() (returns null when missing)",
            "findByText()",
            "assertMissing()"
          ],
          "ans": 1,
          "explanation": "queryBy returns null when absent, allowing expect().toBeNull() assertions."
        },
        {
          "q": "What does React.memo do when wrapping a functional component?",
          "opts": [
            "Compresses code",
            "Performs shallow prop comparison and skips re-render cycles if incoming props match previous props exactly",
            "Stores in database",
            "Enables SSR"
          ],
          "ans": 1,
          "explanation": "React.memo skips subtree renders when props remain unchanged."
        },
        {
          "q": "Why must callback functions passed to React.memo children be wrapped inside useCallback?",
          "opts": [
            "To run async",
            "To stabilize function reference addresses across parent renders, preventing false prop inequality checks",
            "Required by JSX",
            "To speed up CSS"
          ],
          "ans": 1,
          "explanation": "useCallback preserves function pointer identity across parent re-renders."
        }
      ],
      "miniProject": {
        "title": "Week 8 Capstone Project — Full-Stack Real-Time Collaboration & Document Portal",
        "description": "Build an enterprise full-stack application combining advanced React custom hooks, multipart file uploads, STOMP WebSockets, unit testing suites, and performance memoization.",
        "requirements": [
          "Create custom hooks: useDebounce(query, 500) throttling live search requests and useFetch(url) managing async loading/error states.",
          "Implement DocumentUploadModal allowing users to select PDF/image files, generating immediate blob previews (URL.createObjectURL) and tracking upload progress via Axios onUploadProgress.",
          "Build Spring Boot backend handling @RequestPart(\"file\") MultipartFile, validating extension types and saving files securely.",
          "Configure Spring WebSocket STOMP broker broadcasting live system notifications to /topic/alerts.",
          "Implement React useLiveNotifications hook connecting via @stomp/stompjs to display real-time toast alert banners.",
          "Optimize component grid rendering using React.memo on child rows, useMemo for heavy sorting, and useCallback on action handlers.",
          "Implement route-level Code Splitting using React.lazy and <Suspense fallback={<Spinner />}> for heavy dashboard views.",
          "Write unit test suite using Jest and React Testing Library verifying form validation and mocking Axios API submissions."
        ]
      }
    },
    {
      "id": 9,
      "title": "Capstone Project & Deployment",
      "topics": [
        {
          "id": 1,
          "title": "Capstone Planning — Architecture & Design",
          "video": {
            "youtubeId": "sBws8MSXN7A",
            "title": "Capstone Planning — Architecture & Design - Tutorial",
            "channel": "Traversy Media",
            "duration": "30 min",
            "description": "Full-stack project planning methodologies: defining Agile User Stories, entity-relationship diagrams (ERD), RESTful API contracts, component hierarchies, and MVP milestone scoping."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Engineering Design Before Code",
                "text": "Jumping directly into writing code without a technical specification leads to tangled architecture, database schema refactoring, and abandoned projects. Professional full-stack engineering begins with rigorous software architecture planning.\n\nRecommended Internship Capstone Domains:\n1. Enterprise Job & Internship Portal: Profiles, postings, application tracking, resume uploads, and role security.\n2. Online Learning & LMS Platform: Video modules, timed quizzes, interactive grading, and certificates.\n3. FinTech Expense & Budget Tracker: Multi-currency ledgers, interactive charts, and CSV report export.\n4. Agile Task & Project Management Suite: Workspace Kanban boards, live WebSockets team alerts, and file attachments."
              },
              {
                "heading": "The 5-Step Architectural Blueprint Specification",
                "text": "1. Agile User Stories: Format every requirement from the end-user's perspective: \"As a [persona], I want to [action] so that [benefit].\"\n2. Entity Relationship Diagram (ERD): Map relational tables, primary keys, foreign keys, and normalization rules (3NF) using tools like draw.io or dbdiagram.io.\n3. REST API Specification: Document endpoint paths, HTTP verbs, required headers, request JSON bodies, and expected status codes.\n4. Frontend Component Hierarchy: Outline top-level router trees, page containers, and atomic UI components.\n5. Minimum Viable Product (MVP) Scoping: Distinguish core blocking requirements from nice-to-have bonus features."
              },
              {
                "heading": "Production Code — Architectural Specification Document",
                "code": "<span class=\"cmt\">// ==========================================</span>\n<span class=\"cmt\">// CAPSTONE ARCHITECTURAL BLUEPRINT (JSON SPEC)</span>\n<span class=\"cmt\">// ==========================================</span>\n{\n  <span class=\"str\">\"projectTitle\"</span>: <span class=\"str\">\"AvronTech Enterprise Internship Portal\"</span>,\n  <span class=\"str\">\"version\"</span>: <span class=\"str\">\"1.0.0-MVP\"</span>,\n  <span class=\"str\">\"databaseSchema\"</span>: {\n    <span class=\"str\">\"tables\"</span>: [\n      {\n        <span class=\"str\">\"name\"</span>: <span class=\"str\">\"users\"</span>,\n        <span class=\"str\">\"columns\"</span>: [\n          <span class=\"str\">\"id BIGINT PK AUTO_INCREMENT\"</span>,\n          <span class=\"str\">\"email VARCHAR(150) UNIQUE NOT NULL\"</span>,\n          <span class=\"str\">\"password_hash VARCHAR(255) NOT NULL\"</span>,\n          <span class=\"str\">\"role VARCHAR(50) NOT NULL\"</span>,\n          <span class=\"str\">\"created_at TIMESTAMP\"</span>\n        ]\n      },\n      {\n        <span class=\"str\">\"name\"</span>: <span class=\"str\">\"internship_postings\"</span>,\n        <span class=\"str\">\"columns\"</span>: [\n          <span class=\"str\">\"id BIGINT PK AUTO_INCREMENT\"</span>,\n          <span class=\"str\">\"title VARCHAR(200)\"</span>,\n          <span class=\"str\">\"dept_code VARCHAR(50)\"</span>,\n          <span class=\"str\">\"stipend DOUBLE\"</span>,\n          <span class=\"str\">\"posted_by BIGINT FK(users.id)\"</span>\n        ]\n      }\n    ]\n  },\n  <span class=\"str\">\"apiSpecification\"</span>: [\n    {\n      <span class=\"str\">\"method\"</span>: <span class=\"str\">\"POST\"</span>,\n      <span class=\"str\">\"endpoint\"</span>: <span class=\"str\">\"/api/v1/auth/register\"</span>,\n      <span class=\"str\">\"payload\"</span>: { <span class=\"str\">\"email\"</span>: <span class=\"str\">\"candidate@avron.com\"</span>, <span class=\"str\">\"password\"</span>: <span class=\"str\">\"Secret@123\"</span>, <span class=\"str\">\"role\"</span>: <span class=\"str\">\"ROLE_USER\"</span> },\n      <span class=\"str\">\"response\"</span>: <span class=\"str\">\"201 Created | { token: 'jwt_string' }\"</span>\n    },\n    {\n      <span class=\"str\">\"method\"</span>: <span class=\"str\">\"GET\"</span>,\n      <span class=\"str\">\"endpoint\"</span>: <span class=\"str\">\"/api/v1/postings?page=0&size=10\"</span>,\n      <span class=\"str\">\"headers\"</span>: { <span class=\"str\">\"Authorization\"</span>: <span class=\"str\">\"Bearer <jwt>\"</span> },\n      <span class=\"str\">\"response\"</span>: <span class=\"str\">\"200 OK | Page<PostingDTO>\"</span>\n    }\n  ],\n  <span class=\"str\">\"frontendTree\"</span>: <span class=\"str\">\"AppRouter -> AuthProvider -> Navbar -> [LoginPage, RosterGrid -> StudentCard, PostingDetail]\"</span>\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always validate database schema normalization before generating JPA entities. Fixing data redundancy after writing 20 repository queries is painful.\n• Build and verify the Spring Boot backend completely in Postman before writing a single line of React frontend code."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why do we write User Stories before designing database tables?\nA: User stories define functional requirements and domain entities. Understanding what users need to do (e.g., \"apply to internship posting with resume\") immediately reveals required entities (User, Posting, Application) and relationships (One-to-Many).\n\nQ: What is the Third Normal Form (3NF) in database design?\nA: 3NF ensures that tables contain zero data redundancy: every non-key column must depend directly on the primary key, the whole primary key, and nothing but the primary key.\n\nQ: What is the purpose of API Contract First design?\nA: Establishing exact JSON request/response structures between frontend and backend teams before coding allows both teams to develop concurrently in parallel using mock data."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Author Complete Capstone Blueprint Specification",
              "instructions": "Create a complete Capstone Architectural Blueprint document for your project.\n1. Write 8 Agile User Stories covering both regular users and admin personas.\n2. Design an ERD schema consisting of at least 4 normalized tables with primary and foreign keys.\n3. Specify 10 REST API endpoints mapping out HTTP methods, URL paths, and expected response status codes.\n4. Sketch out the React component hierarchy tree.",
              "hint": "Review your ERD to ensure every foreign key column references a valid primary key."
            },
            "resources": [
              {
                "label": "Atlassian Agile User Stories Guide",
                "url": "https://www.atlassian.com/agile/project-management/user-stories"
              },
              {
                "label": "dbdiagram.io Free ERD Tool",
                "url": "https://dbdiagram.io/"
              }
            ]
          },
          "quiz": [
            {
              "q": "What is the primary objective of defining Agile User Stories prior to writing code?",
              "opts": [
                "To generate bytecode",
                "To clearly articulate end-user requirements and value from a functional perspective",
                "To configure Tomcat",
                "To compress databases"
              ],
              "ans": 1,
              "explanation": "User stories ensure software development aligns strictly with business user needs."
            },
            {
              "q": "What visual engineering artifact maps database tables, primary keys, and foreign key relationships?",
              "opts": [
                "Sequence Diagram",
                "Entity Relationship Diagram (ERD)",
                "Use Case Diagram",
                "Deployment Diagram"
              ],
              "ans": 1,
              "explanation": "ERDs visually model relational schema structures and entity cardinality."
            },
            {
              "q": "Why is building and testing the Spring Boot backend API with Postman recommended before writing React frontend code?",
              "opts": [
                "Vite requires it",
                "Isolating API verification ensures data structures and security filters work properly before frontend complexity is introduced",
                "React cannot run first",
                "SQL compiles faster"
              ],
              "ans": 1,
              "explanation": "Testing APIs independently guarantees a stable foundation for UI integration."
            },
            {
              "q": "What principle governs the Third Normal Form (3NF) in database design?",
              "opts": [
                "Encrypt all columns",
                "Eliminate data redundancy: every non-key column must depend solely and directly on the primary key",
                "Store all data in one table",
                "Use only strings"
              ],
              "ans": 1,
              "explanation": "3NF prevents update anomalies and data duplication."
            },
            {
              "q": "What does API Contract First methodology entail?",
              "opts": [
                "Writing Java classes first",
                "Defining exact JSON payload structures and endpoint URIs before coding, allowing frontend and backend teams to work in parallel",
                "Skipping documentation",
                "Using XML only"
              ],
              "ans": 1,
              "explanation": "Contract-first development decouples team dependencies via shared specifications."
            },
            {
              "q": "What is a Minimum Viable Product (MVP)?",
              "opts": [
                "The most expensive software version",
                "The earliest functional iteration of a product containing just enough core features to deliver value and gather user feedback",
                "A project without a database",
                "A mock UI design"
              ],
              "ans": 1,
              "explanation": "MVP scoping prevents scope creep by focusing on core functional deliverables."
            },
            {
              "q": "Which HTTP method should be specified in an API contract for replacing an existing resource entirely?",
              "opts": [
                "GET",
                "PUT",
                "PATCH",
                "DELETE"
              ],
              "ans": 1,
              "explanation": "PUT completely replaces target resource representations."
            }
          ]
        },
        {
          "id": 2,
          "title": "Docker & Containerization",
          "video": {
            "youtubeId": "3c-iBn73dDE",
            "title": "Docker & Containerization - Tutorial",
            "channel": "TechWorld with Nana",
            "duration": "3 hr",
            "description": "Containerization fundamentals, Docker vs Virtual Machines, building multi-stage Java Dockerfiles, Docker images/containers, and multi-service orchestration with docker-compose."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Containers vs Virtual Machines",
                "text": "The classic software development failure is: \"It works on my local machine, but crashes on production server!\" This happens due to discrepancies in operating systems, JDK versions, and environment paths.\n\nDocker solves this via Containerization: packaging an application together with its runtime environment, system tools, and libraries into a self-contained executable container.\nUnlike Virtual Machines (VMs) that boot heavyweight guest operating systems per instance (consuming gigabytes of RAM), Docker containers share the host machine's OS kernel directly, booting in milliseconds."
              },
              {
                "heading": "Multi-Stage Dockerfiles & Docker Compose Orchestration",
                "text": "• Dockerfile: Text script defining image build instructions.\n• Multi-Stage Builds: Stage 1 uses a heavy Maven/JDK image to compile Java bytecode into an executable JAR. Stage 2 copies ONLY the compiled JAR into a lightweight alpine JRE image (~150MB total size instead of 800MB).\n• docker-compose.yml: Orchestrates multi-container applications (Spring Boot API + MySQL database + React frontend) together on an isolated virtual network."
              },
              {
                "heading": "Production Code — Multi-Stage Spring Boot Dockerfile & Compose",
                "code": "# ==========================================\n<span class=\"cmt\">// 1. MULTI-STAGE DOCKERFILE FOR SPRING BOOT</span>\n# ==========================================\n# <span class=\"cls\">Stage</span> 1: <span class=\"cls\">Build</span> executable <span class=\"cls\">JAR</span> using <span class=\"cls\">Maven</span>\n<span class=\"cls\">FROM</span> maven:3.9.6-eclipse-temurin-17 <span class=\"cls\">AS</span> build\n<span class=\"cls\">WORKDIR</span> /app\n<span class=\"cls\">COPY</span> pom.xml .\n<span class=\"cls\">RUN</span> mvn dependency:go-offline\n<span class=\"cls\">COPY</span> src ./src\n<span class=\"cls\">RUN</span> mvn clean <span class=\"kw\">package</span> -<span class=\"cls\">DskipTests</span>\n\n# <span class=\"cls\">Stage</span> 2: <span class=\"cls\">Create</span> lightweight runtime container\n<span class=\"cls\">FROM</span> eclipse-temurin:17-jre-alpine\n<span class=\"cls\">WORKDIR</span> /app\n<span class=\"cls\">COPY</span> --<span class=\"kw\">from</span>=build /app/target/*.jar app.jar\n<span class=\"cls\">EXPOSE</span> 8080\n<span class=\"cls\">ENTRYPOINT</span> [<span class=\"str\">\"java\"</span>, <span class=\"str\">\"-jar\"</span>, <span class=\"str\">\"app.jar\"</span>]\n\n# ==========================================\n<span class=\"cmt\">// 2. DOCKER-COMPOSE.YML ORCHESTRATION</span>\n# ==========================================\nversion: <span class=\"str\">'3.8'</span>\nservices:\n  mysql-database:\n    image: mysql:8.0\n    container_name: avron-mysql\n    environment:\n      MYSQL_ROOT_PASSWORD: rootpassword\n      MYSQL_DATABASE: internship_portal_db\n    ports:\n      - <span class=\"str\">\"3306:3306\"</span>\n    volumes:\n      - mysql_storage:/<span class=\"kw\">var</span>/lib/mysql\n\n  spring-backend:\n    build: .\n    container_name: avron-api\n    ports:\n      - <span class=\"str\">\"8080:8080\"</span>\n    environment:\n      SPRING_DATASOURCE_URL: jdbc:mysql:<span class=\"cmt\">//mysql-database:3306/internship_portal_db</span>\n      SPRING_DATASOURCE_USERNAME: root\n      SPRING_DATASOURCE_PASSWORD: rootpassword\n    depends_on:\n      - mysql-database\n\nvolumes:\n  mysql_storage:"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always declare persistent Docker Volumes (mysql_storage:/var/lib/mysql) for database containers. Without volumes, deleting or restarting a database container permanently destroys all stored records!\n• Notice inside docker-compose.yml that SPRING_DATASOURCE_URL connects to jdbc:mysql://mysql-database:3306/.... Inside Docker's virtual bridge network, containers communicate via service names (mysql-database), NOT localhost!"
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: What is the difference between a Docker Image and a Docker Container?\nA: An Image is an immutable, read-only blueprint snapshot containing application binaries and runtime instructions. A Container is a live, running isolated instance created from that image.\n\nQ: Why do we use Multi-Stage Docker builds for Spring Boot?\nA: Compilation tools (Maven, full JDK compilers) require ~800MB of storage. By compiling in Stage 1 and copying only the resulting .jar artifact into a slim JRE Alpine Stage 2 image, the final production container drops to ~150MB, slashing cloud deployment deployment times and vulnerability surface area.\n\nQ: What command builds and launches all services defined in docker-compose.yml in background detached mode?\nA: docker-compose up -d"
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Containerize Full Stack Application",
              "instructions": "Create Docker configuration files in your capstone repository.\n1. Write a multi-stage Dockerfile compiling and packaging your Spring Boot JAR.\n2. Write a docker-compose.yml orchestrating MySQL 8.0 and your Spring Boot API container.\n3. Execute docker-compose up --build and verify via Postman that your API connects to MySQL container cleanly inside Docker network.",
              "hint": "Run docker ps in your terminal to verify that both mysql and backend containers show 'Up' status."
            },
            "resources": [
              {
                "label": "Docker Official Get Started Guide",
                "url": "https://docs.docker.com/get-started/"
              },
              {
                "label": "Spring Boot Docker Best Practices",
                "url": "https://spring.io/guides/topicals/spring-boot-docker/"
              }
            ]
          },
          "quiz": [
            {
              "q": "How do Docker containers differ fundamentally from Virtual Machines (VMs)?",
              "opts": [
                "Containers require hardware guest OS installation",
                "Containers share the host operating system kernel directly, booting in milliseconds with minimal RAM overhead",
                "Containers run slower",
                "VMs are lighter"
              ],
              "ans": 1,
              "explanation": "Kernel sharing makes containers lightweight compared to guest-OS virtual machines."
            },
            {
              "q": "What is the primary objective of a Multi-Stage Dockerfile build for Java applications?",
              "opts": [
                "To run two servers",
                "To separate heavy compilation tools (Maven/JDK) in Stage 1 from the final slim JRE runtime image in Stage 2, shrinking image size by ~80%",
                "To encrypt JAR files",
                "To bypass Docker engine"
              ],
              "ans": 1,
              "explanation": "Multi-stage builds discard compilation baggage, retaining only necessary execution runtimes."
            },
            {
              "q": "Inside a docker-compose virtual bridge network, how should the Spring Boot container connect to the MySQL container?",
              "opts": [
                "jdbc:mysql://localhost:3306/db",
                "jdbc:mysql://mysql-database:3306/db (using exact compose service name as hostname)",
                "jdbc:mysql://127.0.0.1:3306/db",
                "jdbc:mysql://docker:3306/db"
              ],
              "ans": 1,
              "explanation": "Docker DNS resolves docker-compose service names directly to container IP addresses."
            },
            {
              "q": "Why must database containers define persistent storage volumes (volumes: - mysql_storage:/var/lib/mysql)?",
              "opts": [
                "To run queries faster",
                "Because container filesystem layers are ephemeral; volumes persist database data permanently outside container lifecycles",
                "Required by MySQL",
                "To compress tables"
              ],
              "ans": 1,
              "explanation": "Volumes decouple persistent data storage from disposable container lifecycles."
            },
            {
              "q": "Which Docker command builds image artifacts and boots all services configured inside docker-compose.yml?",
              "opts": [
                "docker start all",
                "docker-compose up --build",
                "docker run compose",
                "docker boot"
              ],
              "ans": 1,
              "explanation": "docker-compose up builds missing images and orchestrates container startups."
            },
            {
              "q": "What is the relationship between a Docker Image and a Docker Container?",
              "opts": [
                "Same concept",
                "An Image is a static blueprint snapshot; a Container is a live running execution instance of an image",
                "Container is smaller",
                "Image requires internet"
              ],
              "ans": 1,
              "explanation": "Images are read-only templates instantiated into running containers."
            },
            {
              "q": "Which Dockerfile instruction specifies the executable command executed when a container boots?",
              "opts": [
                "START",
                "ENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]",
                "BOOT",
                "EXECUTE"
              ],
              "ans": 1,
              "explanation": "ENTRYPOINT defines the primary execution process of the booted container."
            }
          ]
        },
        {
          "id": 3,
          "title": "Deployment — Render, Railway & Vercel",
          "video": {
            "youtubeId": "l134cBAJCuc",
            "title": "Deployment — Render, Railway & Vercel - Tutorial",
            "channel": "Amigoscode",
            "duration": "45 min",
            "description": "Zero-cost full-stack cloud deployment: hosting Spring Boot Docker containers on Render.com, provisioning free PostgreSQL on Neon/Railway, hosting React SPAs on Vercel, and configuring environment variables."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Zero-Cost Cloud Deployment Pipeline",
                "text": "Deploying full-stack applications to live public cloud servers allows recruiters and clients to test your work anywhere.\n\nOptimal Free Cloud Stack:\n1. Database: Free cloud PostgreSQL instance hosted on Neon.tech or Aiven.\n2. Backend API: Render.com Web Service executing your Spring Boot Docker container or compiled JAR.\n3. Frontend SPA: Vercel or Netlify hosting your compiled static React build with global CDN distribution."
              },
              {
                "heading": "Managing Secrets & Combating Cold Starts",
                "text": "• Never hardcode database passwords or JWT secret keys in git repositories! Configure Environment Variables inside cloud dashboards (Render/Vercel settings tabs).\n• Render Free Tier Cold Starts: Render spins down free web services after 15 minutes of inactivity. The first subsequent request triggers a 50-second container cold start boot delay. Prevent this by setting up a free monitoring cron job (UptimeRobot.com) pinging /api/v1/public/health every 5 minutes."
              },
              {
                "heading": "Production Code — Environment Configuration & CORS Setup",
                "code": "# ==========================================\n<span class=\"cmt\">// 1. SPRING BOOT APPLICATION.PROPERTIES (PROD)</span>\n# ==========================================\nspring.datasource.url=${DATABASE_URL}\nspring.datasource.username=${DATABASE_USERNAME}\nspring.datasource.password=${DATABASE_PASSWORD}\nspring.jpa.hibernate.ddl-auto=validate\napplication.security.jwt.secret-key=${JWT_SECRET_KEY}\n\n# ==========================================\n<span class=\"cmt\">// 2. REACT VITE .ENV.PRODUCTION FILE</span>\n# ==========================================\n# <span class=\"cls\">Injected</span> automatically by <span class=\"cls\">Vercel</span> deployment build runner\nVITE_API_BASE_URL=https:<span class=\"cmt\">//avron-internship-api.onrender.com/api/v1</span>\n\n# ==========================================\n<span class=\"cmt\">// 3. SECURITY CORS BEAN IN SPRING BOOT</span>\n# ==========================================\n@<span class=\"cls\">Bean</span>\n<span class=\"kw\">public</span> <span class=\"cls\">CorsConfigurationSource</span> corsConfigurationSource() {\n    <span class=\"cls\">CorsConfiguration</span> config = <span class=\"kw\">new</span> <span class=\"cls\">CorsConfiguration</span>();\n    <span class=\"cmt\">// Dynamically whitelist production Vercel frontend URL</span>\n    config.setAllowedOrigins(<span class=\"cls\">List</span>.of(\n        <span class=\"str\">\"http://localhost:3000\"</span>,\n        <span class=\"str\">\"https://avron-internship-portal.vercel.app\"</span>\n    ));\n    config.setAllowedMethods(<span class=\"cls\">List</span>.of(<span class=\"str\">\"GET\"</span>, <span class=\"str\">\"POST\"</span>, <span class=\"str\">\"PUT\"</span>, <span class=\"str\">\"DELETE\"</span>, <span class=\"str\">\"OPTIONS\"</span>));\n    config.setAllowedHeaders(<span class=\"cls\">List</span>.of(<span class=\"str\">\"*\"</span>));\n    config.setAllowCredentials(<span class=\"kw\">true</span>);\n    <span class=\"cls\">UrlBasedCorsConfigurationSource</span> source = <span class=\"kw\">new</span> <span class=\"cls\">UrlBasedCorsConfigurationSource</span>();\n    source.registerCorsConfiguration(<span class=\"str\">\"/**\"</span>, config);\n    <span class=\"kw\">return</span> source;\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Always verify that your database connection string uses SSL encryption in production (jdbc:postgresql://host:5432/db?sslmode=require).\n• Add a clean health check endpoint (@GetMapping(\"/health\") return \"OK\") to verify cloud container boot status immediately during deployment pipelines."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why do we use Vercel/Netlify for React frontends instead of hosting them inside the Spring Boot JAR?\nA: Decoupling and CDN latency. Vercel compiles React SPAs into static HTML/JS/CSS assets distributed across global Edge CDNs, loading in <50ms worldwide. Serving static assets from a Java server consumes JVM thread memory unnecessary.\n\nQ: How do environment variables prevent security breaches?\nA: Storing secrets in environment variables decouples confidential credentials from source code. If your public GitHub repository is cloned by anyone, they receive zero passwords or cryptographic keys.\n\nQ: What causes CORS errors upon cloud deployment even if local testing worked?\nA: Local testing used localhost:3000 -> localhost:8080. In cloud deployment, Vercel frontend (https://app.vercel.app) calls Render API (https://api.onrender.com). If the Spring Boot CORS bean is not updated to explicitly whitelist https://app.vercel.app, browsers block cross-origin requests."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Deploy Capstone Live to Public Cloud",
              "instructions": "Deploy your capstone project to live production.\n1. Provision a free PostgreSQL database on Neon.tech and copy connection string.\n2. Create a Render.com Web Service connected to your GitHub repo, configuring environment variables.\n3. Deploy your React frontend to Vercel, setting VITE_API_BASE_URL pointing to live Render URL.\n4. Set up UptimeRobot pinging your backend /health endpoint every 5 minutes.",
              "hint": "Test live registration and login workflow on deployed Vercel URL to verify CORS settings work."
            },
            "resources": [
              {
                "label": "Render Cloud Deployment Documentation",
                "url": "https://docs.render.com/deploy-spring-boot"
              },
              {
                "label": "Vercel Vite Deployment Guide",
                "url": "https://vercel.com/docs/frameworks/vite"
              }
            ]
          },
          "quiz": [
            {
              "q": "Why should database passwords and JWT secret keys never be committed inside application.properties?",
              "opts": [
                "It slows down build",
                "Exposes sensitive credentials permanently inside Git repository history, risking severe server security breaches",
                "Java blocks compilation",
                "Properties cannot store strings"
              ],
              "ans": 1,
              "explanation": "Secrets must be injected dynamically via external environment variables."
            },
            {
              "q": "Why does the Render free tier experience a ~50-second latency delay upon receiving the first request after idle time?",
              "opts": [
                "Server hardware failure",
                "Free tier containers sleep after 15 minutes of inactivity; the initial request triggers a container cold start boot sequence",
                "Java garbage collection",
                "DNS lookup delay"
              ],
              "ans": 1,
              "explanation": "Idle container sleep policies conserve cloud provider server resources."
            },
            {
              "q": "How can you prevent Render free tier containers from sleeping due to inactivity?",
              "opts": [
                "Pay $1000",
                "Configure automated monitoring tools (like UptimeRobot) pinging a health check endpoint every 5 minutes",
                "Delete database",
                "Run infinite loop in Java"
              ],
              "ans": 1,
              "explanation": "Regular automated pings keep container instances active."
            },
            {
              "q": "Why is Vercel an ideal deployment platform for built React Single Page Applications?",
              "opts": [
                "Runs Java bytecode",
                "Compiles React into static files served from global Edge CDNs with instant cache delivery and automatic HTTPS",
                "Provides free Oracle DB",
                "Executes Docker containers"
              ],
              "ans": 1,
              "explanation": "Static CDN distribution provides unmatched global frontend load speeds."
            },
            {
              "q": "What causes a CORS error immediately after deploying frontend to Vercel and backend to Render?",
              "opts": [
                "Vercel blocks API calls",
                "The Spring Boot CORS configuration still whitelists localhost:3000 instead of the new production Vercel domain URL",
                "HTTPS is incompatible with REST",
                "Render database is locked"
              ],
              "ans": 1,
              "explanation": "Cross-origin whitelists must explicitly include deployed frontend origin URLs."
            },
            {
              "q": "What property syntax injects system environment variables into Spring Boot application.properties?",
              "opts": [
                "${VARIABLE_NAME}",
                "{{VARIABLE_NAME}}",
                "ENV[VARIABLE_NAME]",
                "#VARIABLE_NAME#"
              ],
              "ans": 0,
              "explanation": "Spring uses dollar-brace placeholder syntax for property injection."
            },
            {
              "q": "Why should spring.jpa.hibernate.ddl-auto be set to 'validate' in production environments?",
              "opts": [
                "To drop tables on restart",
                "To verify database schema matches entity mappings safely without accidentally altering or deleting production data tables",
                "To format SQL queries",
                "Required by Render"
              ],
              "ans": 1,
              "explanation": "Production schema alterations should be executed deterministically via migration tools."
            }
          ]
        },
        {
          "id": 4,
          "title": "Code Quality & Best Practices",
          "video": {
            "youtubeId": "4V4vMcQXpFk",
            "title": "Code Quality & Best Practices - Tutorial",
            "channel": "Amigoscode",
            "duration": "1 hr",
            "description": "Enterprise engineering rigor: SOLID principles, Clean Code rules, DRY vs WET code, SLF4J structured logging, fail-fast exception handling, and peer code review checklists."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — SOLID Principles & Clean Code",
                "text": "Writing code that works is only 20% of engineering; writing maintainable code that survives 5 years of team turnover is the real objective.\n\nThe SOLID Principles:\n• S - Single Responsibility: A class should have one and only one reason to change.\n• O - Open/Closed: Software entities should be open for extension but closed for modification.\n• L - Liskov Substitution: Subclasses must be substitutable for parent classes without breaking logic.\n• I - Interface Segregation: Prefer small, highly cohesive interfaces over bloated monolithic interfaces.\n• D - Dependency Inversion: Depend on abstract interfaces, never on concrete implementation classes."
              },
              {
                "heading": "Structured Logging & Fail-Fast Defensive Design",
                "text": "• Never use System.out.println() in production code! System.out blocks synchronous execution and cannot be filtered or formatted. Use structured logging via SLF4J / Logback (@Slf4j): log.info(\"User {} enrolled in course {}\", userId, courseId).\n• Fail-Fast Architecture: Validate input arguments at the very entrance of methods using Objects.requireNonNull() or assertions. Reject invalid data immediately before executing heavy computations."
              },
              {
                "heading": "Production Code — Clean Refactoring vs Legacy Code",
                "code": "<span class=\"kw\">package</span> com.avron.internship.service;\n\n<span class=\"kw\">import</span> org.slf4j.<span class=\"cls\">Logger</span>;\n<span class=\"kw\">import</span> org.slf4j.<span class=\"cls\">LoggerFactory</span>;\n<span class=\"kw\">import</span> org.springframework.stereotype.<span class=\"cls\">Service</span>;\n<span class=\"kw\">import</span> java.util.<span class=\"cls\">Objects</span>;\n\n<span class=\"cmt\">// ==========================================</span>\n<span class=\"cmt\">// BAD: VIOLATES CLEAN CODE & SOLID</span>\n<span class=\"cmt\">// ==========================================</span>\n<span class=\"kw\">class</span> <span class=\"cls\">LegacyStudentHelper</span> {\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> process(<span class=\"cls\">Student</span> s) {\n        <span class=\"cls\">System</span>.out.println(<span class=\"str\">\"Processing student...\"</span>); <span class=\"cmt\">// Blocking console print</span>\n        <span class=\"kw\">if</span> (s != <span class=\"kw\">null</span>) {\n            <span class=\"kw\">if</span> (s.getGpa() > 8.0) {\n                <span class=\"cmt\">// Magic numbers and direct database coupling</span>\n                <span class=\"kw\">new</span> <span class=\"cls\">StudentDAOJdbcImpl</span>(<span class=\"kw\">null</span>).saveToDatabase(s);\n            }\n        }\n    }\n}\n\n<span class=\"cmt\">// ==========================================</span>\n<span class=\"cmt\">// GOOD: CLEAN, FAIL-FAST, SOLID COMPLIANT</span>\n<span class=\"cmt\">// ==========================================</span>\n@<span class=\"cls\">Service</span>\n<span class=\"kw\">public</span> <span class=\"kw\">class</span> <span class=\"cls\">ScholarshipEvaluationService</span> {\n    <span class=\"kw\">private</span> <span class=\"kw\">static</span> <span class=\"kw\">final</span> <span class=\"cls\">Logger</span> log = <span class=\"cls\">LoggerFactory</span>.getLogger(<span class=\"cls\">ScholarshipEvaluationService</span>.<span class=\"kw\">class</span>);\n    <span class=\"kw\">private</span> <span class=\"kw\">static</span> <span class=\"kw\">final</span> <span class=\"kw\">double</span> SCHOLARSHIP_GPA_THRESHOLD = 8.50; <span class=\"cmt\">// Named constant</span>\n\n    <span class=\"kw\">private</span> <span class=\"kw\">final</span> <span class=\"cls\">StudentRepository</span> repository; <span class=\"cmt\">// Dependency Inversion (Interface)</span>\n\n    <span class=\"kw\">public</span> <span class=\"cls\">ScholarshipEvaluationService</span>(<span class=\"cls\">StudentRepository</span> repository) {\n        this.repository = repository;\n    }\n\n    <span class=\"kw\">public</span> <span class=\"kw\">void</span> awardHonorsScholarship(<span class=\"cls\">Student</span> candidate) {\n        <span class=\"cmt\">// Fail-fast defensive validation guard</span>\n        <span class=\"cls\">Objects</span>.requireNonNull(candidate, <span class=\"str\">\"Scholarship evaluation candidate cannot be null\"</span>);\n\n        log.info(<span class=\"str\">\"Evaluating candidate ID [{}] for honors qualification...\"</span>, candidate.getId());\n\n        <span class=\"kw\">if</span> (candidate.getGpa() >= SCHOLARSHIP_GPA_THRESHOLD) {\n            candidate.grantScholarshipStatus();\n            repository.save(candidate);\n            log.info(<span class=\"str\">\"Scholarship successfully awarded to candidate ID [{}]\"</span>, candidate.getId());\n        } <span class=\"kw\">else</span> {\n            log.debug(<span class=\"str\">\"Candidate ID [{}] GPA {} below qualification threshold.\"</span>, \n                    candidate.getId(), candidate.getGpa());\n        }\n    }\n}"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• DRY (Don't Repeat Yourself): Extract repeated code blocks into helper methods or shared utilities. However, avoid premature over-abstraction (WET - Write Everything Twice is acceptable if two modules evolve independently).\n• Eliminate Magic Numbers: Never write if (status == 3). Extract literal values into readable constants: static final int STATUS_COMPLETED = 3; or enums."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why is System.out.println() banned in production enterprise Java applications?\nA: System.out is synchronous and grabs system I/O stream locks, creating severe multi-threaded performance bottlenecks. Furthermore, console output cannot be categorized by severity levels (INFO/WARN/ERROR) or routed to cloud monitoring aggregators (Datadog/ELK).\n\nQ: What does the Single Responsibility Principle (SRP) dictate?\nA: Every module or class should encapsulate one specific business domain responsibility. If a class validates user emails, executes JDBC SQL queries, and sends SMTP email notifications simultaneously, it violates SRP.\n\nQ: What is the difference between log levels DEBUG, INFO, WARN, and ERROR?\nA: DEBUG: Detailed technical diagnostic information for development. INFO: High-level business milestones (User logged in, Order placed). WARN: Unexpected anomalies recoverable by the application (Rate limit hit, Retry executed). ERROR: Fatal system failures requiring immediate developer intervention (DB connection down, NullPointerException)."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Conduct Comprehensive Peer Code Review",
              "instructions": "Perform clean code auditing across your capstone repository.\n1. Scan all service and controller classes, replacing every System.out.println() with SLF4J log.info() or log.error().\n2. Identify and extract at least 3 hardcoded numeric or string literals into public static final constants or Java Enums.\n3. Verify constructor injection is utilized across all Spring components.",
              "hint": "In Lombok projects, annotating classes with @Slf4j injects private static final Logger log automatically."
            },
            "resources": [
              {
                "label": "SLF4J Logging Best Practices Manual",
                "url": "https://www.slf4j.org/manual.html"
              },
              {
                "label": "Baeldung — SOLID Principles in Java",
                "url": "https://www.baeldung.com/solid-principles"
              }
            ]
          },
          "quiz": [
            {
              "q": "What does the Single Responsibility Principle (S in SOLID) mandate?",
              "opts": [
                "A class must have only one method",
                "A class should have one and only one reason to change, focusing on a single cohesive business responsibility",
                "A class must be static",
                "A class cannot extend others"
              ],
              "ans": 1,
              "explanation": "SRP prevents monolithic classes by isolating independent domain functions."
            },
            {
              "q": "Why is System.out.println() prohibited in production enterprise Java applications?",
              "opts": [
                "Syntax error",
                "It synchronizes and locks system I/O streams, degrading performance, and lacks severity formatting or centralized cloud log routing",
                "It consumes disk space",
                "Tomcat blocks it"
              ],
              "ans": 1,
              "explanation": "Asynchronous logging frameworks (SLF4J/Logback) handle logging efficiently without blocking threads."
            },
            {
              "q": "What does the Dependency Inversion Principle (D in SOLID) advocate?",
              "opts": [
                "Never use constructors",
                "High-level modules should depend on abstract interfaces rather than concrete low-level implementation classes",
                "Delete dependencies",
                "Inject variables directly"
              ],
              "ans": 1,
              "explanation": "Abstract interfaces decouple business logic from underlying implementation details."
            },
            {
              "q": "What is a 'Magic Number' in software engineering?",
              "opts": [
                "Prime number",
                "An unexplained numeric literal (e.g., if(type == 4)) embedded in logic; should be extracted into named constants",
                "Heap memory address",
                "Array size"
              ],
              "ans": 1,
              "explanation": "Named constants (static final int TYPE_VIP = 4) make code intentions instantly readable."
            },
            {
              "q": "Which log severity level should be used to record routine business events like 'User registration successful'?",
              "opts": [
                "DEBUG",
                "INFO",
                "WARN",
                "ERROR"
              ],
              "ans": 1,
              "explanation": "INFO tracks significant operational application milestones cleanly."
            },
            {
              "q": "What does the DRY engineering principle stand for?",
              "opts": [
                "Deploy React Yearly",
                "Don't Repeat Yourself — extract duplicate logic into modular, reusable abstractions",
                "Data Relay Yield",
                "Do Run Quickly"
              ],
              "ans": 1,
              "explanation": "DRY eliminates maintenance nightmares where bug fixes must be repeated in 10 copied files."
            },
            {
              "q": "What is the primary benefit of Fail-Fast defensive programming?",
              "opts": [
                "Compiles code faster",
                "Validates inputs immediately upon method entry (Objects.requireNonNull), aborting execution cleanly before invalid data corrupts downstream databases",
                "Disables exceptions",
                "Skips validation"
              ],
              "ans": 1,
              "explanation": "Immediate input validation catches bugs at the exact source boundary."
            }
          ]
        },
        {
          "id": 5,
          "title": "Final Submission & Certificate",
          "video": {
            "youtubeId": "EYkYWENu8T8",
            "title": "Final Submission & Certificate - Tutorial",
            "channel": "Kevin Powell",
            "duration": "30 min",
            "description": "Mastering your capstone project submission: crafting standout GitHub README portfolios, recording professional Loom video demonstrations, exporting Postman collections, and graduation certification."
          },
          "content": {
            "sections": [
              {
                "heading": "Core Concepts — Crafting an Industry-Ready Portfolio Submission",
                "text": "Your capstone project is your primary professional portfolio asset when interviewing for full-stack engineering roles. A brilliant application with an empty README or broken live links gets ignored by engineering hiring managers within 10 seconds.\n\nMandatory Final Submission Deliverables:\n1. Public GitHub Repository: Clean source structure, zero hardcoded secrets, and formatted README.md.\n2. Live Cloud Deployment URLs: Backend API running on Render + Frontend SPA running on Vercel.\n3. 3-to-5 Minute Loom Video Walkthrough: Screen recording demonstrating live application workflows.\n4. Exported Postman API Collection: JSON file containing sample requests for every REST endpoint."
              },
              {
                "heading": "Structuring the Perfect GitHub README.md",
                "text": "A professional README must answer three questions instantly: What does this app do? How was it built? How can I test it right now?\n• Include high-resolution application screenshots or animated GIFs.\n• List exact live demo credentials (e.g., Demo Admin: admin@avron.com / Admin@123) allowing hiring managers to test protected routes without signing up.\n• Provide clear local Docker setup instructions."
              },
              {
                "heading": "Production Code — Standout Capstone README.md Template",
                "code": "# 🚀 <span class=\"cls\">AvronTech</span> <span class=\"cls\">Enterprise</span> <span class=\"cls\">Internship</span> & <span class=\"cls\">Job</span> <span class=\"cls\">Portal</span>\n\n<span class=\"cls\">An</span> end-to-end full-stack web platform connecting candidates with enterprise internship opportunities, featuring role-based <span class=\"cls\">JWT</span> security, real-time <span class=\"cls\">STOMP</span> <span class=\"cls\">WebSockets</span>, and <span class=\"cls\">AWS</span> <span class=\"cls\">S3</span> document processing.\n\n![<span class=\"cls\">Application</span> <span class=\"cls\">Dashboard</span> <span class=\"cls\">Banner</span>](https:<span class=\"cmt\">//via.placeholder.com/1000x400.png?text=AvronTech+Portal+Dashboard)</span>\n\n---\n\n## 🌐 <span class=\"cls\">Live</span> <span class=\"cls\">Cloud</span> <span class=\"cls\">Demo</span>\n* **<span class=\"cls\">Frontend</span> <span class=\"cls\">Application</span> (<span class=\"cls\">Vercel</span>):** [https:<span class=\"cmt\">//avron-internship-portal.vercel.app](https://avron-internship-portal.vercel.app)</span>\n* **<span class=\"cls\">Backend</span> <span class=\"cls\">REST</span> <span class=\"cls\">API</span> (<span class=\"cls\">Render</span>):** [https:<span class=\"cmt\">//avron-api.onrender.com/api/v1](https://avron-api.onrender.com/api/v1)</span>\n* **<span class=\"cls\">API</span> <span class=\"cls\">Documentation</span> (<span class=\"cls\">Swagger</span>):** [https:<span class=\"cmt\">//avron-api.onrender.com/swagger-ui.html](https://avron-api.onrender.com/swagger-ui.html)</span>\n\n### 🔑 <span class=\"cls\">Instant</span> <span class=\"cls\">Demo</span> <span class=\"cls\">Access</span> <span class=\"cls\">Credentials</span>\n* **<span class=\"cls\">Candidate</span> <span class=\"cls\">Account</span>:** `candidate@avron.com` | <span class=\"cls\">Password</span>: `<span class=\"cls\">Demo</span>@123`\n* **<span class=\"cls\">Admin</span> <span class=\"cls\">Account</span>:** `admin@avron.com` | <span class=\"cls\">Password</span>: `<span class=\"cls\">Admin</span>@123`\n\n---\n\n## 🛠️ <span class=\"cls\">Core</span> <span class=\"cls\">Technology</span> <span class=\"cls\">Stack</span>\n* **<span class=\"cls\">Backend</span>:** <span class=\"cls\">Java</span> 17, <span class=\"cls\">Spring</span> <span class=\"cls\">Boot</span> 3.2, <span class=\"cls\">Spring</span> <span class=\"cls\">Security</span> 6, <span class=\"cls\">JWT</span>, <span class=\"cls\">Spring</span> <span class=\"cls\">Data</span> <span class=\"cls\">JPA</span>, <span class=\"cls\">Hibernate</span> <span class=\"cls\">ORM</span>\n* **<span class=\"cls\">Frontend</span>:** <span class=\"cls\">React</span> 18, <span class=\"cls\">Vite</span>, <span class=\"cls\">React</span> <span class=\"cls\">Router</span> v6, <span class=\"cls\">Axios</span> <span class=\"cls\">Interceptors</span>, <span class=\"cls\">React</span> <span class=\"cls\">Hook</span> <span class=\"cls\">Form</span>\n* **<span class=\"cls\">Database</span> & <span class=\"cls\">Infrastructure</span>:** <span class=\"cls\">MySQL</span> 8.0, <span class=\"cls\">HikariCP</span> <span class=\"cls\">Connection</span> <span class=\"cls\">Pool</span>, <span class=\"cls\">Docker</span> & <span class=\"cls\">Docker</span> <span class=\"cls\">Compose</span>\n\n---\n\n## ⚡ <span class=\"cls\">Quick</span> <span class=\"cls\">Start</span> <span class=\"cls\">Local</span> <span class=\"cls\">Docker</span> <span class=\"cls\">Setup</span>\n```bash\n# 1. <span class=\"cls\">Clone</span> source repository\ngit clone https:<span class=\"cmt\">//github.com/yourusername/avron-internship-portal.git</span>\ncd avron-internship-portal\n\n# 2. <span class=\"cls\">Boot</span> database and backend <span class=\"cls\">API</span> containers via <span class=\"cls\">Docker</span> <span class=\"cls\">Compose</span>\ndocker-compose up --build -d\n\n# 3. <span class=\"cls\">Launch</span> <span class=\"cls\">React</span> frontend dev server\ncd frontend && npm install && npm run dev\n```"
              },
              {
                "heading": "Industry Best Practices & Pitfalls",
                "text": "• Verify that your .gitignore file excludes target/, node_modules/, and .env files before submitting. Submitting multi-hundred-megabyte node_modules directories clutters repositories.\n• Keep your Loom video recording concise and engaging: show successful login, demonstrate core CRUD mutations, display responsive UI layout, and show live WebSocket alerts."
              },
              {
                "heading": "Top Interview Questions & Answers",
                "text": "Q: Why do hiring managers prioritize reviewing GitHub README files and live demo links over code files?\nA: Time efficiency and product orientation. An engineering manager evaluating 50 candidates assesses communication clarity, architectural polish, and deployment capability through live demos first before diving deep into repository code syntax.\n\nQ: What is a Postman Collection JSON file and why is it required?\nA: An exported JSON file containing pre-configured HTTP request templates, headers, and body payloads. Reviewers import this collection into their Postman desktop client to test API endpoints immediately without manually typing request payloads."
              }
            ],
            "practiceTask": {
              "title": "Practice Task — Complete Capstone Submission Package",
              "instructions": "Finalize your capstone submission.\n1. Format your GitHub README.md using the production template above, inserting live Vercel and Render links.\n2. Record a 4-minute screen walkthrough using Loom.com demonstrating candidate registration and admin posting creation.\n3. Export your Postman API Collection as internship_api_collection.json and commit it to your repository root.\n4. Submit final repository URL for graduation evaluation.",
              "hint": "Test clicking every single link in your README from an incognito browser window to verify zero broken links."
            },
            "resources": [
              {
                "label": "MakeaREADME — Standout Template Generator",
                "url": "https://www.makeareadme.com/"
              },
              {
                "label": "Loom Free Screen Recorder",
                "url": "https://www.loom.com/"
              }
            ]
          },
          "quiz": [
            {
              "q": "What three critical questions must a standout GitHub README answer immediately?",
              "opts": [
                "Java version, compiler speed, memory usage",
                "What does the application do? How was it engineered? How can someone test the live demo right now?",
                "Developer birthday, college GPA, hobbies",
                "License text, git log, file count"
              ],
              "ans": 1,
              "explanation": "Clear documentation communicates value and technical execution instantly."
            },
            {
              "q": "Why should you provide live demo account credentials (email/password) directly inside your README?",
              "opts": [
                "Security risk",
                "Allows hiring managers and recruiters to test protected authenticated features immediately without going through registration friction",
                "Required by GitHub",
                "To test database"
              ],
              "ans": 1,
              "explanation": "Frictionless demo access maximizes recruiter engagement."
            },
            {
              "q": "Which directories MUST be excluded inside your repository .gitignore file prior to final submission?",
              "opts": [
                "src/ and public/",
                "target/, node_modules/, and .env secret files",
                "package.json and pom.xml",
                "README.md"
              ],
              "ans": 1,
              "explanation": "Build artifacts and secret keys must never pollute git repository tracking."
            },
            {
              "q": "What is the optimal recommended duration for a capstone Loom video demonstration?",
              "opts": [
                "30 seconds",
                "3 to 5 minutes (concise demonstration of login, core features, and live UI workflows)",
                "45 minutes",
                "2 hours"
              ],
              "ans": 1,
              "explanation": "3-5 minutes respects reviewer time while proving complete functionality."
            },
            {
              "q": "What is an exported Postman Collection JSON file?",
              "opts": [
                "Database backup",
                "A portable JSON file containing pre-configured HTTP request templates allowing evaluators to test REST endpoints instantly",
                "React component",
                "Java JAR file"
              ],
              "ans": 1,
              "explanation": "Postman collections standardize API test execution across different machines."
            },
            {
              "q": "What command creates a clean production build of a Vite React application before deployment?",
              "opts": [
                "npm run dev",
                "npm run build",
                "npm start",
                "node compile"
              ],
              "ans": 1,
              "explanation": "npm run build bundles minified production HTML/JS/CSS assets into dist/."
            },
            {
              "q": "Why is completing an end-to-end deployed capstone project critical for launching a Java Full Stack career?",
              "opts": [
                "Replaces college degree",
                "Proves practical mastery across database design, Spring Boot APIs, React UIs, security, and cloud deployment beyond theoretical syntax",
                "Guarantees instant hire",
                "Reduces resume length"
              ],
              "ans": 1,
              "explanation": "Demonstrated full-stack execution distinguishes top internship engineering candidates."
            }
          ]
        }
      ],
      "weekQuiz": [
        {
          "q": "Why should software engineers construct an Entity Relationship Diagram (ERD) and User Stories prior to writing backend code?",
          "opts": [
            "Required by compiler",
            "Validating functional requirements and relational table normalization early prevents massive database schema refactoring later",
            "To generate CSS",
            "To speed up Tomcat"
          ],
          "ans": 1,
          "explanation": "Upfront architectural planning establishes a solid structural foundation."
        },
        {
          "q": "What principle defines the Third Normal Form (3NF) in relational schema architecture?",
          "opts": [
            "Encrypt all IDs",
            "Zero data redundancy: every non-key column must depend directly and solely on the primary table key",
            "Single table storage",
            "All columns text"
          ],
          "ans": 1,
          "explanation": "3NF eliminates update anomalies across relational entities."
        },
        {
          "q": "How does containerization via Docker outperform legacy Virtual Machine (VM) deployment?",
          "opts": [
            "Requires guest OS installation",
            "Containers share the host operating system kernel directly, booting in milliseconds with minimal RAM consumption",
            "Containers run slower",
            "VMs are lighter"
          ],
          "ans": 1,
          "explanation": "Kernel sharing eliminates heavyweight guest OS overhead."
        },
        {
          "q": "What is the primary objective of using Multi-Stage Docker builds when containerizing Spring Boot applications?",
          "opts": [
            "To run two servers",
            "To separate heavyweight compilation tools (Maven/JDK) in Stage 1 from the final slim JRE runtime container in Stage 2, reducing image size by ~80%",
            "To encrypt JAR files",
            "To bypass Docker"
          ],
          "ans": 1,
          "explanation": "Multi-stage builds strip compile-time dependencies from production containers."
        },
        {
          "q": "Why should database credentials and JWT secret keys never be hardcoded inside application.properties?",
          "opts": [
            "Slows down compilation",
            "Exposes confidential secrets permanently in git history; secrets must be injected via external environment variables",
            "Java blocks strings",
            "Properties cannot store passwords"
          ],
          "ans": 1,
          "explanation": "External environment variables decouple secrets from repository tracking."
        },
        {
          "q": "How can you combat the ~50-second container cold start latency experienced on Render.com free cloud web services?",
          "opts": [
            "Pay $500 monthly",
            "Configure automated monitoring tools (like UptimeRobot) pinging a public health check endpoint every 5 minutes",
            "Delete MySQL database",
            "Restart computer"
          ],
          "ans": 1,
          "explanation": "Scheduled health pings keep free tier containers awake and responsive."
        },
        {
          "q": "What does the Single Responsibility Principle (SRP in SOLID) mandate?",
          "opts": [
            "One method per class",
            "Each class should have one and only one reason to change, focusing on a single cohesive domain responsibility",
            "Static classes only",
            "No constructors"
          ],
          "ans": 1,
          "explanation": "SRP prevents monolithic classes by isolating functional concerns."
        },
        {
          "q": "Why is System.out.println() prohibited in production enterprise Java applications?",
          "opts": [
            "Syntax error",
            "It synchronously locks system I/O streams degrading performance, and lacks severity categorization or cloud log routing",
            "Consumes disk space",
            "Tomcat blocks console"
          ],
          "ans": 1,
          "explanation": "Asynchronous logging frameworks (SLF4J/Logback) handle logs efficiently."
        },
        {
          "q": "What three questions must a professional GitHub capstone README answer instantly?",
          "opts": [
            "Java version, IDE name, OS type",
            "What does the application do? How was it engineered? How can someone test the live demo right now?",
            "Birthday, GPA, hobbies",
            "License, git log, file count"
          ],
          "ans": 1,
          "explanation": "Clear documentation highlights product value and technical rigor immediately."
        },
        {
          "q": "Why should live demo credentials (candidate@avron.com / Demo@123) be provided inside your README?",
          "opts": [
            "Security breach",
            "Allows engineering hiring managers to test protected authenticated features immediately without registration friction",
            "Required by GitHub",
            "To test database"
          ],
          "ans": 1,
          "explanation": "Frictionless demo access maximizes evaluator engagement and portfolio impact."
        }
      ],
      "miniProject": {
        "title": "Week 9 Capstone Project — Final Full-Stack Production Deployment & Portfolio Presentation",
        "description": "Complete, containerize, deploy, and present your end-to-end Java Full Stack Capstone Application to industry standards.",
        "requirements": [
          "Finalize and audit all backend Spring Boot 3 endpoints and React 18 frontend workflows against your Capstone Architectural Blueprint specification.",
          "Perform code quality refactoring: ensure SOLID compliance, replace System.out with SLF4J structured logging, and eliminate magic literals.",
          "Containerize backend application using multi-stage Dockerfile and create docker-compose.yml testing multi-container orchestration with MySQL locally.",
          "Provision live cloud PostgreSQL database on Neon.tech and deploy Spring Boot container/API to Render.com with environment variables configured.",
          "Deploy production-built React frontend SPA to Vercel global edge CDN pointing VITE_API_BASE_URL to your live Render backend.",
          "Author standout GitHub README.md complete with architecture diagram, live demo URLs, instant demo login credentials, and local Docker setup instructions.",
          "Export Postman API Collection with pre-configured request payloads and commit to repository root.",
          "Record and attach a professional 4-minute Loom screen demonstration walking through live candidate workflows and admin security features."
        ]
      }
    }
  ]
};

if (typeof module !== 'undefined') module.exports = JAVA_FULLSTACK;
