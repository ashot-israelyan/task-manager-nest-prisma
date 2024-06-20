import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	private readonly logger = new Logger('PrismaService');

	async onModuleInit() {
		try {
			await this.$connect();

			this.logger.verbose('Connected to the databse');
		} catch (err) {
			this.logger.error('Failed to connect to database ' + err);
		}
	}
}
