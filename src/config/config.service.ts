import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService as NuxtConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NuxtConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('DB_CONNECT'),
    };
  }
}
