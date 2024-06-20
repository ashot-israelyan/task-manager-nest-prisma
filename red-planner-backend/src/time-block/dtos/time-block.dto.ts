import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TimeBlockDto {
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	color?: string;

	@IsNumber()
	duration: number;

	@IsNumber()
	@IsOptional()
	order: number;
}

export class UpdateTimeBlockDto {
	@IsString()
	@IsOptional()
	name?: string;

	@IsOptional()
	@IsString()
	color?: string;

	@IsNumber()
	@IsOptional()
	duration?: number;

	@IsNumber()
	@IsOptional()
	order: number;
}
