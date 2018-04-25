import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
    constructor(private voteService: VoteService){}

    @Post()
    castVote(@Res() res, @Body() vote) {
        this.voteService.create(vote);
        res.status(HttpStatus.OK).send('Voted');
    }
    
}