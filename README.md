# avRoN Tech — Internship Platform

A full-stack internship management platform with interactive course dashboards, LeetCode daily assignments, attendance tracking, badge system, and certificate management.

---

## Project Structure

```
avRoN-tech/
├── middleware/          # Express middleware (auth)
├── models/             # Mongoose models
│   ├── User.js
│   ├── Registration.js
│   ├── Attendance.js
│   ├── AssignmentProgress.js
│   ├── CourseContent.js
│   ├── DailyAssignment.js
│   ├── LearningLog.js
│   ├── Notification.js
│   └── ActivityLog.js
├── routes/             # Express API routes
│   ├── auth.js         # Login, OTP, register
│   ├── student.js      # Student portal APIs
│   ├── admin.js        # Admin panel APIs
│   ├── payment.js      # Razorpay (disabled) + UPI
│   └── courses.js      # Course content from DB
├── utils/              # Shared utilities
│   ├── emailService.js
│   ├── emailQueue.js
│   ├── badgeChecker.js
│   ├── pdfGenerator.js
│   ├── notify.js
│   ├── activityLogger.js
│   ├── curricula.js
│   └── logger.js
├── public/             # Frontend (static)
│   ├── index.html          # Landing page
│   ├── register.html       # Registration + UPI payment
│   ├── portal.html         # Student login
│   ├── dashboard.html      # ₹299 Basic student portal
│   ├── student-menu.html   # ₹1099 Complete Bundle portal
│   ├── course-dashboard.html  # Interactive 9-week course
│   ├── verify.html         # Certificate verification
│   ├── admin/
│   │   ├── dashboard.html  # Admin panel
│   │   └── login.html
│   └── uploads/            # Payment screenshots
├── scripts/
│   ├── seeds/          # DB seed scripts (run once)
│   │   ├── seedCourseContent.js   # Seed 9-week Java course to MongoDB
│   │   ├── seedAssignments.js     # Seed 45 days of LeetCode problems
│   │   ├── seedCompleteBundle.js  # Seed test complete-bundle student
│   │   └── seedDummyStudent.js    # Seed test basic student
│   └── dev/            # Dev/utility scripts (not for production)
├── logs/               # Winston log files
├── server.js           # Express app entry point
├── package.json
├── .env                # Environment variables (never commit)
└── .env.example        # Example env vars
```

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
# Fill in: MONGODB_URI, JWT_SECRET, EMAIL_USER, EMAIL_PASS, UPI_ID, UPI_NAME
```

### 3. Seed course content to MongoDB
```bash
node scripts/seeds/seedCourseContent.js
node scripts/seeds/seedAssignments.js
```

### 4. Run
```bash
npm start          # production
npm run dev        # development (nodemon)
```

---

## Two Student Portals

| Plan | Price | Portal | Features |
|------|-------|--------|----------|
| Basic | ₹199-299 | `/dashboard.html` | Curriculum roadmap, offer letter, certificate |
| Complete Bundle | ₹1099 | `/student-menu.html` + `/course-dashboard.html` | Interactive 9-week course, quizzes, projects, LeetCode assignments, attendance, badges |

**Routing:** After login, `portal.html` calls `/api/student/dashboard`, checks the registration package, and routes to the correct portal automatically.

---

## Key APIs

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register + create user |
| POST | `/api/auth/login` | Password login |
| GET | `/api/student/dashboard` | Student dashboard data |
| GET | `/api/courses/content/:slug` | Course weeks from MongoDB |
| PUT | `/api/student/course-progress` | Save quiz/project progress |
| GET | `/api/student/assignments/problems` | Today's LeetCode problems |
| POST | `/api/student/assignments/complete` | Mark problem done |
| POST | `/api/student/attendance/mark` | Mark present for today |
| GET | `/api/student/badges` | Compute badges from progress |
| POST | `/api/student/learning-log` | Save daily log |
| GET | `/api/admin/registrations` | All registrations |
| POST | `/api/admin/send-certificate/:id` | Issue certificate |

---

## Admin Panel

Access: `/admin/dashboard.html`  
Credentials: set in `.env` as `ADMIN_EMAIL` and `ADMIN_PASSWORD`

**Tabs:** Overview · Revenue · Payments · All Registrations · **Complete Bundle** (new) · Certificates · Students · Activity Log

**Complete Bundle tab** shows per-student: weeks completed, attendance calendar, badges earned, eligibility indicator for certificate.

**Certificate eligibility (₹1099 students):**
- Must have completed ≥ 1 week (project submitted)
- Must have ≥ 80% attendance

---

## MongoDB Collections

| Collection | Purpose |
|------------|---------|
| `users` | Student accounts |
| `registrations` | Enrollment + payment + courseProgress |
| `coursecontents` | 9-week Java Full Stack curriculum |
| `dailyassignments` | 45 days × 2 LeetCode problems |
| `assignmentprogresses` | Per-student completion map |
| `attendances` | One doc per student per day per domain |
| `learninglogs` | Daily journal entries |
| `notifications` | In-portal notifications |
| `activitylogs` | Admin action history |
