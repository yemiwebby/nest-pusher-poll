import { Component } from '@nestjs/common';

@Component()
export class VoteService {

    create(vote) {
        const Pusher = require('pusher');

        var pusher = new Pusher({
            appId: 'APP_ID',
            key: 'YOUR_API_KEY',
            secret: 'YOUR_SECRET_KEY',
            cluster: 'CLUSTER',
            encrypted: true
          });

          pusher.trigger('poll', 'vote', {
              points: 10,
              phone: vote,
          });
    }
}

