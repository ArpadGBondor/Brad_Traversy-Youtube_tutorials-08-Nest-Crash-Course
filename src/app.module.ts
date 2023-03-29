import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigModule as NestConfig } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
@Module({
  imports: [
    NestConfig.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.createMongooseOptions(),
      inject: [ConfigService],
    }),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
