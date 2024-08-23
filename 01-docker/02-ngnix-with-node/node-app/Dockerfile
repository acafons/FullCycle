FROM node:22.5.1-slim

USER node

WORKDIR /home/node/app

COPY . .

EXPOSE 3000

CMD ["/home/node/app/.docker/entrypoint.sh"]
