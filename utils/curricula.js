/**
 * avRoN Tech — Domain Curricula
 *
 * Two domains have a structured curriculum delivered to students inside
 * their portal. The remaining five are placeholders that show
 * "Working on more courses — coming soon" in the UI.
 *
 * Frontend reads this via `GET /api/courses/:domain`.
 */

const WEB_DEV = {
  domain: 'Web Development',
  title: 'Internship Program: Web Development (HTML, CSS & JavaScript)',
  total_days: 45,
  tagline: 'A 45-day, project-driven roadmap from HTML fundamentals to a deployable web application.',
  phases: [
    {
      day_range: 'Day 1 – 9',
      title: 'Basics of Web Development',
      topics: [
        'Foundational HTML, CSS, and JavaScript concepts',
        'Basic HTML elements and structure',
        'Applying styling with CSS',
        'Simple interactions using JavaScript',
      ],
      deliverable: 'Create a simple webpage using HTML and CSS, and add basic JavaScript for interactivity (e.g., a button that triggers an alert).',
    },
    {
      day_range: 'Day 10 – 18',
      title: 'Intermediate HTML, CSS, and JavaScript',
      topics: [
        'Enhance HTML and CSS skills',
        'JavaScript for DOM manipulation',
        'Building forms with various input fields',
        'JavaScript form validation',
        'Responsive layouts using Flexbox and CSS Grid',
        'Dynamic To-Do List or Image Gallery using JavaScript',
      ],
      deliverable: 'Create a contact form with HTML and CSS, implement JavaScript form validation, build a responsive layout, and develop a dynamic to-do list or image gallery.',
    },
    {
      day_range: 'Day 19 – 27',
      title: 'Advanced Styling and JavaScript',
      topics: [
        'Advanced CSS and JavaScript for interactive, responsive sites',
        'Responsive design using media queries',
        'Interactive quizzes or image carousels using JavaScript',
        'Fetching data from an API using JavaScript',
      ],
      deliverable: 'Apply responsive design using media queries, build an interactive quiz or image carousel, and fetch data from a public API to display dynamically.',
    },
    {
      day_range: 'Day 28 – 36',
      title: 'Full Project Implementation',
      topics: [
        'Combine HTML, CSS, and JavaScript to build fully functioning projects',
        'Building a personal portfolio website',
        'Creating a To-Do List or Note-Taking App with Local Storage',
        'Developing a Product Listing Page with Filtering and Sorting Options',
      ],
      deliverable: 'Build a personal portfolio website, enhance a to-do list or note-taking app with local storage, and develop a product listing page with filtering and sorting.',
    },
    {
      day_range: 'Day 37 – 45',
      title: 'Final Project and Optimization',
      topics: [
        'Build a comprehensive web app and ensure its performance, responsiveness, and compatibility',
        'Build a full web application (Capstone Project)',
        'Optimize for performance',
        'Ensure Cross-Browser Compatibility and Mobile Responsiveness',
      ],
      deliverable: 'Develop a full web application (e.g., e-commerce site, blog, or advanced portfolio), optimize its performance, and ensure cross-browser compatibility and mobile responsiveness.',
    },
  ],
};

const JAVA_FULL_STACK = {
  domain: 'Java Full Stack Developer',
  title: 'Internship Program: Java Full Stack Developer (Spring Boot + React)',
  total_days: 60,
  tagline: 'A 60-day, project-driven roadmap covering Core Java, Spring Boot, REST APIs and a React-based frontend integration.',
  phases: [
    {
      day_range: 'Day 1 – 10',
      title: 'Core Java Foundations',
      topics: [
        'Java syntax, data types and operators',
        'OOP — classes, objects, inheritance, polymorphism, encapsulation',
        'Collections framework: List, Set, Map',
        'Exception handling and Java I/O',
        'JDK, JRE, JVM and Maven basics',
      ],
      deliverable: 'Build a console-based Library Management System using Core Java, OOP principles and the Collections framework.',
    },
    {
      day_range: 'Day 11 – 20',
      title: 'Advanced Java & Databases',
      topics: [
        'Generics, Streams API, Lambdas and functional interfaces',
        'Multithreading and Concurrency basics',
        'JDBC fundamentals',
        'Introduction to SQL — DDL, DML, joins, indexes',
        'Working with MySQL / PostgreSQL',
      ],
      deliverable: 'Create a JDBC-backed Student Records CRUD application that connects Java to MySQL using prepared statements.',
    },
    {
      day_range: 'Day 21 – 32',
      title: 'Spring Boot & REST APIs',
      topics: [
        'Spring Boot project structure with Spring Initializr',
        'Dependency Injection and Spring annotations',
        'Building REST controllers and services',
        'Spring Data JPA + Hibernate ORM',
        'Validation, exception handlers and DTO mapping',
        'API testing with Postman',
      ],
      deliverable: 'Build a REST API for a Task Manager with full CRUD, validation, JPA persistence, and global exception handling.',
    },
    {
      day_range: 'Day 33 – 44',
      title: 'Security, Auth & Frontend Integration',
      topics: [
        'Spring Security fundamentals',
        'JWT-based authentication and authorization',
        'Role-based access control',
        'React fundamentals — components, props, state, hooks',
        'Consuming REST APIs from React using fetch / Axios',
        'Routing with React Router',
      ],
      deliverable: 'Secure the Task Manager API with JWT auth, build a React frontend that signs up, logs in, and lists/creates/deletes tasks against the API.',
    },
    {
      day_range: 'Day 45 – 54',
      title: 'Advanced Full Stack Features',
      topics: [
        'File uploads and downloads',
        'Pagination, sorting and filtering',
        'Email integration with Spring Mail',
        'Caching with Spring Cache',
        'Unit testing with JUnit 5 and Mockito',
        'Frontend state management (Context / Redux Toolkit)',
      ],
      deliverable: 'Extend the Task Manager with file attachments per task, paginated listings, password-reset emails, and JUnit tests for the service layer.',
    },
    {
      day_range: 'Day 55 – 60',
      title: 'Capstone Project & Deployment',
      topics: [
        'Build a full-stack capstone (e.g., a Job Portal, an Expense Tracker or a Course Marketplace)',
        'Production hardening — environment configs, logging, error monitoring',
        'Containerizing the backend with Docker',
        'Deploying the Spring Boot API (Render / Railway) and React frontend (Vercel / Netlify)',
        'Final code review and demo recording',
      ],
      deliverable: 'Ship a fully deployed full-stack application with a live URL, GitHub repository, and a short walkthrough video for the certificate review.',
    },
  ],
};

