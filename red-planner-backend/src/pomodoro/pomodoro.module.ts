import { PrismaService } from '../prisma.service';
import { Module } from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import { PomodoroController } from './pomodoro.controller';

@Module({
	controllers: [PomodoroController],
	providers: [PrismaService, PomodoroService],
	exports: [PomodoroService],
})
export class PomodoroModule {}
