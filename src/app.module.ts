import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { JoiConfigObject } from './config/Joi.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiConfigObject,
      validationOptions:{
        allowUnknow: false,
        abortEarly: true
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