// ─── Python Full Stack Developer ──────────────────────────────────────────────
const PYTHON_FULL_STACK = {
  domain: 'Python Full Stack Developer',
  title: 'Internship Program: Python Full Stack Developer (Django + React)',
  total_days: 60,
  tagline: 'A 60-day roadmap covering Python fundamentals, Django REST Framework, and a React frontend integration.',
  phases: [
    {
      day_range: 'Day 1 – 10',
      title: 'Python Core Foundations',
      topics: [
        'Python syntax, data types, variables and operators',
        'Control flow — if/else, loops, list comprehensions',
        'Functions, *args/**kwargs, and decorators',
        'OOP — classes, inheritance, dunder methods',
        'File I/O, exceptions and context managers',
        'pip, virtual environments and project structure',
      ],
      deliverable: 'Build a CLI-based Student Grades Calculator using OOP principles, file I/O for persistence, and proper exception handling.',
    },
    {
      day_range: 'Day 11 – 20',
      title: 'Databases & Django Basics',
      topics: [
        'SQL fundamentals — DDL, DML, joins, indexes',
        'Working with PostgreSQL / SQLite',
        'Django project and app structure',
        'Django ORM — models, migrations, querysets',
        'Django Admin panel customisation',
        'Template engine and URL routing',
      ],
      deliverable: 'Create a Django Blog application with Post and Comment models, a custom admin panel, and template-rendered pages.',
    },
    {
      day_range: 'Day 21 – 32',
      title: 'Django REST Framework & APIs',
      topics: [
        'Introduction to REST principles',
        'DRF serializers, views and viewsets',
        'Class-based views and generic views',
        'Filtering, pagination and search',
        'JWT authentication with djangorestframework-simplejwt',
        'API testing with Postman and pytest',
      ],
      deliverable: 'Build a fully documented REST API for a Task Manager with CRUD, JWT auth, pagination, and pytest test coverage ≥ 70 %.',
    },
    {
      day_range: 'Day 33 – 44',
      title: 'React Frontend Integration',
      topics: [
        'React fundamentals — JSX, components, props, state',
        'Hooks: useState, useEffect, useContext',
        'Axios for API calls and error handling',
        'React Router for multi-page navigation',
        'Form handling and validation',
        'CORS configuration on the Django side',
      ],
      deliverable: 'Build a React frontend that connects to your Task Manager API — login, register, create/read/update/delete tasks, with protected routes.',
    },
    {
      day_range: 'Day 45 – 54',
      title: 'Advanced Features & Testing',
      topics: [
        'File uploads with Django and serving via S3 / local storage',
        'Celery + Redis for background tasks and emails',
        'WebSockets basics with Django Channels',
        'Unit and integration testing with pytest-django',
        'Frontend testing with Jest and React Testing Library',
        'Performance: query optimisation, select_related, prefetch_related',
      ],
      deliverable: 'Add file attachment support, a background email notification on task assignment, and write end-to-end tests for the core user flows.',
    },
    {
      day_range: 'Day 55 – 60',
      title: 'Capstone & Deployment',
      topics: [
        'Build a capstone project (e.g., Job Board, E-commerce, or Expense Tracker)',
        'Dockerise backend and frontend',
        'Deploy Django API to Render / Railway and React app to Vercel',
        'Environment management, logging and error monitoring',
        'Final code review and walkthrough video',
      ],
      deliverable: 'Ship a live full-stack Python application with a public URL, clean GitHub repository, and a 3-minute demo recording.',
    },
  ],
};

