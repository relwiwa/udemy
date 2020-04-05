# builder is a tag for a phase in docker build workflow
FROM node:alpine as builder
WORKDIR "/usr/app"
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# every phase can only have on from statement, so it starts new phase
FROM nginx
# static content for nginx is supposed to be in /usr/share/nginx/html directory
# --from=builder is referrer to previous phase 
COPY --from=builder /usr/app/build /usr/share/nginx/html
# nginx container's default command starts nginx
