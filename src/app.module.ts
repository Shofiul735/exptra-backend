import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { JoiConfigObject } from './config/Joi.config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from './config/DB.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiConfigObject,
      validationOptions:{
        allowUnknow: false,
        abortEarly: true
      }
    }),
    TypeOrmModule.forRoot(DBConfig),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