// ─── Data Science & AI Intern ─────────────────────────────────────────────────
const DATA_SCIENCE_AI = {
  domain: 'Data Science & AI Intern',
  title: 'Internship Program: Data Science & AI (Python, ML & Deep Learning)',
  total_days: 45,
  tagline: 'A 45-day hands-on roadmap from Python data manipulation to building and deploying real machine-learning models.',
  phases: [
    {
      day_range: 'Day 1 – 9',
      title: 'Python for Data Science',
      topics: [
        'Python refresher — NumPy arrays, vectorised operations',
        'Pandas — DataFrames, Series, indexing and filtering',
        'Data cleaning — handling nulls, duplicates and type casting',
        'Matplotlib and Seaborn for exploratory visualisation',
        'Reading CSV, JSON and Excel data sources',
      ],
      deliverable: 'Perform a full EDA (Exploratory Data Analysis) on a public dataset (e.g., Titanic or Iris) — clean, visualise and summarise key findings in a Jupyter notebook.',
    },
    {
      day_range: 'Day 10 – 18',
      title: 'Statistics & Classical ML',
      topics: [
        'Descriptive and inferential statistics',
        'Probability, distributions and hypothesis testing',
        'Scikit-learn pipeline: train/test split, cross-validation, metrics',
        'Regression — Linear, Ridge, Lasso',
        'Classification — Logistic Regression, KNN, Decision Trees',
        'Model evaluation — confusion matrix, ROC-AUC, RMSE',
      ],
      deliverable: 'Build and compare three classification models on a real dataset, tune hyperparameters with GridSearchCV, and document results with a clear metrics table.',
    },
    {
      day_range: 'Day 19 – 27',
      title: 'Advanced ML & Feature Engineering',
      topics: [
        'Ensemble methods — Random Forest, Gradient Boosting, XGBoost',
        'Feature engineering and selection techniques',
        'Handling imbalanced datasets — SMOTE, class weights',
        'Unsupervised learning — K-Means, PCA, DBSCAN',
        'Pipelines and ColumnTransformer for reproducible preprocessing',
      ],
      deliverable: 'Build an end-to-end ML pipeline (preprocessing → model → evaluation) using scikit-learn Pipeline, achieve a documented improvement over the baseline from Phase 2.',
    },
    {
      day_range: 'Day 28 – 36',
      title: 'Deep Learning Fundamentals',
      topics: [
        'Neural network architecture — layers, activations, backpropagation',
        'TensorFlow / Keras basics — Sequential and Functional API',
        'CNNs for image classification',
        'RNNs and LSTMs for sequential data',
        'Transfer learning with pre-trained models (MobileNet, ResNet)',
        'Avoiding overfitting — Dropout, BatchNorm, early stopping',
      ],
      deliverable: 'Train a CNN image classifier (e.g., CIFAR-10 or custom dataset) with >85 % validation accuracy using transfer learning, and document training curves.',
    },
    {
      day_range: 'Day 37 – 45',
      title: 'Capstone & Model Deployment',
      topics: [
        'Build a capstone ML project (e.g., sentiment analysis, price predictor, image tagger)',
        'Save and load models with joblib / pickle / .h5',
        'Build a FastAPI or Flask inference endpoint',
        'Deploy to Hugging Face Spaces or Render',
        'Create a project README with methodology, results and live link',
      ],
      deliverable: 'Ship a deployed ML model with a live inference API endpoint, a Jupyter notebook walkthrough, and a GitHub repository with a full project README.',
    },
  ],
};

// ─── Cyber Security Intern ────────────────────────────────────────────────────
const CYBER_SECURITY = {
  domain: 'Cyber Security Intern',
  title: 'Internship Program: Cyber Security (Ethical Hacking & Defence)',
  total_days: 45,
  tagline: 'A 45-day practical roadmap covering network security, ethical hacking techniques, and defensive strategies.',
  phases: [
    {
      day_range: 'Day 1 – 9',
      title: 'Foundations of Cyber Security',
      topics: [
        'Core security concepts — CIA triad, threat landscape, attack vectors',
        'Networking fundamentals — OSI model, TCP/IP, DNS, HTTP/S',
        'Linux command line for security professionals',
        'Setting up a safe lab environment (VirtualBox + Kali Linux)',
        'Introduction to Wireshark for packet analysis',
      ],
      deliverable: 'Set up a Kali Linux virtual lab, capture and analyse a sample network traffic file in Wireshark, and document five identified protocols with their purpose.',
    },
    {
      day_range: 'Day 10 – 18',
      title: 'Reconnaissance & Scanning',
      topics: [
        'Passive reconnaissance — OSINT, Google dorking, Shodan',
        'Active scanning with Nmap — port discovery, service enumeration',
        'Vulnerability scanning with Nikto and OpenVAS',
        'Banner grabbing and OS fingerprinting',
        'Introduction to Metasploit framework',
      ],
      deliverable: 'Conduct a full reconnaissance and port-scan report against a deliberately vulnerable VM (e.g., Metasploitable), documenting open ports, services and potential vulnerabilities.',
    },
    {
      day_range: 'Day 19 – 27',
      title: 'Web Application Security',
      topics: [
        'OWASP Top 10 — SQL Injection, XSS, CSRF, IDOR, SSRF',
        'Manual SQL injection and automation with SQLmap',
        'Cross-site scripting — reflected, stored, DOM-based',
        'Authentication attacks — brute force, credential stuffing',
        'Burp Suite for intercepting and modifying HTTP requests',
        'Testing with DVWA (Damn Vulnerable Web Application)',
      ],
      deliverable: 'Complete a structured web penetration test on DVWA, documenting at least three successfully exploited vulnerabilities with proof-of-concept and remediation recommendations.',
    },
    {
      day_range: 'Day 28 – 36',
      title: 'System Security & Exploitation',
      topics: [
        'Privilege escalation techniques on Linux and Windows',
        'Password attacks — Hashcat, John the Ripper',
        'Post-exploitation — maintaining access, pivoting',
        'File inclusion attacks — LFI/RFI',
        'Introduction to buffer overflow concepts',
        'Defensive hardening — firewall rules, least privilege, patch management',
      ],
      deliverable: 'Perform a full attack chain on a CTF (Capture the Flag) box — initial foothold, privilege escalation, root flag — and write a professional penetration test report.',
    },
    {
      day_range: 'Day 37 – 45',
      title: 'Defensive Security & Capstone',
      topics: [
        'SIEM basics — log collection, correlation and alerting with Splunk/ELK',
        'Incident response process and playbooks',
        'Security hardening checklist for Linux servers',
        'Introduction to CTF platforms (TryHackMe / HackTheBox)',
        'Building a personal security portfolio',
      ],
      deliverable: 'Complete two TryHackMe rooms (beginner to intermediate), write a full report for each, and compile a final portfolio PDF linking all phase deliverables.',
    },
  ],
};

