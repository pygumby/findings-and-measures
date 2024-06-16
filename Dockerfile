FROM node:22-slim

COPY . /app

WORKDIR /app

RUN npm install -g pnpm
RUN pnpm install

EXPOSE 5173

CMD ["pnpm", "run", "dev", "--host"]
