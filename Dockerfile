FROM node:22-slim

WORKDIR /app

COPY . .

RUN npm install -g pnpm && pnpm install

EXPOSE 5173

CMD ["pnpm", "run", "dev"]
