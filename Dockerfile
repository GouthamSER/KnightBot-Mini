FROM node:22-alpine

# Install ffmpeg and git (many WhatsApp bots need these)

RUN apk add --no-cache ffmpeg git

WORKDIR /app

# Copy package files first

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy project files

COPY . .

# Create session directory if missing

RUN mkdir -p session

# Environment

ENV NODE_ENV=production

# Start bot

CMD ["node", "index.js"]
