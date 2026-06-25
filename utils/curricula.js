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

const CURRICULA = {
  'Web Development': WEB_DEV,
  'Java Full Stack Developer': JAVA_FULL_STACK,
  'Python Full Stack Developer': PYTHON_FULL_STACK,
  'Data Science & AI Intern': DATA_SCIENCE_AI,
  'Cyber Security Intern': CYBER_SECURITY,
};

/**
 * Returns the curriculum for a domain, or a "coming soon" placeholder.
 */
function getCurriculum(domain) {
  if (CURRICULA[domain]) return { available: true, ...CURRICULA[domain] };
  return {
    available: false,
    domain,
    title: domain,
    message: "We're polishing this curriculum — your roadmap will be available here shortly.",
  };
}

module.exports = { getCurriculum, CURRICULA };
