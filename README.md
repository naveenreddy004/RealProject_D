# 🎓 CertifyPro v3 — Complete Setup Guide

## 📁 Project Structure
```
certifypro-v3/
├── server.js              # Main Express server
├── models/
│   ├── User.js            # Student model (password + OTP)
│   └── Registration.js    # Internship registration model
├── routes/
│   ├── auth.js            # Register, Login, OTP, Change Password
│   ├── student.js         # Dashboard, Payment, Tasks
│   └── admin.js           # Admin panel APIs
├── middleware/
│   └── auth.js            # JWT verification + Admin key
├── utils/
│   ├── emailService.js    # 7 email templates
│   └── pdfGenerator.js    # Certificate + Receipt PDF
├── public/
│   ├── index.html         # Website 1 — Landing + Registration
│   ├── portal.html        # Website 2 — Login (OTP + Password)
│   ├── dashboard.html     # Student Dashboard + UPI Payment
│   ├── admin.html         # Admin Panel with Charts
│   └── verify.html        # QR Certificate Verification
├── certificates/          # (removed — PDFs now stored in MongoDB as binary)
├── .env.example           # Environment template
└── package.json
```

---

## 🚀 Quick Start

### Step 1 — Install Node.js
Download from https://nodejs.org (v18+)

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Set up MongoDB Atlas (FREE)

1. Go to https://mongodb.com/atlas → Create free account
2. Create a free **M0 cluster** (takes 2 min)
3. Click **Database Access** → Add new user → set username + password
4. Click **Network Access** → Add IP Address → **Allow access from anywhere** (0.0.0.0/0)
5. Click **Connect** on your cluster → **Connect your application**
6. Copy the connection string — it looks like:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/
   ```
7. Add `/certifypro` before the `?` → final string:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/certifypro?retryWrites=true&w=majority
   ```

### Step 4 — Configure environment
```bash
cp .env .env
```
Edit `.env`:
```env
MONGODB_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/certifypro?retryWrites=true&w=majority

JWT_SECRET=any-long-random-string-min-32-chars-change-this

EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password

UPI_ID=yourname@upi
UPI_NAME=CertifyPro
UPI_AMOUNT=199

ADMIN_KEY=your-strong-admin-key
ADMIN_EMAIL=your-admin-email@gmail.com   # Gets notified when payment submitted

BASE_URL=http://localhost:3000
PORT=3000
```

#### Gmail App Password:
1. Gmail → Google Account → Security
2. Enable 2-Step Verification
3. Search "App Passwords" → Create new → Copy it → paste as EMAIL_PASS

### Step 5 — Run
```bash
npm start
```

Console shows:
```
✅ MongoDB Connected Successfully
🚀 CertifyPro v3 running at http://localhost:3000
🔑 Portal:   http://localhost:3000/portal
📊 Admin:    http://localhost:3000/admin
🔍 Verify:   http://localhost:3000/verify
```

---

## 🌐 Pages

| URL | Purpose |
|-----|---------|
| `localhost:3000` | Landing page + Registration form |
| `localhost:3000/portal` | Student login (OTP + Password) |
| `localhost:3000/dashboard` | Student dashboard + UPI payment |
| `localhost:3000/admin` | Admin panel |
| `localhost:3000/verify?id=CPXXXXXXXX` | Certificate verification (QR scan) |

---

## 📧 Email Flow

| When | Email Sent | To |
|------|-----------|-----|
| Form submitted | Confirmation | Student |
| +2 minutes | Portal invite with login link | Student |
| Student requests OTP | OTP code | Student |
| Student submits payment | Payment receipt | Student |
| Student submits payment | Alert with UTR | Admin |
| Admin verifies payment | Payment confirmed + internship active | Student |
| Admin sends certificate | Certificate PDF attached | Student |

---

## 💳 Payment Flow

```
Student logs in → Sees UPI QR code + UPI ID
→ Opens GPay/PhonePe/Paytm → Scans QR
→ Pays ₹199 → Gets UTR number
→ Enters UTR + uploads screenshot → Submits
→ Admin gets email alert with UTR
→ Admin checks UTR in bank/UPI app
→ Admin clicks "Verify Payment" in admin panel
→ Student gets email: Payment confirmed, internship active!
→ Student completes tasks → Admin sends certificate
→ Student gets PDF with QR code
→ Anyone scans QR → Sees verify page with student details
```

---

## 🔐 Auth Flow

```
FIRST TIME LOGIN:
Email → Send OTP → Enter OTP → Set Password → JWT token stored
(Next login: Email + Password directly)

RETURNING USER:
Email + Password → JWT token stored

FORGOT PASSWORD:
Email → Send OTP → Enter OTP → Set New Password → JWT token
```

---

## 🚀 Deploy to Internet (Free)

### Railway.app (Recommended)
1. Push code to GitHub
2. Railway.app → New Project → Deploy from GitHub
3. Add environment variables in Railway dashboard
4. Change BASE_URL to your Railway URL

### Render.com
1. Push to GitHub
2. Render → New Web Service → Connect repo
3. Build: `npm install` | Start: `node server.js`
4. Add environment variables

---

## 📊 Admin Panel Features
- Overview dashboard with charts (daily registrations, top domains)
- Revenue tracking
- Payment verification section (UTR + screenshot review)
- All registrations with search + filter
- Certificate management (send, download PDF)
- Student management

---

## 🔧 API Endpoints

### Auth
- `POST /api/auth/register` — Register new student
- `POST /api/auth/login` — Password login
- `POST /api/auth/send-otp` — Send OTP
- `POST /api/auth/verify-otp` — Verify OTP + optional set password
- `GET  /api/auth/me` — Get current user (JWT required)
- `POST /api/auth/change-password` — Change password

### Student (JWT required)
- `GET  /api/student/dashboard` — Dashboard data + UPI details
- `POST /api/student/submit-payment` — Submit UTR + screenshot
- `POST /api/student/mark-complete` — Mark internship complete
- `GET  /api/student/receipt` — Download payment receipt PDF
- `GET  /api/student/verify/:certId` — Verify certificate (public)

### Admin (Admin key required)
- `GET  /api/admin/stats` — Overview analytics
- `GET  /api/admin/registrations` — All registrations (filter + search)
- `POST /api/admin/verify-payment/:id` — Verify payment
- `POST /api/admin/reject-payment/:id` — Reject payment
- `POST /api/admin/mark-complete/:id` — Mark complete
- `POST /api/admin/send-certificate/:id` — Generate + email certificate
- `POST /api/admin/reject/:id` — Reject registration
- `GET  /api/admin/users` — All students

### UPI
- `GET  /api/upi-qr` — Get UPI QR code as base64 image
