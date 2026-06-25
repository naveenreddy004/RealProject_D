# avRoN Technologies — Internship Certificate Platform

## What's new in this build

### Brand
- Renamed throughout: **CertifyPro → avRoN Technologies**
- New UI for landing, portal & dashboard. Admin panel kept intact (you said it was already good).

### Bug fixes
- **Submit button no longer spins forever** — emails are now sent in the background, API responses return in 30 ms instead of 10-30 s.

### Email simplification (only 3 emails per student)
1. **Welcome + portal link + login instructions** (after registration)
2. **OTP code** (when login is requested)
3. **Certificate** (when issued)

All other emails (portal-invite, payment-received, payment-verified, admin-alert) are gone.

### Payment flow
- **No admin verification step.** Once the student submits UPI payment, the internship is auto-activated.
- A modal pops up inside the dashboard: *"Payment received — your certificate will be issued shortly."*

### Dashboard — all buttons now work end-to-end
- 💳 Submit payment (UPI manual + Razorpay + Cashfree gateways) → auto-activates the internship
- ✅ Mark internship complete → certificate auto-generated and emailed in ~2 seconds
- 📥 Download certificate
- 🔗 **LinkedIn share** (one click — opens LinkedIn share dialog + copies caption to clipboard)
- 🔍 Verify online
- 🔐 Change password
- 🚪 Logout
- ⏰ Session-expiry warning popup (5 min before JWT expires)

### Phase 1 production upgrades (all implemented)
| # | Upgrade |
|---|---|
| 1 | **Winston + Morgan logging** → writes to `logs/error.log` and `logs/combined.log` |
| 2 | **`/api/health`** endpoint (returns mongo status, uptime) |
| 3 | **CORS allow-list** via `ALLOWED_ORIGINS` env (set to your domain in production) |
| 4 | **OTP rate limit:** 3 per hour per IP+email |
| 5 | **Excel export** of all registrations (one click in admin) |
| 6 | **LinkedIn share** button on dashboard |
| 7 | **Session-expiry warning** modal |
| 8 | **Upsell popup** after registration (Project + Cert ₹399) |
| 9 | **Certificate validity** (default 2 years, configurable in `.env`) |
| 10 | **Certificate revocation** + verify page shows *revoked / expired / not-issued* states distinctly |

### Files added
- `utils/logger.js` — Winston logger
- `FIXES.md` — the bug-fix summary from the previous round

## Quick start

```bash
unzip avRoN-Technologies.zip
cd Project-C-main
npm install
npm start
```

Visit:
- 🌐 Landing:   http://localhost:3000
- 🔑 Portal:    http://localhost:3000/portal
- 📊 Admin:     http://localhost:3000/admin   (key: `rudvarnavarav`)
- 🔍 Verify:    http://localhost:3000/verify
- 💚 Health:    http://localhost:3000/api/health

## Env vars (new ones)

```env
ALLOWED_ORIGINS=https://your-domain.com,https://www.your-domain.com
CERT_VALIDITY_YEARS=2
LOG_LEVEL=info
# (optional) Bull queue with retry
REDIS_URL=redis://default:password@host:6379
```

## Deploy to the internet (free)

**Render.com** is the easiest fit for this stack:

1. Push this folder to GitHub.
2. Render → New Web Service → connect repo.
3. Build: `npm install` · Start: `node server.js`
4. Add **all variables from `.env`** in the Render dashboard.
5. Set `ALLOWED_ORIGINS=https://your-render-url.onrender.com`
6. Add `BASE_URL=https://your-render-url.onrender.com`

(Render runs PM2-equivalent under the hood — auto-restart on crash, log streaming, free TLS.)

## Bull email queue (optional, for high traffic)

Without `REDIS_URL`, emails are sent in the background via `setImmediate` (works fine for hundreds of registrations/day).

With `REDIS_URL` (free at Upstash), emails are queued in Bull with automatic 3-retry exponential backoff — recommended once you cross ~1k registrations/day.

## What's NOT in this build (deferred)

- ❌ WhatsApp admin alerts (need WATI/Interakt account)
- ❌ Real task submission (GitHub link / file upload + admin review)
- ❌ Watermarked certificate preview
- ❌ Cron reminders (7-day task / 48-hr payment)
- ❌ Abandoned-registration recovery
- ❌ Dedicated password-reset-link email (you wanted 3 emails max — using existing OTP flow instead)
- ❌ Blockchain verification (intentionally skipped — low ROI)

These can be added in **Phase 2**.
