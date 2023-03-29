import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as NestConfig } from '@nestjs/config';

@Module({
  imports: [NestConfig],
  providers: [ConfigService],
  exports: [ConfigModule, ConfigService],
})
export class ConfigModule {}
