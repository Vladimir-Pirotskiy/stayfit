FROM node:20-slim AS base

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

COPY package.json bun.lockb* ./

RUN bun install

FROM base AS builder
WORKDIR /app
COPY . .

RUN bun run build

FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

USER node

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