// ─── Java Developer ───────────────────────────────────────────────────────────
const JAVA_DEV = {
  domain: 'Java Developer',
  title: 'Internship Program: Java Developer (Core Java & Backend)',
  total_days: 45,
  tagline: 'A 45-day hands-on roadmap covering Core Java fundamentals, OOP, Collections, JDBC, and a capstone backend project.',
  phases: [
    {
      day_range: 'Day 1 – 9',
      title: 'Java Fundamentals',
      topics: [
        'Java syntax, data types, variables and operators',
        'Control flow — if/else, switch, for, while, do-while',
        'Arrays and Strings — manipulation and common methods',
        'Input/Output with Scanner and System.out',
        'JDK setup, compiling and running Java programs',
      ],
      deliverable: 'Build a console-based Calculator and a Number Guessing Game using core Java syntax, loops, and conditions.',
    },
    {
      day_range: 'Day 10 – 18',
      title: 'Object-Oriented Programming',
      topics: [
        'Classes, objects, constructors and the this keyword',
        'Encapsulation — getters, setters, access modifiers',
        'Inheritance — extends, method overriding, super keyword',
        'Polymorphism — compile-time and runtime',
        'Abstract classes and interfaces',
        'Static members and inner classes',
      ],
      deliverable: 'Design a Bank Account Management System using OOP principles — Account, SavingsAccount, CurrentAccount classes with full encapsulation and inheritance.',
    },
    {
      day_range: 'Day 19 – 27',
      title: 'Collections, Exceptions & File I/O',
      topics: [
        'Collections framework — ArrayList, LinkedList, HashMap, HashSet, TreeMap',
        'Iterators and enhanced for loop',
        'Exception handling — try/catch/finally, checked vs unchecked',
        'Custom exceptions',
        'File I/O — FileReader, FileWriter, BufferedReader, BufferedWriter',
        'Java 8 — Lambda expressions and Stream API basics',
      ],
      deliverable: 'Build a Student Records System that stores, searches and filters student data using Collections and persists records to a file using File I/O.',
    },
    {
      day_range: 'Day 28 – 36',
      title: 'JDBC & Database Integration',
      topics: [
        'SQL fundamentals — DDL, DML, joins, aggregate functions',
        'MySQL setup and basic queries',
        'JDBC — DriverManager, Connection, PreparedStatement, ResultSet',
        'CRUD operations via JDBC',
        'Connection pooling concepts',
        'Basic MVC pattern for console apps',
      ],
      deliverable: 'Build a JDBC-backed Inventory Management System with full CRUD — add, view, update, delete products stored in a MySQL database.',
    },
    {
      day_range: 'Day 37 – 45',
      title: 'Capstone Project',
      topics: [
        'Design and build a full console-based application',
        'Apply OOP, Collections, File I/O and JDBC together',
        'Error handling and input validation',
        'Code organisation and package structure',
        'Final testing and documentation',
      ],
      deliverable: 'Build and submit a Library Management System or Employee Payroll System — full CRUD with MySQL, OOP design, exception handling, and a project README.',
    },
  ],
};

// ─── Python Developer ─────────────────────────────────────────────────────────
const PYTHON_DEV = {
  domain: 'Python Developer',
  title: 'Internship Program: Python Developer (Core Python & Backend)',
  total_days: 45,
  tagline: 'A 45-day practical roadmap from Python basics to building real backend applications with Flask and MySQL.',
  phases: [
    {
      day_range: 'Day 1 – 9',
      title: 'Python Fundamentals',
      topics: [
        'Python syntax, variables, data types and operators',
        'Control flow — if/elif/else, for, while loops',
        'Functions — parameters, return values, default args',
        'Strings — slicing, formatting, common methods',
        'Lists, tuples and basic input/output',
        'Installing Python, pip and VS Code setup',
      ],
      deliverable: 'Build a console-based Temperature Converter, a simple Calculator, and a Word Counter using Python fundamentals.',
    },
    {
      day_range: 'Day 10 – 18',
      title: 'Data Structures & OOP',
      topics: [
        'Lists, tuples, sets and dictionaries — deep dive',
        'List comprehensions and dictionary comprehensions',
        'OOP — classes, objects, __init__, self',
        'Inheritance, method overriding and super()',
        'Encapsulation and property decorators',
        'Exception handling — try/except/finally, custom exceptions',
      ],
      deliverable: 'Build a Student Grade Tracker using OOP — Student class, list of students, grade calculation, and proper exception handling for invalid inputs.',
    },
    {
      day_range: 'Day 19 – 27',
      title: 'File I/O, Modules & Libraries',
      topics: [
        'File reading and writing — open(), read(), write(), context managers',
        'CSV and JSON file handling',
        'Python standard library — os, sys, datetime, random, math',
        'Creating and importing custom modules',
        'Virtual environments and pip package management',
        'Introduction to requests library for HTTP',
      ],
      deliverable: 'Build an Expense Tracker that reads/writes transactions to a CSV file, calculates totals by category, and exports a summary report.',
    },
    {
      day_range: 'Day 28 – 36',
      title: 'Flask & Database Integration',
      topics: [
        'SQL fundamentals — DDL, DML, SELECT, joins',
        'MySQL setup and basic queries',
        'Flask — routes, templates (Jinja2), request, response',
        'SQLAlchemy ORM basics — models, sessions, CRUD',
        'Building REST endpoints with Flask',
        'Testing APIs with Postman',
      ],
      deliverable: 'Build a Flask-based Task Manager REST API with CRUD operations, SQLAlchemy models connected to MySQL, and Postman test collection.',
    },
    {
      day_range: 'Day 37 – 45',
      title: 'Capstone Project',
      topics: [
        'Build a complete Python backend application',
        'Combine OOP, file I/O, Flask and database',
        'User authentication basics (session or token)',
        'Input validation and error handling',
        'Final testing, deployment to Render, and documentation',
      ],
      deliverable: 'Build and deploy a Notes App or Blog API using Flask + MySQL — full CRUD, deployed live on Render, with a GitHub repository and project README.',
    },
  ],
};

