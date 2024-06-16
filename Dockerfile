FROM node:22-slim

WORKDIR '/app/'

COPY public/ /app/public
COPY src/ /app/src
COPY index.html /app/
COPY package.json /app/

RUN npm install -g pnpm && pnpm install

EXPOSE 5173

CMD ["pnpm", "run", "dev"]
