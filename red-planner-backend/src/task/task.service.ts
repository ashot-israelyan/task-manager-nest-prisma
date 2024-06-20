import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: string) {
		return this.prisma.task.findMany({
			where: {
				userId,
			},
		});
	}

	async create(dto: CreateTaskDto, userId: string) {
		return this.prisma.task.create({
			data: {
				...dto,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});
	}

	async update(dto: UpdateTaskDto, taskId: string, userId: string) {
		return this.prisma.task.update({
			where: {
				userId,
				id: taskId,
			},
			data: dto,
		});
	}

	async delete(taskId: string) {
		return this.prisma.task.delete({
			where: {
				id: taskId,
			},
		});
	}
}
