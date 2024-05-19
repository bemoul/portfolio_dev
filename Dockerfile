FROM node:20-alpine3.18 as base

RUN apk --no-cache add curl
RUN corepack enable

# All deps stage
FROM base as deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install

# Production only deps stage
FROM base as production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install --prod

# Build stage
FROM base as build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY ../../.env ./.env
ADD . .
RUN node ace build

# Production stage
FROM base
WORKDIR /app
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app
RUN mkdir /app/tmp

EXPOSE 8080

ARG  APP_RELEASE

ENV APP_RELEASE=${APP_RELEASE}
ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production
ENV APP_KEY=0qR4-3B0dGHBI9gvwEY9QstMjJk6uw74
ENV DRIVE_DISK=local
ENV SESSION_DRIVER=cookie
ENV LOG_LEVEL=info
ENV DB_HOST=127.0.0.1
ENV DB_PORT=5432
ENV DB_USER=root
ENV DB_DATABASE=portfolio

CMD ["node", "./bin/server.js"]