import { VoteService } from './vote/vote.service';
import { VoteController } from './vote/vote.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, VoteController],
  components: [VoteService],
})
export class AppModule {}
