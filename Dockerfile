FROM node:20-alpine

RUN apk add --no-cache \
    ffmpeg \
    git \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    pixman-dev

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

CMD ["node", "index.js"]
