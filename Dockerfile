# Use the official Node.js image as the base
FROM node:22.0.0-bookworm-slim AS base
WORKDIR /usr/src/app

# Install necessary packages
RUN apt update && apt install curl unzip -y

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.1.27"
RUN ln -s $HOME/.bun/bin/bun /usr/local/bin/bun

# Delete package
RUN apt purge unzip -y

# Install dependencies into a temp directory
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb .env /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb .env /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules from the temp directory
# Then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# Copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app .

# Run the app
USER node
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "start" ]

