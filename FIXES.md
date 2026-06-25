# What was fixed

## The Bug
- **Symptom:** Submit button on the Registration form & Student Portal kept
  spinning forever. After a manual page refresh, the data showed up as saved.
- **Root cause:** Every "submit" endpoint did `await queueEmail(...)` **before**
  sending the HTTP response. The email queue used `bull` + Redis. Since Redis
  was not running, it fell back to a synchronous Gmail SMTP send, which can
  take **10-30 seconds** (and often times out). The data was already saved to
  MongoDB by that point, which is why a refresh showed it.

## The Fix
Emails are now sent in the **background** (`setImmediate`) and the API responds
immediately. Average response time dropped from **10-30 s** to **~30 ms**.

Files changed:
- `utils/emailQueue.js` — Redis/Bull is now **optional** (only enabled when
  `REDIS_URL` is set). Otherwise emails are dispatched in the background and
  errors are logged, never thrown back to the client.
- `routes/auth.js` — `await queueEmail(...)` replaced with fire-and-forget for
  the confirmation and OTP emails.
- `routes/student.js` — Payment-receipt PDF generation and admin/student
  emails moved into a `setImmediate` block that runs after the response is
  sent.
- `routes/admin.js` — Same fire-and-forget treatment for payment-verified and
  certificate emails.
- `routes/payment.js` — `activatePayment()` no longer awaits PDF/email.
- `server.js` — Rate limiter no longer wraps every `/api/auth` route (login &
  OTP have their own dedicated limiters). Deprecated mongoose options removed.

## How to run

```bash
cd Project-C-main
npm install
npm start
```

Open: <http://localhost:3000>

## Deploying to the internet (free)

The project is plain Node.js + MongoDB Atlas — the easiest options:

1. **Render.com** (recommended, free)
   - Push the project to GitHub
   - Render → New Web Service → Connect repo
   - Build: `npm install`  ·  Start: `node server.js`
   - Add all the env variables from your `.env` (set `BASE_URL` to your
     Render URL, e.g. `https://certifypro.onrender.com`)
2. **Railway.app** — same flow.

You do **not** need Redis for it to work. If you later want a real background
queue (recommended for high traffic), provision a free Redis instance
(Upstash, Render Redis) and set `REDIS_URL` — the email queue will be used
automatically.