// ─── AI & Machine Learning ────────────────────────────────────────────────────
const AI_ML = {
  domain: 'AI & Machine Learning',
  title: 'Internship Program: AI & Machine Learning (Python, ML & Neural Networks)',
  total_days: 45,
  tagline: 'A 45-day hands-on roadmap from Python & statistics to building, evaluating and deploying real ML models.',
  phases: [
    { day_range: 'Day 1 – 9', title: 'Python & Math Foundations for ML', topics: ['Python refresher — NumPy, Pandas, Matplotlib', 'Linear algebra essentials — vectors, matrices, dot products', 'Statistics — mean, variance, distributions, correlation', 'Data loading, cleaning and EDA with Pandas', 'Visualising data with Seaborn and Matplotlib'], deliverable: 'Perform a complete EDA on a public dataset — clean missing values, visualise distributions and correlations, and summarise insights in a Jupyter notebook.' },
    { day_range: 'Day 10 – 18', title: 'Classical Machine Learning', topics: ['Scikit-learn pipeline — train/test split, cross-validation', 'Supervised learning — Linear & Logistic Regression, KNN, SVM', 'Decision Trees and Random Forest', 'Model evaluation — accuracy, precision, recall, F1, ROC-AUC', 'Hyperparameter tuning with GridSearchCV'], deliverable: 'Build and compare three classification models on a real dataset, tune hyperparameters, and document a metrics comparison table.' },
    { day_range: 'Day 19 – 27', title: 'Advanced ML & Feature Engineering', topics: ['Feature engineering — encoding, scaling, imputation', 'Ensemble methods — Gradient Boosting, XGBoost, LightGBM', 'Handling imbalanced data — SMOTE, class weights', 'Unsupervised learning — K-Means clustering, PCA', 'Scikit-learn Pipelines and ColumnTransformer'], deliverable: 'Build an end-to-end sklearn Pipeline (preprocessing + model), achieve a documented accuracy improvement over the Phase 2 baseline.' },
    { day_range: 'Day 28 – 36', title: 'Neural Networks & Deep Learning', topics: ['Perceptron and multi-layer neural networks', 'TensorFlow / Keras — Sequential and Functional API', 'Activation functions, loss functions and optimisers', 'CNNs for image tasks, RNNs for sequential data', 'Transfer learning with MobileNet / ResNet', 'Dropout, BatchNorm and early stopping'], deliverable: 'Train a CNN image classifier using transfer learning, achieve >85 % validation accuracy, and plot training/validation loss curves.' },
    { day_range: 'Day 37 – 45', title: 'Capstone & Deployment', topics: ['Build a capstone ML project (sentiment analysis, price predictor, or image tagger)', 'Save/load models with joblib / .h5', 'Build a FastAPI inference endpoint', 'Deploy to Hugging Face Spaces or Render', 'Write a project README with methodology, results and live link'], deliverable: 'Ship a deployed ML model with a live inference endpoint, Jupyter notebook walkthrough, and a clean GitHub repository.' },
  ],
};

// ─── Data Analytics ───────────────────────────────────────────────────────────
const DATA_ANALYTICS = {
  domain: 'Data Analytics',
  title: 'Internship Program: Data Analytics (Excel, SQL, Python & Power BI)',
  total_days: 45,
  tagline: 'A 45-day practical roadmap from raw data to actionable dashboards using industry-standard tools.',
  phases: [
    { day_range: 'Day 1 – 9', title: 'Data Foundations & Excel', topics: ['Introduction to data analytics and the analytics workflow', 'Excel fundamentals — formulas, functions, sorting, filtering', 'Pivot Tables and Pivot Charts', 'VLOOKUP, INDEX-MATCH and conditional formatting', 'Data cleaning techniques in Excel'], deliverable: 'Analyse a sales dataset in Excel — clean the data, build a Pivot Table summary, and create a dashboard with at least three charts.' },
    { day_range: 'Day 10 – 18', title: 'SQL for Data Analysis', topics: ['SQL fundamentals — SELECT, WHERE, ORDER BY, GROUP BY', 'Joins — INNER, LEFT, RIGHT, FULL OUTER', 'Aggregate functions — SUM, COUNT, AVG, MIN, MAX', 'Subqueries and CTEs (Common Table Expressions)', 'Window functions — ROW_NUMBER, RANK, LAG, LEAD', 'Working with MySQL / PostgreSQL'], deliverable: 'Write 10 analytical SQL queries on a sample e-commerce database — sales by region, top customers, monthly trends, and a cohort retention query.' },
    { day_range: 'Day 19 – 27', title: 'Python for Data Analysis', topics: ['Python refresher — Pandas DataFrames and Series', 'Data wrangling — merging, grouping, reshaping', 'EDA — descriptive statistics and visualisation with Matplotlib/Seaborn', 'Handling missing values, outliers and duplicates', 'Automating reports with Python scripts'], deliverable: 'Perform a complete EDA on a real-world dataset, generate five analytical insights, and export a formatted summary report.' },
    { day_range: 'Day 28 – 36', title: 'Power BI Dashboards', topics: ['Power BI Desktop — data import, transformation with Power Query', 'DAX basics — calculated columns, measures, time intelligence', 'Building interactive dashboards — slicers, drill-downs', 'Data modelling — star schema, relationships', 'Publishing and sharing reports'], deliverable: 'Build a multi-page interactive Power BI dashboard for a business dataset — KPIs, trend lines, filters and a published shareable link.' },
    { day_range: 'Day 37 – 45', title: 'Capstone Analytics Project', topics: ['End-to-end analytics pipeline — ingest, clean, analyse, visualise', 'Storytelling with data and presenting findings', 'Statistical analysis — hypothesis testing, A/B test interpretation', 'Building a portfolio-ready analytics case study', 'Final presentation and documentation'], deliverable: 'Deliver a complete analytics case study (SQL + Python + Power BI dashboard) with a business problem statement, findings and recommendations document.' },
  ],
};

