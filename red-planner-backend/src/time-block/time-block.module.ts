import { Module } from '@nestjs/common';
import { TimeBlockService } from './time-block.service';
import { TimeBlockController } from './time-block.controller';

@Module({
	controllers: [TimeBlockController],
	providers: [TimeBlockService],
	exports: [TimeBlockService],
})
export class TimeBlockModule { }
