import { Body, Controller, Delete, HttpCode, Param, Post, Put } from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { PomodoroRoundDto, PomodoroSessionDto } from './pomodoro.dto';

@Controller('user/timer')
export class PomodoroController {
	constructor(private readonly pomodoroService: PomodoroService) { }

	@HttpCode(200)
	@Post()
	@Auth()
	async create(@CurrentUser('id') userId: string) {
		return this.pomodoroService.create(userId);
	}

	@HttpCode(200)
	@Put('/round/:id')
	@Auth()
	async updateRound(@Param('id') id: string, @Body() dto: PomodoroRoundDto) {
		return this.pomodoroService.updateRound(dto, id);
	}

	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(@Body() dto: PomodoroSessionDto, @CurrentUser('id') userId: string, @Param('id') id: string) {
		return this.pomodoroService.update(dto, id, userId);
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteSession(@Param('id') id: string, @CurrentUser('id') userId: string) {
		return this.pomodoroService.deleteSession(id, userId);
	}
}
