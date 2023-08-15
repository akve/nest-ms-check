import { NestFactory } from '@nestjs/core';
import { UrlShortenerModule } from './url-shortener.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(UrlShortenerModule);
  const configService: ConfigService = app.get(ConfigService);
  // await app.listen();
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      retryAttempts: 5,
      retryDelay: 3000,
      port: 3003, // configService.get('APP_PORT_URL_SHORTENER'),
    },
  });
  console.log('Started @', configService.get('APP_PORT_URL_SHORTENER'));
  await app.startAllMicroservices();
  await app.listen(configService.get('APP_PORT_URL_SHORTENER'));
}
bootstrap();
