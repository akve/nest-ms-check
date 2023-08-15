import { Module } from '@nestjs/common';
import { AcController } from './ac.controller';
import { AcService } from './ac.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.registerAsync([
      {
        name: 'shortener_service',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            retryAttempts: 5,
            retryDelay: 3000,
            host: 'localhost', // configService.get('SHORTENER_HOST'),
            port: 3003, //configService.get('SHORTENER_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AcController],
  providers: [AcService],
})
export class AcModule {}