// ─── UI/UX Design ─────────────────────────────────────────────────────────────
const UI_UX = {
  domain: 'UI/UX Design',
  title: 'Internship Program: UI/UX Design (Figma, Research & Prototyping)',
  total_days: 45,
  tagline: 'A 45-day practical roadmap covering design thinking, user research, wireframing, and high-fidelity Figma prototypes.',
  phases: [
    { day_range: 'Day 1 – 9', title: 'Design Thinking & UX Fundamentals', topics: ['Introduction to UX — user-centred design and design thinking', 'UX vs UI — roles, deliverables and overlaps', 'Empathy mapping, user personas and journey maps', 'Problem statements and How Might We questions', 'Competitive analysis and heuristic evaluation'], deliverable: 'Conduct a heuristic evaluation of an existing app, create two user personas, and map a user journey for the primary use case.' },
    { day_range: 'Day 10 – 18', title: 'Figma Fundamentals & Wireframing', topics: ['Figma interface — frames, layers, components and auto layout', 'Typography, colour theory and spacing in UI design', 'Low-fidelity wireframing — sketching and digital wireframes', 'Information architecture and site maps', 'Responsive design grids and breakpoints'], deliverable: 'Create a complete set of low-fidelity wireframes for a mobile app (at least 8 screens) with a clear navigation flow.' },
    { day_range: 'Day 19 – 27', title: 'Visual Design & Design Systems', topics: ['Colour palettes, contrast ratios and accessibility (WCAG basics)', 'Typography pairing and hierarchy', 'Iconography and imagery best practices', 'Building a design system — components, variants, styles', 'Figma components, instances and component properties'], deliverable: 'Build a reusable design system in Figma (colour styles, text styles, 15+ components with variants) for your project.' },
    { day_range: 'Day 28 – 36', title: 'High-Fidelity Prototyping & User Testing', topics: ['Converting wireframes to high-fidelity screens', 'Figma prototyping — interactions, transitions and overlays', 'Usability testing — planning, conducting and analysing sessions', 'Affinity mapping and synthesising test findings', 'Iterating designs based on user feedback'], deliverable: 'Build a fully interactive high-fidelity Figma prototype (10+ screens), conduct usability tests with 3+ participants, and document findings with design iterations.' },
    { day_range: 'Day 37 – 45', title: 'Capstone Project & Portfolio', topics: ['End-to-end product design — research to prototype', 'Handoff documentation for developers (Figma Inspect, annotations)', 'Case study writing — problem, process, solution, outcomes', 'Building a UX portfolio on Behance or a personal site', 'Presenting design decisions confidently'], deliverable: 'Deliver a complete UX case study with research, wireframes, high-fidelity prototype, and a published portfolio page.' },
  ],
};

// ─── Cloud Computing ──────────────────────────────────────────────────────────
const CLOUD_COMPUTING = {
  domain: 'Cloud Computing',
  title: 'Internship Program: Cloud Computing (AWS & DevOps Essentials)',
  total_days: 45,
  tagline: 'A 45-day hands-on roadmap from cloud fundamentals to deploying scalable, secure applications on AWS.',
  phases: [
    { day_range: 'Day 1 – 9', title: 'Cloud Fundamentals & AWS Core', topics: ['Cloud concepts — IaaS, PaaS, SaaS, shared responsibility model', 'AWS Global Infrastructure — Regions, AZs, Edge Locations', 'IAM — users, roles, policies and MFA', 'EC2 — instances, AMIs, key pairs, security groups', 'S3 — buckets, objects, versioning, lifecycle policies'], deliverable: 'Launch an EC2 instance, host a static website on S3, and configure IAM users with least-privilege roles.' },
    { day_range: 'Day 10 – 18', title: 'Networking, Databases & Storage', topics: ['VPC — subnets, route tables, internet gateways, NAT', 'Security groups vs NACLs', 'RDS — managed relational databases, multi-AZ, read replicas', 'DynamoDB basics — tables, items, partition keys', 'CloudFront CDN and Route 53 DNS'], deliverable: 'Set up a custom VPC with public and private subnets, deploy an RDS instance in the private subnet, and expose it via a bastion host.' },
    { day_range: 'Day 19 – 27', title: 'Serverless & Containers', topics: ['Lambda — functions, triggers, event sources and layers', 'API Gateway — REST APIs with Lambda integration', 'Docker — images, containers, Dockerfile, docker-compose', 'ECR — pushing images to Elastic Container Registry', 'ECS Fargate — deploying containerised applications', 'SQS and SNS for event-driven architectures'], deliverable: 'Build a serverless REST API using Lambda + API Gateway + DynamoDB, and containerise a Node.js app deployed to ECS Fargate.' },
    { day_range: 'Day 28 – 36', title: 'DevOps, CI/CD & Monitoring', topics: ['Infrastructure as Code with CloudFormation / Terraform basics', 'CodePipeline, CodeBuild and CodeDeploy', 'GitHub Actions CI/CD pipeline to AWS', 'CloudWatch — metrics, logs, alarms and dashboards', 'Auto Scaling groups and Elastic Load Balancers'], deliverable: 'Set up a GitHub Actions CI/CD pipeline that builds, tests and deploys a containerised application to ECS, with CloudWatch alarms.' },
    { day_range: 'Day 37 – 45', title: 'Capstone Cloud Project', topics: ['Design and deploy a 3-tier cloud architecture (frontend, backend, database)', 'Apply security best practices — encryption, WAF, secrets management', 'Cost optimisation — right-sizing, Reserved Instances, Cost Explorer', 'High availability and disaster recovery planning', 'Final architecture diagram and documentation'], deliverable: 'Deploy a production-ready 3-tier application on AWS with CI/CD, monitoring, auto-scaling, and a complete architecture diagram with cost estimate.' },
  ],
};

