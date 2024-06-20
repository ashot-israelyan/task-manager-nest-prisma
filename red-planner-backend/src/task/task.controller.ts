import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Controller('user/tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Get()
	@Auth()
	async getAll(@CurrentUser('id') userId: string) {
		return this.taskService.getAll(userId);
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: CreateTaskDto, @CurrentUser('id') userId: string) {
		return this.taskService.create(dto, userId);
	}

	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(
		@Body() dto: UpdateTaskDto,
		@CurrentUser('id') userId: string,
		@Param('id') id: string,
	) {
		return this.taskService.update(dto, id, userId);
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@CurrentUser('id') userId: string, @Param('id') id: string) {
		return this.taskService.delete(id, userId);
	}
}
