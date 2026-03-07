FROM node:14-alpine
RUN mkdir -p /home/node/frontend/ && chown -R node:node /home/node/
COPY --chown=node:node ./ /home/node/frontend/
USER node
WORKDIR /home/node/frontend
CMD [ "npm", "run", "start"]