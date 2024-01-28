import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { JoiConfigObject } from './config/Joi.config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from './config/DB.config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiConfigObject,
      validationOptions:{
        allowUnknow: false,
        abortEarly: true
      }
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          global: true,
          secret: configService.getOrThrow<string>('JWT_SECRET'),
          signOptions:{
            expiresIn: '1h',
          }
        }
      }
    }),
    TypeOrmModule.forRoot(DBConfig),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
