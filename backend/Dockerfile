FROM node:14 as BASE
RUN mkdir -p /home/node/app/  && chown -R node:node /home/node/
COPY --chown=node:node ./ /home/node/app/
USER node

RUN cd /home/node/app && npm install 

WORKDIR /home/node/app
CMD [ "npm", "run", "start"]