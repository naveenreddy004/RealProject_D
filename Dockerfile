# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (better layer caching)
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci --only=production

# ── Stage 2: Production image ─────────────────────────────────────────────────
FROM node:20-alpine

# Add tini for proper signal handling (graceful shutdown)
RUN apk add --no-cache tini

WORKDIR /app

# Copy installed node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy app source
COPY . .

# Create required directories (logs, uploads, qr)
RUN mkdir -p logs public/uploads public/qr

# Non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Expose port
EXPOSE 3000

# Use tini as entrypoint for proper process management
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "server.js"]