// ─── Embedded Systems & IoT ───────────────────────────────────────────────────
const EMBEDDED_IOT = {
  domain: 'Embedded Systems & IoT',
  title: 'Internship Program: Embedded Systems & IoT (Arduino, Raspberry Pi & Sensors)',
  total_days: 45,
  tagline: 'A 45-day practical roadmap from electronics basics to building connected IoT devices and cloud dashboards.',
  phases: [
    { day_range: 'Day 1 – 9', title: 'Electronics & Embedded Foundations', topics: ['Basic electronics — Ohm\'s law, resistors, capacitors, LEDs', 'Microcontrollers vs microprocessors — architecture overview', 'Arduino Uno — pinout, IDE setup, sketch structure', 'Digital I/O — GPIO, pull-up/pull-down resistors', 'Analog I/O — ADC, PWM, analogRead / analogWrite', 'Breadboard prototyping and circuit reading'], deliverable: 'Build three Arduino circuits — LED blink with button control, PWM-based LED brightness control, and an analog sensor reading on Serial Monitor.' },
    { day_range: 'Day 10 – 18', title: 'Sensors, Actuators & Communication', topics: ['Sensors — temperature (DHT11/22), ultrasonic (HC-SR04), PIR motion', 'Actuators — servo motors, DC motors with L298N driver', 'Communication protocols — UART, I2C, SPI', 'LCD 16×2 display with I2C', 'Interrupts and timers in Arduino'], deliverable: 'Build a Smart Room Monitor — display real-time temperature, humidity and motion detection on an LCD with a buzzer alert.' },
    { day_range: 'Day 19 – 27', title: 'Raspberry Pi & Linux for IoT', topics: ['Raspberry Pi setup — Raspbian OS, SSH, VNC', 'GPIO with Python (RPi.GPIO / gpiozero)', 'Reading sensors from Raspberry Pi', 'MQTT protocol — publish/subscribe, Mosquitto broker', 'Serial communication between Arduino and Raspberry Pi'], deliverable: 'Set up a Raspberry Pi, read sensor data using Python GPIO, and publish readings to a local MQTT broker.' },
    { day_range: 'Day 28 – 36', title: 'IoT Cloud Integration', topics: ['Cloud IoT platforms — AWS IoT Core or ThingSpeak', 'Connecting devices via MQTT over TLS', 'Storing sensor data in a cloud database', 'Real-time dashboards with ThingSpeak or Grafana', 'Security in IoT — device authentication, token management'], deliverable: 'Connect Raspberry Pi to AWS IoT Core, stream sensor readings to the cloud, and build a live dashboard showing temperature and humidity trends.' },
    { day_range: 'Day 37 – 45', title: 'Capstone IoT Project', topics: ['Design and build a complete IoT system end-to-end', 'Edge processing — filtering and aggregating sensor data locally', 'Alert system — email/SMS notifications on threshold breach', 'Power management basics for battery-operated devices', 'Project documentation, circuit diagram and demo video'], deliverable: 'Build a deployed Smart Environment Monitor with real-time cloud dashboard, threshold alerts, and a full project report with circuit diagrams.' },
  ],
};

// ─── VLSI Design ──────────────────────────────────────────────────────────────
const VLSI = {
  domain: 'VLSI Design',
  title: 'Internship Program: VLSI Design (Digital Design, Verilog & FPGA)',
  total_days: 45,
  tagline: 'A 45-day roadmap covering digital logic, Verilog HDL, FPGA implementation and ASIC design flow basics.',
  phases: [
    { day_range: 'Day 1 – 9', title: 'Digital Logic Foundations', topics: ['Number systems — binary, octal, hexadecimal, BCD', 'Boolean algebra — laws, De Morgan\'s theorems, simplification', 'Logic gates — AND, OR, NOT, NAND, NOR, XOR, XNOR', 'Combinational circuits — adder, multiplexer, encoder, decoder', 'Karnaugh Maps — 2, 3, 4 variable simplification', 'Introduction to CMOS technology'], deliverable: 'Design and simulate a 4-bit ripple carry adder, a 4:1 multiplexer, and a 2-to-4 decoder using a digital logic simulator.' },
    { day_range: 'Day 10 – 18', title: 'Verilog HDL Fundamentals', topics: ['Introduction to HDLs — Verilog vs VHDL', 'Verilog syntax — modules, ports, data types, operators', 'Behavioral, dataflow and structural modelling styles', 'Sequential logic — D flip-flop, registers', 'Finite State Machines (FSM) — Moore and Mealy models', 'Testbench writing and simulation with ModelSim / Icarus Verilog'], deliverable: 'Write Verilog modules for a D flip-flop, a 4-bit shift register, and a Moore FSM traffic light controller with testbenches and simulation waveforms.' },
    { day_range: 'Day 19 – 27', title: 'Advanced Verilog & RTL Design', topics: ['Synchronous design principles and clock domain concepts', 'Parameterised modules and generate statements', 'Arithmetic circuits — adders, subtractors, multipliers in Verilog', 'Memory elements — RAM and ROM modelling', 'Pipelining concepts in RTL design', 'Coding guidelines for synthesis'], deliverable: 'Design a pipelined 8-bit ALU in Verilog supporting ADD, SUB, AND, OR, XOR and comparison operations with a complete testbench.' },
    { day_range: 'Day 28 – 36', title: 'FPGA Implementation', topics: ['FPGA architecture — LUTs, flip-flops, BRAMs, DSP blocks', 'Xilinx Vivado / Intel Quartus IDE workflow', 'RTL synthesis and technology mapping', 'Place and Route — timing constraints and timing reports', 'Downloading bitstream to FPGA development board'], deliverable: 'Implement the ALU design on an FPGA, demonstrate operation via seven-segment display or LEDs, and achieve timing closure at 50 MHz.' },
    { day_range: 'Day 37 – 45', title: 'Capstone VLSI Project', topics: ['Design a complete digital system — UART controller or simple processor', 'ASIC design flow overview — synthesis, floor planning, power analysis', 'Static Timing Analysis (STA) basics', 'Introduction to OpenLane / Sky130 open-source PDK', 'Documentation — block diagram, FSM diagram, timing reports'], deliverable: 'Design and implement a UART transmitter/receiver in Verilog, synthesise with an open-source flow, and submit a full design report.' },
  ],
};

