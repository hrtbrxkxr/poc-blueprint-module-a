FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev=false
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package.json ./
EXPOSE 4001
HEALTHCHECK --interval=30s --timeout=5s CMD wget -qO- http://localhost:4001/health || exit 1
CMD ["node", "dist/server.js"]
