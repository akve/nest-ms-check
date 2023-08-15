import { NestFactory } from '@nestjs/core';
import { AcModule } from './ac.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AcModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const configService: ConfigService = app.get(ConfigService);
  console.log('port', configService.get('APP_PORT_AC'));
  await app.listen(configService.get('APP_PORT_AC'));
}
bootstrap();