// ─── PCB Design & Prototyping ─────────────────────────────────────────────────
const PCB_DESIGN = {
  domain: 'PCB Design & Prototyping',
  title: 'Internship Program: PCB Design & Prototyping (KiCad & Electronics)',
  total_days: 45,
  tagline: 'A 45-day hands-on roadmap from electronics theory to designing, fabricating and testing real PCBs.',
  phases: [
    { day_range: 'Day 1 – 9', title: 'Electronics & Component Fundamentals', topics: ['Basic electronics — Ohm\'s law, Kirchhoff\'s laws, power calculations', 'Passive components — resistors, capacitors, inductors', 'Active components — diodes, BJTs, MOSFETs, op-amps', 'Reading datasheets — pinouts, ratings, application circuits', 'Circuit analysis — voltage dividers, RC filters, BJT biasing', 'Introduction to EDA tools — KiCad overview'], deliverable: 'Analyse three component datasheets, build and test a voltage divider and an RC low-pass filter on a breadboard.' },
    { day_range: 'Day 10 – 18', title: 'Schematic Design with KiCad', topics: ['KiCad EESchema — workspace, symbol library, wiring tools', 'Creating and editing component symbols', 'Designing a schematic — power symbols, net labels, hierarchical sheets', 'ERC (Electrical Rules Check) — finding and fixing errors', 'Generating a Bill of Materials (BOM)', 'Component selection — through-hole vs SMD, package types'], deliverable: 'Design a complete schematic for an Arduino-compatible board with power supply, USB interface, reset circuit and GPIO headers — pass ERC with zero errors.' },
    { day_range: 'Day 19 – 27', title: 'PCB Layout & Design Rules', topics: ['KiCad PCB Editor — layer stack-up, design rule setup', 'Footprint assignment and 3D viewer', 'Component placement strategies — signal flow, thermal management', 'Routing — manual routing, differential pairs, impedance control basics', 'Ground planes and power planes', 'DRC (Design Rules Check) — clearance, track width, via rules'], deliverable: 'Layout a two-layer PCB — place components, route all connections, add a ground plane, and pass DRC with zero violations.' },
    { day_range: 'Day 28 – 36', title: 'Fabrication & Assembly', topics: ['Generating Gerber files and drill files for fabrication', 'PCB fabrication process — etching, drilling, surface finish', 'Ordering from PCB manufacturers (JLCPCB / PCBWay)', 'Soldering — through-hole and SMD soldering techniques', 'PCB inspection — visual check, continuity testing', 'Bring-up procedure — power-on testing, voltage rail verification'], deliverable: 'Generate a complete fabrication package (Gerbers, BOM), solder assembled components, and perform a full bring-up test log.' },
    { day_range: 'Day 37 – 45', title: 'Capstone PCB Project', topics: ['Design a complete PCB system — sensor interface board, motor driver, or IoT node', 'Multi-layer board considerations and advanced routing', 'EMC basics — decoupling capacitors, trace routing for low noise', 'Functional testing and debugging with oscilloscope and logic analyser', 'Project documentation — schematic, layout, BOM, test report'], deliverable: 'Design, fabricate and test a complete custom PCB project — submit Gerbers, schematic PDF, BOM, and a test report with oscilloscope screenshots.' },
  ],
};

const CURRICULA = {
  'Web Development': WEB_DEV,
  'Java Full Stack Developer': JAVA_FULL_STACK,
  'Python Full Stack Developer': PYTHON_FULL_STACK,
  'Data Science & AI Intern': DATA_SCIENCE_AI,
  'Cyber Security Intern': CYBER_SECURITY,
  'Java Developer': JAVA_DEV,
  'Python Developer': PYTHON_DEV,
  'AI & Machine Learning': AI_ML,
  'Data Analytics': DATA_ANALYTICS,
  'UI/UX Design': UI_UX,
  'Cloud Computing': CLOUD_COMPUTING,
  'Embedded Systems & IoT': EMBEDDED_IOT,
  'VLSI Design': VLSI,
  'PCB Design & Prototyping': PCB_DESIGN,
};

/**
 * Returns the curriculum for a domain scaled to the student's actual duration.
 * @param {string} domain
 * @param {number|null} durationMonths  — student's registered duration in months (2,3,4,6)
 */
function getCurriculum(domain, durationMonths = null) {
  if (!CURRICULA[domain]) {
    return {
      available: false,
      domain,
      title: domain,
      message: "We're polishing this curriculum — your roadmap will be available here shortly.",
    };
  }

  const base = CURRICULA[domain];
  // If no duration given, return base as-is
  if (!durationMonths) return { available: true, ...base };

  const totalDays = durationMonths * 30;
  const numPhases = base.phases.length;
  const daysPerPhase = Math.floor(totalDays / numPhases);

  // Rescale day_range labels to match actual duration
  const scaledPhases = base.phases.map((phase, i) => {
    const start = i * daysPerPhase + 1;
    const end   = (i === numPhases - 1) ? totalDays : (i + 1) * daysPerPhase;
    return {
      ...phase,
      day_range: `Day ${start} – ${end}`,
    };
  });

  return {
    available: true,
    ...base,
    total_days: totalDays,
    title: base.title.replace(/\d+-day/i, `${totalDays}-day`),
    tagline: base.tagline.replace(/\d+-day/i, `${totalDays}-day`),
    phases: scaledPhases,
  };
}

module.exports = { getCurriculum, CURRICULA };
