let body = document.querySelector('body');
let profile = document.querySelector('.header .flex .profile');
let search = document.querySelector('.header .flex .search-form');
let sidebar = document.querySelector('.side-bar');
let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

document.querySelector('#login-btn').onclick = () => {
    profile.classList.toggle('active');
    search.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    profile.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
    sidebar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () => {
    sidebar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    search.classList.remove('active');

    if (window.innerWidth > 1200) {
        sidebar.classList.remove('active');
        body.classList.remove('active');
    }
}

// Dark mode functions (guard toggle icon presence for pages without header)
const enableDarkMode = () => {
    if (toggleBtn && toggleBtn.classList) {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
    }
    body?.classList?.add('dark');
    document.documentElement?.classList?.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    if (toggleBtn && toggleBtn.classList) {
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
    }
    body?.classList?.remove('dark');
    document.documentElement?.classList?.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

// Always apply saved preference on load across all pages
if (darkMode === 'enabled') {
    // Apply classes first; update icon if present
    body?.classList?.add('dark');
    document.documentElement?.classList?.add('dark');
    if (toggleBtn && toggleBtn.classList) {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
    }
}

// Bind toggle only if the icon exists on this page
if (toggleBtn) {
    toggleBtn.onclick = () => {
        let current = localStorage.getItem('dark-mode');
        if (current === 'enabled') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
}




// Get course from URL
const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get("course") || "html";

// Questions object
 const quizzes = {
            html: [
                {
                    q: "What does HTML stand for?",
                    options: [
                        "Hyperlinks and Text Markup Language",
                        "Hyper Text Markup Language",
                        "Home Tool Markup Language"
                    ],
                    answer: 1
                },
                {
                    q: "Which tag is used to create a hyperlink?",
                    options: ["link", "a", "href"],
                    answer: 1
                },
                {
                    q: "Which attribute is used to display an image?",
                    options: ["href", "src", "alt"],
                    answer: 1
                },
                {
                    q: "Which tag is used for the largest heading?",
                    options: ["h6", "h1", "heading"],
                    answer: 1
                },
                {
                    q: "Which tag is used to insert a line break?",
                    options: ["br", "break", "lb"],
                    answer: 0
                },
                {
                    q: "Which attribute provides alternative text for an image?",
                    options: ["src", "alt", "title"],
                    answer: 1
                },
                {
                    q: "Which element is used for an unordered list?",
                    options: ["ul", "ol", "list"],
                    answer: 0
                },
                {
                    q: "Which element is used for a numbered list?",
                    options: ["ul", "ol", "li"],
                    answer: 1
                },
                {
                    q: "Which tag is used to make text bold?",
                    options: ["bold", "strong", "b"],
                    answer: 2
                },
                {
                    q: "Which tag is used for italic text?",
                    options: ["i", "em", "Both"],
                    answer: 2
                },
                {
                    q: "Which element defines a table row?",
                    options: ["tr", "td", "th"],
                    answer: 0
                },
                {
                    q: "Which element defines a table cell?",
                    options: ["td", "tr", "table"],
                    answer: 0
                },
                {
                    q: "Which element is used to insert an image?",
                    options: ["src", "img", "picture"],
                    answer: 1
                },
                {
                    q: "Which element defines a hyperlink?",
                    options: ["a", "link", "href"],
                    answer: 0
                },
                {
                    q: "Which tag is used for adding a title to the webpage?",
                    options: ["meta", "title", "head"],
                    answer: 1
                }
            ],

            // questions.js (CSS section)
            css: [
                {
                    q: "Which property is used to change text color in CSS?",
                    options: ["font-color", "text-color", "color"],
                    answer: 2
                },
                {
                    q: "Which symbol is used for id selector in CSS?",
                    options: [". (dot)", "# (hash)", "* (star)"],
                    answer: 1
                },
                {
                    q: "Which symbol is used for class selector in CSS?",
                    options: [". (dot)", "# (hash)", "* (star)"],
                    answer: 0
                },
                {
                    q: "Which property is used to change the background color?",
                    options: ["bgcolor", "background-color", "color"],
                    answer: 1
                },
                {
                    q: "Which property is used to set font size?",
                    options: ["font-style", "font-size", "text-size"],
                    answer: 1
                },
                {
                    q: "Which property is used to align text?",
                    options: ["align", "text-align", "font-align"],
                    answer: 1
                },
                {
                    q: "Which property is used to set the width of an element?",
                    options: ["width", "size", "element-width"],
                    answer: 0
                },
                {
                    q: "Which property is used to set the height of an element?",
                    options: ["height", "h-size", "element-height"],
                    answer: 0
                },
                {
                    q: "Which property is used to make text bold?",
                    options: ["font-weight", "text-weight", "font-style"],
                    answer: 0
                },
                {
                    q: "Which property is used to set line spacing?",
                    options: ["line-height", "line-spacing", "text-height"],
                    answer: 0
                },
                {
                    q: "Which property is used to change text decoration?",
                    options: ["text-decoration", "font-decoration", "text-style"],
                    answer: 0
                },
                {
                    q: "Which property is used to add space inside an element?",
                    options: ["margin", "padding", "spacing"],
                    answer: 1
                },
                {
                    q: "Which property is used to add space outside an element?",
                    options: ["margin", "padding", "spacing"],
                    answer: 0
                },
                {
                    q: "Which property is used to set element visibility?",
                    options: ["display", "visibility", "show"],
                    answer: 1
                },
                {
                    q: "Which property is used to float elements?",
                    options: ["position", "float", "align"],
                    answer: 1
                }
            ],


            js: [
                {
                    q: "Which keyword is used to declare a variable in JavaScript?",
                    options: ["var", "int", "let"],
                    answer: 2
                },
                {
                    q: "Which function is used to print in console?",
                    options: ["console.print()", "console.log()", "print.console()"],
                    answer: 1
                },
                {
                    q: "Which symbol is used for comments in JavaScript?",
                    options: ["// for single line, /* */ for multi-line", "#", "<!-- -->"],
                    answer: 0
                },
                {
                    q: "Which operator is used for strict equality?",
                    options: ["==", "===", "="],
                    answer: 1
                },
                {
                    q: "Which keyword is used to define a constant?",
                    options: ["const", "let", "var"],
                    answer: 0
                },
                {
                    q: "Which method adds an element to the end of an array?",
                    options: ["push()", "pop()", "shift()"],
                    answer: 0
                },
                {
                    q: "Which method removes the last element from an array?",
                    options: ["pop()", "push()", "unshift()"],
                    answer: 0
                },
                {
                    q: "Which method removes the first element from an array?",
                    options: ["shift()", "pop()", "push()"],
                    answer: 0
                },
                {
                    q: "Which method adds an element to the beginning of an array?",
                    options: ["unshift()", "push()", "shift()"],
                    answer: 0
                },
                {
                    q: "Which event occurs when the user clicks on an element?",
                    options: ["onhover", "onclick", "onchange"],
                    answer: 1
                },
                {
                    q: "Which method converts a JSON string into an object?",
                    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()"],
                    answer: 0
                },
                {
                    q: "Which method converts an object into a JSON string?",
                    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()"],
                    answer: 1
                },
                {
                    q: "Which function is used to delay execution in JavaScript?",
                    options: ["setTimeout()", "delay()", "wait()"],
                    answer: 0
                },
                {
                    q: "Which keyword is used for loops that iterate over arrays?",
                    options: ["for", "forEach", "while"],
                    answer: 1
                },
                {
                    q: "Which keyword is used to declare a function?",
                    options: ["function", "def", "func"],
                    answer: 0
                }
            ],

            php: [
                {
                    q: "PHP stands for?",
                    options: ["Personal Home Page", "Private Hypertext Processor", "PHP: Hypertext Preprocessor"],
                    answer: 2
                },
                {
                    q: "Which symbol is used to declare a variable in PHP?",
                    options: ["$", "@", "#"],
                    answer: 0
                },
                {
                    q: "PHP scripts are executed on the?",
                    options: ["Client-side", "Server-side", "Browser"],
                    answer: 1
                },
                {
                    q: "Which function is used to output text in PHP?",
                    options: ["echo()", "print()", "Both"],
                    answer: 2
                },
                {
                    q: "Which function is used to get the length of a string?",
                    options: ["strlen()", "length()", "strlength()"],
                    answer: 0
                },
                {
                    q: "Which method is used to include files in PHP?",
                    options: ["include()", "require()", "Both"],
                    answer: 2
                },
                {
                    q: "Which operator is used for concatenation in PHP?",
                    options: ["+", ".", "&"],
                    answer: 1
                },
                {
                    q: "Which superglobal array is used to collect form data sent via POST method?",
                    options: ["$_POST", "$_GET", "$_REQUEST"],
                    answer: 0
                },
                {
                    q: "Which superglobal array is used to collect form data sent via GET method?",
                    options: ["$_POST", "$_GET", "$_REQUEST"],
                    answer: 1
                },
                {
                    q: "Which function is used to redirect to another page?",
                    options: ["header()", "redirect()", "goto()"],
                    answer: 0
                },
                {
                    q: "Which function is used to start a session?",
                    options: ["session_start()", "session_init()", "start_session()"],
                    answer: 0
                },
                {
                    q: "Which function is used to destroy a session?",
                    options: ["session_destroy()", "destroy_session()", "end_session()"],
                    answer: 0
                },
                {
                    q: "Which function is used to remove whitespace from beginning and end of a string?",
                    options: ["trim()", "strip()", "remove()"],
                    answer: 0
                },
                {
                    q: "Which function is used to convert a string to lowercase?",
                    options: ["strtolower()", "lowercase()", "toLower()"],
                    answer: 0
                },
                {
                    q: "Which function is used to convert a string to uppercase?",
                    options: ["strtoupper()", "uppercase()", "toUpper()"],
                    answer: 0
                }

            ],

            bootstrap: [
                {
                    q: "Bootstrap is a framework for?",
                    options: ["Backend development", "Frontend development", "Database management"],
                    answer: 1
                },
                {
                    q: "Which class is used to create a button in Bootstrap?",
                    options: [".btn", ".button", ".bttn"],
                    answer: 0
                },
                {
                    q: "Which class is used for a primary button?",
                    options: [".btn-primary", ".primary-btn", ".button-primary"],
                    answer: 0
                },
                {
                    q: "Which class is used for a container that is responsive?",
                    options: [".container", ".container-fluid", ".container-responsive"],
                    answer: 1
                },
                {
                    q: "Which class is used to make text center aligned?",
                    options: [".text-left", ".text-center", ".text-right"],
                    answer: 1
                },
                {
                    q: "Which class is used to make an image responsive?",
                    options: [".img-fluid", ".img-responsive", ".img-fit"],
                    answer: 0
                },
                {
                    q: "Which class is used for a navigation bar?",
                    options: [".navbar", ".nav", ".navigation"],
                    answer: 0
                },
                {
                    q: "Which class is used for alerts?",
                    options: [".alert", ".notification", ".message"],
                    answer: 0
                },
                {
                    q: "Which class is used to hide elements in Bootstrap?",
                    options: [".d-none", ".hidden", ".hide"],
                    answer: 0
                },
                {
                    q: "Which class is used to make a table striped?",
                    options: [".table-striped", ".striped-table", ".table-stripe"],
                    answer: 0
                },
                {
                    q: "Which class is used for badges?",
                    options: [".badge", ".label", ".tag"],
                    answer: 0
                },
                {
                    q: "Which class is used for cards in Bootstrap?",
                    options: [".card", ".panel", ".box"],
                    answer: 0
                },
                {
                    q: "Which class is used to create a modal?",
                    options: [".modal", ".popup", ".dialog"],
                    answer: 0
                },
                {
                    q: "Which class is used to create responsive columns?",
                    options: [".col", ".column", ".grid"],
                    answer: 0
                },
                {
                    q: "Which class is used for a dropdown menu?",
                    options: [".dropdown", ".menu", ".drop"],
                    answer: 0
                }


            ],

            sass: [
                // questions.js (Sass section)
                {
                    q: "Sass stands for?",
                    options: ["Syntactically Awesome Style Sheets", "Super Advanced Style Sheets", "Simple Style Sheets"],
                    answer: 0
                },
                {
                    q: "Which extension is used for Sass files?",
                    options: [".scss", ".sass", "Both"],
                    answer: 2
                },
                {
                    q: "Which symbol is used for variables in Sass?",
                    options: ["$", "@", "#"],
                    answer: 0
                },
                {
                    q: "Which symbol is used for nesting selectors in Sass?",
                    options: ["&", "^", "*"],
                    answer: 0
                },
                {
                    q: "Which directive is used for mixins in Sass?",
                    options: ["@mixin", "mixin", "$mixin"],
                    answer: 0
                },
                {
                    q: "Which directive is used to include a mixin?",
                    options: ["@include", "include", "$include"],
                    answer: 0
                },
                {
                    q: "Which directive is used for inheritance in Sass?",
                    options: ["@extend", "inherit", "$extend"],
                    answer: 0
                },
                {
                    q: "Sass can be compiled into?",
                    options: ["CSS", "HTML", "JS"],
                    answer: 0
                },
                {
                    q: "Which syntax uses indentation instead of curly braces?",
                    options: [".sass", ".scss", ".css"],
                    answer: 0
                },
                {
                    q: "Which operator is used for arithmetic in Sass?",
                    options: ["+, -, *, /, %", "++, --", "&, |"],
                    answer: 0
                },
                {
                    q: "Which function is used to lighten a color in Sass?",
                    options: ["lighten()", "brighten()", "increase()"],
                    answer: 0
                },
                {
                    q: "Which function is used to darken a color in Sass?",
                    options: ["darken()", "shade()", "decrease()"],
                    answer: 0
                },
                {
                    q: "Which function is used to make a color transparent in Sass?",
                    options: ["rgba()", "opacity()", "transparent()"],
                    answer: 0
                },
                {
                    q: "Sass supports which loops?",
                    options: ["@for, @each, @while", "for, each, while", "Both"],
                    answer: 0
                },
                {
                    q: "Sass variables can store?",
                    options: ["Colors, Numbers, Strings", "Only Colors", "Only Numbers"],
                    answer: 0
                }

            ],

            react: [
                {
                    q: "React is a library for?",
                    options: ["Backend development", "Frontend development", "Database management"],
                    answer: 1
                },
                {
                    q: "Who developed React?",
                    options: ["Google", "Facebook", "Microsoft"],
                    answer: 1
                },
                {
                    q: "Which method is used to create a React component?",
                    options: ["React.createElement()", "React.component()", "React.make()"],
                    answer: 0
                },
                {
                    q: "Which hook is used for state management in React?",
                    options: ["useState()", "useEffect()", "useContext()"],
                    answer: 0
                },
                {
                    q: "Which hook is used to perform side effects?",
                    options: ["useState()", "useEffect()", "useReducer()"],
                    answer: 1
                },
                {
                    q: "JSX stands for?",
                    options: ["JavaScript XML", "JavaScript XHTML", "Java Syntax eXtension"],
                    answer: 0
                },
                {
                    q: "How do you pass data from parent to child?",
                    options: ["State", "Props", "Hooks"],
                    answer: 1
                },
                {
                    q: "Which method is used to render React elements to the DOM?",
                    options: ["ReactDOM.render()", "React.render()", "ReactDOM.create()"],
                    answer: 0
                },
                {
                    q: "React components must start with which letter case?",
                    options: ["Lowercase", "Uppercase", "Either"],
                    answer: 1
                },
                {
                    q: "Which hook is used for context API?",
                    options: ["useContext()", "useEffect()", "useState()"],
                    answer: 0
                },
                {
                    q: "Which method is used to update state in class components?",
                    options: ["setState()", "updateState()", "changeState()"],
                    answer: 0
                },
                {
                    q: "Which keyword is used to extend a React class component?",
                    options: ["extends", "inherits", "implements"],
                    answer: 0
                },
                {
                    q: "React uses which algorithm for DOM updates?",
                    options: ["Virtual DOM", "Shadow DOM", "Real DOM"],
                    answer: 0
                },
                {
                    q: "Which hook is used for managing reducers?",
                    options: ["useReducer()", "useState()", "useEffect()"],
                    answer: 0
                },
                {
                    q: "React component lifecycle methods exist in?",
                    options: ["Functional components only", "Class components only", "Both"],
                    answer: 1
                }

            ],

            jquery: [
                {
                    q: "jQuery is a library of which language?",
                    options: ["Java", "JavaScript", "PHP"],
                    answer: 1
                },
                {
                    q: "Which symbol is used as a shortcut for jQuery?",
                    options: ["$", "j", "#"],
                    answer: 0
                },
                {
                    q: "Which method is used to hide an element in jQuery?",
                    options: ["hide()", "displayNone()", "invisible()"],
                    answer: 0
                },
                {
                    q: "Which method is used to show a hidden element?",
                    options: ["show()", "display()", "visible()"],
                    answer: 0
                },
                {
                    q: "Which method is used to attach an event handler?",
                    options: ["on()", "addEvent()", "bindEvent()"],
                    answer: 0
                },
                {
                    q: "Which method is used to remove an element from DOM?",
                    options: ["remove()", "delete()", "detach()"],
                    answer: 0
                },
                {
                    q: "Which method is used to set or get HTML content?",
                    options: ["html()", "text()", "val()"],
                    answer: 0
                },
                {
                    q: "Which method is used to get or set the value of form elements?",
                    options: ["val()", "value()", "input()"],
                    answer: 0
                },
                {
                    q: "Which method is used to add a class to an element?",
                    options: ["addClass()", "classAdd()", "appendClass()"],
                    answer: 0
                },
                {
                    q: "Which method is used to remove a class from an element?",
                    options: ["removeClass()", "deleteClass()", "remove()"],
                    answer: 0
                },
                {
                    q: "Which method is used to toggle between hide/show?",
                    options: ["toggle()", "switch()", "flip()"],
                    answer: 0
                },
                {
                    q: "Which method is used to animate elements?",
                    options: ["animate()", "motion()", "move()"],
                    answer: 0
                },
                {
                    q: "Which method is used to get the parent of an element?",
                    options: ["parent()", "parents()", "ancestor()"],
                    answer: 0
                },
                {
                    q: "Which method is used to find elements by selector?",
                    options: ["find()", "search()", "get()"],
                    answer: 0
                },
                {
                    q: "Which method is used to execute code when the DOM is ready?",
                    options: ["$(document).ready()", "onReady()", "DOMReady()"],
                    answer: 0
                }
            ],

            mysql: [
                {
                    q: "MySQL is a type of?",
                    options: ["Database", "Programming Language", "Web Server"],
                    answer: 0
                },
                {
                    q: "Which command is used to create a database?",
                    options: ["CREATE DATABASE dbname;", "NEW DATABASE dbname;", "MAKE DATABASE dbname;"],
                    answer: 0
                },
                {
                    q: "Which command is used to delete a database?",
                    options: ["DROP DATABASE dbname;", "DELETE DATABASE dbname;", "REMOVE DATABASE dbname;"],
                    answer: 0
                },
                {
                    q: "Which command is used to create a table?",
                    options: ["CREATE TABLE tablename (...);", "NEW TABLE tablename (...);", "MAKE TABLE tablename (...);"],
                    answer: 0
                },
                {
                    q: "Which command is used to delete a table?",
                    options: ["DROP TABLE tablename;", "DELETE TABLE tablename;", "REMOVE TABLE tablename;"],
                    answer: 0
                },
                {
                    q: "Which command is used to insert data into a table?",
                    options: ["INSERT INTO tablename VALUES(...);", "ADD INTO tablename VALUES(...);", "INSERT DATA tablename VALUES(...);"],
                    answer: 0
                },
                {
                    q: "Which command is used to update existing data?",
                    options: ["UPDATE tablename SET ... WHERE ...;", "MODIFY tablename SET ...;", "CHANGE tablename SET ...;"],
                    answer: 0
                },
                {
                    q: "Which command is used to delete data from a table?",
                    options: ["DELETE FROM tablename WHERE ...;", "REMOVE FROM tablename WHERE ...;", "DROP FROM tablename WHERE ...;"],
                    answer: 0
                },
                {
                    q: "Which command is used to fetch data from a table?",
                    options: ["SELECT * FROM tablename;", "GET * FROM tablename;", "FETCH * FROM tablename;"],
                    answer: 0
                },
                {
                    q: "Which clause is used to filter records?",
                    options: ["WHERE", "FILTER", "HAVING"],
                    answer: 0
                },
                {
                    q: "Which clause is used to sort results?",
                    options: ["ORDER BY", "SORT BY", "GROUP BY"],
                    answer: 0
                },
                {
                    q: "Which clause is used to group records?",
                    options: ["GROUP BY", "ORDER BY", "HAVING"],
                    answer: 0
                },
                {
                    q: "Which symbol is used for comments in MySQL?",
                    options: ["--", "#", "Both"],
                    answer: 2
                },
                {
                    q: "Which data type is used to store text?",
                    options: ["VARCHAR", "INT", "FLOAT"],
                    answer: 0
                },
                {
                    q: "Which data type is used to store whole numbers?",
                    options: ["INT", "DECIMAL", "CHAR"],
                    answer: 0
                }

            ]
        };

// Update page header and title
document.title = `${course.toUpperCase()} Test | Learnify`;
document.getElementById("test-header").textContent = `Final Test: ${course.toUpperCase()} Basics`;
localStorage.setItem('course', `${course.toUpperCase()} Basics Test`);

// Load quiz
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz(course);

    document.getElementById("quiz-form")?.addEventListener("submit", function(e){
        e.preventDefault();
        let score = 0;
        quizzes[course].forEach((item, index) => {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            if(selected && parseInt(selected.value) === item.answer) score++;
        });

        const percent = (score / quizzes[course].length) * 100;
        document.getElementById("result").innerHTML = `
            You scored ${score} / ${quizzes[course].length} <br>
            Percentage: ${percent.toFixed(2)}%
        `;

        if(percent >= 70){
            localStorage.setItem('passed', true);
            document.getElementById("result").innerHTML += `<br>🎉 You passed! <a href="certificate.html?course=${course}" class="btn">Get Certificate</a>`;
        } else {
            localStorage.setItem('passed', false);
            document.getElementById("result").innerHTML += `<br>❌ You need at least 70% to pass. <button onclick="location.reload()">Retake Test</button>`;
        }
    });
});

// Handle submit
document.getElementById("quiz-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let score = 0;
    quizzes[course].forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.answer) score++;
    });

    document.getElementById("result").textContent = `You scored ${score} / ${quizzes[course].length}`;
});

// Initialize quiz
loadQuiz(course);
 //certificaate

    document.addEventListener('DOMContentLoaded', function() {
      // Check if user passed the test
      const passed = localStorage.getItem('passed');
      if (!passed) {
        alert('You need to pass the test first to get a certificate.');
        window.location.href = 'course.html';
        return;
      }
      
      let username = localStorage.getItem("username") || "Guest";
      let course = localStorage.getItem("course") || "Course";
      let date = new Date().toLocaleDateString();

      document.getElementById("studentName").innerText = username;
      document.getElementById("courseName").innerText = course;
      document.getElementById("certificateDate").innerText = date;
      
      // Download button functionality
      document.getElementById("downloadBtn").addEventListener("click", () => {
        const certificate = document.getElementById("certificate");
        
        html2canvas(certificate, { scale: 2 }).then(canvas => {
          const imgData = canvas.toDataURL("image/png");
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF("landscape", "pt", "a4");

          let width = pdf.internal.pageSize.getWidth();
          let height = pdf.internal.pageSize.getHeight();

          pdf.addImage(imgData, "PNG", 0, 0, width, height);
          pdf.save("certificate.pdf");
        });
      });
    });
  
