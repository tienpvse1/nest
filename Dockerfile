FROM node:lts-alpine as development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
RUN npm run build


FROM node:lts-alpine as production
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY --from=development /usr/src/app/dist/ ./dist
CMD ["node", "dist/main"]
